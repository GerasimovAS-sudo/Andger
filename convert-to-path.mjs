#!/usr/bin/env node
// Конвертер книг ANDGER: старый формат → формат 2 («Путь»).
// Запуск:  node convert-to-path.mjs books.json books-v2.json
// Вход — один объект книги или массив (выгрузка «Скачать все книги (JSON)» из админки).
// Практики НЕ меняются. Добавляются только "format": 2 и "path". Результат — ЧЕРНОВИК: проверьте расписание глазами.
import fs from 'fs';

const [, , inFile, outFile] = process.argv;
if (!inFile) { console.error('Использование: node convert-to-path.mjs books.json [books-v2.json]'); process.exit(1); }

const WEEK_TITLES = ['Запуск', 'Закрепление', 'Устойчивость', 'Идентичность'];
const WEEK_GOALS = ['Начать и не пропускать', 'Закрепить и добавить новое', 'Сделать частью жизни и подготовить план', 'Удержать результат'];
const pad = n => String(n).padStart(2, '0');

function schedule(P, days) {
  const N = P.length, nodes = [];
  if (N === days && days > 7) {                                   // «курс»: по практике на день
    P.forEach((p, i) => nodes.push({ id: 'n' + pad(i + 1), practices: [p.id], focus: '' }));
    return nodes;
  }
  // «набор»: практики вводятся постепенно; на следующий день новая закрепляется; затем идёт та, что дольше всех не повторялась.
  // Рядом — мини-повтор вчерашней практики; раз в неделю день облегчения (самая забытая, только микро-версия).
  const step = Math.max(1, Math.floor(days / (N + 1)));
  const introDay = P.map((_, i) => 1 + i * step), last = P.map(() => 0);
  let prevMain = -1;
  for (let d = 1; d <= days; d++) {
    const known = P.map((_, i) => i).filter(i => introDay[i] <= d), k = known.length;
    const isIntro = introDay.includes(d), lru = () => known.slice().sort((x, y) => last[x] - last[y] || y - x)[0];
    const light = !isIntro && d % 7 === 5 && d < days && k >= 2;
    let main;
    if (isIntro) main = known[k - 1];
    else if (introDay.includes(d - 1) && k >= 2) main = known[k - 1];
    else main = lru();
    if (light) main = lru();
    last[main] = d;
    const node = { id: 'n' + pad(d), practices: [P[main].id], focus: P[main].micro_action ? String(P[main].micro_action).slice(0, 90) : '' };
    if (prevMain >= 0 && prevMain !== main) node.recap = [P[prevMain].id];
    if (light) node.light = true;
    nodes.push(node); prevMain = main;
  }
  return nodes;
}

function convert(b) {
  if (b.format === 2 && b.path) return { book: b, note: 'уже формат 2' };
  const P = b.practices || [], days = b.days || 21;
  if (!P.length) return { book: b, note: 'нет практик — пропущена' };
  const nodes = schedule(P, days), weeks = [];
  for (let i = 0; i < nodes.length; i += 7) {
    const w = Math.floor(i / 7), chunk = nodes.slice(i, i + 7), isLast = i + 7 >= nodes.length;
    weeks.push({ title: WEEK_TITLES[w] || 'Неделя ' + (w + 1), goal: WEEK_GOALS[w] || 'Продолжение', nodes: chunk, ...(isLast ? {} : { checkpoint: {} }) });
  }
  const out = { ...b, format: 2, path: {
    free_nodes: 7,
    letter_prompts: ['Зачем мне этот путь?', `Каким я хочу стать через ${days} дней?`, 'Что я обещаю себе?'],
    weeks,
    finale: { questions: ['Что изменилось за этот путь?', 'Какие 2–3 практики я оставляю в жизни?', 'Что я сделаю, если пропущу день?'], closing: 'Ты прошёл путь. Оставь то, что работает, а в трудные дни возвращайся к минимальной версии.' }
  } };
  return { book: out, note: N_MODE(P.length, days) };
}
const N_MODE = (n, d) => (n === d && d > 7 ? 'курс (по практике на день)' : `набор (${n} практик → расписание на ${d} дн.)`);

function validate(b) {
  const w = [], ids = new Set((b.practices || []).map(p => p.id)), used = new Set();
  const nodes = (b.path?.weeks || []).flatMap(x => x.nodes);
  if (nodes.length !== b.days) w.push(`узлов ${nodes.length}, а days = ${b.days}`);
  nodes.forEach(n => [...(n.practices || []), ...(n.recap || [])].forEach(id => { if (!ids.has(id)) w.push(`узел ${n.id}: нет практики «${id}»`); else used.add(id); }));
  (b.practices || []).forEach(p => { if (!used.has(p.id)) w.push(`практика «${p.id}» не используется в пути`); });
  if (new Set(nodes.map(n => n.id)).size !== nodes.length) w.push('повторяются id узлов');
  return w;
}

const raw = JSON.parse(fs.readFileSync(inFile, 'utf8')), list = Array.isArray(raw) ? raw : [raw];
const res = list.map(b => { const r = convert(b); return { ...r, warn: r.book.path ? validate(r.book) : [] }; });
res.forEach(r => console.error(`• ${r.book.title || r.book.id}: ${r.note}${r.warn.length ? '\n   ⚠ ' + r.warn.join('\n   ⚠ ') : r.book.path ? ' — проверка пройдена' : ''}`));
const out = res.map(r => r.book);
fs.writeFileSync(outFile || inFile.replace(/\.json$/i, '') + '-v2.json', JSON.stringify(Array.isArray(raw) ? out : out[0], null, 2));
console.error('Готово: ' + (outFile || inFile.replace(/\.json$/i, '') + '-v2.json'));
