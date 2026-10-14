// ====== SUPABASE ======
const SUPABASE_URL = 'https://cangetbuejkwqgfxpeow.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-gGY5BghNH6nqi4j_wXmpw_xgHjUFax';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ====== ДАННЫЕ ======
let BOOKS = [];
let currentBook = null;
let currentPractice = null;
let ritualQueue = [];
let ritualIndex = 0;
let timerInterval = null;
let timerRemaining = 0;
let timerState = 'idle';
let user = null;
let state = {};
let onbIndex = 0;
let statsBookId = null;
let musicAudio = null;
let syncTimeout = null;
let isAdminFlag = false;

const DEV_TG = 'https://t.me/andger';
const DOW = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];

const ONB = [
{ico:'🌅',title:'Это игра по книгам',body:'<p>Ты не читаешь книги. Ты <strong>играешь в них</strong>. Каждое утро — цепочка практик, и день закрывается сам.</p>'},
{ico:'📚',title:'Библиотека книг',body:'<p>У тебя может быть <strong>несколько книг одновременно</strong>. У каждой — свои практики, свой прогресс, свой дневник.</p><p>Тапни книгу в Библиотеке — переключишься на неё.</p>'},
{ico:'🔥',title:'Собирай серию',body:'<p>Каждое закрытое утро = <strong>+1 к серии</strong>. Не разрывай её!</p><ul><li>Стрик — сколько дней подряд</li><li>Рекорд — твой лучший результат</li></ul>'},
{ico:'🏆',title:'Награды и уровни',body:'<p>За прогресс ты получаешь <strong>награды</strong>: от «Первого шага» до «Мастера утра». Растёшь в уровнях — от Новичка до Легенды.</p><p>Есть <strong>секретная награда</strong> — узнаешь, когда получишь.</p>'},
{ico:'🚀',title:'Готов?',body:'<p>Не делай всё идеально. Начни с 2 практик — тишины и аффирмаций.</p><p>Жми «Начать» — вперёд.</p>'}
];

const EMOJIS = ['👤','😎','🧠','🔥','🌅','⚡','🎯','💪','🦁','🌟','🚀','🎨','🧘','🏆','☀️','🍀'];

const ACHIEVEMENTS_GROUPS = [
  { title:'📅 Прогресс по дням', items: [
    { id:'first', ico:'🌟', name:'Первый шаг', desc:'1 день', check:(c,s,e)=>c>=1 },
    { id:'three', ico:'🔥', name:'Три дня', desc:'3 подряд', check:(c,s)=>s>=3 },
    { id:'early', ico:'🌅', name:'Ранняя пташка', desc:'5 подряд', check:(c,s)=>s>=5, showProgress:true, progress:(c,s)=>s+'/5' },
    { id:'week', ico:'⚡', name:'Неделя силы', desc:'7 подряд', check:(c,s)=>s>=7, showProgress:true, progress:(c,s)=>s+'/7' },
    { id:'half', ico:'💎', name:'Половина', desc:'15 дней', check:(c,s)=>c>=15, showProgress:true, progress:(c,s)=>c+'/15' },
    { id:'month', ico:'👑', name:'Мастер утра', desc:'30 дней', check:(c,s)=>c>=30, showProgress:true, progress:(c,s)=>c+'/30', gold:true }
  ]},
  { title:'🎯 За старание', items: [
    { id:'perfect', ico:'🎯', name:'Идеальный день', desc:'Все практики', check:(c,s,e)=>e.perfect },
    { id:'journal10', ico:'📖', name:'Философ', desc:'10 записей', check:(c,s,e)=>e.journal>=10, showProgress:true, progress:(c,s,e)=>e.journal+'/10' },
    { id:'century', ico:'💯', name:'Сотка', desc:'100 практик', check:(c,s,e)=>e.practices>=100, showProgress:true, progress:(c,s,e)=>e.practices+'/100' }
  ]},
  { title:'🎁 Секрет', items: [
    { id:'secret', ico:'❓', name:'???', desc:'Секретная награда', check:(c,s,e)=>e.perfectStreak>=3, secret:true }
  ]},
  { title:'🏅 Легенда', items: [
    { id:'master', ico:'🏅', name:'Гуру', desc:'Все награды', check:(c,s,e)=>e.otherAch>=10, showProgress:true, progress:(c,s,e)=>e.otherAch+'/10', gold:true }
  ]}
];

// ====== МУЗЫКА ======
function startMusic() {
  if (state.soundOn === false) return;
  if (!musicAudio) {
    musicAudio = new Audio('meditation.mp3');
    musicAudio.loop = true;
    musicAudio.volume = 0;
  }
  musicAudio.play().then(() => { fadeAudio(musicAudio, musicAudio.volume, 0.35, 2000); }).catch(e => {});
}
function stopMusic() {
  if (!musicAudio) return;
  fadeAudio(musicAudio, musicAudio.volume, 0, 1500, () => {
    try { musicAudio.pause(); musicAudio.currentTime = 0; } catch(e) {}
  });
}
function fadeAudio(audio, from, to, duration, onEnd) {
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    audio.volume = Math.max(0, Math.min(1, from + (to - from) * t));
    if (t < 1) requestAnimationFrame(tick);
    else if (onEnd) onEnd();
  }
  requestAnimationFrame(tick);
}

// ====== ИНИЦИАЛИЗАЦИЯ ======
window.addEventListener('DOMContentLoaded', async () => {
  BOOKS = (typeof BOOK_REGISTRY !== 'undefined' ? BOOK_REGISTRY : []).filter(Boolean);
  try {
    const { data: { session } } = await sb.auth.getSession();
    if (session) await handleSession(session);
    else { hideSplash(); showAuth(); }
  } catch(e) { hideSplash(); showAuth(); }
});

sb.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT') { user = null; state = {}; currentBook = null; hideAll(); showAuth(); }
});

function hideSplash() {
  const sp = document.getElementById('splashScreen');
  if (sp) sp.classList.add('hidden');
}

async function handleSession(session) {
  const email = session.user.email;
  const phone = email.replace('@vnedri.app', '');
  user = { id: session.user.id, phone: phone, email: email, name: session.user.user_metadata?.name || 'Друг' };

  const { data: profile } = await sb.from('profiles').select('*').eq('id', user.id).single();
  if (profile) {
    if (profile.blocked) {
      hideSplash();
      alert('Аккаунт заблокирован. Напишите разработчику: t.me/andger');
      await sb.auth.signOut();
      return;
    }
    user.name = profile.name || user.name;
    state.avatar = profile.avatar || '👤';
    isAdminFlag = profile.is_admin === true;
    state.soundOn = profile.sound_on !== false;
    state.onboarded = profile.onboarded === true;
    state.lastBook = profile.last_book || null;
  } else {
    await sb.from('profiles').insert({ id: user.id, name: user.name });
    state.soundOn = true;
    state.onboarded = false;
  }

  await loadProgress();
  sb.from('profiles').update({ last_seen: new Date().toISOString() }).eq('id', user.id).then(() => {});

  hideSplash();
  if (!state.onboarded) showOnboarding();
  else smartHome();
}

// ====== СИНХРОНИЗАЦИЯ ======
async function loadProgress() {
  const { data, error } = await sb.from('progress').select('*').eq('user_id', user.id);
  if (error) { console.error('load progress:', error); return; }
  state.books = {};
  (data || []).forEach(row => {
    state.books[row.book_id] = row.data || { start: null, days: {}, journal: {} };
  });
}
async function syncProgress() {
  if (!user || !state.books) return;
  const rows = Object.keys(state.books).map(bookId => ({
    user_id: user.id, book_id: bookId, data: state.books[bookId], updated_at: new Date().toISOString()
  }));
  if (!rows.length) return;
  await sb.from('progress').upsert(rows, { onConflict: 'user_id,book_id' });
}
async function syncProfile() {
  if (!user) return;
  await sb.from('profiles').update({
    name: user.name, avatar: state.avatar, sound_on: state.soundOn !== false,
    onboarded: state.onboarded === true, last_book: state.lastBook,
    last_seen: new Date().toISOString()
  }).eq('id', user.id);
}
async function syncNow() {
  await syncProgress(); await syncProfile();
  playSuccess(); alert('✓ Синхронизировано');
}
function saveState() {
  if (syncTimeout) clearTimeout(syncTimeout);
  syncTimeout = setTimeout(() => { syncProgress(); syncProfile(); }, 1500);
}

// ====== ЭКРАНЫ ======
function hideAll() {
  ['authScreen','onbScreen','libScreen','todayScreen','statsScreen','journalScreen','communityScreen','profileScreen','adminScreen','ritualScreen','practiceScreen'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  const bn = document.getElementById('bottomNav');
  if (bn) bn.classList.add('hidden');
  window.scrollTo(0, 0);
}
function showAuth(){hideAll();document.getElementById('authScreen').classList.remove('hidden')}
function showOnboarding(){hideAll();onbIndex=0;renderOnb();document.getElementById('onbScreen').classList.remove('hidden')}
function showLibrary(){hideAll();document.getElementById('libScreen').classList.remove('hidden');document.getElementById('bottomNav').classList.remove('hidden');document.querySelectorAll('.nav-btn').forEach((b,i)=>b.classList.toggle('on',i===1));renderLibrary();updateAllSoundUI()}
function showTodayScreen(){if(!currentBook)return smartHome();state.lastBook=currentBook.id;saveState();hideAll();document.getElementById('todayScreen').classList.remove('hidden');document.getElementById('bottomNav').classList.remove('hidden');document.querySelectorAll('.nav-btn').forEach((b,i)=>b.classList.toggle('on',i===0));renderToday();updateAllSoundUI()}
function showStatsScreen(){if(!currentBook&&BOOKS.length)currentBook=BOOKS[0];if(!currentBook)return showLibrary();if(!statsBookId)statsBookId=currentBook.id;hideAll();document.getElementById('statsScreen').classList.remove('hidden');document.getElementById('bottomNav').classList.remove('hidden');document.querySelectorAll('.nav-btn').forEach((b,i)=>b.classList.toggle('on',i===3));renderStatsScreen();updateAllSoundUI()}
function showJournalScreen(){if(!currentBook)return showLibrary();hideAll();document.getElementById('journalScreen').classList.remove('hidden');document.getElementById('bottomNav').classList.remove('hidden');document.querySelectorAll('.nav-btn').forEach((b,i)=>b.classList.toggle('on',i===0));renderJournal();updateAllSoundUI()}
function showCommunityScreen(){hideAll();document.getElementById('communityScreen').classList.remove('hidden');document.getElementById('bottomNav').classList.remove('hidden');document.querySelectorAll('.nav-btn').forEach((b,i)=>b.classList.toggle('on',i===2));document.getElementById('communityAvatar').textContent=state.avatar||'👤';updateAllSoundUI()}
function showProfile(){hideAll();document.getElementById('profileScreen').classList.remove('hidden');renderProfile();checkAdminAccess();updateAllSoundUI()}
function navTo(page){if(page==='lib')showLibrary();else if(page==='today')smartHome();else if(page==='stats')showStatsScreen();else if(page==='community')showCommunityScreen()}

function smartHome() {
  if (!BOOKS.length) return showLibrary();
  if (state.lastBook) {
    const b = BOOKS.find(x => x.id === state.lastBook);
    if (b) { const bs = getBookState(b.id); if (bs.start && countClosedDays(b.id) < b.days) { currentBook = b; return showTodayScreen(); } }
  }
  for (const b of BOOKS) { const bs = getBookState(b.id); if (bs.start && countClosedDays(b.id) < b.days) { currentBook = b; return showTodayScreen(); } }
  for (const b of BOOKS) { const bs = getBookState(b.id); if (!bs.start || countClosedDays(b.id) < b.days) { currentBook = b; return showTodayScreen(); } }
  showLibrary();
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

async function doAuth() {
  const phoneRaw = document.getElementById('phone').value;
  const pass = document.getElementById('password').value;
  const nameInp = document.getElementById('name').value.trim();
  const err = document.getElementById('authErr');
  const btn = document.getElementById('authBtn');
  const phone = normalizePhone(phoneRaw);
  const email = phone + '@vnedri.app';
  err.textContent = '';
  if (phone.length !== 11) { err.textContent = 'Введите номер полностью'; playError(); return; }
  if (pass.length < 6) { err.textContent = 'Пароль минимум 6 символов'; playError(); return; }
  if (authMode === 'reg' && !nameInp) { err.textContent = 'Введите имя'; playError(); return; }
  btn.disabled = true; btn.textContent = 'Загрузка...';
  try {
    if (authMode === 'reg') {
      const { data, error } = await sb.auth.signUp({ email, password: pass, options: { data: { name: nameInp } } });
      if (error) { err.textContent = error.message.includes('already') ? 'Номер уже зарегистрирован' : error.message; playError(); btn.disabled = false; btn.textContent = 'Зарегистрироваться'; return; }
      if (data.session) await handleSession(data.session);
      else {
        const { data: d2, error: e2 } = await sb.auth.signInWithPassword({ email, password: pass });
        if (e2) { err.textContent = 'Зарегистрировано! Войдите.'; authMode = 'login'; switchTab('login'); }
        else await handleSession(d2.session);
      }
    } else {
      const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });
      if (error) { err.textContent = 'Неверный номер или пароль'; playError(); btn.disabled = false; btn.textContent = 'Войти'; return; }
      await handleSession(data.session);
    }
  } catch(e) { err.textContent = 'Ошибка соединения'; playError(); }
  btn.disabled = false;
  btn.textContent = authMode === 'login' ? 'Войти' : 'Зарегистрироваться';
}

async function logout() {
  if (!confirm('Выйти? Прогресс сохранится на сервере.')) return;
  await syncProgress(); await syncProfile();
  await sb.auth.signOut();
}

async function deleteAccount() {
  if (!confirm('Удалить аккаунт? Это действие НЕОБРАТИМО.\n\nВесь прогресс, дневник и настройки будут стёрты.')) return;
  const confirmText = prompt('Введи слово УДАЛИТЬ для подтверждения:');
  if (confirmText !== 'УДАЛИТЬ') return;
  try {
    await sb.from('progress').delete().eq('user_id', user.id);
    await sb.from('profiles').delete().eq('id', user.id);
    await sb.auth.signOut();
    alert('Аккаунт удалён. Спасибо что был с нами.');
  } catch(e) {
    alert('Ошибка удаления. Напиши разработчику: t.me/andger');
  }
}

function isAdmin() { return isAdminFlag; }
function checkAdminAccess() {
  const ab = document.getElementById('adminBlock');
  const sb_ = document.getElementById('syncBlock');
  if (ab) ab.classList.toggle('hidden', !isAdmin());
  if (sb_) sb_.classList.toggle('hidden', !isAdmin());
}

// ====== FORGOT / ABOUT ======
function showForgot() { document.getElementById('forgotModal').classList.remove('hidden'); }
function closeForgot() { document.getElementById('forgotModal').classList.add('hidden'); }
function showAbout() { document.getElementById('aboutModal').classList.remove('hidden'); }
function closeAbout() { document.getElementById('aboutModal').classList.add('hidden'); }
function contactDev() { window.open(DEV_TG, '_blank'); }
function shareApp() {
  const url = 'https://gerasimovas-sudo.github.io/Vnedri/';
  if (navigator.share) {
    navigator.share({ title: 'ВНЕДРИ', text: 'Не читай книгу — внедри её в жизнь', url: url }).catch(()=>{});
  } else {
    navigator.clipboard.writeText(url).then(() => alert('Ссылка скопирована!')).catch(() => alert(url));
  }
}

// ====== STATE ======
function getBookState(id){if(!state.books)state.books={};if(!state.books[id])state.books[id]={start:null,days:{},journal:{}};if(!state.books[id].journal)state.books[id].journal={};return state.books[id]}

// ====== ЗВУКИ ======
let audioCtx = null;
function getCtx(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return null}}return audioCtx}
function playTone(freq,duration,type,vol){if(state.soundOn===false)return;const ctx=getCtx();if(!ctx)return;try{const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type=type||'sine';osc.frequency.value=freq;gain.gain.setValueAtTime(vol||0.15,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+duration);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+duration)}catch(e){}}
function playClick(){playTone(800,0.04,'sine',0.06)}
function playSuccess(){playTone(600,0.1,'sine',0.1);setTimeout(()=>playTone(900,0.15,'sine',0.1),100)}
function playError(){playTone(200,0.15,'square',0.08)}
function playFanfare(){if(state.soundOn===false)return;[523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,0.3,'sine',0.12),i*120));if(navigator.vibrate)navigator.vibrate([100,50,100,50,200])}
function playCheck(){if(state.soundOn===false)return;playTone(500,0.08,'sine',0.1);setTimeout(()=>playTone(750,0.12,'sine',0.1),60);if(navigator.vibrate)navigator.vibrate(80)}

function toggleSound(){
  state.soundOn = !(state.soundOn !== false);
  saveState();
  updateAllSoundUI();
  if (state.soundOn) {
    playClick();
    const inR=!document.getElementById('ritualScreen').classList.contains('hidden');
    const inP=!document.getElementById('practiceScreen').classList.contains('hidden');
    if(inR||inP) startMusic();
  } else {
    stopMusic();
  }
}
function updateAllSoundUI() {
  const on = state.soundOn !== false;
  const txt = on ? '🔊' : '🔇';
  ['soundBtn','soundBtnLib','soundBtnStats','soundBtnJournal','soundBtnCommunity','soundBtnProfile','soundBtnRitual','soundBtnPractice'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  });
  const tog = document.getElementById('soundToggle');
  if (tog) tog.classList.toggle('on', on);
}

document.addEventListener('click',(e)=>{if(e.target.closest('button, .book-card, .nav-btn, .practice, .hero-play, .sec-btn, .toggle-row, .ach-card, .day-pill, .today-book-card'))playClick()},true);

// ====== ОНБОРДИНГ ======
function renderOnb(){const s=ONB[onbIndex];document.getElementById('onbContent').innerHTML=`<div class="onb-ico">${s.ico}</div><h2>${s.title}</h2>${s.body}`;document.getElementById('onbDots').innerHTML=ONB.map((_,i)=>`<div class="onb-dot ${i===onbIndex?'on':''}"></div>`).join('');document.getElementById('onbBack').classList.toggle('hidden',onbIndex===0);document.getElementById('onbNext').textContent=onbIndex===ONB.length-1?'Начать путь 🚀':'Далее'}
function onbNext(){if(onbIndex<ONB.length-1){onbIndex++;renderOnb()}else{state.onboarded=true;saveState();smartHome()}}
function onbPrev(){if(onbIndex>0){onbIndex--;renderOnb()}}

// ====== БИБЛИОТЕКА ======
function renderLibrary() {
  document.getElementById('libName').textContent = user.name || 'Друг';
  document.getElementById('libAvatar').textContent = state.avatar || '👤';
  document.getElementById('libDate').textContent = new Date().toLocaleDateString('ru-RU', {weekday:'long', day:'numeric', month:'long'});
  let totalClosed=0,totalPractices=0,booksStarted=0;
  BOOKS.forEach(b=>{const bs=getBookState(b.id);if(bs.start)booksStarted++;totalClosed+=countClosedDays(b.id);Object.values(bs.days).forEach(rec=>{if(rec.practices)totalPractices+=rec.practices.length})});
  document.getElementById('libBooks').textContent=booksStarted;
  document.getElementById('libDays').textContent=totalClosed;
  document.getElementById('libPractices').textContent=totalPractices;
  document.getElementById('bookList').innerHTML=BOOKS.map(b=>{
    const bs=getBookState(b.id);const closed=countClosedDays(b.id);const pct=Math.round(closed/b.days*100);const started=bs.start!==null;const isDone=closed>=b.days;const isActive=state.lastBook===b.id&&started&&!isDone;
    return `<div class="book-card ${isDone?'done':''} ${isActive?'active':''}" onclick="openBook('${b.id}')">
      <div class="book-ico">${b.emoji}</div>
      <div class="book-info"><h3>${b.title} ${isDone?'👑':''}</h3><p>${b.author} · ${b.days} дней</p>${started?`<div class="book-progress"><div class="book-progress-fill" style="width:${pct}%"></div></div><div class="book-status">${isDone?'✓ Пройдена':pct+'% · '+closed+' из '+b.days}</div>`:`<div class="book-status">Не начата · Нажми</div>`}</div>
      <div class="book-arrow">›</div>
    </div>`;
  }).join('');
}
function openBook(id){const b=BOOKS.find(x=>x.id===id);if(!b)return;currentBook=b;const bs=getBookState(b.id);if(!bs.start){if(confirm('Начать книгу "'+b.title+'"?\nОтсчёт начнётся сегодня.')){bs.start=new Date().toISOString().split('T')[0];saveState()}else return}state.lastBook=id;saveState();showTodayScreen()}

// ====== ГЛАВНЫЙ ЭКРАН ======
function renderToday() {
  if (!currentBook) return;
  const b = currentBook, day = currentDay(b.id), closed = countClosedDays(b.id);
  document.getElementById('todayName').textContent = user.name || 'Друг';
  document.getElementById('todayAvatar').textContent = state.avatar || '👤';
  updateAllSoundUI();
  renderTodayBooks();
  document.getElementById('todayBookTitle').textContent = b.emoji + ' ' + b.title;
  document.getElementById('progBadge').style.display = 'inline-flex';
  document.getElementById('progBadgeText').textContent = 'День ' + day + ' из ' + b.days;
  document.getElementById('progBadgePct').textContent = Math.round(closed/b.days*100) + '%';
  renderWeekRow();
  renderHint();
  renderHeroCards();
  document.getElementById('ritualSub').textContent = b.practices.length + ' практик · ~' + Math.round(b.practices.reduce((s,p)=>s+p.time,0)/60) + ' минут';
  renderLevel();
  renderCalendar();
}
function renderTodayBooks() {
  const active = BOOKS.filter(b => { const bs = getBookState(b.id); return bs.start !== null; });
  const el = document.getElementById('todayBooks');
  const cnt = document.getElementById('todayBooksCount');
  if (!el) return;
  if (cnt) cnt.textContent = active.length > 1 ? '(' + active.length + ')' : '';
  if (!active.length) { el.innerHTML = ''; return; }
  el.innerHTML = active.map(b => {
    const closed = countClosedDays(b.id);
    const pct = Math.round(closed / b.days * 100);
    const isDone = closed >= b.days;
    const isActive = b.id === currentBook.id;
    const circ = 2 * Math.PI * 26;
    const offset = circ - (circ * pct / 100);
    return `<div class="today-book-card ${isDone?'done':''} ${isActive?'active':''}" onclick="selectTodayBook('${b.id}')">
      <div class="today-book-ring">
        <svg viewBox="0 0 64 64">
          <circle class="tbr-bg" cx="32" cy="32" r="26"/>
          <circle class="tbr-fill" cx="32" cy="32" r="26"
            stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
            transform="rotate(-90 32 32)"/>
        </svg>
        <div class="tbr-text">${pct}%</div>
      </div>
      <div class="today-book-name">${b.emoji} ${b.title}</div>
      <div class="today-book-days">${closed} из ${b.days}</div>
    </div>`;
  }).join('');
}
function selectTodayBook(id) {
  const b = BOOKS.find(x => x.id === id);
  if (!b || b.id === currentBook.id) return;
  const bs = getBookState(id);
  if (!bs.start) return;
  currentBook = b;
  state.lastBook = id;
  saveState();
  playClick();
  renderToday();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderHint() {
  const b=currentBook,bs=getBookState(b.id),day=currentDay(b.id),date=dateByDay(b.id,day);
  const todayRec=bs.days[date]||{practices:[]},todayCount=(todayRec.practices||[]).length,total=b.practices.length;
  const streak=calcStreak(b.id),el=document.getElementById('hintCard');
  if(todayRec.closed){let bonus=streak>=7?`🔥 ${streak} дней подряд — ты в потоке`:streak>=3?`🔥 ${streak} дня подряд — не сбавляй`:'✨ Ещё один день в копилке';el.innerHTML=`<div class="hint-card gold"><div class="hint-label">🎉 День закрыт</div><div class="hint-text">${bonus}</div></div>`;return}
  if(todayCount>=2){const need=4-todayCount;el.innerHTML=`<div class="hint-card warm"><div class="hint-label">💪 Продолжай</div><div class="hint-text">Сделано ${todayCount} из ${total}. До закрытия дня — ещё ${need} практики.</div></div>`;return}
  if(b.quotes&&b.quotes.length){const q=b.quotes[(day-1)%b.quotes.length];el.innerHTML=`<div class="hint-card"><div class="hint-label">✨ Цитата дня</div><div class="hint-text">«${q.text}»</div><div class="hint-author">— ${q.author}</div></div>`;return}
  el.innerHTML='';
}
function renderWeekRow() {
  const b=currentBook,bs=getBookState(b.id);
  const today=new Date(),dow=today.getDay()===0?6:today.getDay()-1,monday=new Date(today);monday.setDate(today.getDate()-dow);
  const todayStr=today.toISOString().split('T')[0];
  let html='';
  for(let i=0;i<7;i++){const d=new Date(monday);d.setDate(monday.getDate()+i);const dateStr=d.toISOString().split('T')[0];const rec=bs.days[dateStr];let cls='day-pill';if(rec&&rec.closed)cls+=' done';else if(rec&&rec.practices&&rec.practices.length>=2)cls+=' partial';if(dateStr===todayStr)cls+=' active';if(dateStr>todayStr)cls+=' future';html+=`<div class="${cls}"><div class="dow">${DOW[i]}</div><div class="dnum">${d.getDate()}</div></div>`}
  document.getElementById('weekRow').innerHTML=html;
}
function renderHeroCards() {
  const b=currentBook,bs=getBookState(b.id),day=currentDay(b.id),date=dateByDay(b.id,day);
  const todayRec=bs.days[date]||{practices:[]};
  const cm={silence:'hero-silence',affirm:'hero-affirm',visual:'hero-visual',journal:'hero-journal',read:'hero-read',sport:'hero-sport','two-min':'hero-silence',anchor:'hero-affirm',env:'hero-visual',track:'hero-journal',identity:'hero-silence',stack:'hero-affirm',easy:'hero-visual',reward:'hero-read',review:'hero-journal',importance:'hero-visual',slides:'hero-affirm',pendulum:'hero-silence',intention:'hero-affirm',action:'hero-sport'};
  let html='';
  b.practices.forEach((p,i)=>{const done=todayRec.practices&&todayRec.practices.includes(p.id);const cls=done?'hero-card hero-done':'hero-card '+(cm[p.id]||'hero-silence');html+=`<div class="${cls}"><div class="hero-icon-bg">${p.ico}</div><div class="hero-badge">● ${i+1} из ${b.practices.length}</div>${done?'<div class="hero-done-badge">✓</div>':''}<div class="hero-content"><div class="hero-title">${p.title}</div><div class="hero-sub">${p.sub}</div><button class="hero-play" onclick="event.stopPropagation();openPractice('${p.id}')">${done?'✓ ГОТОВО':'▶ НАЧАТЬ'}</button></div></div>`});
  document.getElementById('heroScroll').innerHTML=html;
  document.getElementById('heroDots').innerHTML=b.practices.map((p,i)=>{const done=todayRec.practices&&todayRec.practices.includes(p.id);return `<div class="hero-dot ${done?'done':''}" data-i="${i}"></div>`}).join('');
  const sc=document.getElementById('heroScroll');if(sc)sc.scrollLeft=0;
}
function renderCalendar() {
  const b=currentBook,bs=getBookState(b.id),today=todayStr(),closed=countClosedDays(b.id);
  let html=`<div class="cal-head"><div class="label">📅 Прогресс пути</div><div class="count">${closed} из ${b.days}</div></div><div class="cal-bar">`;
  for(let d=1;d<=b.days;d++){const date=dateByDay(b.id,d);const rec=bs.days[date];let cls='cal-seg';if(rec&&rec.closed)cls+=' done';else if(rec&&rec.practices&&rec.practices.length>=2)cls+=' partial';else if(date===today)cls+=' today';else if(date>today)cls+=' future';html+=`<div class="${cls}"></div>`}
  html+=`</div><div class="cal-nums"><span>1</span><span>10</span><span>20</span><span>${b.days}</span></div>`;
  document.getElementById('calWrap').innerHTML=html;
}

// ====== СТАТИСТИКА ======
function renderStatsScreen() {
  if(!currentBook)return;
  document.getElementById('statsAvatar').textContent=state.avatar||'👤';
  let totalClosed=0,totalPractices=0,booksStarted=0;
  BOOKS.forEach(bb=>{const bbs=getBookState(bb.id);if(bbs.start)booksStarted++;totalClosed+=countClosedDays(bb.id);Object.values(bbs.days).forEach(rec=>{if(rec.practices)totalPractices+=rec.practices.length})});
  document.getElementById('globalBooks').textContent=booksStarted;
  document.getElementById('globalClosed').textContent=totalClosed;
  document.getElementById('globalPractices').textContent=totalPractices;
  const row=document.getElementById('booksRow');
  row.innerHTML=BOOKS.map(b=>{const closed=countClosedDays(b.id);const pct=Math.round(closed/b.days*100);const isDone=closed>=b.days;const isActive=statsBookId===b.id;const circ=2*Math.PI*24;const offset=circ-(circ*pct/100);return `<div class="book-stat-card ${isDone?'done':''} ${isActive?'active':''}" onclick="selectStatsBook('${b.id}')"><div class="book-stat-ring"><svg viewBox="0 0 60 60"><circle class="bsr-bg" cx="30" cy="30" r="24"/><circle class="bsr-fill" cx="30" cy="30" r="24" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" transform="rotate(-90 30 30)"/></svg><div class="bsr-text">${pct}%</div></div><div class="book-stat-name">${b.emoji} ${b.title}</div><div class="book-stat-info">${closed} из ${b.days}</div></div>`}).join('');
  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;const bs=getBookState(b.id),day=currentDay(b.id),closed=countClosedDays(b.id),streak=calcStreak(b.id),best=calcBest(b.id);
  const date=dateByDay(b.id,day),todayRec=bs.days[date]||{practices:[]},todayCount=(todayRec.practices||[]).length,total=b.practices.length;
  setRing('ringDays',54,closed/b.days);setRing('ringStreak',42,Math.min(streak/b.days,1));setRing('ringRecord',30,Math.min(best/b.days,1));
  const todayEl=document.getElementById('ringsToday'),labelEl=document.getElementById('ringsLabel');
  if(todayEl)animateNumber(todayEl,0,todayCount,'',900);
  if(labelEl){if(todayCount===0)labelEl.textContent='ПРИГОТОВЬТЕСЬ';else if(todayCount<4)labelEl.textContent='В ПРОЦЕССЕ';else if(todayCount<total)labelEl.textContent='ХОРОШО ИДЁШЬ';else labelEl.textContent='ДЕНЬ ЗАКРЫТ ✓'}
  document.getElementById('statStreakBig').textContent=streak;
  document.getElementById('statBestBig').textContent=best;
  document.getElementById('statClosedBig').textContent=closed;
  document.getElementById('statDaysBig').textContent=closed;
  renderAchievements();
}
function selectStatsBook(id){statsBookId=id;renderStatsScreen()}
function setRing(id,radius,pct){const el=document.getElementById(id);if(!el)return;const c=2*Math.PI*radius;el.style.strokeDasharray=c;el.style.strokeDashoffset=c;setTimeout(()=>{el.style.strokeDashoffset=c*(1-Math.min(pct,1))},100)}
function animateNumber(el,from,to,suffix,duration){const start=performance.now();function tick(now){const t=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-t,3);const val=Math.round(from+(to-from)*eased);el.textContent=val+(suffix||'');if(t<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}

// ====== НАГРАДЫ ======
function renderAchievements() {
  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;if(!b)return;
  const closed=countClosedDays(b.id),streak=calcStreak(b.id),bs=getBookState(b.id);
  const journal=Object.keys(bs.journal||{}).filter(k=>{const j=bs.journal[k];return j.q1||j.q2||j.q3}).length;
  let practices=0,perfect=false,perfectStreak=0,curPerfect=0;
  for(let i=1;i<=b.days;i++){const d=dateByDay(b.id,i);const rec=bs.days[d];if(rec&&rec.practices){practices+=rec.practices.length;if(rec.practices.length===b.practices.length){perfect=true;curPerfect++;if(curPerfect>perfectStreak)perfectStreak=curPerfect}else{curPerfect=0}}else{curPerfect=0}}
  const eb={journal,practices,perfect,perfectStreak,otherAch:0};let otherAch=0;
  ACHIEVEMENTS_GROUPS.slice(0,3).forEach(g=>{g.items.forEach(a=>{if(a.check(closed,streak,eb))otherAch++})});
  const extra={journal,practices,perfect,perfectStreak,otherAch};
  const allItems=[];ACHIEVEMENTS_GROUPS.forEach(g=>g.items.forEach(a=>allItems.push(a)));
  let unlockedCount=0;allItems.forEach(a=>{if(a.check(closed,streak,extra))unlockedCount++});
  document.getElementById('achCount').textContent=unlockedCount+' из '+allItems.length;
  document.getElementById('achBar').style.width=Math.round(unlockedCount/allItems.length*100)+'%';
  let html='';
  ACHIEVEMENTS_GROUPS.forEach(g=>{html+=`<div class="ach-group-title">${g.title}</div><div class="ach-grid">`;g.items.forEach(a=>{const unlocked=a.check(closed,streak,extra);const gold=a.gold&&unlocked;const secret=a.secret&&!unlocked;const progress=!unlocked&&a.showProgress&&a.progress?`<div class="ach-progress">${a.progress(closed,streak,extra)}</div>`:'';let name=a.name,desc=a.desc;if(secret){name='???';desc='Секретная награда'}html+=`<div class="ach-card ${unlocked?'unlocked':'locked'} ${gold?'gold':''} ${secret?'secret':''}"><div class="ach-badge">${unlocked?a.ico:(secret?'❓':'🔒')}</div><div class="ach-name">${name}</div><div class="ach-desc">${desc}</div>${progress}</div>`});html+='</div>'});
  document.getElementById('achContainer').innerHTML=html;
}

// ====== УРОВНИ ======
function getLevel(closed){if(closed===0)return{ico:'🌱',name:'Новичок',desc:'Начни первый день'};if(closed<3)return{ico:'🌱',name:'Первый шаг',desc:`${closed} ${plural(closed,'день','дня','дней')} — начало положено`};if(closed<7)return{ico:'🌿',name:'В ритме',desc:`${closed} ${plural(closed,'день','дня','дней')} — ты в потоке`};if(closed<14)return{ico:'🔥',name:'Практик',desc:`${closed} ${plural(closed,'день','дня','дней')} — привычка формируется`};if(closed<21)return{ico:'💎',name:'Опытный',desc:`${closed} ${plural(closed,'день','дня','дней')} — ты почти у цели`};if(closed<30)return{ico:'🏆',name:'Мастер',desc:`${closed} ${plural(closed,'день','дня','дней')} — ты легенда`};return{ico:'👑',name:'Легенда',desc:'Книга пройдена полностью'}}
function plural(n,one,few,many){const m10=n%10,m100=n%100;if(m10===1&&m100!==11)return one;if(m10>=2&&m10<=4&&(m100<10||m100>=20))return few;return many}
function renderLevel(){const closed=countClosedDays(currentBook.id);const lv=getLevel(closed);document.getElementById('levelBadge').textContent=lv.ico;document.getElementById('levelName').textContent=lv.name;document.getElementById('levelDesc').textContent=lv.desc}

// ====== ПОДСЧЁТЫ ======
function countClosedDays(bookId){const bs=getBookState(bookId);return Object.keys(bs.days).filter(d=>bs.days[d].closed).length}
function currentDay(bookId){const bs=getBookState(bookId);if(!bs.start)return 1;const start=new Date(bs.start),now=new Date(),diff=Math.floor((now-start)/86400000)+1;return Math.min(Math.max(diff,1),BOOKS.find(b=>b.id===bookId).days)}
function calcStreak(bookId){const b=BOOKS.find(x=>x.id===bookId),bs=getBookState(bookId);if(!bs.start)return 0;let streak=0;for(let i=1;i<=b.days;i++){const d=dateByDay(bookId,i);if(bs.days[d]&&bs.days[d].closed)streak++;else break}return streak}
function calcBest(bookId){const b=BOOKS.find(x=>x.id===bookId),bs=getBookState(bookId);let best=0,cur=0;for(let i=1;i<=b.days;i++){const d=dateByDay(bookId,i);if(bs.days[d]&&bs.days[d].closed){cur++;if(cur>best)best=cur}else cur=0}return best}
function dateByDay(bookId,day){const bs=getBookState(bookId);if(!bs.start)return null;const start=new Date(bs.start);start.setDate(start.getDate()+day-1);return start.toISOString().split('T')[0]}
function todayStr(){return new Date().toISOString().split('T')[0]}

// ====== ДНЕВНИК ======
function renderJournal() {
  if(!currentBook)return showLibrary();
  const day=currentDay(currentBook.id);
  document.getElementById('journalBookTitle').textContent=currentBook.emoji+' '+currentBook.title;
  document.getElementById('journalAvatar').textContent=state.avatar||'👤';
  const bs=getBookState(currentBook.id),date=dateByDay(currentBook.id,day),today=bs.journal[date]||{};
  document.getElementById('jq1').value=today.q1||'';
  document.getElementById('jq2').value=today.q2||'';
  document.getElementById('jq3').value=today.q3||'';
  const history=Object.keys(bs.journal).sort().reverse().map(d=>{const j=bs.journal[d];if(!j.q1&&!j.q2&&!j.q3)return '';return `<div class="jh-entry"><div class="jh-day">День ${dateToDay(currentBook.id,d)}</div>${j.q1?`<div class="jh-q">🌟 Получилось</div><div class="jh-a">${escapeHtml(j.q1)}</div>`:''}${j.q2?`<div class="jh-q">💭 Сложно</div><div class="jh-a">${escapeHtml(j.q2)}</div>`:''}${j.q3?`<div class="jh-q">🔍 Замечаю</div><div class="jh-a">${escapeHtml(j.q3)}</div>`:''}</div>`}).join('');
  document.getElementById('journalHistory').innerHTML=history||'<div class="jh-entry" style="text-align:center;color:var(--muted);padding:24px">Пока пусто. Сделай первую запись.</div>';
}
function dateToDay(bookId,date){const bs=getBookState(bookId);if(!bs.start)return '?';const start=new Date(bs.start),d=new Date(date);return Math.floor((d-start)/86400000)+1}
function escapeHtml(s){return (s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function saveJournal() {
  if(!currentBook)return;
  const day=currentDay(currentBook.id),date=dateByDay(currentBook.id,day),bs=getBookState(currentBook.id);
  bs.journal[date]={q1:document.getElementById('jq1').value,q2:document.getElementById('jq2').value,q3:document.getElementById('jq3').value};
  saveState();playSuccess();
  const msg=document.getElementById('journalMsg');msg.textContent='✓ Сохранено';setTimeout(()=>msg.textContent='',2000);
  renderJournal();
}

// ====== РИТУАЛ ======
function startRitual(){ritualQueue=currentBook.practices.slice();ritualIndex=0;document.getElementById('ritualScreen').classList.remove('hidden');window.scrollTo(0,0);startMusic();updateAllSoundUI();renderRitualStep()}
function renderRitualStep(){if(ritualIndex>=ritualQueue.length){finishRitual();return}const p=ritualQueue[ritualIndex];document.getElementById('rpStep').textContent=(ritualIndex+1)+' из '+ritualQueue.length;document.getElementById('rpFill').style.width=(ritualIndex/ritualQueue.length*100)+'%';document.getElementById('ritualBody').innerHTML=`<div class="ritual-hero"><div class="ico">${p.ico}</div><h2>${p.title}</h2><div class="sub">${p.sub}</div></div><div class="ritual-timer"><div class="time" id="ritualTime">${formatTime(p.time)}</div><button class="timer-big-btn" id="ritualTimerBtn" onclick="toggleTimer('ritual')">▶ Старт</button><button class="timer-skip" onclick="nextRitual()">Отметить выполненным →</button></div><div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${p.why}</p></div><div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${p.how.map(s=>`<li>${s}</li>`).join('')}</ol></div>`;timerRemaining=p.time;timerState='idle'}
function toggleTimer(ctx){const btn=ctx==='ritual'?document.getElementById('ritualTimerBtn'):document.getElementById('timerBtn');if(timerState==='running'){stopTimer();timerState='paused';if(btn){btn.textContent='▶ Продолжить';btn.className='timer-big-btn paused'}}else if(timerState==='done'){}else{startTimer(ctx);timerState='running';if(btn){btn.textContent='⏸ Пауза';btn.className='timer-big-btn'}}}
function startTimer(ctx){timerInterval=setInterval(()=>{timerRemaining--;const el=document.getElementById(ctx==='ritual'?'ritualTime':'timerDisplay');if(el)el.textContent=formatTime(Math.max(0,timerRemaining));if(timerRemaining<=0){stopTimer();timerState='done';playFanfare();const btn=document.getElementById(ctx==='ritual'?'ritualTimerBtn':'timerBtn');if(btn){btn.textContent='✓ Готово';btn.className='timer-big-btn done'}}},1000)}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null}}
function formatTime(sec){const m=Math.floor(sec/60),s=sec%60;return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')}
function nextRitual(){stopTimer();timerState='idle';const p=ritualQueue[ritualIndex];markPracticeDone(p.id);playCheck();ritualIndex++;renderRitualStep()}
function closeRitual(){stopTimer();timerState='idle';stopMusic();document.getElementById('ritualScreen').classList.add('hidden');showTodayScreen()}
function finishRitual() {
  stopTimer();timerState='idle';
  const day=currentDay(currentBook.id),date=dateByDay(currentBook.id,day),bs=getBookState(currentBook.id);
  if(!bs.days[date])bs.days[date]={practices:[]};
  const count=bs.days[date].practices.length,total=currentBook.practices.length;
  if(count>=4){const wasClosed=bs.days[date].closed;bs.days[date].closed=true;saveState();if(!wasClosed){fireConfetti();playFanfare()}buildModalWithAch(day,count,total,wasClosed)}
  else if(count>=2){saveState();showSimpleModal('💪','Хорошо идёшь!',`${count} из ${total}. Для закрытия дня нужно 4.`)}
  else{saveState();showSimpleModal('🌱','Начало положено',`${count} из ${total}. Маленький шаг — тоже шаг.`)}
}
function buildModalWithAch(day,count,total,wasClosed){const streak=calcStreak(currentBook.id),best=calcBest(currentBook.id);const emoji=count===total?'🔥':'✅';const title=count===total?'Идеальный день!':'День закрыт!';const text=`День ${day}. Практик: ${count} из ${total}.`;let items=[];if(streak>=3)items.push({ico:'🔥',txt:`${streak} дней подряд`,sub:'Серия растёт'});else items.push({ico:'🌱',txt:`День ${day} в копилке`,sub:'Продолжай'});if(streak===best&&streak>1)items.push({ico:'🏆',txt:`Новый рекорд!`,sub:`${best} дней подряд`});if(count===total)items.push({ico:'💎',txt:'Все практики выполнены',sub:'Идеальный день'});const nextAch=getNextAch(currentBook.id,streak);if(nextAch)items.push({ico:'🎯',txt:`До награды "${nextAch.name}"`,sub:nextAch.remaining});showAchModal(emoji,title,text,items)}
function getNextAch(bookId,streak){const closed=countClosedDays(bookId);const targets=[{name:'Три дня',remaining:3-streak,cond:streak<3&&streak>=1},{name:'Ранняя пташка',remaining:5-streak,cond:streak<5&&streak>=3},{name:'Неделя силы',remaining:7-streak,cond:streak<7&&streak>=5},{name:'Половина',remaining:15-closed,cond:closed<15&&closed>=7},{name:'Мастер утра',remaining:30-closed,cond:closed<30&&closed>=15}];for(const t of targets){if(t.cond&&t.remaining>0)return{name:t.name,remaining:`Осталось ${t.remaining}`}}return null}
function markPracticeDone(pid){const day=currentDay(currentBook.id),date=dateByDay(currentBook.id,day),bs=getBookState(currentBook.id);if(!bs.days[date])bs.days[date]={practices:[]};if(!bs.days[date].practices.includes(pid))bs.days[date].practices.push(pid);saveState()}

// ====== ПРАКТИКА ======
function openPractice(id) {
  const p=currentBook.practices.find(x=>x.id===id);if(!p)return;currentPractice=p;
  document.getElementById('psTitle').textContent=p.title;
  document.getElementById('psSub').textContent=p.sub;
  document.getElementById('psContent').innerHTML=`<div class="ps-hero"><div class="ico">${p.ico}</div><div class="time">⏱ ${Math.round(p.time/60)} минут</div></div><div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${p.why}</p></div><div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${p.how.map(s=>`<li>${s}</li>`).join('')}</ol></div>${p.affirm?`<div class="ps-block"><h3>✨ Аффирмации</h3><ul class="affirm-list">${p.affirm.map(a=>`<li onclick="copyAffirm(this)">«${a}»</li>`).join('')}</ul></div>`:''}<div class="ps-block"><h3>⏱ Таймер</h3><div class="timer-box"><div class="timer-display" id="timerDisplay">${formatTime(p.time)}</div><button class="timer-big-btn" id="timerBtn" onclick="toggleTimer('practice')">▶ Старт</button></div></div><div class="ps-block"><h3>🎯 Результат</h3><p>${p.result}</p></div><div class="ps-block"><h3>⚠️ Ошибки</h3><ul class="mistakes">${p.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></div><div class="ps-block"><h3>💬 Совет</h3><div class="advice">${p.advice}</div></div><button class="btn" style="margin-top:20px" onclick="markPracticeFromScreen('${p.id}')">✓ Отметить выполненным</button>`;
  document.getElementById('practiceScreen').classList.remove('hidden');
  document.body.style.overflow='hidden';window.scrollTo(0,0);
  timerRemaining=p.time;timerState='idle';startMusic();updateAllSoundUI();
}
function closePractice(){document.getElementById('practiceScreen').classList.add('hidden');document.body.style.overflow='';stopTimer();timerState='idle';stopMusic();currentPractice=null;showTodayScreen()}
function markPracticeFromScreen(id){markPracticeDone(id);playCheck();closePractice()}
function copyAffirm(el){const text=el.textContent.replace(/[«»]/g,'');if(navigator.clipboard){navigator.clipboard.writeText(text);el.style.background='rgba(124,92,255,.15)';setTimeout(()=>el.style.background='',500)}}

// ====== ПРОФИЛЬ ======
function renderProfile() {
  document.getElementById('profilePhone').textContent='+7 '+user.phone.slice(1,4)+' *** '+user.phone.slice(7,9)+' '+user.phone.slice(9);
  document.getElementById('profileName').value=user.name||'';
  document.getElementById('profileAva').textContent=state.avatar||'👤';
  document.getElementById('emojiRow').innerHTML=EMOJIS.map(e=>`<div class="emoji-pick ${state.avatar===e?'on':''}" onclick="setAvatar('${e}')">${e}</div>`).join('');
  updateAllSoundUI();
}
async function saveName(){
  const n=document.getElementById('profileName').value.trim();if(!n)return;
  user.name=n;saveState();playSuccess();alert('Имя сохранено');
}
function setAvatar(e){state.avatar=e;saveState();playClick();renderProfile()}

// ====== АДМИН ======
async function showAdmin() {
  if(!isAdmin())return;
  hideAll();
  document.getElementById('adminScreen').classList.remove('hidden');
  document.getElementById('adminUserList').innerHTML='<div class="admin-card"><p>Загрузка...</p></div>';
  const { data: profiles, error } = await sb.from('profiles').select('*').order('created_at', {ascending: false});
  const { data: allProgress } = await sb.from('progress').select('*');
  if(error){document.getElementById('adminUserList').innerHTML='<div class="admin-card"><p>Ошибка загрузки</p></div>';return}
  const list = (profiles||[]);
  document.getElementById('adminUsers').textContent = list.length;
  const now = Date.now();
  const active = list.filter(p => p.last_seen && (now - new Date(p.last_seen).getTime()) < 30*86400000).length;
  document.getElementById('adminActive').textContent = active;
  let totalClosed=0, totalJournal=0;
  const userList = list.map(p => {
    const myProg = (allProgress||[]).filter(x => x.user_id === p.id);
    let closed=0, journal=0;
    myProg.forEach(pr => {
      const data = pr.data || {};const days = data.days || {};
      closed += Object.keys(days).filter(k => days[k].closed).length;
      const j = data.journal || {};
      journal += Object.keys(j).filter(k => { const x = j[k]; return x.q1 || x.q2 || x.q3 }).length;
    });
    totalClosed += closed; totalJournal += journal;
    const isMe = p.id === user.id;
    return `<div class="admin-card"><h3>${p.name||'Без имени'} ${p.is_admin?'👑':''} ${isMe?'(ты)':''} ${p.blocked?'🚫':''}</h3>
      <div class="admin-row"><span>Имя</span><span>${p.name||'—'}</span></div>
      <div class="admin-row"><span>Зарегистрирован</span><span>${p.created_at?new Date(p.created_at).toLocaleDateString('ru'):'—'}</span></div>
      <div class="admin-row"><span>Последний визит</span><span>${p.last_seen?new Date(p.last_seen).toLocaleDateString('ru'):'—'}</span></div>
      <div class="admin-row"><span>Закрыто дней</span><span>${closed}</span></div>
      <div class="admin-row"><span>Записей в дневнике</span><span>${journal}</span></div>
    </div>`;
  }).join('');
  document.getElementById('adminAvgStreak').textContent = 0;
  document.getElementById('adminSessions').textContent = list.length;
  document.getElementById('adminJournal').textContent = totalJournal;
  document.getElementById('adminClosed').textContent = totalClosed;
  document.getElementById('adminUserList').innerHTML = userList || '<div class="admin-card"><p>Пока никто не зарегистрирован</p></div>';
}

// ====== КОНФЕТТИ ======
function fireConfetti(){const box=document.getElementById('confetti');box.classList.remove('hidden');const colors=['#7c5cff','#a78bfa','#ff9a56','#ffb800','#3ecf8e'];for(let i=0;i<50;i++){const el=document.createElement('div');el.className='conf-piece';el.style.left=Math.random()*100+'%';el.style.background=colors[Math.floor(Math.random()*colors.length)];el.style.animationDuration=(2+Math.random()*2)+'s';el.style.animationDelay=(Math.random()*0.3)+'s';if(Math.random()>0.5)el.style.borderRadius='50%';box.appendChild(el)}setTimeout(()=>{box.innerHTML='';box.classList.add('hidden')},4500)}

// ====== МОДАЛКИ ======
function showSimpleModal(emoji,title,text){document.getElementById('modalEmoji').textContent=emoji;document.getElementById('modalTitle').textContent=title;document.getElementById('modalText').textContent=text;document.getElementById('modalAchList').innerHTML='';document.getElementById('modal').classList.remove('hidden')}
function showAchModal(emoji,title,text,items){document.getElementById('modalEmoji').textContent=emoji;document.getElementById('modalTitle').textContent=title;document.getElementById('modalText').textContent=text;const list=items.map(i=>`<div class="modal-ach-item"><div class="ico">${i.ico}</div><div class="txt">${i.txt}<small>${i.sub}</small></div></div>`).join('');document.getElementById('modalAchList').innerHTML=list?`<div class="modal-ach-list">${list}</div>`:'';document.getElementById('modal').classList.remove('hidden')}
function closeModal(){document.getElementById('modal').classList.add('hidden');closeRitual()}

document.addEventListener('scroll',(e)=>{if(e.target&&e.target.id==='heroScroll'){const idx=Math.round(e.target.scrollLeft/(e.target.offsetWidth*0.78));document.querySelectorAll('.hero-dot').forEach((d,i)=>d.classList.toggle('on',i===idx))}},true);