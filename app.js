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

const ONB = [
{ico:'🌅',title:'Это игра по книге',body:'<p>Хэл Элрод написал книгу о том, как изменить жизнь через утро. Но 95% людей прочитали — и ничего не сделали.</p><p><strong>Здесь по-другому.</strong> Ты не читаешь книгу. Ты играешь в неё.</p><p>Каждое утро ты проходишь практики — и день закрывается сам.</p>'},
{ico:'⚡',title:'Что даст 30 дней',body:'<p>Если будешь делать практики каждое утро:</p><ul><li>Через 3 дня — начнёшь просыпаться без «стены»</li><li>Через 7 дней — появится ясность, куда идёшь</li><li>Через 14 дней — утро станет любимым временем</li><li>Через 30 дней — ты другой человек</li></ul><p>Это не магия. Это нейропластичность.</p>'},
{ico:'🎮',title:'Как устроена игра',body:'<p>Каждое утро — цепочка практик. Всего ~40 минут.</p><ul><li><strong>Тишина</strong> — 5 минут</li><li><strong>Аффирмации</strong> — 5 минут</li><li><strong>Визуализация</strong> — 5 минут</li><li><strong>Дневник</strong> — 5 минут</li><li><strong>Чтение</strong> — 10 минут</li><li><strong>Спорт</strong> — 10 минут</li></ul><p>Идёшь по цепочке. В конце день закрывается автоматически.</p>'},
{ico:'🎒',title:'Что понадобится',body:'<p>Ничего особенного:</p><ul><li><strong>40 минут утром</strong></li><li><strong>Блокнот и ручка</strong> — для дневника</li><li><strong>Книга</strong> — любая полезная</li><li><strong>Тишина</strong> — попроси близких не отвлекать</li></ul><p>Можно делать прямо в кровати — главное не заснуть.</p>'},
{ico:'🚀',title:'Готов?',body:'<p>Не делай всё идеально. Начни с 2 практик — тишины и аффирмаций.</p><p><strong>Правило игры:</strong> отмечай то, что сделал. Не то, что «должен был».</p><p>Жми «Начать» — вперёд.</p>'}
];

const EMOJIS = ['👤','😎','🧠','🔥','🌅','⚡','🎯','💪','🦁','🌟','🚀','🎨','🧘','🏆','☀️','🍀'];
const MONTHS = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

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
  ['authScreen','onbScreen','libScreen','bookScreen','ritualScreen','practiceScreen','profileScreen'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
}
function showAuth(){hideAll();document.getElementById('authScreen').classList.remove('hidden')}
function showOnboarding(){hideAll();onbIndex=0;renderOnb();document.getElementById('onbScreen').classList.remove('hidden')}
function showLibrary(){hideAll();document.getElementById('libScreen').classList.remove('hidden');renderLibrary()}
function showProfile(){hideAll();document.getElementById('profileScreen').classList.remove('hidden');renderProfile()}
function backToLib(){showLibrary()}

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
    users[phone] = { pass, name: nameInp, created: Date.now() };
    localStorage.setItem('vnedri_users', JSON.stringify(users));
    user = { phone, name: nameInp };
    localStorage.setItem('vnedri_user', JSON.stringify(user));
    loadUserState(); showOnboarding();
  } else {
    if (!users[phone]) { err.textContent = 'Номер не найден. Зарегистрируйтесь.'; return; }
    if (users[phone].pass !== pass) { err.textContent = 'Неверный пароль'; return; }
    user = { phone, name: users[phone].name || 'Друг' };
    localStorage.setItem('vnedri_user', JSON.stringify(user));
    loadUserState();
    if (!state.onboarded) showOnboarding(); else showLibrary();
  }
}
function logout(){if(!confirm('Выйти? Прогресс сохранится.'))return;localStorage.removeItem('vnedri_user');user=null;state={};showAuth()}

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
function getBookState(id){if(!state.books[id])state.books[id]={start:null,days:{}};return state.books[id]}

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
  document.getElementById('statDays').textContent = closed;
  document.getElementById('statStreak').textContent = streak;
  document.getElementById('statBest').textContent = best;
  document.getElementById('ritualSub').textContent = b.practices.length + ' практик · ~' + Math.round(b.practices.reduce((s, p) => s + p.time, 0) / 60) + ' минут';

  renderRings();
  renderLevel();
  renderPractices();
  renderCalendar();
}

// ====== ДВОЙНОЕ КОЛЬЦО ======
function renderRings() {
  const b = currentBook;
  const bs = getBookState(b.id);
  const day = currentDay(b.id);
  const closed = countClosedDays(b.id);
  const bookPct = closed / b.days;

  const date = dateByDay(b.id, day);
  const todayRec = bs.days[date] || { practices: [] };
  const todayCount = (todayRec.practices || []).length;
  const todayPct = todayCount / b.practices.length;

  const outerC = 2 * Math.PI * 54;
  const outer = document.getElementById('ringOuter');
  if (outer) {
    outer.style.strokeDasharray = outerC;
    outer.style.strokeDashoffset = outerC;
    setTimeout(() => { outer.style.strokeDashoffset = outerC * (1 - bookPct); }, 60);
  }

  const innerC = 2 * Math.PI * 44;
  const inner = document.getElementById('ringInner');
  if (inner) {
    inner.style.strokeDasharray = innerC;
    inner.style.strokeDashoffset = innerC;
    setTimeout(() => { inner.style.strokeDashoffset = innerC * (1 - todayPct); }, 160);
  }

  const pctEl = document.getElementById('ringPct');
  const dayEl = document.getElementById('ringDay');
  if (pctEl) animateNumber(pctEl, 0, Math.round(todayPct * 100), '%', 900);
  if (dayEl) dayEl.textContent = 'День ' + day + ' из ' + b.days;

  const wrap = document.getElementById('ringWrap');
  if (wrap) wrap.classList.toggle('complete', todayPct === 1);
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

// ====== УРОВНИ ======
function getLevel(closed) {
  if (closed === 0) return { ico:'🌱', name:'Новичок', desc:'Начни первый день — и путь откроется', cls:'' };
  if (closed < 3) return { ico:'🌱', name:'Первый шаг', desc:`${closed} ${plural(closed,'день','дня','дней')} — начало положено`, cls:'' };
  if (closed < 7) return { ico:'🌿', name:'В ритме', desc:`${closed} ${plural(closed,'день','дня','дней')} подряд — ты входишь в поток`, cls:'pro' };
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

// ====== КАЛЕНДАРЬ — МИНИАТЮРНЫЙ 15×2 ======
function renderCalendar() {
  const b = currentBook;
  const bs = getBookState(b.id);
  const today = todayStr();
  const closed = countClosedDays(b.id);
  const pct = Math.round(closed / b.days * 100);

  let html = `<div class="cal-head">
    <div class="label">📅 Прогресс</div>
    <div class="count">${closed} из ${b.days} · ${pct}%</div>
  </div>`;

  html += `<div class="cal-mini">`;
  for (let d = 1; d <= b.days; d++) {
    const date = dateByDay(b.id, d);
    const rec = bs.days[date];
    let cls = 'cal-mini-day';
    if (rec && rec.closed) cls += ' done';
    else if (rec && rec.practices && rec.practices.length >= 2) cls += ' partial';
    if (date === today) cls += ' today';
    if (date > today) cls += ' future';
    html += `<div class="${cls}" title="День ${d}">${d}</div>`;
  }
  html += `</div>`;

  document.getElementById('calWrap').innerHTML = html;
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
        <button class="btn" onclick="nextRitual()" id="ritualNextBtn">Выполнено ✓</button>
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

// Отметить текущую практику выполненной и идти дальше
function nextRitual() {
  stopTimer();
  const p = ritualQueue[ritualIndex];
  markPracticeDone(p.id);
  ritualIndex++;
  renderRitualStep();
}

// Пропустить текущую практику (не отмечать) и идти дальше
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
    bs.days[date].closed = true;
    saveState();
    const percent = Math.round(count / total * 100);
    let emoji = '🎉', title = 'День закрыт!', text = `Ты сделал ${count} из ${total} практик. День ${day} засчитан!`;
    if (count === total) { emoji = '🔥'; title = 'Идеальный день!'; text = `Все ${total} практик! Так держать, ты в потоке.`; }
    else if (count === 4) { emoji = '✅'; title = 'Хороший день!'; text = `${count} из ${total} — этого достаточно. Продолжай.`; }
    showModal(emoji, title, text);
  } else if (count >= 2) {
    saveState();
    showModal('💪', 'Хорошо идёшь!', `Ты сделал ${count} из ${total}. Закрыть день нужно минимум 4 — попробуй добавить ещё.`);
  } else {
    saveState();
    showModal('🌱', 'Начало положено', `Сделано ${count} из ${total}. Маленький шаг — тоже шаг. Завтра будет больше.`);
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

// ====== МОДАЛКА ======
function showModal(emoji,title,text){document.getElementById('modalEmoji').textContent=emoji;document.getElementById('modalTitle').textContent=title;document.getElementById('modalText').textContent=text;document.getElementById('modal').classList.remove('hidden')}
function closeModal(){document.getElementById('modal').classList.add('hidden');closeRitual()}