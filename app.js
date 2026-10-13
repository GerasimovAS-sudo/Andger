// ====== ДАННЫЕ ======
let BOOKS = [];
let currentBook = null;
let currentPractice = null;
let ritualQueue = [];
let ritualIndex = 0;
let timerInterval = null;
let timerRemaining = 0;
let user = null;
let state = {};
let onbIndex = 0;

const ADMIN_PHONE = '79124325556';
const ONB = [
{ico:'🌅',title:'Это игра по книге',body:'<p>Хэл Элрод написал книгу о том, как изменить жизнь через утро. Но 95% людей прочитали — и ничего не сделали.</p><p><strong>Здесь по-другому.</strong> Ты не читаешь книгу. Ты играешь в неё.</p><p>Каждое утро ты проходишь практики — и день закрывается сам.</p>'},
{ico:'⚡',title:'Что даст 30 дней',body:'<p>Если будешь делать практики каждое утро:</p><ul><li>Через 3 дня — начнёшь просыпаться без «стены»</li><li>Через 7 дней — появится ясность, куда идёшь</li><li>Через 14 дней — утро станет любимым временем</li><li>Через 30 дней — ты другой человек</li></ul><p>Это не магия. Это нейропластичность.</p>'},
{ico:'🎮',title:'Как устроена игра',body:'<p>Каждое утро — цепочка практик. Всего ~40 минут.</p><ul><li><strong>Тишина</strong> — 5 минут</li><li><strong>Аффирмации</strong> — 5 минут</li><li><strong>Визуализация</strong> — 5 минут</li><li><strong>Дневник</strong> — 5 минут</li><li><strong>Чтение</strong> — 10 минут</li><li><strong>Спорт</strong> — 10 минут</li></ul><p>Идёшь по цепочке. В конце день закрывается автоматически.</p>'},
{ico:'🎒',title:'Что понадобится',body:'<p>Ничего особенного:</p><ul><li><strong>40 минут утром</strong></li><li><strong>Блокнот и ручка</strong> — для дневника</li><li><strong>Книга</strong> — любая полезная</li><li><strong>Тишина</strong> — попроси близких не отвлекать</li></ul><p>Можно делать прямо в кровати — главное не заснуть.</p>'},
{ico:'🚀',title:'Готов?',body:'<p>Не делай всё идеально. Начни с 2 практик — тишины и аффирмаций.</p><p><strong>Правило игры:</strong> отмечай то, что сделал. Не то, что «должен был».</p><p>Жми «Начать» — вперёд.</p>'}
];

const EMOJIS = ['👤','😎','🧠','🔥','🌅','⚡','🎯','💪','🦁','🌟','🚀','🎨','🧘','🏆','☀️','🍀'];

// Достижения
const ACHIEVEMENTS = [
  { id:'first', ico:'🌟', name:'Первый шаг', desc:'Открыл книгу и начал', check:(c,s)=>c>=1 },
  { id:'three', ico:'🔥', name:'Три дня', desc:'3 дня подряд без пропуска', check:(c,s)=>s>=3 },
  { id:'week', ico:'⚡', name:'Неделя силы', desc:'7 дней подряд', check:(c,s)=>s>=7 },
  { id:'half', ico:'💎', name:'Половина', desc:'15 закрытых дней', check:(c,s)=>c>=15 },
  { id:'month', ico:'👑', name:'Мастер утра', desc:'30 дней — книга пройдена', check:(c,s)=>c>=30 },
  { id:'perfect', ico:'🎯', name:'Идеальный день', desc:'Все практики за день', check:(c,s,extra)=>extra.perfect },
  { id:'journal10', ico:'📖', name:'Философ', desc:'10 записей в дневнике', check:(c,s,extra)=>extra.journal>=10 },
  { id:'early', ico:'🌅', name:'Ранняя пташка', desc:'5 закрытых дней подряд', check:(c,s)=>s>=5 },
  { id:'century', ico:'💯', name:'Сотка', desc:'100 выполненных практик', check:(c,s,extra)=>extra.practices>=100 },
  { id:'master', ico:'🏅', name:'Гуру', desc:'Все остальные награды', check:(c,s,extra)=>extra.otherAch>=9 }
];

// ====== ИНИЦИАЛИЗАЦИЯ ======
window.addEventListener('DOMContentLoaded', () => {
  BOOKS = [MAGIC_MORNING, ATOMIC_HABITS].filter(Boolean);
  const saved = localStorage.getItem('vnedri_user');
  if (saved) {
    user = JSON.parse(saved);
    loadUserState();
    if (!state.onboarded) showOnboarding();
    else showLibrary();
  } else {
    showAuth();
  }
});

// ====== ЭКРАНЫ ======
function hideAll() {
  ['authScreen','onbScreen','libScreen','bookScreen','achScreen','journalScreen','profileScreen','adminScreen','ritualScreen','practiceScreen'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  document.getElementById('bottomNav').classList.add('hidden');
}
function showAuth(){hideAll();document.getElementById('authScreen').classList.remove('hidden')}
function showOnboarding(){hideAll();onbIndex=0;renderOnb();document.getElementById('onbScreen').classList.remove('hidden')}
function showLibrary(){hideAll();document.getElementById('libScreen').classList.remove('hidden');renderLibrary();checkAdminAccess()}
function showProfile(){hideAll();document.getElementById('profileScreen').classList.remove('hidden');renderProfile();checkAdminAccess()}
function backToLib(){showLibrary()}

function showBottomPage(page, btn) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  if (page === 'ach') { showAch(); }
  else if (page === 'journal') { showJournal(); }
  else { backToLib(); }
}

function showAch() {
  if (!currentBook) return showLibrary();
  document.getElementById('bookScreen').classList.add('hidden');
  document.getElementById('journalScreen').classList.add('hidden');
  document.getElementById('achScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  renderAchievements();
}

function showJournal() {
  document.getElementById('bookScreen').classList.add('hidden');
  document.getElementById('achScreen').classList.add('hidden');
  document.getElementById('journalScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  renderJournal();
}

// ====== ВХОД ======
let authMode = 'login';
function switchTab(mode) {
  authMode = mode;
  document.getElementById('tabLogin').classList.toggle('on', mode === 'login');
  document.getElementById('tabReg').classList.toggle('on', mode === 'reg');
  document.getElementById('authBtn').textContent = mode === 'login' ? 'Войти' : 'Зарегистрироваться';
  document.getElementById('authErr').textContent = '';
  document.getElementById('nameField').style.display = mode === 'reg' ? 'block' : 'none';
}
document.addEventListener('input', (e) => { if (e.target.id === 'phone') formatPhoneInput(e.target); });
function formatPhoneInput(el) {
  let v = el.value.replace(/\D/g, '');
  if (v.startsWith('8')) v = '7' + v.slice(1);
  if (!v.startsWith('7')) v = '7' + v;
  v = v.slice(0, 11);
  let out = '+7';
  if (v.length > 1) out += ' ' + v.slice(1, 4);
  if (v.length >= 4) out += ' ' + v.slice(4, 7);
  if (v.length >= 7) out += '-' + v.slice(7, 9);
  if (v.length >= 9) out += '-' + v.slice(9, 11);
  el.value = out;
}
function normalizePhone(v){return v.replace(/\D/g,'')}

function doAuth() {
  const phoneRaw = document.getElementById('phone').value;
  const pass = document.getElementById('password').value;
  const nameInp = document.getElementById('name').value.trim();
  const err = document.getElementById('authErr');
  const phone = normalizePhone(phoneRaw);
  err.textContent = '';
  if (phone.length !== 11) { err.textContent = 'Введите номер полностью'; return; }
  if (pass.length < 4) { err.textContent = 'Пароль минимум 4 символа'; return; }
  const users = JSON.parse(localStorage.getItem('vnedri_users') || '{}');
  if (authMode === 'reg') {
    if (users[phone]) { err.textContent = 'Этот номер уже зарегистрирован'; return; }
    if (!nameInp) { err.textContent = 'Введите имя'; return; }
    users[phone] = { pass, name: nameInp, created: Date.now(), lastSeen: Date.now() };
    localStorage.setItem('vnedri_users', JSON.stringify(users));
    user = { phone, name: nameInp };
    localStorage.setItem('vnedri_user', JSON.stringify(user));
    loadUserState(); showOnboarding();
  } else {
    if (!users[phone]) { err.textContent = 'Номер не найден. Зарегистрируйтесь.'; return; }
    if (users[phone].pass !== pass) { err.textContent = 'Неверный пароль'; return; }
    users[phone].lastSeen = Date.now();
    localStorage.setItem('vnedri_users', JSON.stringify(users));
    user = { phone, name: users[phone].name || 'Друг' };
    localStorage.setItem('vnedri_user', JSON.stringify(user));
    loadUserState();
    if (!state.onboarded) showOnboarding(); else showLibrary();
  }
}
function logout(){if(!confirm('Выйти? Прогресс сохранится.'))return;localStorage.removeItem('vnedri_user');user=null;state={};showAuth()}

function isAdmin() { return user && user.phone === ADMIN_PHONE; }
function checkAdminAccess() {
  const btn1 = document.getElementById('adminBtnLib');
  const btn2 = document.getElementById('adminBtnProfile');
  if (btn1) btn1.classList.toggle('hidden', !isAdmin());
  if (btn2) btn2.classList.toggle('hidden', !isAdmin());
}

// ====== STATE ======
function stateKey(){return 'vnedri_state_' + user.phone}
function loadUserState() {
  const saved = localStorage.getItem(stateKey());
  if (saved) state = JSON.parse(saved);
  else state = { onboarded: false, books: {}, avatar: '👤' };
  if (!state.books) state.books = {};
  if (!state.avatar) state.avatar = '👤';
}
function saveState(){localStorage.setItem(stateKey(),JSON.stringify(state))}
function getBookState(id){if(!state.books[id])state.books[id]={start:null,days:{},journal:{}};if(!state.books[id].journal)state.books[id].journal={};return state.books[id]}

// ====== ОНБОРДИНГ ======
function renderOnb() {
  const s = ONB[onbIndex];
  document.getElementById('onbContent').innerHTML = `<div class="onb-ico">${s.ico}</div><h2>${s.title}</h2>${s.body}`;
  document.getElementById('onbDots').innerHTML = ONB.map((_, i) => `<div class="onb-dot ${i === onbIndex ? 'on' : ''}"></div>`).join('');
  document.getElementById('onbBack').classList.toggle('hidden', onbIndex === 0);
  document.getElementById('onbNext').textContent = onbIndex === ONB.length - 1 ? 'Начать путь 🚀' : 'Далее';
}
function onbNext(){if(onbIndex<ONB.length-1){onbIndex++;renderOnb()}else{state.onboarded=true;saveState();showLibrary()}}
function onbPrev(){if(onbIndex>0){onbIndex--;renderOnb()}}

// ====== БИБЛИОТЕКА ======
function renderLibrary() {
  document.getElementById('libHi').textContent = 'Привет, ' + (user.name || 'Друг');
  document.getElementById('libSub').textContent = 'Твоя библиотека';
  document.getElementById('bookList').innerHTML = BOOKS.map(b => {
    const bs = getBookState(b.id);
    const closed = countClosedDays(b.id);
    const pct = Math.round(closed / b.days * 100);
    const started = bs.start !== null;
    return `<div class="book-card" onclick="openBook('${b.id}')">
      <div class="book-ico">${b.emoji}</div>
      <div class="book-info">
        <h3>${b.title}</h3>
        <p>${b.author} · ${b.days} дней</p>
        ${started ? `<div class="book-progress"><div class="book-progress-fill" style="width:${pct}%"></div></div><div class="book-status">${pct}% · ${closed} из ${b.days}</div>` : `<div class="book-status">Не начата · Нажми чтобы начать</div>`}
      </div>
      <div class="book-arrow">›</div>
    </div>`;
  }).join('');
}

// ====== ЭКРАН КНИГИ ======
function openBook(id) {
  const b = BOOKS.find(x => x.id === id);
  if (!b) return;
  currentBook = b;
  const bs = getBookState(b.id);
  if (!bs.start) {
    if (confirm('Начать книгу "' + b.title + '"?\nОтсчёт начнётся сегодня.')) {
      bs.start = new Date().toISOString().split('T')[0];
      saveState();
    } else return;
  }
  hideAll();
  document.getElementById('bookScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b,i) => b.classList.toggle('on', i===0));
  renderBookScreen();
}

function renderBookScreen() {
  const b = currentBook;
  const day = currentDay(b.id);
  const closed = countClosedDays(b.id);
  const streak = calcStreak(b.id);
  const best = calcBest(b.id);

  document.getElementById('bookTitle').textContent = b.title;
  document.getElementById('bookSub').textContent = b.author + ' · ' + b.days + ' дней';
  document.getElementById('legendDays').textContent = closed;
  document.getElementById('legendStreak').textContent = streak;
  document.getElementById('legendRecord').textContent = best;
  document.getElementById('ritualSub').textContent = b.practices.length + ' практик · ~' + Math.round(b.practices.reduce((s, p) => s + p.time, 0) / 60) + ' минут';

  renderRings();
  renderCalendar();
  renderLevel();
  renderPractices();
}

// ====== 3 КОЛЬЦА ======
function renderRings() {
  const b = currentBook;
  const bs = getBookState(b.id);
  const day = currentDay(b.id);
  const closed = countClosedDays(b.id);
  const streak = calcStreak(b.id);
  const best = calcBest(b.id);

  const date = dateByDay(b.id, day);
  const todayRec = bs.days[date] || { practices: [] };
  const todayCount = (todayRec.practices || []).length;
  const total = b.practices.length;

  // Дни — от 0 до 30
  setRing('ringDays', 54, closed / b.days);
  // Подряд — от 0 до 30
  setRing('ringStreak', 42, Math.min(streak / b.days, 1));
  // Рекорд — от 0 до 30
  setRing('ringRecord', 30, Math.min(best / b.days, 1));

  const todayEl = document.getElementById('ringsToday');
  const labelEl = document.getElementById('ringsLabel');
  if (todayEl) animateNumber(todayEl, 0, todayCount, '', 900);

  if (labelEl) {
    if (todayCount === 0) labelEl.textContent = 'ПРИГОТОВЬТЕСЬ';
    else if (todayCount < 4) labelEl.textContent = 'В ПРОЦЕССЕ';
    else if (todayCount < total) labelEl.textContent = 'ХОРОШО ИДЁШЬ';
    else labelEl.textContent = 'ДЕНЬ ЗАКРЫТ ✓';
  }

  const wrap = document.getElementById('ringWrap');
  if (wrap) wrap.classList.toggle('complete', todayCount === total);
}

function setRing(id, radius, pct) {
  const el = document.getElementById(id);
  if (!el) return;
  const c = 2 * Math.PI * radius;
  el.style.strokeDasharray = c;
  el.style.strokeDashoffset = c;
  setTimeout(() => { el.style.strokeDashoffset = c * (1 - Math.min(pct, 1)); }, 100);
}

function animateNumber(el, from, to, suffix, duration) {
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.round(from + (to - from) * eased);
    el.textContent = val + (suffix || '');
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ====== КАЛЕНДАРЬ 1→30 ======
function renderCalendar() {
  const b = currentBook;
  const bs = getBookState(b.id);
  const today = todayStr();
  const closed = countClosedDays(b.id);

  let html = `<div class="cal-head">
    <div class="label">📅 Прогресс пути</div>
    <div class="count">${closed} из ${b.days}</div>
  </div>`;

  html += `<div class="cal-info"><span>День 1</span><span><b>${Math.round(closed/b.days*100)}%</b></span><span>День ${b.days}</span></div>`;
  html += `<div class="cal-bar">`;
  for (let d = 1; d <= b.days; d++) {
    const date = dateByDay(b.id, d);
    const rec = bs.days[date];
    let cls = 'cal-seg';
    if (rec && rec.closed) cls += ' done';
    else if (rec && rec.practices && rec.practices.length >= 2) cls += ' partial';
    else if (date === today) cls += ' today';
    else if (date > today) cls += ' future';
    html += `<div class="${cls}"></div>`;
  }
  html += `</div>`;

  html += `<div class="cal-nums"><span>1</span><span>10</span><span>20</span><span>30</span></div>`;

  document.getElementById('calWrap').innerHTML = html;
}

// ====== УРОВНИ ======
function getLevel(closed) {
  if (closed === 0) return { ico:'🌱', name:'Новичок', desc:'Начни первый день — и путь откроется', cls:'' };
  if (closed < 3) return { ico:'🌱', name:'Первый шаг', desc:`${closed} ${plural(closed,'день','дня','дней')} — начало положено`, cls:'' };
  if (closed < 7) return { ico:'🌿', name:'В ритме', desc:`${closed} ${plural(closed,'день','дня','дней')} — ты входишь в поток`, cls:'pro' };
  if (closed < 14) return { ico:'🔥', name:'Практик', desc:`${closed} ${plural(closed,'день','дня','дней')} — привычка формируется`, cls:'pro' };
  if (closed < 21) return { ico:'💎', name:'Опытный', desc:`${closed} ${plural(closed,'день','дня','дней')} — ты почти у цели`, cls:'pro' };
  if (closed < 30) return { ico:'🏆', name:'Мастер', desc:`${closed} ${plural(closed,'день','дня','дней')} — ты легенда`, cls:'master' };
  return { ico:'👑', name:'Легенда', desc:'Книга пройдена полностью. Уважение.', cls:'master' };
}
function plural(n, one, few, many) {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}
function renderLevel() {
  const closed = countClosedDays(currentBook.id);
  const lv = getLevel(closed);
  document.getElementById('levelBadge').textContent = lv.ico;
  document.getElementById('levelBadge').className = 'level-badge ' + lv.cls;
  document.getElementById('levelName').textContent = lv.name;
  document.getElementById('levelDesc').textContent = lv.desc;
}

// ====== ПОДСЧЁТЫ ======
function countClosedDays(bookId) {
  const bs = getBookState(bookId);
  return Object.keys(bs.days).filter(d => bs.days[d].closed).length;
}
function currentDay(bookId) {
  const bs = getBookState(bookId);
  if (!bs.start) return 1;
  const start = new Date(bs.start);
  const now = new Date();
  const diff = Math.floor((now - start) / 86400000) + 1;
  return Math.min(Math.max(diff, 1), BOOKS.find(b => b.id === bookId).days);
}
function calcStreak(bookId) {
  const b = BOOKS.find(x => x.id === bookId);
  const bs = getBookState(bookId);
  if (!bs.start) return 0;
  let streak = 0;
  for (let i = 1; i <= b.days; i++) {
    const d = dateByDay(bookId, i);
    if (bs.days[d] && bs.days[d].closed) streak++;
    else break;
  }
  return streak;
}
function calcBest(bookId) {
  const b = BOOKS.find(x => x.id === bookId);
  const bs = getBookState(bookId);
  let best = 0, cur = 0;
  for (let i = 1; i <= b.days; i++) {
    const d = dateByDay(bookId, i);
    if (bs.days[d] && bs.days[d].closed) { cur++; if (cur > best) best = cur; }
    else cur = 0;
  }
  return best;
}
function dateByDay(bookId, day) {
  const bs = getBookState(bookId);
  if (!bs.start) return null;
  const start = new Date(bs.start);
  start.setDate(start.getDate() + day - 1);
  return start.toISOString().split('T')[0];
}
function todayStr(){return new Date().toISOString().split('T')[0]}

// ====== ПРАКТИКИ ======
function renderPractices() {
  const b = currentBook;
  const day = currentDay(b.id);
  const date = dateByDay(b.id, day);
  const bs = getBookState(b.id);
  const todayRec = bs.days[date] || { practices: [] };

  document.getElementById('practiceList').innerHTML = b.practices.map(p => {
    const done = todayRec.practices && todayRec.practices.includes(p.id);
    return `<div class="practice ${done ? 'done' : ''}" onclick="openPractice('${p.id}')">
      <div class="p-ico">${p.ico}</div>
      <div class="p-body">
        <div class="p-title">${p.title}</div>
        <div class="p-sub">${p.sub}</div>
      </div>
      <div class="p-arrow">›</div>
    </div>`;
  }).join('');
}

// ====== НАГРАДЫ ======
function renderAchievements() {
  if (!currentBook) return;
  const closed = countClosedDays(currentBook.id);
  const streak = calcStreak(currentBook.id);
  const bs = getBookState(currentBook.id);

  const journal = Object.keys(bs.journal || {}).filter(k => {
    const j = bs.journal[k];
    return j.q1 || j.q2 || j.q3;
  }).length;

  let practices = 0;
  let perfect = false;
  Object.values(bs.days).forEach(rec => {
    if (rec.practices) practices += rec.practices.length;
    if (rec.practices && rec.practices.length === currentBook.practices.length) perfect = true;
  });

  const extra = { journal, practices, perfect, otherAch: 0 };

  const list = ACHIEVEMENTS.map(a => {
    const unlocked = a.check(closed, streak, extra);
    return `<div class="ach-card ${unlocked ? 'unlocked' : 'locked'}">
      <div class="ach-badge">${unlocked ? a.ico : '🔒'}</div>
      <div class="ach-name">${a.name}</div>
      <div class="ach-desc">${a.desc}</div>
    </div>`;
  }).join('');

  document.getElementById('achGrid').innerHTML = list;
}

// ====== ДНЕВНИК ======
function renderJournal() {
  if (!currentBook) return showLibrary();
  const day = currentDay(currentBook.id);
  document.getElementById('journalDay').textContent = day;

  const bs = getBookState(currentBook.id);
  const date = dateByDay(currentBook.id, day);
  const today = bs.journal[date] || {};
  document.getElementById('jq1').value = today.q1 || '';
  document.getElementById('jq2').value = today.q2 || '';
  document.getElementById('jq3').value = today.q3 || '';

  const history = Object.keys(bs.journal).sort().reverse().map(d => {
    const j = bs.journal[d];
    if (!j.q1 && !j.q2 && !j.q3) return '';
    return `<div class="jh-entry">
      <div class="jh-day">День ${dateToDay(currentBook.id, d)}</div>
      ${j.q1 ? `<div class="jh-q">🌟 Что получилось</div><div class="jh-a">${escapeHtml(j.q1)}</div>` : ''}
      ${j.q2 ? `<div class="jh-q">💭 Что было сложно</div><div class="jh-a">${escapeHtml(j.q2)}</div>` : ''}
      ${j.q3 ? `<div class="jh-q">🔍 Что замечаю</div><div class="jh-a">${escapeHtml(j.q3)}</div>` : ''}
    </div>`;
  }).join('');

  document.getElementById('journalHistory').innerHTML = history || '<div class="jh-entry" style="text-align:center;color:var(--muted);padding:24px">Пока пусто. Сделай первую запись.</div>';
}

function dateToDay(bookId, date) {
  const bs = getBookState(bookId);
  if (!bs.start) return '?';
  const start = new Date(bs.start);
  const d = new Date(date);
  return Math.floor((d - start) / 86400000) + 1;
}
function escapeHtml(s){return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

function saveJournal() {
  if (!currentBook) return;
  const day = currentDay(currentBook.id);
  const date = dateByDay(currentBook.id, day);
  const bs = getBookState(currentBook.id);
  bs.journal[date] = {
    q1: document.getElementById('jq1').value,
    q2: document.getElementById('jq2').value,
    q3: document.getElementById('jq3').value
  };
  saveState();
  const msg = document.getElementById('journalMsg');
  msg.textContent = '✓ Сохранено';
  setTimeout(() => msg.textContent = '', 2000);
  renderJournal();
}

// ====== РИТУАЛ ======
function startRitual() {
  ritualQueue = currentBook.practices.slice();
  ritualIndex = 0;
  document.getElementById('ritualScreen').classList.remove('hidden');
  renderRitualStep();
}
function renderRitualStep() {
  if (ritualIndex >= ritualQueue.length) { finishRitual(); return; }
  const p = ritualQueue[ritualIndex];
  document.getElementById('rpStep').textContent = (ritualIndex + 1) + ' из ' + ritualQueue.length;
  document.getElementById('rpFill').style.width = (ritualIndex / ritualQueue.length * 100) + '%';
  document.getElementById('ritualBody').innerHTML = `
    <div class="ritual-hero"><div class="ico">${p.ico}</div><h2>${p.title}</h2><div class="sub">${p.sub}</div></div>
    <div class="ritual-timer">
      <div class="time" id="ritualTime">${formatTime(p.time)}</div>
      <div class="btns">
        <button class="btn" onclick="toggleRitualTimer()" id="ritualTimerBtn">▶ Старт</button>
        <button class="btn" onclick="nextRitual()" id="ritualNextBtn" style="background:linear-gradient(135deg,#00d68f,#00b377)">Выполнено ✓</button>
      </div>
    </div>
    <div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${p.why}</p></div>
    <div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${p.how.map(s => `<li>${s}</li>`).join('')}</ol></div>
  `;
  timerRemaining = p.time;
}
function toggleRitualTimer() {
  const btn = document.getElementById('ritualTimerBtn');
  if (timerInterval) { stopTimer(); btn.textContent = '▶ Продолжить'; }
  else startTimer('ritualTime', btn);
}
function startTimer(displayId, btn) {
  timerInterval = setInterval(() => {
    timerRemaining--;
    const el = document.getElementById(displayId);
    if (el) el.textContent = formatTime(Math.max(0, timerRemaining));
    if (timerRemaining <= 0) { stopTimer(); playBeep(); if (btn) btn.textContent = '✓ Готово'; }
  }, 1000);
  if (btn) btn.textContent = '⏸ Пауза';
}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null}}
function formatTime(sec){const m=Math.floor(sec/60),s=sec%60;return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')}
function playBeep(){try{const ctx=new(window.AudioContext||window.webkitAudioContext)();const osc=ctx.createOscillator(),gain=ctx.createGain();osc.connect(gain);gain.connect(ctx.destination);osc.frequency.value=800;gain.gain.setValueAtTime(0.3,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.5);osc.start();osc.stop(ctx.currentTime+0.5)}catch(e){}if(navigator.vibrate)navigator.vibrate([200,100,200])}

function nextRitual() {
  stopTimer();
  const p = ritualQueue[ritualIndex];
  markPracticeDone(p.id);
  ritualIndex++;
  renderRitualStep();
}
function skipCurrentPractice() {
  stopTimer();
  ritualIndex++;
  if (ritualIndex >= ritualQueue.length) { finishRitual(); return; }
  renderRitualStep();
}
function finishRitual() {
  stopTimer();
  const day = currentDay(currentBook.id);
  const date = dateByDay(currentBook.id, day);
  const bs = getBookState(currentBook.id);
  if (!bs.days[date]) bs.days[date] = { practices: [] };
  const count = bs.days[date].practices.length;
  const total = currentBook.practices.length;

  if (count >= 4) {
    const wasClosed = bs.days[date].closed;
    bs.days[date].closed = true;
    saveState();
    if (!wasClosed) fireConfetti();
    if (count === total) showModal('🔥', 'Идеальный день!', `Все ${total} практик! Так держать, ты в потоке.`);
    else if (count === 4) showModal('✅', 'День закрыт!', `${count} из ${total} — этого достаточно. День ${day} засчитан!`);
    else showModal('🎉', 'День закрыт!', `${count} из ${total}. День ${day} засчитан!`);
  } else if (count >= 2) {
    saveState();
    showModal('💪', 'Хорошо идёшь!', `Ты сделал ${count} из ${total}. Для закрытия дня нужно 4 — добавь ещё.`);
  } else {
    saveState();
    showModal('🌱', 'Начало положено', `Сделано ${count} из ${total}. Маленький шаг — тоже шаг.`);
  }
}
function closeRitual(){document.getElementById('ritualScreen').classList.add('hidden');renderBookScreen()}
function markPracticeDone(pid) {
  const day = currentDay(currentBook.id);
  const date = dateByDay(currentBook.id, day);
  const bs = getBookState(currentBook.id);
  if (!bs.days[date]) bs.days[date] = { practices: [] };
  if (!bs.days[date].practices.includes(pid)) bs.days[date].practices.push(pid);
  saveState();
}

// ====== ЭКРАН ПРАКТИКИ ======
function openPractice(id) {
  const p = currentBook.practices.find(x => x.id === id);
  if (!p) return;
  currentPractice = p;
  document.getElementById('psTitle').textContent = p.title;
  document.getElementById('psSub').textContent = p.sub;
  document.getElementById('psContent').innerHTML = `
    <div class="ps-hero"><div class="ico">${p.ico}</div><div class="time">⏱ ${Math.round(p.time / 60)} минут</div></div>
    <div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${p.why}</p></div>
    <div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${p.how.map(s => `<li>${s}</li>`).join('')}</ol></div>
    ${p.affirm ? `<div class="ps-block"><h3>✨ Готовые аффирмации</h3><ul class="affirm-list">${p.affirm.map(a => `<li onclick="copyAffirm(this)">«${a}»</li>`).join('')}</ul></div>` : ''}
    <div class="ps-block"><h3>⏱ Таймер</h3><div class="timer-box"><div class="timer-display" id="timerDisplay">${formatTime(p.time)}</div><div class="timer-btns"><button class="btn" id="timerBtn" onclick="toggleTimerP()">▶ Старт</button><button class="btn btn-ghost" onclick="resetTimerP()">↺ Сброс</button></div></div></div>
    <div class="ps-block"><h3>🎯 Что должно получиться</h3><p>${p.result}</p></div>
    <div class="ps-block"><h3>⚠️ Частые ошибки</h3><ul class="mistakes">${p.mistakes.map(m => `<li>${m}</li>`).join('')}</ul></div>
    <div class="ps-block"><h3>💬 Совет</h3><div class="advice">${p.advice}</div></div>
    <button class="btn" style="margin-top:20px" onclick="markPracticeFromScreen('${p.id}')">✓ Отметить выполненным</button>
  `;
  document.getElementById('practiceScreen').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  timerRemaining = p.time;
}
function closePractice(){document.getElementById('practiceScreen').classList.add('hidden');document.body.style.overflow='';stopTimer();currentPractice=null;renderBookScreen()}
function toggleTimerP(){const btn=document.getElementById('timerBtn');if(timerInterval){stopTimer();btn.textContent='▶ Продолжить'}else startTimer('timerDisplay',btn)}
function resetTimerP(){stopTimer();if(currentPractice){timerRemaining=currentPractice.time;document.getElementById('timerDisplay').textContent=formatTime(timerRemaining);document.getElementById('timerBtn').textContent='▶ Старт'}}
function markPracticeFromScreen(id){markPracticeDone(id);closePractice()}
function copyAffirm(el){const text=el.textContent.replace(/[«»]/g,'');if(navigator.clipboard){navigator.clipboard.writeText(text);el.style.background='rgba(0,214,143,.2)';setTimeout(()=>el.style.background='',500)}}

// ====== КОНФЕТТИ ======
function fireConfetti() {
  const box = document.getElementById('confetti');
  box.classList.remove('hidden');
  const colors = ['#7c5cff','#a78bfa','#00d68f','#ffb800','#ff6b9d','#4da6ff'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.className = 'conf-piece';
    el.style.left = Math.random() * 100 + '%';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = (2 + Math.random() * 2) + 's';
    el.style.animationDelay = (Math.random() * 0.3) + 's';
    if (Math.random() > 0.5) el.style.borderRadius = '50%';
    box.appendChild(el);
  }
  setTimeout(() => {
    box.innerHTML = '';
    box.classList.add('hidden');
  }, 4500);
}

// ====== ПРОФИЛЬ ======
function renderProfile() {
  document.getElementById('profilePhone').textContent = '+7 ' + user.phone.slice(1, 4) + ' *** ' + user.phone.slice(7, 9) + ' ' + user.phone.slice(9);
  document.getElementById('profileName').value = user.name || '';
  document.getElementById('profileAva').textContent = state.avatar || '👤';
  document.getElementById('emojiRow').innerHTML = EMOJIS.map(e => `<div class="emoji-pick ${state.avatar === e ? 'on' : ''}" onclick="setAvatar('${e}')">${e}</div>`).join('');
}
function saveName(){const n=document.getElementById('profileName').value.trim();if(!n)return;user.name=n;const users=JSON.parse(localStorage.getItem('vnedri_users')||'{}');if(users[user.phone])users[user.phone].name=n;localStorage.setItem('vnedri_users',JSON.stringify(users));localStorage.setItem('vnedri_user',JSON.stringify(user));alert('Имя сохранено')}
function setAvatar(e){state.avatar=e;saveState();renderProfile()}
function exportData(){const data={user,state};const blob=new Blob([JSON.stringify(data)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='vnedri-backup.json';a.click();URL.revokeObjectURL(url)}
function importData(){const inp=document.createElement('input');inp.type='file';inp.accept='.json';inp.onchange=(e)=>{const file=e.target.files[0];const reader=new FileReader();reader.onload=(ev)=>{try{const data=JSON.parse(ev.target.result);if(data.state){state=data.state;saveState();alert('Импорт выполнен');renderProfile()}}catch(err){alert('Ошибка чтения файла')}};reader.readAsText(file)};inp.click()}

// ====== АДМИН ======
function showAdmin() {
  if (!isAdmin()) return;
  hideAll();
  document.getElementById('adminScreen').classList.remove('hidden');
  renderAdmin();
}
function renderAdmin() {
  const users = JSON.parse(localStorage.getItem('vnedri_users') || '{}');
  const phones = Object.keys(users);

  let active = 0, totalStreak = 0, totalJournal = 0, totalClosed = 0, totalSessions = 0;

  const userList = phones.map(phone => {
    const u = users[phone];
    const uState = JSON.parse(localStorage.getItem('vnedri_state_' + phone) || '{}');
    const books = uState.books || {};
    const mb = books['magic-morning'] || { days: {}, journal: {} };
    const closed = Object.keys(mb.days || {}).filter(k => mb.days[k].closed).length;
    const streak = calcStreakFromState(mb);
    const journalCount = Object.keys(mb.journal || {}).filter(k => {
      const j = mb.journal[k]; return j.q1 || j.q2 || j.q3;
    }).length;

    if (u.lastSeen && Date.now() - u.lastSeen < 30 * 86400000) active++;
    totalStreak += streak;
    totalJournal += journalCount;
    totalClosed += closed;
    totalSessions++;

    return `<div class="admin-card">
      <h3>${u.name || 'Без имени'} ${phone === ADMIN_PHONE ? '👑' : ''}</h3>
      <div class="admin-row"><span>Телефон</span><span>+7 ${phone.slice(1,4)} *** ${phone.slice(7)}</span></div>
      <div class="admin-row"><span>Регистрация</span><span>${u.created ? new Date(u.created).toLocaleDateString('ru') : '—'}</span></div>
      <div class="admin-row"><span>Закрыто дней</span><span>${closed}</span></div>
      <div class="admin-row"><span>Подряд</span><span>${streak}</span></div>
      <div class="admin-row"><span>Записей в дневнике</span><span>${journalCount}</span></div>
    </div>`;
  }).join('');

  document.getElementById('adminUsers').textContent = phones.length;
  document.getElementById('adminActive').textContent = active;
  document.getElementById('adminAvgStreak').textContent = phones.length ? Math.round(totalStreak / phones.length) : 0;
  document.getElementById('adminSessions').textContent = totalSessions;
  document.getElementById('adminJournal').textContent = totalJournal;
  document.getElementById('adminClosed').textContent = totalClosed;

  if (users[ADMIN_PHONE]) {
    document.getElementById('adminMyDate').textContent = new Date(users[ADMIN_PHONE].created).toLocaleDateString('ru');
  }

  document.getElementById('adminUserList').innerHTML = userList;
}
function calcStreakFromState(bookState) {
  if (!bookState.start) return 0;
  let streak = 0;
  for (let i = 0; i < 30; i++) {
    const start = new Date(bookState.start);
    start.setDate(start.getDate() + i);
    const d = start.toISOString().split('T')[0];
    if (bookState.days[d] && bookState.days[d].closed) streak++;
    else break;
  }
  return streak;
}

// ====== МОДАЛКА ======
function showModal(emoji,title,text){document.getElementById('modalEmoji').textContent=emoji;document.getElementById('modalTitle').textContent=title;document.getElementById('modalText').textContent=text;document.getElementById('modal').classList.remove('hidden')}
function closeModal(){document.getElementById('modal').classList.add('hidden');closeRitual()}