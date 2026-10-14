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
const DOW = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];

const ONB = [
{ico:'🌅',title:'Это игра по книге',body:'<p>Хэл Элрод написал книгу о том, как изменить жизнь через утро. Но 95% людей прочитали — и ничего не сделали.</p><p><strong>Здесь по-другому.</strong> Ты не читаешь книгу. Ты играешь в неё.</p><p>Каждое утро ты проходишь практики — и день закрывается сам.</p>'},
{ico:'📚',title:'Библиотека книг',body:'<p>У тебя может быть <strong>несколько книг одновременно</strong>. У каждой — свои практики, свой прогресс, свой дневник.</p><p>Тапни книгу в библиотеке — переключишься на неё. Тапни <strong>←</strong> вверху — вернёшься к списку.</p>'},
{ico:'⚡',title:'Что даст 30 дней',body:'<p>Если будешь делать практики каждое утро:</p><ul><li>Через 3 дня — начнёшь просыпаться без «стены»</li><li>Через 7 дней — появится ясность, куда идёшь</li><li>Через 14 дней — утро станет любимым временем</li><li>Через 30 дней — ты другой человек</li></ul>'},
{ico:'🎮',title:'Как играть',body:'<p>Каждое утро — цепочка практик. Всего ~40 минут.</p><p><strong>Правила:</strong></p><ul><li>Отмечай то, что сделал</li><li>4+ практик = день закрыт</li><li>6 из 6 = идеальный день</li><li>Не разрывай серию дней</li></ul><p>Собирай награды. Расти в уровнях.</p>'},
{ico:'🚀',title:'Готов?',body:'<p>Не делай всё идеально. Начни с 2 практик — тишины и аффирмаций.</p><p><strong>Правило игры:</strong> отмечай то, что сделал. Не то, что «должен был».</p><p>Жми «Начать» — вперёд.</p>'}
];

const EMOJIS = ['👤','😎','🧠','🔥','🌅','⚡','🎯','💪','🦁','🌟','🚀','🎨','🧘','🏆','☀️','🍀'];

const ACHIEVEMENTS_GROUPS = [
  {
    title:'📅 Прогресс по дням',
    items: [
      { id:'first', ico:'🌟', name:'Первый шаг', desc:'1 день', check:(c,s,e)=>c>=1, showProgress:false, gold:false },
      { id:'three', ico:'🔥', name:'Три дня', desc:'3 подряд', check:(c,s)=>s>=3, showProgress:false, gold:false },
      { id:'early', ico:'🌅', name:'Ранняя пташка', desc:'5 подряд', check:(c,s)=>s>=5, showProgress:false, gold:false },
      { id:'week', ico:'⚡', name:'Неделя силы', desc:'7 подряд', check:(c,s)=>s>=7, showProgress:false, gold:false },
      { id:'half', ico:'💎', name:'Половина', desc:'15 дней', check:(c,s)=>c>=15, showProgress:true, progress:(c,s)=>c+'/15', gold:false },
      { id:'month', ico:'👑', name:'Мастер утра', desc:'30 дней', check:(c,s)=>c>=30, showProgress:true, progress:(c,s)=>c+'/30', gold:true }
    ]
  },
  {
    title:'🎯 За старание',
    items: [
      { id:'perfect', ico:'🎯', name:'Идеальный день', desc:'Все практики', check:(c,s,e)=>e.perfect, showProgress:false, gold:false },
      { id:'journal10', ico:'📖', name:'Философ', desc:'10 записей', check:(c,s,e)=>e.journal>=10, showProgress:true, progress:(c,s,e)=>e.journal+'/10', gold:false },
      { id:'century', ico:'💯', name:'Сотка', desc:'100 практик', check:(c,s,e)=>e.practices>=100, showProgress:true, progress:(c,s,e)=>e.practices+'/100', gold:false }
    ]
  },
  {
    title:'🏅 Легенда',
    items: [
      { id:'master', ico:'🏅', name:'Гуру', desc:'Все награды', check:(c,s,e)=>e.otherAch>=9, showProgress:true, progress:(c,s,e)=>e.otherAch+'/9', gold:true }
    ]
  }
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
  ['authScreen','onbScreen','libScreen','todayScreen','statsScreen','journalScreen','profileScreen','adminScreen','ritualScreen','practiceScreen'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  document.getElementById('bottomNav').classList.add('hidden');
  window.scrollTo(0, 0);
}

function showAuth(){hideAll();document.getElementById('authScreen').classList.remove('hidden')}
function showOnboarding(){hideAll();onbIndex=0;renderOnb();document.getElementById('onbScreen').classList.remove('hidden')}

function showLibrary() {
  hideAll();
  document.getElementById('libScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b,i) => b.classList.toggle('on', i===1));
  renderLibrary();
  checkAdminAccess();
}

function showTodayScreen() {
  if (!currentBook) return showLibrary();
  hideAll();
  document.getElementById('todayScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b,i) => b.classList.toggle('on', i===0));
  renderToday();
}

function showStatsScreen() {
  if (!currentBook) return showLibrary();
  hideAll();
  document.getElementById('statsScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b,i) => b.classList.toggle('on', i===2));
  renderStatsScreen();
}

function showJournalScreen() {
  if (!currentBook) return showLibrary();
  hideAll();
  document.getElementById('journalScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b,i) => b.classList.toggle('on', i===3));
  renderJournal();
}

function showProfile() {
  hideAll();
  document.getElementById('profileScreen').classList.remove('hidden');
  renderProfile();
  checkAdminAccess();
}

function navTo(page, btn) {
  if (page === 'lib') { showLibrary(); return; }
  if (!currentBook) { showLibrary(); return; }
  if (page === 'today') showTodayScreen();
  else if (page === 'stats') showStatsScreen();
  else if (page === 'journal') showJournalScreen();
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
function logout(){if(!confirm('Выйти? Прогресс сохранится.'))return;localStorage.removeItem('vnedri_user');user=null;state={};currentBook=null;showAuth()}

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
  document.getElementById('libName').textContent = user.name || 'Друг';
  document.getElementById('libAvatar').textContent = state.avatar || '👤';
  const d = new Date();
  document.getElementById('libDate').textContent = d.toLocaleDateString('ru-RU', {weekday:'long', day:'numeric', month:'long'});

  // Общая статистика
  let totalClosed = 0, totalPractices = 0, booksStarted = 0;
  BOOKS.forEach(b => {
    const bs = getBookState(b.id);
    if (bs.start) booksStarted++;
    totalClosed += countClosedDays(b.id);
    Object.values(bs.days).forEach(rec => {
      if (rec.practices) totalPractices += rec.practices.length;
    });
  });
  document.getElementById('libBooks').textContent = booksStarted;
  document.getElementById('libDays').textContent = totalClosed;
  document.getElementById('libPractices').textContent = totalPractices;

  // Список книг
  document.getElementById('bookList').innerHTML = BOOKS.map(b => {
    const bs = getBookState(b.id);
    const closed = countClosedDays(b.id);
    const pct = Math.round(closed / b.days * 100);
    const started = bs.start !== null;
    const isDone = closed >= b.days;
    return `<div class="book-card ${isDone ? 'done' : ''}" onclick="openBook('${b.id}')">
      <div class="book-ico">${b.emoji}</div>
      <div class="book-info">
        <h3>${b.title} ${isDone ? '👑' : ''}</h3>
        <p>${b.author} · ${b.days} дней</p>
        ${started ? `<div class="book-progress"><div class="book-progress-fill" style="width:${pct}%"></div></div><div class="book-status">${isDone ? '✓ Пройдена' : pct + '% · ' + closed + ' из ' + b.days}</div>` : `<div class="book-status">Не начата · Нажми</div>`}
      </div>
      <div class="book-arrow">›</div>
    </div>`;
  }).join('');
}

// ====== ОТКРЫТЬ КНИГУ ======
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
  showTodayScreen();
}

// ====== ГЛАВНЫЙ ЭКРАН ======
function renderToday() {
  if (!currentBook) return;
  const b = currentBook;
  const bs = getBookState(b.id);
  const day = currentDay(b.id);
  const closed = countClosedDays(b.id);

  document.getElementById('todayName').textContent = user.name || 'Друг';
  document.getElementById('todayBookTitle').textContent = b.emoji + ' ' + b.title;
  document.getElementById('todayAvatar').textContent = state.avatar || '👤';

  renderWeekRow();

  const badge = document.getElementById('progBadge');
  badge.style.display = 'inline-flex';
  document.getElementById('progBadgeText').textContent = 'День ' + day + ' из ' + b.days;
  document.getElementById('progBadgePct').textContent = Math.round(closed/b.days*100) + '%';

  renderHeroCards();
  document.getElementById('ritualSub').textContent = b.practices.length + ' практик · ~' + Math.round(b.practices.reduce((s, p) => s + p.time, 0) / 60) + ' минут';
  renderLevel();
  renderCalendar();
}

// ====== ПИЛЮЛИ НЕДЕЛИ ======
function renderWeekRow() {
  const b = currentBook;
  const bs = getBookState(b.id);
  const today = new Date();
  const dow = today.getDay() === 0 ? 6 : today.getDay() - 1;
  const monday = new Date(today);
  monday.setDate(today.getDate() - dow);
  const todayStr = today.toISOString().split('T')[0];

  let html = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dateStr = d.toISOString().split('T')[0];
    const rec = bs.days[dateStr];
    let cls = 'day-pill';
    if (rec && rec.closed) cls += ' done';
    else if (rec && rec.practices && rec.practices.length >= 2) cls += ' partial';
    if (dateStr === todayStr) cls += ' active';
    if (dateStr > todayStr) cls += ' future';
    html += `<div class="${cls}">
      <div class="dow">${DOW[i]}</div>
      <div class="dnum">${d.getDate()}</div>
    </div>`;
  }
  document.getElementById('weekRow').innerHTML = html;
}

// ====== HERO-КАРТОЧКИ ======
function renderHeroCards() {
  const b = currentBook;
  const bs = getBookState(b.id);
  const day = currentDay(b.id);
  const date = dateByDay(b.id, day);
  const todayRec = bs.days[date] || { practices: [] };

  const classMap = {
    silence:'hero-silence', affirm:'hero-affirm', visual:'hero-visual',
    journal:'hero-journal', read:'hero-read', sport:'hero-sport',
    'two-min':'hero-silence', anchor:'hero-affirm', env:'hero-visual', track:'hero-journal'
  };

  let html = '';
  b.practices.forEach((p, i) => {
    const done = todayRec.practices && todayRec.practices.includes(p.id);
    const cls = done ? 'hero-card hero-done' : 'hero-card ' + (classMap[p.id] || 'hero-silence');
    html += `<div class="${cls}">
      <div class="hero-icon-bg">${p.ico}</div>
      <div class="hero-badge">● ${i+1} из ${b.practices.length}</div>
      ${done ? '<div class="hero-done-badge">✓</div>' : ''}
      <div class="hero-content">
        <div class="hero-title">${p.title}</div>
        <div class="hero-sub">${p.sub}</div>
        <button class="hero-play" onclick="event.stopPropagation();openPractice('${p.id}')">
          ${done ? '✓ ВЫПОЛНЕНО' : '▶ НАЧАТЬ'}
        </button>
      </div>
    </div>`;
  });
  document.getElementById('heroScroll').innerHTML = html;

  document.getElementById('heroDots').innerHTML = b.practices.map((p, i) => {
    const done = todayRec.practices && todayRec.practices.includes(p.id);
    return `<div class="hero-dot ${done ? 'done' : ''}" data-i="${i}"></div>`;
  }).join('');
}

// ====== КАЛЕНДАРЬ ======
function renderCalendar() {
  const b = currentBook;
  const bs = getBookState(b.id);
  const today = todayStr();
  const closed = countClosedDays(b.id);

  let html = `<div class="cal-head">
    <div class="label">📅 Прогресс пути</div>
    <div class="count">${closed} из ${b.days}</div>
  </div>`;
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
  html += `<div class="cal-nums"><span>1</span><span>10</span><span>20</span><span>${b.days}</span></div>`;
  document.getElementById('calWrap').innerHTML = html;
}

// ====== СТАТИСТИКА ======
function renderStatsScreen() {
  if (!currentBook) return;
  const b = currentBook;
  const bs = getBookState(b.id);
  const day = currentDay(b.id);
  const closed = countClosedDays(b.id);
  const streak = calcStreak(b.id);
  const best = calcBest(b.id);

  document.getElementById('statsBookTitle').textContent = b.emoji + ' ' + b.title;
  document.getElementById('statsAvatar').textContent = state.avatar || '👤';

  // Общая статистика
  let totalClosed = 0, totalPractices = 0, booksStarted = 0;
  BOOKS.forEach(bb => {
    const bbs = getBookState(bb.id);
    if (bbs.start) booksStarted++;
    totalClosed += countClosedDays(bb.id);
    Object.values(bbs.days).forEach(rec => {
      if (rec.practices) totalPractices += rec.practices.length;
    });
  });
  document.getElementById('globalBooks').textContent = booksStarted;
  document.getElementById('globalClosed').textContent = totalClosed;
  document.getElementById('globalPractices').textContent = totalPractices;

  // Кольца по текущей книге
  const date = dateByDay(b.id, day);
  const todayRec = bs.days[date] || { practices: [] };
  const todayCount = (todayRec.practices || []).length;
  const total = b.practices.length;

  setRing('ringDays', 54, closed / b.days);
  setRing('ringStreak', 42, Math.min(streak / b.days, 1));
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

  document.getElementById('legendDays').textContent = closed;
  document.getElementById('legendStreak').textContent = streak;
  document.getElementById('legendRecord').textContent = best;
  document.getElementById('statStreakBig').textContent = streak;
  document.getElementById('statBestBig').textContent = best;
  document.getElementById('statClosedBig').textContent = closed;

  renderAchievements();
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

// ====== НАГРАДЫ С ГРУППАМИ ======
function renderAchievements() {
  if (!currentBook) return;
  const closed = countClosedDays(currentBook.id);
  const streak = calcStreak(currentBook.id);
  const bs = getBookState(currentBook.id);
  const journal = Object.keys(bs.journal || {}).filter(k => {
    const j = bs.journal[k]; return j.q1 || j.q2 || j.q3;
  }).length;
  let practices = 0, perfect = false;
  Object.values(bs.days).forEach(rec => {
    if (rec.practices) practices += rec.practices.length;
    if (rec.practices && rec.practices.length === currentBook.practices.length) perfect = true;
  });

  let unlockedCount = 0;
  const allItems = [];
  ACHIEVEMENTS_GROUPS.forEach(g => g.items.forEach(a => allItems.push(a)));

  // Считаем сколько открыто (без "Гуру")
  const otherAch = ACHIEVEMENTS_GROUPS.slice(0,2).reduce((sum, g) => {
    return sum + g.items.filter(a => a.check(closed, streak, { journal, practices, perfect, otherAch: 0 })).length;
  }, 0);

  const extra = { journal, practices, perfect, otherAch };

  // Общий счётчик
  allItems.forEach(a => { if (a.check(closed, streak, extra)) unlockedCount++; });
  document.getElementById('achCount').textContent = unlockedCount + ' из ' + allItems.length;
  document.getElementById('achBar').style.width = Math.round(unlockedCount / allItems.length * 100) + '%';

  // Рендер групп
  let html = '';
  ACHIEVEMENTS_GROUPS.forEach(g => {
    html += `<div class="ach-group-title">${g.title}</div><div class="ach-grid">`;
    g.items.forEach(a => {
      const unlocked = a.check(closed, streak, extra);
      const gold = a.gold && unlocked;
      const progress = !unlocked && a.showProgress ? `<div class="ach-progress">${a.progress(closed, streak, extra)}</div>` : '';
      html += `<div class="ach-card ${unlocked ? 'unlocked' : 'locked'} ${gold ? 'gold' : ''}">
        <div class="ach-badge">${unlocked ? a.ico : '🔒'}</div>
        <div class="ach-name">${a.name}</div>
        <div class="ach-desc">${a.desc}</div>
        ${progress}
      </div>`;
    });
    html += `</div>`;
  });

  document.getElementById('achContainer').innerHTML = html;
}

// ====== УРОВНИ ======
function getLevel(closed) {
  if (closed === 0) return { ico:'🌱', name:'Новичок', desc:'Начни первый день' };
  if (closed < 3) return { ico:'🌱', name:'Первый шаг', desc:`${closed} ${plural(closed,'день','дня','дней')} — начало положено` };
  if (closed < 7) return { ico:'🌿', name:'В ритме', desc:`${closed} ${plural(closed,'день','дня','дней')} — ты в потоке` };
  if (closed < 14) return { ico:'🔥', name:'Практик', desc:`${closed} ${plural(closed,'день','дня','дней')} — привычка формируется` };
  if (closed < 21) return { ico:'💎', name:'Опытный', desc:`${closed} ${plural(closed,'день','дня','дней')} — ты почти у цели` };
  if (closed < 30) return { ico:'🏆', name:'Мастер', desc:`${closed} ${plural(closed,'день','дня','дней')} — ты легенда` };
  return { ico:'👑', name:'Легенда', desc:'Книга пройдена полностью' };
}
function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
}
function renderLevel() {
  const closed = countClosedDays(currentBook.id);
  const lv = getLevel(closed);
  document.getElementById('levelBadge').textContent = lv.ico;
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

  const el = document.getElementById('practiceList');
  if (!el) return;
  el.innerHTML = b.practices.map(p => {
    const done = todayRec.practices && todayRec.practices.includes(p.id);
    return `<div class="practice ${done ? 'done' : ''}" onclick="openPractice('${p.id}')">
      <div class="p-ico">${p.ico}</div>
      <div class="p-body"><div class="p-title">${p.title}</div><div class="p-sub">${p.sub}</div></div>
      <div class="p-arrow">›</div>
    </div>`;
  }).join('');
}

// ====== ДНЕВНИК ======
function renderJournal() {
  if (!currentBook) return showLibrary();
  const day = currentDay(currentBook.id);
  document.getElementById('journalBookTitle').textContent = currentBook.emoji + ' ' + currentBook.title;
  document.getElementById('journalAvatar').textContent = state.avatar || '👤';

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
      ${j.q1 ? `<div class="jh-q">🌟 Получилось</div><div class="jh-a">${escapeHtml(j.q1)}</div>` : ''}
      ${j.q2 ? `<div class="jh-q">💭 Сложно</div><div class="jh-a">${escapeHtml(j.q2)}</div>` : ''}
      ${j.q3 ? `<div class="jh-q">🔍 Замечаю</div><div class="jh-a">${escapeHtml(j.q3)}</div>` : ''}
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
  window.scrollTo(0, 0);
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
        <button class="btn" onclick="nextRitual()" style="background:var(--lime);color:#000">Выполнено ✓</button>
      </div>
    </div>
    <div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${p.why}</p></div>
    <div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${p.how.map(s => `<li>${s}</li>`).join('')}</ol></div>
  `;
  timerRemaining = p.time;
  document.querySelector('.ritual-body').scrollTop = 0;
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
function closeRitual(){document.getElementById('ritualScreen').classList.add('hidden');showTodayScreen()}
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
    if (count === total) showModal('🔥', 'Идеальный день!', `Все ${total} практик! Так держать.`);
    else showModal('✅', 'День закрыт!', `${count} из ${total}. День ${day} засчитан!`);
  } else if (count >= 2) {
    saveState();
    showModal('💪', 'Хорошо идёшь!', `${count} из ${total}. Для закрытия дня нужно 4.`);
  } else {
    saveState();
    showModal('🌱', 'Начало положено', `${count} из ${total}. Маленький шаг — тоже шаг.`);
  }
}
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
    ${p.affirm ? `<div class="ps-block"><h3>✨ Аффирмации</h3><ul class="affirm-list">${p.affirm.map(a => `<li onclick="copyAffirm(this)">«${a}»</li>`).join('')}</ul></div>` : ''}
    <div class="ps-block"><h3>⏱ Таймер</h3><div class="timer-box"><div class="timer-display" id="timerDisplay">${formatTime(p.time)}</div><div class="timer-btns"><button class="btn" id="timerBtn" onclick="toggleTimerP()">▶ Старт</button><button class="btn btn-ghost" onclick="resetTimerP()">↺ Сброс</button></div></div></div>
    <div class="ps-block"><h3>🎯 Результат</h3><p>${p.result}</p></div>
    <div class="ps-block"><h3>⚠️ Ошибки</h3><ul class="mistakes">${p.mistakes.map(m => `<li>${m}</li>`).join('')}</ul></div>
    <div class="ps-block"><h3>💬 Совет</h3><div class="advice">${p.advice}</div></div>
    <button class="btn" style="margin-top:20px" onclick="markPracticeFromScreen('${p.id}')">✓ Отметить выполненным</button>
  `;
  document.getElementById('practiceScreen').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  window.scrollTo(0, 0);
  document.querySelector('.ps-content').scrollTop = 0;
  timerRemaining = p.time;
}
function closePractice(){document.getElementById('practiceScreen').classList.add('hidden');document.body.style.overflow='';stopTimer();currentPractice=null;showTodayScreen()}
function toggleTimerP(){const btn=document.getElementById('timerBtn');if(timerInterval){stopTimer();btn.textContent='▶ Продолжить'}else startTimer('timerDisplay',btn)}
function resetTimerP(){stopTimer();if(currentPractice){timerRemaining=currentPractice.time;document.getElementById('timerDisplay').textContent=formatTime(timerRemaining);document.getElementById('timerBtn').textContent='▶ Старт'}}
function markPracticeFromScreen(id){markPracticeDone(id);closePractice()}
function copyAffirm(el){const text=el.textContent.replace(/[«»]/g,'');if(navigator.clipboard){navigator.clipboard.writeText(text);el.style.background='rgba(184,255,46,.15)';setTimeout(()=>el.style.background='',500)}}

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
  document.getElementById('bottomNav').classList.remove('hidden');
  renderAdmin();
}
function renderAdmin() {
  const users = JSON.parse(localStorage.getItem('vnedri_users') || '{}');
  const phones = Object.keys(users);
  let active = 0, totalStreak = 0, totalJournal = 0, totalClosed = 0;

  const userList = phones.map(phone => {
    const u = users[phone];
    const uState = JSON.parse(localStorage.getItem('vnedri_state_' + phone) || '{}');
    const books = uState.books || {};
    let closed = 0, journalCount = 0, streak = 0;
    Object.values(books).forEach(mb => {
      closed += Object.keys(mb.days || {}).filter(k => mb.days[k].closed).length;
      journalCount += Object.keys(mb.journal || {}).filter(k => {
        const j = mb.journal[k]; return j.q1 || j.q2 || j.q3;
      }).length;
    });
    if (books['magic-morning']) streak = calcStreakFromState(books['magic-morning']);
    if (u.lastSeen && Date.now() - u.lastSeen < 30 * 86400000) active++;
    totalStreak += streak;
    totalJournal += journalCount;
    totalClosed += closed;
    return `<div class="admin-card">
      <h3>${u.name || 'Без имени'} ${phone === ADMIN_PHONE ? '👑' : ''}</h3>
      <div class="admin-row"><span>Телефон</span><span>+7 ${phone.slice(1,4)} *** ${phone.slice(7)}</span></div>
      <div class="admin-row"><span>С нами с</span><span>${u.created ? new Date(u.created).toLocaleDateString('ru') : '—'}</span></div>
      <div class="admin-row"><span>Закрыто</span><span>${closed}</span></div>
      <div class="admin-row"><span>Подряд</span><span>${streak}</span></div>
      <div class="admin-row"><span>Записей</span><span>${journalCount}</span></div>
    </div>`;
  }).join('');

  document.getElementById('adminUsers').textContent = phones.length;
  document.getElementById('adminActive').textContent = active;
  document.getElementById('adminAvgStreak').textContent = phones.length ? Math.round(totalStreak / phones.length) : 0;
  document.getElementById('adminSessions').textContent = phones.length;
  document.getElementById('adminJournal').textContent = totalJournal;
  document.getElementById('adminClosed').textContent = totalClosed;
  if (users[ADMIN_PHONE]) document.getElementById('adminMyDate').textContent = new Date(users[ADMIN_PHONE].created).toLocaleDateString('ru');
  document.getElementById('adminUserList').innerHTML = userList;
}
function calcStreakFromState(bs) {
  if (!bs.start) return 0;
  let s = 0;
  for (let i = 0; i < 30; i++) {
    const st = new Date(bs.start); st.setDate(st.getDate() + i);
    const d = st.toISOString().split('T')[0];
    if (bs.days[d] && bs.days[d].closed) s++;
    else break;
  }
  return s;
}

// ====== КОНФЕТТИ ======
function fireConfetti() {
  const box = document.getElementById('confetti');
  box.classList.remove('hidden');
  const colors = ['#B8FF2E','#ffb800','#7c5cff','#00d68f','#ff6b9d'];
  for (let i = 0; i < 50; i++) {
    const el = document.createElement('div');
    el.className = 'conf-piece';
    el.style.left = Math.random() * 100 + '%';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = (2 + Math.random() * 2) + 's';
    el.style.animationDelay = (Math.random() * 0.3) + 's';
    if (Math.random() > 0.5) el.style.borderRadius = '50%';
    box.appendChild(el);
  }
  setTimeout(() => { box.innerHTML = ''; box.classList.add('hidden'); }, 4500);
}

// ====== МОДАЛКА ======
function showModal(emoji,title,text){document.getElementById('modalEmoji').textContent=emoji;document.getElementById('modalTitle').textContent=title;document.getElementById('modalText').textContent=text;document.getElementById('modal').classList.remove('hidden')}
function closeModal(){document.getElementById('modal').classList.add('hidden');closeRitual()}

// Hero scroll indicator
document.addEventListener('scroll', (e) => {
  if (e.target && e.target.id === 'heroScroll') {
    const idx = Math.round(e.target.scrollLeft / e.target.offsetWidth);
    document.querySelectorAll('.hero-dot').forEach((d,i) => d.classList.toggle('on', i === idx));
  }
}, true);
