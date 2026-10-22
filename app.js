// ═══════════════════════════════════════════════
// ANDGER v2.0 — 16.10.2026
// ═══════════════════════════════════════════════

// ─── SUPABASE ───
const SUPABASE_URL = 'https://cangetbuejkwqgfxpeow.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-gGY5BghNH6nqi4j_wXmpw_xgHjUFax';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const DEV_WHATSAPP = '79124325556';
const DEV_TELEGRAM = 'Gerasimov_And';

// ─── ГЛОБАЛЬНЫЕ ДАННЫЕ ───
let BOOKS=[], currentBook=null, currentPractice=null, ritualQueue=[], ritualIndex=0;
let timerInterval=null, timerRemaining=0, timerState='idle';
let user=null, state={}, onbIndex=0, statsBookId=null;
let musicAudio=null, syncTimeout=null, isAdminFlag=false;
let completeCallback=null, adminAllUsers=[], adminAllBooks=[];
let bookDetailId=null, customRitual=[];
let bookDetailSource='lib';
let currentScreen='today';
let currentDialogUserId=null, currentDialogUser=null;
let feedChannel=null, dialogChannel=null, notificationsChannel=null;
let libFilter='all';
let deferredInstallPrompt=null;
let notifications=[];
let globalQuotes=[];

const DOW=['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
const MOODS=['😔','😐','🙂','😊','🤩'];

const ONB=[
  {ico:'🌅',title:'Это игра по книгам',body:'<p>Ты не читаешь книги. Ты <strong>играешь в них</strong>. Каждое утро — цепочка практик, и день закрывается сам.</p>'},
  {ico:'📚',title:'Библиотека книг',body:'<p>У тебя может быть <strong>несколько книг одновременно</strong>. У каждой — свои практики, свой прогресс, свой дневник.</p>'},
  {ico:'🔥',title:'Собирай огонь',body:'<p>Каждое закрытое утро = <strong>+1 к огню</strong>. Не разрывай его!</p>'},
  {ico:'🏆',title:'Награды и уровни',body:'<p>За прогресс ты получаешь <strong>награды</strong>. Растёшь в уровнях — от Новичка до Легенды.</p>'},
  {ico:'🚀',title:'Готов?',body:'<p>Начни с первой практики. Жми «Начать» — вперёд.</p>'}
];

const EMOJIS=['👤','😎','🧠','🔥','🌅','⚡','🎯','💪','🦁','🌟','🚀','🎨','🧘','🏆','☀️','🍀'];

const FAQ_GROUPS = [
  {
    title: "🌱 Основы",
    items: [
      {q:'Что такое «закрыть день»?', a:'Если ты сделал(а) минимум 60% практик из книги — день считается закрытым. Это +1 к огню.'},
      {q:'Что такое «огонь»?', a:'Это твоя серия — сколько дней подряд ты закрывал(а) дни. Если пропустил день — серия прерывается.'},
      {q:'Что такое «свая практика»?', a:'Можно собрать практики из разных книг в одну практику — то, что нужно именно сегодня.'}
    ]
  },
  {
    title: "📈 Прогресс",
    items: [
      {q:'Как добавить книгу?', a:'В библиотеке — кнопка «Все книги». Свой список можно вести через профиль (скоро).'},
      {q:'Куда сохраняются заметки?', a:'Все заметки из практик сохраняются в разделе «Дневник» -> «Мои инсайты».'}
    ]
  },
  {
    title: "👤 Аккаунт",
    items: [
      {q:'Как восстановить пароль?', a:'Кнопка «Забыли пароль?» на экране входа → напиши разработчику в WhatsApp.'}
    ]
  },
  {
    title: "⚙️ Технические",
    items: [
      {q:'Как установить на телефон?', a:'iPhone: Safari → Поделиться → На экран Домой. Android: Chrome → ⋮ → Установить приложение.'},
      {q:'Почему не приходят уведомления?', a:'Включи их в Настройках → Уведомления. На iPhone нужно установить приложение на домашний экран.'}
    ]
  }
];

const ACHIEVEMENTS_GROUPS=[
  {title:'📅 Прогресс по дням',items:[
    {id:'first',ico:'🌟',name:'Первый шаг',desc:'1 день',check:(c,s,e)=>c>=1},
    {id:'three',ico:'🔥',name:'Три дня',desc:'3 подряд',check:(c,s)=>s>=3},
    {id:'early',ico:'🌅',name:'Ранняя пташка',desc:'5 подряд',check:(c,s)=>s>=5,progress:(c,s)=>s+'/5'},
    {id:'week',ico:'⚡',name:'Неделя силы',desc:'7 подряд',check:(c,s)=>s>=7,progress:(c,s)=>s+'/7'},
    {id:'half',ico:'💎',name:'Половина',desc:'15 дней',check:(c,s)=>c>=15,progress:(c,s)=>c+'/15'},
    {id:'month',ico:'👑',name:'Мастер утра',desc:'30 дней',check:(c,s)=>c>=30,progress:(c,s)=>c+'/30',gold:true}
  ]},
  {title:'🎯 За старание',items:[
    {id:'perfect',ico:'🎯',name:'Идеальный день',desc:'Все практики',check:(c,s,e)=>e.perfect},
    {id:'journal10',ico:'📖',name:'Философ',desc:'10 записей',check:(c,s,e)=>e.journal>=10,progress:(c,s,e)=>e.journal+'/10'},
    {id:'century',ico:'💯',name:'Сотка',desc:'100 практик',check:(c,s,e)=>e.practices>=100,progress:(c,s,e)=>e.practices+'/100'}
  ]},
  {title:'🎁 Секрет',items:[
    {id:'secret',ico:'❓',name:'???',desc:'Секретная награда',check:(c,s,e)=>e.perfectStreak>=3,secret:true}
  ]},
  {title:'🏅 Легенда',items:[
    {id:'master',ico:'🏅',name:'Гуру',desc:'Все награды',check:(c,s,e)=>e.otherAch>=10,progress:(c,s,e)=>e.otherAch+'/10',gold:true}
  ]}
];

// ─── УТИЛИТЫ ───
function todayStr(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function localDate(d){
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function escapeHtml(s){
  return (s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function plural(n,one,few,many){
  const m10=n%10,m100=n%100;
  if(m10===1&&m100!==11)return one;
  if(m10>=2&&m10<=4&&(m100<10||m100>=20))return few;
  return many;
}
function timeAgo(iso){
  const s=Math.floor((Date.now()-new Date(iso).getTime())/1000);
  if(s<60)return 'только что';
  if(s<3600)return Math.floor(s/60)+' мин назад';
  if(s<86400)return Math.floor(s/3600)+' ч назад';
  return Math.floor(s/86400)+' дн назад';
}
function formatTime(sec){
  const m=Math.floor(sec/60),s=sec%60;
  return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}
function updateBottomNav(activePage) {
  const nav = document.getElementById('bottomNav');
  if(nav) nav.classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach(b => {
    if(b.dataset.page === activePage) b.classList.add('on');
    else b.classList.remove('on');
  });
}

// ─── RIPPLE ───
function attachRipple(el,e){
  if(!el||!e)return;
  if(!el.classList.contains('ripple'))el.classList.add('ripple');
  const r=document.createElement('span');
  r.className='ripple-effect';
  const rect=el.getBoundingClientRect();
  const size=Math.max(rect.width,rect.height);
  r.style.width=r.style.height=size+'px';
  r.style.left=(e.clientX-rect.left-size/2)+'px';
  r.style.top=(e.clientY-rect.top-size/2)+'px';
  el.appendChild(r);
  setTimeout(()=>r.remove(),700);
}
document.addEventListener('click',(e)=>{
  const btn=e.target.closest('button, .book-row, .nav-btn, .hero-play, .action-btn-compact, .ach-card, .admin-item, .tab-pill, .mood-emoji, .lib-filter, .settings-row, .toggle-row, .fp-action');
  if(btn){playClick();attachRipple(btn,e);}
},true);

// ─── МУЗЫКА ───
const MUSIC_TRACKS=['meditation.mp3','meditation-2.mp3','meditation-3.mp3','meditation-4.mp3','meditation-5.mp3'];
let currentTrackIdx=0;
function startMusic(){
  if(state.soundOn===false)return;
  if(!musicAudio){
    musicAudio=new Audio();
    musicAudio.volume=0;
    musicAudio.addEventListener('ended',nextTrack);
  }
  // Новый трек при каждом запуске (если музыка не играет)
  if(!musicAudio.src||musicAudio.paused){
    let newIdx;
    do{newIdx=Math.floor(Math.random()*MUSIC_TRACKS.length)}
    while(MUSIC_TRACKS.length>1&&newIdx===currentTrackIdx);
    currentTrackIdx=newIdx;
    musicAudio.src=MUSIC_TRACKS[currentTrackIdx];
    musicAudio.currentTime=0;
  }
  musicAudio.play().then(()=>fadeAudio(musicAudio,musicAudio.volume,0.2,2000)).catch(()=>{});
}
function nextTrack(){
  if(!musicAudio)return;
  currentTrackIdx=(currentTrackIdx+1)%MUSIC_TRACKS.length;
  musicAudio.src=MUSIC_TRACKS[currentTrackIdx];
  musicAudio.volume=0.2;
  musicAudio.play().catch(()=>{});
}
function stopMusic(){
  if(!musicAudio)return;
  fadeAudio(musicAudio,musicAudio.volume,0,300,()=>{try{musicAudio.pause();musicAudio.currentTime=0}catch(e){}});
}
function fadeAudio(audio,from,to,duration,onEnd){
  const start=performance.now();
  function tick(now){
    const t=Math.min((now-start)/duration,1);
    audio.volume=Math.max(0,Math.min(1,from+(to-from)*t));
    if(t<1)requestAnimationFrame(tick);else if(onEnd)onEnd();
  }
  requestAnimationFrame(tick);
}

// ─── ЗВУКИ ───
let audioCtx=null;
function getCtx(){
  if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return null}}
  return audioCtx;
}
function playTone(freq,duration,type,vol){
  if(state.soundOn===false)return;
  const ctx=getCtx();if(!ctx)return;
  try{
    const osc=ctx.createOscillator(),gain=ctx.createGain();
    osc.type=type||'sine';osc.frequency.value=freq;
    gain.gain.setValueAtTime(vol||0.15,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+duration);
    osc.connect(gain);gain.connect(ctx.destination);
    osc.start();osc.stop(ctx.currentTime+duration);
  }catch(e){}
}
function playClick(){playTone(800,0.04,'sine',0.06);if(navigator.vibrate)navigator.vibrate(15)}
function playSuccess(){playTone(600,0.1,'sine',0.1);setTimeout(()=>playTone(900,0.15,'sine',0.1),100)}
function playError(){playTone(200,0.15,'square',0.08);if(navigator.vibrate)navigator.vibrate([50,30,50])}
function playFanfare(){if(state.soundOn===false)return;[523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,0.3,'sine',0.12),i*120));if(navigator.vibrate)navigator.vibrate([100,50,100,50,200])}
function playCheck(){if(state.soundOn===false)return;playTone(500,0.08,'sine',0.1);setTimeout(()=>playTone(750,0.12,'sine',0.1),60);if(navigator.vibrate)navigator.vibrate(80)}

// ─── TOAST ───
function toast(msg,type='success'){
  const d=document.createElement('div');
  d.className='toast '+type;d.textContent=msg;
  document.body.appendChild(d);
  setTimeout(()=>d.remove(),2500);
}
// ─── Универсальное копирование (работает и на HTTP) ───
function copyToClipboard(text){
  // Попытка 1: современный API
  if(navigator.clipboard&&window.isSecureContext){
    return navigator.clipboard.writeText(text).catch(()=>fallbackCopy(text));
  }
  // Попытка 2: старый способ
  fallbackCopy(text);
}
function fallbackCopy(text){
  const ta=document.createElement('textarea');
  ta.value=text;
  ta.style.position='fixed';
  ta.style.opacity='0';
  ta.style.left='-9999px';
  document.body.appendChild(ta);
  ta.select();
  try{
    document.execCommand('copy');
  }catch(e){}
  document.body.removeChild(ta);
}

// ─── SPLASH ───
function setSplashProgress(pct){
  const el=document.getElementById('ldProgress');
  if(el)el.style.width=pct+'%';
}
function hideLoader(){
  const l=document.getElementById('appLoader');
  if(l){l.classList.add('hide');setTimeout(()=>l.remove(),500)}
}
function randomSplashQuote(){
  let allQuotes=globalQuotes.length?globalQuotes:BOOKS.flatMap(b=>b.quotes||[]);
  if(!allQuotes.length)return;
  const q=allQuotes[Math.floor(Math.random()*allQuotes.length)];
  const qEl=document.getElementById('ldQuote');
  const aEl=document.getElementById('ldQuoteAuthor');
  if(qEl)qEl.childNodes[0].nodeValue=`«${q.text}»`;
  if(aEl)aEl.textContent=`— ${q.author||'Андрей Герасимов'}`;
}

// ─── ИНИЦИАЛИЗАЦИЯ ───
window.addEventListener('DOMContentLoaded', async()=>{
  const t0 = performance.now();
  console.log('🚀 ANDGER init starting');

  // ПРЕДОХРАНИТЕЛЬ: через 12 секунд принудительно спрячем заставку, что бы ни случилось
  const safetyTimer = setTimeout(() => {
    console.warn('⚠️ SAFETY: forcing loader hide after 12s');
    try { hideLoader(); } catch(e) { console.error(e); }
    // Если ни один экран не показан — покажем авторизацию
    const anyVisible = document.querySelector('#authScreen:not(.hidden), #todayScreen:not(.hidden), #libScreen:not(.hidden), #onbScreen:not(.hidden), #welcomeScreen:not(.hidden)');
    if (!anyVisible) {
      try { showAuth(); } catch(e) { console.error(e); }
    }
  }, 12000);

  try {
    setSplashProgress(10);
    BOOKS = (typeof BOOK_REGISTRY !== 'undefined' ? BOOK_REGISTRY : []).filter(Boolean);
    console.log('📚 BOOKS loaded:', BOOKS.length);
    try { randomSplashQuote(); } catch(e) { console.warn('Quote error:', e); }
    setSplashProgress(30);

    console.log('🔑 Getting session...');
    const { data: { session } } = await sb.auth.getSession();
    console.log('✅ Session:', session ? 'exists' : 'null');

    if (session) {
      console.log('👤 handleSession starting...');
      await handleSession(session);
      console.log('✅ handleSession completed');
      await waitSplash(t0);
      hideLoader();
      console.log('✅ Splash hidden');
    } else {
      await waitSplash(t0);
      hideLoader();
      showAuth();
      console.log('✅ Auth shown');
    }
  } catch(e) {
    console.error('❌ Init error:', e);
    await waitSplash(t0).catch(()=>{});
    hideLoader();
    try { showAuth(); } catch(err) { console.error(err); }
  } finally {
    clearTimeout(safetyTimer);
    console.log('🏁 Init done in', Math.round(performance.now() - t0), 'ms');
  }
});

async function waitSplash(t0){
  const elapsed = performance.now() - t0;
  const minTime = 5000; // Ждем ровно 5 секунд
  
  if (elapsed < minTime) {
    const remaining = minTime - elapsed;
    // Берем текущий процент заполнения (на котором остановилась загрузка)
    const currentEl = document.getElementById('ldProgress');
    const startPct = currentEl ? (parseFloat(currentEl.style.width) || 10) : 10;
    
    // Плавно доливаем оставшийся процент
    const steps = 40; 
    const stepTime = remaining / steps;
    
    for (let i = 1; i <= steps; i++) {
      const pct = startPct + ((100 - startPct) * (i / steps));
      setSplashProgress(pct);
      await new Promise(r => setTimeout(r, stepTime));
    }
  } else {
    setSplashProgress(100);
  }
}

sb.auth.onAuthStateChange((event)=>{
  if(event==='SIGNED_OUT'){
    user=null;state={};currentBook=null;
    if(feedChannel)sb.removeChannel(feedChannel);
    if(dialogChannel)sb.removeChannel(dialogChannel);
    if(notificationsChannel)sb.removeChannel(notificationsChannel);
    hideLoader();showAuth();
  }
});

async function handleSession(session){
  const email=session.user.email;
  const phone=email.replace('@vnedri.app','');
  user={id:session.user.id,phone,email,name:session.user.user_metadata?.name||'Друг'};
    sb.from('profiles').update({phone}).eq('id',user.id).then(()=>{});
  setSplashProgress(50);

  const{data:profile}=await sb.from('profiles').select('*').eq('id',user.id).single();
  if(profile){
    if(profile.blocked){
      hideLoader();
      alert('🚫 Аккаунт заблокирован.\n\nПричина: '+(profile.blocked_reason||'Нарушение правил'));
      await sb.auth.signOut();return;
    }
    user.name=profile.name||user.name;
    user.lastName=profile.last_name||'';
    user.sub_until = profile.sub_until || null;
    state.avatar=profile.avatar||'👤';
    state.soundOn=profile.sound_on!==false;
    isAdminFlag=profile.is_admin===true;
    state.onboarded=profile.onboarded===true;
    state.lastBook=profile.last_book||null;
    state.bookAccess=profile.book_access||[];
    state.migrated=profile.migrated===true;
    state.slug=profile.public_slug||null;
    state.referralCode=profile.referral_code||null;
    state.theme=profile.theme||'dark';
  }else{
    state.soundOn=true;state.avatar='👤';state.theme='dark';
  }
  setSplashProgress(70);
  await loadAppSettings();
  await loadProgress();
  if(!state.migrated)await migrateLocalData();
  sb.from('profiles').update({last_seen:new Date().toISOString()}).eq('id',user.id).then(()=>{});

    await loadNotifications();
  await loadBooksFromSupabase();
  await loadQuotes();
  setSplashProgress(90);

  applyTheme();
  subscribeNotifications();

  // ─── СЕРДЦЕБИЕНИЕ (ОБНОВЛЕНИЕ СТАТУСА "БЫЛ(А) В СЕТИ") ───
  setInterval(() => {
    if(user && user.id) {
      sb.from('profiles').update({last_seen: new Date().toISOString()}).eq('id',user.id).then(()=>{});
    }
  }, 60000); // 60000 мс = 1 минута

  if(!state.onboarded)showOnboarding();
  else smartHome();
}

async function loadAppSettings(){
  try{
    const{data}=await sb.from('app_settings').select('*').eq('key','book_access_mode').maybeSingle();
    if(data&&data.value){
      bookAccessMode=(typeof data.value==='string')?data.value.replace(/"/g,''):data.value;
    }
  }catch(e){}
}

async function loadQuotes(){
  try{
    const{data}=await sb.from('quotes').select('*').eq('active',true).order('sort_order');
    globalQuotes=data||[];
  }catch(e){globalQuotes=[]}
}

async function loadBooksFromSupabase(){
  try{
    const{data}=await sb.from('books').select('*').eq('published',true);
    if(!data||!data.length)return;
    data.forEach(sbBook=>{
      const idx=BOOKS.findIndex(b=>b.id===sbBook.id);
      const normalized={
        id:sbBook.id,emoji:sbBook.emoji,title:sbBook.title,author:sbBook.author,
        days:sbBook.days,about:sbBook.about,method:sbBook.method||[],
        authorBio:sbBook.author_bio,forWhom:sbBook.for_whom,result:sbBook.result,
        category: sbBook.category || 'Разное', // <--- ДОБАВИЛИ ЭТУ СТРОКУ
        practices:sbBook.practices||[],quotes:sbBook.quotes||[],
        _fromSupabase:true
      };
      if(idx>=0)BOOKS[idx]={...BOOKS[idx],...normalized};
      else BOOKS.push(normalized);
    });
  }catch(e){}
}

async function migrateLocalData(){
  try{
    const legacy=localStorage.getItem('vnedri_state');
    if(legacy){
      const old=JSON.parse(legacy);
      if(old&&old.books){
        Object.keys(old.books).forEach(bookId=>{
          if(!state.books[bookId]||Object.keys(state.books[bookId].days||{}).length===0){
            state.books[bookId]=old.books[bookId];
          }
        });
      }
      if(old.avatar&&state.avatar==='👤')state.avatar=old.avatar;
    }
    state.migrated=true;
    saveState();
    await syncProgress();
    sb.from('profiles').update({migrated:true}).eq('id',user.id).then(()=>{});
  }catch(e){}
}

async function loadProgress(){
  // 1. Сначала берем данные из памяти телефона (LocalStorage) — это мгновенно
  try {
    const localState = localStorage.getItem('andger_current_state');
    if (localState) {
      const parsed = JSON.parse(localState);
      if (parsed.books) state.books = parsed.books;
    }
  } catch(e) {}

  // 2. Пытаемся обновить с сервера, но ждем не больше 3 секунд
  try {
    const fetchPromise = sb.from('progress').select('*').eq('user_id',user.id);
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 3000));
    
    const {data, error} = await Promise.race([fetchPromise, timeoutPromise]);
    
    if (!error && data && data.length > 0) {
      state.books = {};
      data.forEach(row=>{
        state.books[row.book_id] = row.data || {start:null, days:{}, journal:{}};
      });
    }
  } catch(e) {
    console.log('Сервер не ответил за 3 секунды, используем локальные данные');
  }
  
  if(state.soundOn===undefined) state.soundOn=true;
  if(state.avatar===undefined) state.avatar='👤';
  if(!state.books) state.books = {};
}

async function syncProgress(){
  if(!user||!state.books)return;
  const rows=Object.keys(state.books).map(bookId=>({
    user_id:user.id,book_id:bookId,
    data:state.books[bookId],
    updated_at:new Date().toISOString()
  }));
  if(rows.length)await sb.from('progress').upsert(rows,{onConflict:'user_id,book_id'});
  await sb.from('profiles').update({
    name:user.name,avatar:state.avatar,
    sound_on:state.soundOn!==false,
    onboarded:state.onboarded===true,
    last_book:state.lastBook||null,
    last_seen:new Date().toISOString()
  }).eq('id',user.id);
}
function saveState(){
  // 1. Сразу сохраняем в память телефона (LocalStorage) — это работает без интернета
  try {
    localStorage.setItem('andger_current_state', JSON.stringify(state));
  } catch(e) { console.log('LocalStorage error', e); }

  // 2. Отправляем на сервер с задержкой
  if(syncTimeout)clearTimeout(syncTimeout);
  syncTimeout=setTimeout(()=>syncProgress(),1500);
}

// ─── ЭКРАНЫ ───
function hideAll(){
  ['authScreen','onbScreen','welcomeScreen','libScreen','todayScreen',
   'statsScreen','journalScreen','communityScreen','profileScreen',
   'publicProfileScreen','adminScreen','bookDetailScreen','ritualBuilderScreen',
   'ritualScreen','practiceScreen','completeOverlay','settingsScreen',
   'helpScreen','notificationsScreen','dialogScreen','bookEditorScreen'
  ].forEach(id=>{
    const el=document.getElementById(id);if(el)el.classList.add('hidden');
  });
    const bn=document.getElementById('bottomNav');
  if(bn) { bn.classList.add('hidden'); bn.style.display = ''; }
  const fi=document.getElementById('feedInputWrap');if(fi)fi.style.display='none';
  const di=document.getElementById('dialogInputWrap');if(di)di.style.display='none';
  window.scrollTo(0,0);
}
function showAuth(){
  hideAll();
  document.getElementById('authScreen').classList.remove('hidden');
  // Убрали жесткое скрытие, теперь работает через классы
}
function showOnboarding(){
  hideAll();
  onbIndex=0;
  renderOnb();
  document.getElementById('onbScreen').classList.remove('hidden');
  updateSoundUI();
}
function showWelcome(){
  hideAll();
  const b=BOOKS[0];if(!b)return smartHome();
  document.getElementById('welcomeName').textContent='Добро пожаловать, '+(user.name||'Друг')+'!';
  document.getElementById('welcomeBookIco').textContent=b.emoji;
  document.getElementById('welcomeBookTitle').textContent=b.title;
  document.getElementById('welcomeBookAuthor').textContent=b.author+' · '+b.days+' дней';
  document.getElementById('welcomeScreen').classList.remove('hidden');
}
function startFirstBook(){const b=BOOKS[0];if(!b)return;openBookDetail(b.id)}
function skipWelcome(){showLibrary()}

function showLibrary(){
  currentScreen='lib';
  hideAll();
  document.getElementById('libScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('lib');
  renderLibrary();updateSoundUI();
}
function showTodayScreen(){
  currentScreen='today';
  if(!currentBook)return smartHome();
  state.lastBook=currentBook.id;saveState();
  hideAll();
  document.getElementById('todayScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('today');
  renderToday();updateSoundUI();checkInstallBanner();updateNotifBadge();
}
function showStatsScreen(){
  currentScreen='stats';
  if(!currentBook&&BOOKS.length)currentBook=BOOKS[0];
  if(!currentBook)return showLibrary();
  statsBookId=state.lastBook||currentBook.id;
  hideAll();
  document.getElementById('statsScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('stats');
  renderStatsScreen();updateSoundUI();
}
function showJournalScreen(){
  hideAll();
  document.getElementById('journalScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('journal');

  // --- ДОБАВЛЯЕМ ИМЯ ПОЛЬЗОВАТЕЛЯ ---
  const nameEl = document.getElementById('journalBookTitle');
  if (nameEl) nameEl.textContent = user.name || 'Друг';
  // ----------------------------------
  renderJournal();updateSoundUI();
}
async function showCommunityScreen(){
  hideAll();
  document.getElementById('communityScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('community');
  document.getElementById('communityAvatar').textContent=state.avatar||'👤';
  document.getElementById('feedInputWrap').style.display='flex';
  updateSoundUI();
  await loadFeed();
  subscribeFeed();
}
function showRitualBuilderScreen(){
  hideAll();
  document.getElementById('ritualBuilderScreen').classList.remove('hidden');
  renderRitualBuilder();updateSoundUI();
}
function backFromRitualBuilder(){smartHome()}

let profilePrev='today';
function showProfile(){
  try {
    const active=document.querySelector('.nav-btn.on');
    if(active) profilePrev=active.dataset.page||'today';
    
    hideAll();
    document.getElementById('profileScreen').classList.remove('hidden');
    
    renderProfile();
    checkAdminAccess();
    updateSoundUI();
    
    window.scrollTo(0,0); // <--- ДОБАВИЛИ ЭТО: принудительно скроллим наверх
    
    console.log('✅ showProfile done');
    setTimeout(() => window.scrollTo(0, 0), 10);
  } catch(e) {
    console.error('❌ Profile Error:', e);
    alert('Ошибка профиля: ' + e.message);
    smartHome(); 
  }
}
function backFromProfile(){
  if(profilePrev==='lib')showLibrary();
  else if(profilePrev==='stats')showStatsScreen();
  else if(profilePrev==='community')showCommunityScreen();
  else if(profilePrev==='admin')showAdmin();
  else smartHome();
}
function backFromStats(){smartHome()}
function backFromJournal(){smartHome()}
function backFromPublicProfile(){
  // Возвращаем кнопки на место для своего профиля
  document.querySelector('#publicProfileScreen .btn').style.display = '';
  document.querySelector('#publicProfileScreen .btn-ghost').style.display = '';

  if (profileSource === 'chat') {
    document.getElementById('publicProfileScreen').classList.add('hidden');
    document.getElementById('dialogScreen').classList.remove('hidden');
  } else if (profileSource === 'profile') {
    showProfile();
  } else if (profileSource === 'people') {
    showCommunityScreen();
    // Переключаем вкладку на "Сообщество"
    switchCommunityTab('people', document.querySelectorAll('.tab-pill')[2]);
  } else if (profileSource === 'chats') {
    showCommunityScreen();
    // Переключаем вкладку на "Сообщения"
    switchCommunityTab('chats', document.querySelectorAll('.tab-pill')[1]);
  } else {
    showCommunityScreen(); // Если пришли из ленты
  }
}
function showSettings(){
  hideAll();
  document.getElementById('settingsScreen').classList.remove('hidden');
  renderSettings();
}
function backFromSettings(){showProfile()}
function showHelp(){
  hideAll();
  document.getElementById('helpScreen').classList.remove('hidden');
  renderHelp();
}
function backFromHelp(){showProfile()}
async function showNotifications(){
  hideAll();
  document.getElementById('notificationsScreen').classList.remove('hidden');
  
  // Добавляем кнопку "Прочитать всё" в шапку
  const headActions = document.querySelector('#notificationsScreen .head-actions');
  if(headActions) {
    headActions.innerHTML = `<button class="btn-small-inline" style="margin-top:0; font-size:11px; padding:8px 12px;" onclick="markAllNotificationsRead()">Прочитать всё</button>`;
  }

  await loadNotifications();
  renderNotifications();
}
async function markAllNotificationsRead() {
  try {
    await sb.from('notifications').update({read: true}).eq('user_id', user.id).eq('read', false);
    await loadNotifications(); // Обновляем бейджик на колокольчике
    renderNotifications(); // Перерисовываем список
    playSuccess();
    toast('Все уведомления прочитаны');
  } catch(e) {
    toast('Ошибка', 'danger');
  }
}
function backFromNotifications(){smartHome()}
function backFromDialog(){showCommunityScreen()}
function backFromCommunity(){ smartHome(); }

function navTo(page,el){
  if(page==='lib')showLibrary();
  else if(page==='today')smartHome();
  else if(page==='stats')showStatsScreen();
  else if(page==='community')showCommunityScreen();  
  else if(page==='journal')showJournalScreen(); // <--- ДОБАВИЛИ ЭТУ СТРОКУ
}

function smartHome(){
  if(!BOOKS.length)return showLibrary();
  if(state.lastBook){
    const b=BOOKS.find(x=>x.id===state.lastBook);
    if(b){
      const bs=getBookState(b.id);
      if(bs.start&&countClosedDays(b.id)<b.days){currentBook=b;return showTodayScreen()}
    }
  }
  for(const b of BOOKS){
    const bs=getBookState(b.id);
    if(bs.start&&countClosedDays(b.id)<b.days){currentBook=b;return showTodayScreen()}
  }
  for(const b of BOOKS){
    const bs=getBookState(b.id);
    if(!bs.start||countClosedDays(b.id)<b.days){currentBook=b;return showTodayScreen()}
  }
  showLibrary();
}

// ─── STATE ───
function getBookState(id){
  if(!state.books)state.books={};
  if(!state.books[id])state.books[id]={start:null,days:{},journal:{}};
  if(!state.books[id].journal)state.books[id].journal={};
  return state.books[id];
}
let bookAccessMode='everyone'; // 'everyone' или 'individual'

function hasBookAccess(id){
  if(isAdmin()) return true;
  
  if(user && user.sub_until) {
    if(new Date(user.sub_until) > new Date()) return true;
  }
  
  const access = state.bookAccess || [];
  return access.includes(id);
}

// ─── ЗВУК UI ───
function toggleSound(){
  state.soundOn=state.soundOn===false?true:false;
  saveState();updateSoundUI();
  sb.from('profiles').update({sound_on:state.soundOn}).eq('id',user.id).then(()=>{});
  if(state.soundOn){
    playClick();
    const inR=!document.getElementById('ritualScreen').classList.contains('hidden');
    const inP=!document.getElementById('practiceScreen').classList.contains('hidden');
    if(inR||inP)startMusic();
  }else stopMusic();
}
function updateSoundUI(){
  const tog = document.getElementById('soundToggle');
  if(tog) tog.classList.toggle('on', state.soundOn !== false);
  
  // Меняем иконку на всех экранах
  const soundBtns = document.querySelectorAll('.sound-btn');
  soundBtns.forEach(btn => {
    btn.textContent = state.soundOn === false ? '🔇' : '🔊';
  });
}

// ─── ОНБОРДИНГ ───
function renderOnb(){
  const s=ONB[onbIndex];
  document.getElementById('onbContent').innerHTML=
    `<div class="onb-ico">${s.ico}</div><h2>${s.title}</h2>${s.body}`;
  document.getElementById('onbDots').innerHTML=
    ONB.map((_,i)=>`<div class="onb-dot ${i===onbIndex?'on':''}"></div>`).join('');
  document.getElementById('onbBack').classList.toggle('hidden',onbIndex===0);
  document.getElementById('onbNext').textContent=
    onbIndex===ONB.length-1?'Начать путь 🚀':'Далее';
}
function onbNext(){
  if(onbIndex<ONB.length-1){onbIndex++;renderOnb()}
  else{state.onboarded=true;saveState();showWelcome()}
}
function onbPrev(){if(onbIndex>0){onbIndex--;renderOnb()}}

// ─── ВХОД ───
let authMode='login';
function switchTab(mode){
  authMode=mode;
  document.getElementById('tabLogin').classList.toggle('on',mode==='login');
  document.getElementById('tabReg').classList.toggle('on',mode==='reg');
  document.getElementById('authBtn').textContent=mode==='login'?'Войти':'Зарегистрироваться';
  document.getElementById('authErr').textContent='';
  
  const isReg = mode === 'reg';
  document.getElementById('nameField').style.display = isReg ? 'block' : 'none';
}
document.addEventListener('input',(e)=>{
  if(e.target.id==='phone')formatPhoneInput(e.target);
  if(e.target.classList.contains('error'))e.target.classList.remove('error');
});
function formatPhoneInput(el){
  let v=el.value.replace(/\D/g,'');
  if(v.startsWith('8'))v='7'+v.slice(1);
  if(!v.startsWith('7'))v='7'+v;
  v=v.slice(0,11);
  let out='+7';
  if(v.length>1)out+=' '+v.slice(1,4);
  if(v.length>=4)out+=' '+v.slice(4,7);
  if(v.length>=7)out+='-'+v.slice(7,9);
  if(v.length>=9)out+='-'+v.slice(9,11);
  el.value=out;
}
function normalizePhone(v){return v.replace(/\D/g,'')}

async function doAuth(){
  const phoneRaw=document.getElementById('phone').value;
  const pass=document.getElementById('password').value;
  const nameInp=document.getElementById('name').value.trim();
  const err=document.getElementById('authErr');
  const btn=document.getElementById('authBtn');
  const phoneEl=document.getElementById('phone');
  const passEl=document.getElementById('password');
  const phone=normalizePhone(phoneRaw);
  const email=phone+'@vnedri.app';
  err.textContent='';
  if(phone.length!==11){showError('Введите номер полностью',phoneEl);return}
  if(pass.length<6){showError('Пароль минимум 6 символов',passEl);return}
  if(authMode==='reg'&&!nameInp){showError('Введите имя',document.getElementById('name'));return}
  btn.disabled=true;btn.textContent='Загрузка...';
  try{
    if(authMode==='reg'){
        const nameParts = nameInp.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' '); // Все, что после первого пробела
        const{data,error}=await sb.auth.signUp({email,password:pass,options:{data:{name:firstName, last_name:lastName}}});
      if(error){
        showError(error.message.includes('already')?'Номер уже зарегистрирован':'Ошибка регистрации');
        btn.disabled=false;btn.textContent='Зарегистрироваться';return;
      }
      if(data.session)await handleSession(data.session);
      else{
        const{data:d2,error:e2}=await sb.auth.signInWithPassword({email,password:pass});
        if(e2){showError('Войдите с паролем');authMode='login';switchTab('login')}
        else await handleSession(d2.session);
      }
      playSuccess();
        }else{
      // Добавляем тайм-аут на 30 секунд для входа (чтобы сервер успел проснуться)
      const loginPromise = sb.auth.signInWithPassword({email,password:pass});
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 30000));
      
      const {data, error} = await Promise.race([loginPromise, timeoutPromise]);
      
      if(error){
        showError(error.message.includes('Invalid')?'Неверный номер или пароль':'Ошибка входа',phoneEl,passEl);
        btn.disabled=false;btn.textContent='Войти';return;
      }
      playSuccess();await handleSession(data.session);
    }
  }catch(e){
  console.error('Ошибка входа:', e);
  if (e.message === 'Timeout') {
    showError('Сервер не отвечает. Проверьте интернет.');
  } else if (e.message && e.message.includes('not defined')) {
    showError('Ошибка в коде приложения. Загляните в консоль.');
  } else {
    showError('Ошибка соединения или сбой приложения.');
  }
}
  btn.disabled=false;
  btn.textContent=authMode==='login'?'Войти':'Зарегистрироваться';
}
function showError(msg,...els){
  const err=document.getElementById('authErr');
  err.textContent=msg;playError();
  els.forEach(el=>{
    if(el){el.classList.add('error');setTimeout(()=>el.classList.remove('error'),600)}
  });
  clearTimeout(window._errTimeout);
  window._errTimeout=setTimeout(()=>{err.textContent=''},4000);
}

function showForgotPassword(){document.getElementById('forgotModal').classList.remove('hidden')}
function showContactMenu(){document.getElementById('contactModal').classList.remove('hidden')}
function contactWhatsApp(){
  window.open('https://wa.me/'+DEV_WHATSAPP+'?text='+encodeURIComponent('Привет! Хочу связаться по поводу ANDGER'),'_blank');
}
function contactTelegram(){
  window.open('https://t.me/'+DEV_TELEGRAM,'_blank');
}
async function contactInApp(){
  document.getElementById('contactModal').classList.add('hidden');
  try{
    const{data}=await sb.from('profiles').select('id,name,avatar').eq('is_admin',true).limit(1).single();
    if(data){
      openDialog(data.id, {name: data.name || 'Разработчик', avatar: data.avatar || '👤'});
    }else{
      toast('Разработчик не найден','danger');
    }
  }catch(e){
    toast('Ошибка соединения','danger');
  }
}
function contactDev(){showContactMenu()}

async function logout(){
  if(!confirm('Выйти? Прогресс сохранится.'))return;
  await syncProgress();
  await sb.auth.signOut();
}
function isAdmin(){return isAdminFlag}
function checkAdminAccess(){
  const b=document.getElementById('adminBtnProfile');
  if(b)b.classList.toggle('hidden',!isAdmin());  
}
function shareApp(){
  const url='https://andger.ru/';
  if(navigator.share) {
    navigator.share({title:'ANDGER',text:'Практикум по книгам',url});
  } else {
    copyToClipboard(url); // Используем нашу универсальную функцию
    toast('Ссылка скопирована');
  }
}

// ─── УСТАНОВКА ───
function isStandalone(){
  return window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
}
function detectOS(){
  const ua=navigator.userAgent;
  if(/iPad|iPhone|iPod/.test(ua))return 'ios';
  if(/Android/i.test(ua))return 'android';
  return 'desktop';
}
function checkInstallBanner(){
  if(isStandalone())return;
  const dismissed=localStorage.getItem('install_dismissed');
  if(dismissed)return;
  const os=detectOS();
  if(os==='desktop')return;
  const el=document.getElementById('installBanner');
  if(!el)return;
  el.innerHTML=`<div class="install-banner"><div class="ib-ico">📱</div><div class="ib-body"><h4>Установи ANDGER</h4><p>${os==='ios'?'Safari → Поделиться → На экран Домой':'Chrome → ⋮ → Установить приложение'}</p></div><button class="ib-close" onclick="dismissInstall()">✕</button></div>`;
}
function dismissInstall(){
  localStorage.setItem('install_dismissed','1');
  const el=document.getElementById('installBanner');
  if(el)el.innerHTML='';
}
function showInstallInstructions(){
  const os=detectOS();
  let html='';
  if(os==='ios'){
    html='<b>iPhone / iPad:</b><br>1. Открой ANDGER в <b>Safari</b><br>2. Нажми <b>«Поделиться»</b> (квадрат со стрелкой)<br>3. Прокрути → <b>«На экран Домой»</b><br>4. Нажми <b>«Добавить»</b>';
  }else if(os==='android'){
    html='<b>Android:</b><br>1. Открой ANDGER в <b>Chrome</b><br>2. Нажми <b>⋮</b> (три точки справа вверху)<br>3. Выбери <b>«Установить приложение»</b><br>4. Нажми <b>«Установить»</b>';
  }else{
    html='Открой ANDGER на телефоне:<br>• <b>iPhone</b> → Safari → Поделиться → На экран Домой<br>• <b>Android</b> → Chrome → ⋮ → Установить приложение';
  }
  document.getElementById('installInstructions').innerHTML=html;
  document.getElementById('installModal').classList.remove('hidden');
}

// beforeinstallprompt — Android
window.addEventListener('beforeinstallprompt',(e)=>{
  e.preventDefault();
  deferredInstallPrompt=e;
});
async function triggerInstall(){
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt=null;
  }else{
    showInstallInstructions();
  }
}

// ─── ГЛАВНАЯ ───
function renderToday(){
  if(!currentBook)return;
  const b=currentBook,bs=getBookState(b.id);
  const day=currentDay(b.id),closed=countClosedDays(b.id);
  const date=dateByDay(b.id,day);
  const todayRec=bs.days[date]||{practices:[]};
  const todayCount=(todayRec.practices||[]).length;
  const total=b.practices.length;

  document.getElementById('todayName').textContent=user.name||'Друг';
  
// Считаем глобальный опыт для статуса на главной
  let globalXP = 0;
  BOOKS.forEach(bb => {
    const bbs = getBookState(bb.id);
    Object.values(bbs.days).forEach(rec => {
      if(rec.practices) globalXP += rec.practices.length * 10;
      if(rec.closed) globalXP += 50;
    });
  });
  let globalLvlName = 'Новичок', globalLvlIco = '🌱';
  if (globalXP >= 2000) { globalLvlName = 'Легенда'; globalLvlIco = '👑'; }
  else if (globalXP >= 1000) { globalLvlName = 'Мастер'; globalLvlIco = '🏆'; }
  else if (globalXP >= 600) { globalLvlName = 'Опытный'; globalLvlIco = '💎'; }
  else if (globalXP >= 300) { globalLvlName = 'Практик'; globalLvlIco = '🔥'; }
  else if (globalXP >= 100) { globalLvlName = 'Ученик'; globalLvlIco = '🌿'; }
  
  document.getElementById('statusBadge').textContent = `${globalLvlIco} ${globalLvlName}`;

  // Крупный счётчик дня (1 кольцо)
  const pct=Math.round(todayCount/total*100);
  document.getElementById('todayCount').textContent=`${todayCount} из ${total}`;
  
  const tccFill=document.getElementById('tccFill');
  if(tccFill){
    const circ=2*Math.PI*26;
    tccFill.style.strokeDashoffset=circ-(circ*pct/100);
  }
  
  const tccBar=document.getElementById('tccBarFill');
  if(tccBar)tccBar.style.width=pct+'%';
  
    // ─── СВАЙП-КАРУСЕЛЬ КНИГ ───
  const activeBooks = BOOKS.filter(bb => {
    const bbs = getBookState(bb.id);
    const c = countClosedDays(bb.id);
    return bbs.start !== null && c < bb.days; // Книги в процессе
  });
  
  // Если текущая книга почему-то не попала в список, добавляем её принудительно
  if (!activeBooks.find(x => x.id === b.id)) activeBooks.push(b);

  let booksHtml = '';
  let dotsHtml = '';

  activeBooks.forEach((ab, index) => {
    const ab_bs = getBookState(ab.id);
    const ab_closed = countClosedDays(ab.id);
    const ab_day = currentDay(ab.id);
    const ab_date = dateByDay(ab.id, ab_day);
    const ab_todayRec = ab_bs.days[ab_date] || {practices:[]};
    const ab_todayCount = (ab_todayRec.practices || []).length;
    const ab_total = ab.practices.length;
    const isActive = ab.id === b.id;

    booksHtml += `
      <div class="active-book-card" onclick="switchActiveBook('${ab.id}')" style="${isActive ? '' : 'opacity:0.7;'}">
        <div class="abc-head">
          <div class="abc-emoji">${ab.emoji}</div>
           <div class="abc-info">
            <div class="abc-title">${ab.title}</div>
            <div style="font-size:12px; color:var(--accent-2); font-weight:700; margin-bottom:4px;">${ab.author || 'Неизвестный автор'}</div>
            <div class="abc-day">День ${ab_day} из ${ab.days}</div>
          </div>
        </div>
        <div class="abc-bar"><div class="abc-fill" style="width:${Math.round(ab_closed/ab.days*100)}%"></div></div>
        <div class="abc-meta">
          <span>Сегодня: <b>${ab_todayCount} из ${ab_total}</b></span>
          <span>Прогресс: <b>${Math.round(ab_closed/ab.days*100)}%</b></span>
        </div>
      </div>
    `;

    dotsHtml += `<div class="b-dot ${isActive ? 'on' : ''}"></div>`;
  });

  document.getElementById('activeBookWrap').innerHTML = booksHtml;
  document.getElementById('booksDots').innerHTML = activeBooks.length > 1 ? dotsHtml : '';
    // Авто-скролл к активной книге
  setTimeout(() => {
    const slider = document.getElementById('activeBookWrap');
    const activeIndex = activeBooks.findIndex(x => x.id === b.id);
    if (slider && activeIndex >= 0 && slider.children[activeIndex]) {
      slider.scrollTo({ left: slider.children[activeIndex].offsetLeft - 16, behavior: 'auto' });
    }
  }, 50);
    // Авто-скролл к активной книге
  setTimeout(() => {
    const slider = document.getElementById('activeBookWrap');
    const activeIndex = activeBooks.findIndex(x => x.id === b.id);
    if (slider && activeIndex >= 0 && slider.children[activeIndex]) {
      slider.scrollTo({ left: slider.children[activeIndex].offsetLeft - 16, behavior: 'auto' });
    }
  }, 50);
  
  const btn = document.querySelector('.hero-action-btn');
  if (todayRec.closed) {
    document.getElementById('ritualSub').textContent = 'Возвращайся завтра';
    btn.querySelector('.hab-title').textContent = 'ДЕНЬ ЗАКРЫТ';
    btn.querySelector('.hab-ico').textContent = '🎉';
    btn.style.background = 'linear-gradient(135deg, var(--success), #2eb87b)';
  } else {
    document.getElementById('ritualSub').textContent = total + ' практик';
    btn.querySelector('.hab-title').textContent = 'Приступить к практике';
    btn.querySelector('.hab-ico').textContent = '☀️';
    btn.style.background = '';
  }

  // Вызовы отрисовки
  renderHeroCards();
  renderWeekCalendar(); // Новый календарь
  renderHint();
  updateSoundUI();
}

function renderHint(){
  const b=currentBook,day=currentDay(b.id);
  let html='';
  let q=null;
  if(globalQuotes.length){
    q=globalQuotes[(day-1)%globalQuotes.length];
  }else if(b&&b.quotes&&b.quotes.length){
    q=b.quotes[(day-1)%b.quotes.length];
  }
  if(q){
    html+=`<div class="hint-card"><div class="hint-label">✨ Цитата дня</div><div class="hint-text">«${q.text}»</div><div class="hint-author">— ${q.author||'Андрей Герасимов'}</div></div>`;
  }
  document.getElementById('hintCard').innerHTML=html;
}

function renderHeroCards(){
  const b=currentBook,bs=getBookState(b.id);
  const day=currentDay(b.id),date=dateByDay(b.id,day);
  const todayRec=bs.days[date]||{practices:[]};
  const cm={silence:'hero-silence',affirm:'hero-affirm',visual:'hero-visual',
    journal:'hero-journal',read:'hero-read',sport:'hero-sport',
    'two-min':'hero-silence',anchor:'hero-affirm',env:'hero-visual',
    track:'hero-journal',identity:'hero-silence',stack:'hero-affirm',
    easy:'hero-visual',reward:'hero-read',review:'hero-journal',
    importance:'hero-visual',slides:'hero-affirm',pendulum:'hero-silence',
    intention:'hero-affirm',action:'hero-sport'};
  let html='';
  b.practices.forEach((p,i)=>{
    const done=todayRec.practices&&todayRec.practices.includes(p.id);
    const cls=done?'hero-card hero-done':'hero-card '+(cm[p.id]||'hero-silence');
    html+=`<div class="${cls}"><div class="hero-icon-bg">${p.ico}</div><div class="hero-badge">№${i+1} из ${b.practices.length}</div>${done?'<div class="hero-done-badge">✓</div>':''}<div class="hero-content"><div class="hero-title">${p.title}</div><div class="hero-sub">${p.sub}</div><button class="hero-play" onclick="event.stopPropagation();openPractice('${p.id}')">${done?'✓ ГОТОВО':'▶ НАЧАТЬ'}</button></div></div>`;
  });
  document.getElementById('heroScroll').innerHTML=html;
    document.getElementById('heroDots').innerHTML=
    b.practices.map((p,i)=>{
      return `<div class="hero-dot" data-i="${i}"></div>`;
    }).join('');
  const sc=document.getElementById('heroScroll');
  if(sc)sc.scrollLeft=0;
}

function renderCalendar(containerId,bookId){
  const b=BOOKS.find(x=>x.id===bookId);if(!b)return;
  const bs=getBookState(bookId),today=todayStr(),closed=countClosedDays(bookId);
  let html=`<div class="cal-head"><div class="label">📅 Прогресс пути</div><div class="count">${closed} из ${b.days}</div></div><div class="cal-bar">`;
  for(let d=1;d<=b.days;d++){
    const date=dateByDay(bookId,d);
    const rec=bs.days[date];
    let cls='cal-seg';
    if(rec&&rec.closed)cls+=' done';
    else if(rec&&rec.practices&&rec.practices.length>=2)cls+=' partial';
    else if(date===today)cls+=' today';
    else if(date>today)cls+=' future';
    html+=`<div class="${cls}"></div>`;
  }
  html+=`</div><div class="cal-nums"><span>1</span><span>10</span><span>20</span><span>${b.days}</span></div>`;
  const el=document.getElementById(containerId);
  if(el)el.innerHTML=html;
}

// ─── БИБЛИОТЕКА ───
function setLibFilter(f,el){
  libFilter=f;
  document.querySelectorAll('.lib-filter').forEach(f=>f.classList.remove('on'));
  if(el)el.classList.add('on');
  renderLibrary();
}
function renderLibrary(){
  document.getElementById('libName').textContent=user.name||'Друг';
  document.getElementById('libAvatar').textContent=state.avatar||'👤';
  
  const q=(document.getElementById('libSearch')?.value||'').toLowerCase().trim();
  let list=BOOKS.filter(b=>{
    if(!q)return true;
    return b.title.toLowerCase().includes(q)||(b.author||'').toLowerCase().includes(q);
  });

  if(libFilter==='active'){
    list=list.filter(b=>!!getBookState(b.id).start && countClosedDays(b.id) < b.days);
  }else if(libFilter==='done'){
    list=list.filter(b=>countClosedDays(b.id)>=b.days);
  }else if(libFilter==='new'){
    // Строгая проверка: нет старта И нет закрытых дней
    list=list.filter(b=>!getBookState(b.id).start && countClosedDays(b.id) === 0);
  }

  if(!list.length){
    document.getElementById('bookList').innerHTML =
      '<div style="color:var(--muted);text-align:center;padding:40px 20px">Ничего не найдено</div>';
    return;
  }

  // Группируем по категориям
  const grouped = {};
  list.forEach(b => {
    const cat = b.category || 'Разное';
    if(!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(b);
  });

  let html = '';
  Object.keys(grouped).forEach((catName, index) => {
    // Открываем первую категорию по умолчанию
    const isOpen = index === 0; 
    
    html += `
      <div class="lib-category-wrap">
        <div class="lib-category-header ${isOpen ? 'open' : ''}" onclick="toggleLibCategory(this)">
          <div style="font-weight:800; font-size:15px;">📁 ${catName} <span style="font-size:11px; opacity:0.6; margin-left:6px;">(${grouped[catName].length})</span></div>
          <div class="arrow-icon" style="font-size:18px;">›</div>
        </div>
        <div class="lib-category-body ${isOpen ? 'open' : ''}" style="padding-top: 10px;">
    `;

    grouped[catName].forEach(b => {
      const bs=getBookState(b.id);
      const closed=countClosedDays(b.id);
      const pct=Math.round(closed/b.days*100);
      const started=!!bs.start; 
      const isDone=closed>=b.days;
      const isActive = state.lastBook === b.id && started && !isDone; 
      const hasAccess=hasBookAccess(b.id);
      
      html += `<div class="book-row ${isDone?'done':''} ${isActive?'active':''} ${!hasAccess?'locked':''}" onclick="openBookDetail('${b.id}')">
        ${!hasAccess?'<div class="br-lock">🔒</div>':''}
        <div class="br-emoji">${b.emoji}</div>
        <div class="br-info">
          <div class="br-title">${b.title} ${isDone?'👑':''}</div>
          <div class="br-author">${b.author} · ${b.days} дней</div>
          ${started?`<div class="br-bar"><div class="br-fill" style="width:${pct}%"></div></div>`:''}
        </div>
        <div class="br-pct">${started?pct+'%':'—'}</div>
      </div>`;
    });
    html += `</div></div>`;
  });

  document.getElementById('bookList').innerHTML = html;
}

function toggleLibCategory(el) {
  el.classList.toggle('open');
  const body = el.nextElementSibling;
  if(body) body.classList.toggle('open');
}

// ─── КАРТОЧКА КНИГИ ───
function openBookDetail(id){
  const b=BOOKS.find(x=>x.id===id);if(!b)return;
  bookDetailSource=currentScreen||'lib';
  if(!hasBookAccess(id)){
    alert('🔒 Эта книга пока недоступна.\n\nНапиши разработчику, чтобы открыть доступ.');
    return;
  }
  bookDetailId=id;
  document.getElementById('bdEmoji').textContent=b.emoji;
  document.getElementById('bdTitle').textContent=b.title;
  document.getElementById('bdAuthor').textContent=(b.author||'—')+' · '+b.days+' дней';
  document.getElementById('bdAbout').textContent=b.about||'Описание скоро появится.';

  const totalTime=Math.round(b.practices.reduce((s,p)=>s+p.time,0)/60);
  document.getElementById('bdTags').innerHTML=
    `<span class="bd-tag">📋 ${b.practices.length} практик</span><span class="bd-tag">⏱ ~${totalTime} мин/день</span>`;

  renderBookStars(id);

  if(b.method&&b.method.length){
    document.getElementById('bdMethod').innerHTML=b.method.map(m=>`<div class="bm-item">${m}</div>`).join('');
    document.getElementById('bdMethodSection').style.display='';
  }else document.getElementById('bdMethodSection').style.display='none';

  if(b.authorBio){
    document.getElementById('bdAuthorBio').textContent=b.authorBio;
    document.getElementById('bdAuthorSection').style.display='';
  }else document.getElementById('bdAuthorSection').style.display='none';

  if(b.forWhom){
    document.getElementById('bdForWhom').textContent=b.forWhom;
    document.getElementById('bdForWhomSection').style.display='';
  }else document.getElementById('bdForWhomSection').style.display='none';

  if(b.result){
    document.getElementById('bdResult').textContent=b.result;
    document.getElementById('bdResultSection').style.display='';
  }else document.getElementById('bdResultSection').style.display='none';

  const bs=getBookState(b.id);
  const closed=countClosedDays(b.id);
  const btn=document.getElementById('bdStartBtn');
  if(bs.start&&closed<b.days)btn.textContent='▶ Продолжить практику';
  else if(closed>=b.days)btn.textContent='🔄 Пройти заново';
  else btn.textContent='🚀 Начать практику';

  hideAll();
  document.getElementById('bookDetailScreen').classList.remove('hidden');
  updateSoundUI();
}
function backFromBookDetail(){
  if(bookDetailSource==='today')smartHome();
  else if(bookDetailSource==='stats')showStatsScreen();
  else showLibrary();
}
function startBookFromDetail(){
  const b=BOOKS.find(x=>x.id===bookDetailId);if(!b)return;
  currentBook=b;
  const bs=getBookState(b.id);
  if(!bs.start){
    bs.start=todayStr();saveState();
  }else{
    const closed=countClosedDays(b.id);
    if(closed>=b.days){
      if(confirm('Начать книгу заново? Прогресс сбросится.')){
        bs.days={};bs.journal={};bs.start=todayStr();saveState();
      }else return;
    }
  }
  state.lastBook=b.id;saveState();
  showTodayScreen();
}

async function renderBookStars(bookId){
  const el=document.getElementById('bdStars');
  let myStars=0,avg=0,count=0;
  try{
    const{data}=await sb.from('reviews').select('stars').eq('book_id',bookId);
    if(data&&data.length){
      avg=data.reduce((s,r)=>s+r.stars,0)/data.length;
      count=data.length;
    }
    const{data:mine}=await sb.from('reviews').select('stars').eq('book_id',bookId).eq('user_id',user.id).maybeSingle();
    if(mine)myStars=mine.stars;
  }catch(e){}
  el.innerHTML=Array.from({length:5},(_,i)=>
    `<span class="bd-star ${i<myStars?'on':''}" onclick="rateBook('${bookId}',${i+1})">★</span>`
  ).join('');
  if(count)el.innerHTML+=`<div style="font-size:11px;color:var(--muted);width:100%;margin-top:4px">Средняя: ${avg.toFixed(1)} · ${count} ${plural(count,'отзыв','отзыва','отзывов')}</div>`;
}
async function rateBook(bookId,stars){
  try{
    await sb.from('reviews').upsert({user_id:user.id,book_id:bookId,stars,text:''},{onConflict:'user_id,book_id'});
    playCheck();renderBookStars(bookId);
  }catch(e){toast('Ошибка','danger')}
}
// ─── СТАТИСТИКА ───
function renderStatsScreen(){
  if(!currentBook)return;
  document.getElementById('statsAvatar').textContent=state.avatar||'👤';
    // ─── СЧЕТ ОПЫТА И УРОВНЯ ───
  let totalXP = 0;
  BOOKS.forEach(bb => {
    const bbs = getBookState(bb.id);
    Object.values(bbs.days).forEach(rec => {
      if(rec.practices) {
        totalXP += rec.practices.length * 10; // +10 XP за каждую практику
      }
      if(rec.closed) {
        totalXP += 50; // +50 XP за закрытый день
      }
    });
  });

  // Определяем уровень
  let lvl = 1, lvlName = 'Новичок', lvlIco = '🌱', nextLvlXP = 100;
  if (totalXP >= 2000) { lvl = 6; lvlName = 'Легенда'; lvlIco = '👑'; nextLvlXP = 2000; }
  else if (totalXP >= 1000) { lvl = 5; lvlName = 'Мастер'; lvlIco = '🏆'; nextLvlXP = 2000; }
  else if (totalXP >= 600) { lvl = 4; lvlName = 'Опытный'; lvlIco = '💎'; nextLvlXP = 1000; }
  else if (totalXP >= 300) { lvl = 3; lvlName = 'Практик'; lvlIco = '🔥'; nextLvlXP = 600; }
  else if (totalXP >= 100) { lvl = 2; lvlName = 'Ученик'; lvlIco = '🌿'; nextLvlXP = 300; }

  // Считаем прогресс до следующего уровня
  let prevLvlXP = 0;
  if (lvl === 2) prevLvlXP = 100;
  if (lvl === 3) prevLvlXP = 300;
  if (lvl === 4) prevLvlXP = 600;
  if (lvl === 5) prevLvlXP = 1000;
  if (lvl === 6) prevLvlXP = 2000;

  const xpInCurrentLvl = totalXP - prevLvlXP;
  const xpNeededForNext = nextLvlXP - prevLvlXP;
  const xpPct = Math.min(100, Math.round((xpInCurrentLvl / xpNeededForNext) * 100)) || 100;

  // Обновляем HTML карточки
  document.getElementById('lcLevel').textContent = lvl;
  document.getElementById('lcTitle').textContent = lvlName;
  document.getElementById('lcIco').textContent = lvlIco;
  
  if (lvl === 6) {
    document.getElementById('lcXpText').textContent = totalXP + ' XP (Максимум)';
    document.getElementById('lcBarFill').style.width = '100%';
  } else {
    document.getElementById('lcXpText').textContent = xpInCurrentLvl + ' / ' + xpNeededForNext + ' XP';
    setTimeout(() => {
      document.getElementById('lcBarFill').style.width = xpPct + '%';
    }, 100);
  }
  // ─── КОНЕЦ СЧЕТА ОПЫТА ───
  let totalClosed=0,totalPractices=0,booksStarted=0,totalSeconds=0;
  
  BOOKS.forEach(bb=>{
    const bbs=getBookState(bb.id);
    if(bbs.start)booksStarted++;
    totalClosed+=countClosedDays(bb.id);
    
    // Считаем общее количество практик и время
    Object.values(bbs.days).forEach(rec=>{
      if(rec.practices){
        totalPractices+=rec.practices.length;
        // Ищем время каждой выполненной практики в книге
        rec.practices.forEach(pid => {
          const p = bb.practices.find(x => x.id === pid);
          if(p && p.time) totalSeconds += p.time;
        });
      }
    });
  });
  
  const totalMinutes = Math.round(totalSeconds / 60);

  document.getElementById('globalBooks').textContent=booksStarted;
  document.getElementById('globalClosed').textContent=totalClosed;
  document.getElementById('globalPractices').textContent=totalPractices;
  document.getElementById('globalMinutes').textContent=totalMinutes;

    // Отрисовка карточек книг
  document.getElementById('statsBooksSwipe').innerHTML=BOOKS.map(b=>{
    const closed=countClosedDays(b.id);
    const pct=Math.round(closed/b.days*100);
    const isDone=closed>=b.days;
    const isActive=statsBookId===b.id;
    const circ=2*Math.PI*22;
    const offset=circ-(circ*pct/100);
    
    const dayNum = currentDay(b.id);
    const dayText = b.start ? `День ${dayNum} из ${b.days}` : `${b.days} дней`;

    return `<div class="stats-book-card ${isActive?'active':''} ${isDone?'done':''}" onclick="selectStatsBook('${b.id}')">
      <div class="sbc-ring">
        <svg viewBox="0 0 52 52"><circle class="sbc-bg" cx="26" cy="26" r="22"/><circle class="sbc-fill" cx="26" cy="26" r="22" stroke-dasharray="${circ}" stroke-dashoffset="${offset}"/></svg>
        <div class="sbc-pct">${pct}%</div>
      </div>
      <div class="sbc-name">${b.emoji} ${b.title}</div>
      <div style="font-size:10px; color:var(--muted); font-weight:700; margin-top:2px;">${dayText}</div>
    </div>`;
  }).join('');

  // ДОБАВЛЯЕМ ТОЧКИ ДЛЯ СТАТИСТИКИ
  const dotsWrap = document.getElementById('statsBooksDots');
  if (dotsWrap) {
    if (BOOKS.length > 1) {
      dotsWrap.innerHTML = BOOKS.map(b => `<div class="b-dot ${statsBookId === b.id ? 'on' : ''}"></div>`).join('');
      setTimeout(() => {
        const wrap = document.getElementById('statsBooksSwipe');
        const activeIndex = BOOKS.findIndex(x => x.id === statsBookId);
        if (wrap && activeIndex >= 0 && wrap.children[activeIndex]) {
          const cardWidth = wrap.children[activeIndex].offsetWidth;
          wrap.scrollTo({ left: wrap.children[activeIndex].offsetLeft - (wrap.offsetWidth / 2) + (cardWidth / 2), behavior: 'smooth' });
        }
      }, 50);
    } else {
      dotsWrap.innerHTML = '';
    }
  }

  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;
  document.getElementById('statStreakBig').textContent=calcStreak(b.id);
  document.getElementById('statBestBig').textContent=calcBest(b.id);
  renderAchievements();
}
function selectStatsBook(id){statsBookId=id;renderStatsScreen()}

// ─── НАГРАДЫ ───
function renderAchievements(){
  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;if(!b)return;
  const closed=countClosedDays(b.id),streak=calcStreak(b.id),bs=getBookState(b.id);
  const journal=Object.keys(bs.journal||{}).filter(k=>{
    const j=bs.journal[k];return j.q1||j.q2||j.q3;
  }).length;
  let practices=0,perfect=false,perfectStreak=0,curPerfect=0;
  for(let i=1;i<=b.days;i++){
    const d=dateByDay(b.id,i);const rec=bs.days[d];
    if(rec&&rec.practices){
      practices+=rec.practices.length;
      if(rec.practices.length===b.practices.length){
        perfect=true;curPerfect++;
        if(curPerfect>perfectStreak)perfectStreak=curPerfect;
      }else curPerfect=0;
    }else curPerfect=0;
  }
  const eb={journal,practices,perfect,perfectStreak,otherAch:0};
  let otherAch=0;
  ACHIEVEMENTS_GROUPS.slice(0,3).forEach(g=>{
    g.items.forEach(a=>{if(a.check(closed,streak,eb))otherAch++});
  });
  const extra={journal,practices,perfect,perfectStreak,otherAch};
  const allItems=[];
  ACHIEVEMENTS_GROUPS.forEach(g=>g.items.forEach(a=>allItems.push(a)));
  let unlockedCount=0;
  allItems.forEach(a=>{if(a.check(closed,streak,extra))unlockedCount++});
  document.getElementById('achCount').textContent=unlockedCount+' из '+allItems.length;
  document.getElementById('achBar').style.width=Math.round(unlockedCount/allItems.length*100)+'%';
  let html='';
  ACHIEVEMENTS_GROUPS.forEach(g=>{
    html+=`<div class="ach-group-title">${g.title}</div><div class="ach-grid">`;
    g.items.forEach(a=>{
      const unlocked=a.check(closed,streak,extra);
      const gold=a.gold&&unlocked;
      const secret=a.secret&&!unlocked;
      const progress=!unlocked&&a.progress?`<div class="ach-progress">${a.progress(closed,streak,extra)}</div>`:'';
      let name=a.name,desc=a.desc;
      if(secret){name='???';desc='Секретная награда'}
      html+=`<div class="ach-card ${unlocked?'unlocked':'locked'} ${gold?'gold':''} ${secret?'secret':''}" onclick="showAchDetail('${a.id}')"><div class="ach-badge">${unlocked?a.ico:(secret?'❓':'🔒')}</div><div class="ach-name">${name}</div><div class="ach-desc">${desc}</div>${progress}</div>`;
    });
    html+='</div>';
  });
  document.getElementById('achContainer').innerHTML=html;
}
function showAchDetail(achId){
  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;if(!b)return;
  const closed=countClosedDays(b.id),streak=calcStreak(b.id),bs=getBookState(b.id);
  const journal=Object.keys(bs.journal||{}).filter(k=>{
    const j=bs.journal[k];return j.q1||j.q2||j.q3;
  }).length;
  let practices=0,perfect=false,perfectStreak=0,curPerfect=0;
  for(let i=1;i<=b.days;i++){
    const d=dateByDay(b.id,i);const rec=bs.days[d];
    if(rec&&rec.practices){
      practices+=rec.practices.length;
      if(rec.practices.length===b.practices.length){
        perfect=true;curPerfect++;
        if(curPerfect>perfectStreak)perfectStreak=curPerfect;
      }else curPerfect=0;
    }else curPerfect=0;
  }
  const eb={journal,practices,perfect,perfectStreak,otherAch:0};
  let otherAch=0;
  ACHIEVEMENTS_GROUPS.slice(0,3).forEach(g=>{
    g.items.forEach(a=>{if(a.check(closed,streak,eb))otherAch++});
  });
  const extra={journal,practices,perfect,perfectStreak,otherAch};
  const allItems=[];
  ACHIEVEMENTS_GROUPS.forEach(g=>g.items.forEach(a=>allItems.push(a)));
  const a=allItems.find(x=>x.id===achId);if(!a)return;
  const unlocked=a.check(closed,streak,extra);
  document.getElementById('achModalIco').textContent=unlocked?a.ico:(a.secret?'❓':'🔒');
  document.getElementById('achModalTitle').textContent=unlocked?a.name:(a.secret?'Секретная награда':a.name);
  document.getElementById('achModalText').textContent=unlocked?'✓ Получена!':a.desc;
  let progress='';
  if(!unlocked&&a.progress){
    progress=`<div style="background:rgba(124,92,255,.1);padding:12px;border-radius:12px;font-size:14px;font-weight:800;color:var(--accent-2)">Прогресс: ${a.progress(closed,streak,extra)}</div>`;
  }
  document.getElementById('achModalProgress').innerHTML=progress;
  document.getElementById('achModal').classList.remove('hidden');
}

// ─── УРОВНИ ───
function getLevel(closed){
  if(closed===0)return{ico:'🌱',name:'Новичок',desc:'Начни первый день'};
  if(closed<3)return{ico:'🌱',name:'Первый шаг',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<7)return{ico:'🌿',name:'В ритме',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<14)return{ico:'🔥',name:'Практик',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<21)return{ico:'💎',name:'Опытный',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<30)return{ico:'🏆',name:'Мастер',desc:closed+' '+plural(closed,'день','дня','дней')};
  return{ico:'👑',name:'Легенда',desc:'Книга пройдена'};
}

// ─── ПОДСЧЁТЫ ───
function countClosedDays(bookId){
  const bs=getBookState(bookId);
  return Object.keys(bs.days).filter(d=>bs.days[d].closed).length;
}
function currentDay(bookId){
  const bs=getBookState(bookId);
  if(!bs.start)return 1;
  const start=new Date(bs.start+'T00:00:00');
  const now=new Date(todayStr()+'T00:00:00');
  const diff=Math.floor((now-start)/86400000)+1;
  const b=BOOKS.find(x=>x.id===bookId);
  return Math.min(Math.max(diff,1),b?b.days:30);
}
function calcStreak(bookId){
  const b=BOOKS.find(x=>x.id===bookId),bs=getBookState(bookId);
  if(!b||!bs.start)return 0;
  let streak=0, misses=0;
  for(let i=1;i<=b.days;i++){
    const d=dateByDay(bookId,i);
    if(bs.days[d]&&bs.days[d].closed){
      streak++;
      misses=0; // Если сделал практику, счетчик пропусков сбрасывается
    } else {
      // Если день в прошлом (не сегодня) и пропущен
      if(d < todayStr()) {
        misses++;
        if(misses > 1) break; // Если пропустил 2 дня подряд - серия прерывается
      }
    }
  }
  return streak;
}
function calcBest(bookId){
  const b=BOOKS.find(x=>x.id===bookId),bs=getBookState(bookId);
  if(!b)return 0;
  let best=0,cur=0;
  for(let i=1;i<=b.days;i++){
    const d=dateByDay(bookId,i);
    if(bs.days[d]&&bs.days[d].closed){cur++;if(cur>best)best=cur}else cur=0;
  }
  return best;
}
function dateByDay(bookId,day){
  const bs=getBookState(bookId);
  if(!bs.start)return null;
  const start=new Date(bs.start+'T00:00:00');
  start.setDate(start.getDate()+day-1);
  return localDate(start);
}

// ─── РИТУАЛ ───
function startRitual(){
  if(!currentBook){toast('Сначала выбери книгу','warm');return}
  const day = currentDay(currentBook.id);
  const date = dateByDay(currentBook.id, day);
  const bs = getBookState(currentBook.id);
  if (bs.days[date] && bs.days[date].closed) {
    toast('Вы уже выполнили все практики на сегодня. Ждем завтра!', 'warm');
    return;
  }
  const b=currentBook;
  ritualQueue=b.practices.map(p=>({...p,_bookId:b.id,_bookTitle:b.title}));
  ritualIndex=0;
  hideAll();
  const rEl=document.getElementById('ritualScreen');
  rEl.className='ritual';
  rEl.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;z-index:9999;display:flex;flex-direction:column;background:var(--bg)';
  window.scrollTo(0,0);
  startMusic();
  renderRitualStep();
}
function renderRitualStep(){
  if(ritualIndex>=ritualQueue.length){finishRitual();return}
  const p=ritualQueue[ritualIndex];
  document.getElementById('rpStep').textContent=(ritualIndex+1)+' из '+ritualQueue.length;
  document.getElementById('rpFill').style.width=(ritualIndex/ritualQueue.length*100)+'%';
  const bookTag=p._bookTitle&&(!currentBook||p._bookTitle!==currentBook.title)?
    `<div style="text-align:center;font-size:11px;color:var(--muted);margin-bottom:8px">📚 ${p._bookTitle}</div>`:'';
  document.getElementById('ritualBody').innerHTML=
    `${bookTag}
     <div class="ritual-hero"><div class="ico">${p.ico}</div><h2>${p.title}</h2><div class="sub">${p.sub}</div></div>
     <div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${p.why}</p></div>
     <div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${p.how.map(s=>`<li>${s}</li>`).join('')}</ol></div>
     
     <div class="ps-block timer-wrapper" style="margin-top:30px; border-top:1px solid var(--border); padding-top:20px;">
       <h3>⏱ Время практики</h3>
       <div class="timer-box">
         <div class="timer-display" id="ritualTime">${formatTime(p.time)}</div>
         <button class="timer-big-btn" id="ritualTimerBtn" onclick="toggleTimer('ritual')">▶ Старт</button>
       </div>
     </div>

     <div class="ps-block" style="margin-top:20px;">
       <h3>✍️ Заметка в дневник</h3>
       <textarea id="ritualNoteInput" placeholder="Что почувствовал? О чем подумал? (Необязательно)" style="width:100%; background:var(--card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:12px; color:var(--text); font-size:14px; min-height:80px; resize:vertical;"></textarea>
     </div>

     <button class="btn" style="margin-top:20px; margin-bottom:50px;" onclick="nextRitual()">✓ Отметить выполненным</button>`;
  timerRemaining=p.time;
  timerState='idle';
    if(musicAudio && state.soundOn!==false){
    nextTrack(); // Переключаем трек на следующий при переходе к новой практике
  }
// Плавный скролл наверх при смене практики
  setTimeout(() => {
    const rBody = document.getElementById('ritualBody');
    if(rBody) rBody.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50);}
function toggleTimer(ctx){
  const btn=ctx==='ritual'?
    document.getElementById('ritualTimerBtn'):
    document.getElementById('timerBtn');
    
  const screen = ctx==='ritual' ? 
    document.getElementById('ritualScreen') : 
    document.getElementById('practiceScreen');

  if(timerState==='running'){
    stopTimer();timerState='paused';
    if(btn){btn.textContent='▶ Продолжить';btn.className='timer-big-btn paused'}
    if(screen) screen.classList.remove('focus-mode'); // ВЫКЛЮЧАЕМ ДЗЕН
  }else if(timerState==='done'){}
  else{
    // Разблокировка голоса для браузера
    if ('speechSynthesis' in window) {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(''));
      }
    startTimer(ctx);timerState='running';
    if(btn){btn.textContent='⏸ Пауза';btn.className='timer-big-btn'}
    if(screen) screen.classList.add('focus-mode'); // ВКЛЮЧАЕМ ДЗЕН
  }
}
let wakeLock = null;

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (err) {
    console.log('Wake Lock error:', err);
  }
}

function releaseWakeLock() {
  if (wakeLock !== null) {
    wakeLock.release();
    wakeLock = null;
  }
}

function startTimer(ctx){
  requestWakeLock(); 
  const targetTime = Date.now() + (timerRemaining * 1000);
  
  if(timerInterval) clearInterval(timerInterval);
  
  timerInterval = setInterval(()=>{
    const now = Date.now();
    const remaining = Math.max(0, Math.round((targetTime - now) / 1000));
    timerRemaining = remaining;
    
    const el=document.getElementById(ctx==='ritual'?'ritualTime':'timerDisplay');
    if(el){
      el.textContent=formatTime(timerRemaining);
      el.classList.add('timer-pulsing'); // Включаем пульсацию
    }
    
    if(timerRemaining <= 0){
      stopTimer();
      timerState='done';
      
      // Меняем текст кнопки на "Время вышло"
      const btn = document.getElementById(ctx==='ritual'?'ritualTimerBtn':'timerBtn');
      if(btn){
        btn.textContent = '✨ Время вышло';
        btn.className = 'timer-big-btn done';
        btn.disabled = true;
      }

      speakTimerEnd(); // Голос
      playFanfare();   // Звук
      
      if(ctx==='ritual') showCompleteOverlay(ritualQueue[ritualIndex],'ritual');
      else showCompleteOverlay(currentPractice,'practice');
      // Прокрутка к заметке после окончания таймера
      setTimeout(() => {
        const noteId = ctx==='ritual' ? 'ritualNoteInput' : 'practiceNoteInput';
        const noteInput = document.getElementById(noteId);
        if(noteInput) {
          noteInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }, 1000);
}

function stopTimer(){
  releaseWakeLock(); 
  if(timerInterval){clearInterval(timerInterval);timerInterval=null}
  
  const t1 = document.getElementById('timerDisplay');
  const t2 = document.getElementById('ritualTime');
  if(t1) t1.classList.remove('timer-pulsing');
  if(t2) t2.classList.remove('timer-pulsing');

  // Выключаем Дзен-режим у обоих экранов
  const pScreen = document.getElementById('practiceScreen');
  const rScreen = document.getElementById('ritualScreen');
  if(pScreen) pScreen.classList.remove('focus-mode');
  if(rScreen) rScreen.classList.remove('focus-mode');
}
async function nextRitual(){
  stopTimer();timerState='idle';
  if(musicAudio && state.soundOn!==false) nextTrack(); // Меняем музыку
  const p=ritualQueue[ritualIndex];
  
  const noteInput = document.getElementById('ritualNoteInput');
  const noteText = noteInput ? noteInput.value : '';
  if (noteText.trim() && p) {
    await savePracticeNote(p.title, noteText, p._bookId); // ДОБАВИЛИ ID КНИГИ (он хранится в p._bookId)
  }

  markPracticeDoneForBook(p._bookId, p.id);
  ritualIndex++;
  renderRitualStep();
}
let confirmActionCallback = null;

function showCustomConfirm(title, text, callback) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmText').textContent = text;
  confirmActionCallback = callback;
  document.getElementById('confirmModal').classList.remove('hidden');
}

function closeCustomConfirm(isConfirmed) {
  document.getElementById('confirmModal').classList.add('hidden');
  if (isConfirmed && confirmActionCallback) {
    confirmActionCallback();
  }
  confirmActionCallback = null;
}

function closeRitual(){
  if(ritualIndex < ritualQueue.length) {
    showCustomConfirm(
      'Прервать практику?', 
      'Прогресс текущей практики не сохранится. Вы уверены?', 
      () => {
        stopTimer();timerState='idle';stopMusic();
        const rEl=document.getElementById('ritualScreen');
        rEl.classList.add('hidden'); 
        rEl.classList.remove('ritual');
        rEl.style.cssText=''; 
        rEl.className='ritual hidden';
        smartHome();
      }
    );
  } else {
    stopTimer();timerState='idle';stopMusic();
    const rEl=document.getElementById('ritualScreen');
    rEl.classList.add('hidden'); 
    rEl.classList.remove('ritual');
    rEl.style.cssText=''; 
    rEl.className='ritual hidden';
    smartHome();
  }
}

function goToJournalFromRitual() {
  stopTimer();
  showCustomConfirm(
    'Перейти в дневник?', 
    'Текущая практика не сохранится. Вы уверены?', 
    () => {
      const rEl=document.getElementById('ritualScreen');
      rEl.classList.add('hidden'); 
      rEl.classList.remove('ritual');
      rEl.style.cssText=''; 
      rEl.className='ritual hidden';
      showJournalScreen();
    }
  );
}

function finishRitual(){
  stopTimer();timerState='idle';
  const b=currentBook;
  const day=currentDay(b.id),date=dateByDay(b.id,day),bs=getBookState(b.id);
  if(!bs.days[date])bs.days[date]={practices:[]};
  const count=bs.days[date].practices.length,total=b.practices.length;
  const threshold=Math.ceil(total*0.6);
  if(count>=threshold){
    const wasClosed=bs.days[date].closed;
    bs.days[date].closed=true;saveState();
    if(!wasClosed){fireConfetti();playFanfare()}
    buildModalWithAch(day,count,total,wasClosed);
  }else if(count>=2){
    saveState();
    showSimpleModal('💪','Хорошо идёшь!',count+' из '+total+'. Для закрытия нужно '+threshold+'.');
  }else{
    saveState();
    showSimpleModal('🌱','Начало положено',count+' из '+total+'. Маленький шаг — тоже шаг.');
  }
}
function buildModalWithAch(day,count,total,wasClosed){
  const streak=calcStreak(currentBook.id),best=calcBest(currentBook.id);
  const emoji=count===total?'🔥':'✅';
  const title=count===total?'Идеальный день!':'День закрыт!';
  const text='День '+day+'. Практик: '+count+' из '+total+'.';
  let items=[];
  if(streak>=3)items.push({ico:'🔥',txt:streak+' дней огня',sub:'Не сбавляй'});
  else items.push({ico:'🌱',txt:'День '+day+' в копилке',sub:'Продолжай'});
  if(streak===best&&streak>1)items.push({ico:'🏆',txt:'Новый рекорд!',sub:best+' дней подряд'});
  if(count===total)items.push({ico:'💎',txt:'Все практики выполнены',sub:'Идеальный день'});
  const nextAch=getNextAch(currentBook.id,streak);
  if(nextAch)items.push({ico:'🎯',txt:'До награды "'+nextAch.name+'"',sub:nextAch.remaining});
  showAchModal(emoji,title,text,items);
}
function getNextAch(bookId,streak){
  const closed=countClosedDays(bookId);
  const targets=[
    {name:'Три дня',remaining:3-streak,cond:streak<3&&streak>=1},
    {name:'Ранняя пташка',remaining:5-streak,cond:streak<5&&streak>=3},
    {name:'Неделя силы',remaining:7-streak,cond:streak<7&&streak>=5},
    {name:'Половина',remaining:15-closed,cond:closed<15&&closed>=7},
    {name:'Мастер утра',remaining:30-closed,cond:closed<30&&closed>=15}
  ];
  for(const t of targets){
    if(t.cond&&t.remaining>0)return{name:t.name,remaining:'Осталось '+t.remaining};
  }
  return null;
}
function markPracticeDone(pid){markPracticeDoneForBook(currentBook.id,pid)}
function markPracticeDoneForBook(bookId,pid){
  const day=currentDay(bookId),date=dateByDay(bookId,day),bs=getBookState(bookId);
  if(!bs.days[date])bs.days[date]={practices:[]};
  if(!bs.days[date].practices.includes(pid))bs.days[date].practices.push(pid);
  saveState();
}

// ─── СВОЙ РИТУАЛ ───
function showRitualBuilder(){
  customRitual=[];
  renderRitualBuilder();
  hideAll();
  document.getElementById('ritualBuilderScreen').classList.remove('hidden');
}
function renderRitualBuilder(){
  const activeBooks=BOOKS.filter(b=>hasBookAccess(b.id));
  if(!activeBooks.length){
    document.getElementById('ritualBuilderList').innerHTML=
      '<p style="color:var(--muted);text-align:center">Нет доступных книг</p>';
    return;
  }
  
  let html='';
  activeBooks.forEach((b, index)=>{
    const hasSelected = customRitual.some(key => key.startsWith(b.id + ':'));
    
    // Используем класс book-row (как в библиотеке), но делаем его раскрывающимся
    html+=`
      <div class="book-row" style="display:flex; flex-direction:column; align-items:stretch; padding:0; margin-bottom:10px; gap:0; background:var(--card); border-radius:var(--radius-sm); overflow:hidden; ${hasSelected ? 'border-color:var(--accent);' : ''}">
        <div style="display:flex; align-items:center; gap:14px; padding:14px; cursor:pointer;" onclick="toggleBuilderBook(this)">
          <div class="br-emoji">${b.emoji}</div>
          <div class="br-info">
            <div class="br-title" style="font-size:15px; font-weight:800; margin-bottom:2px;">${b.title}</div>
            <div class="br-author" style="font-size:11px; color:var(--muted);">${b.author}</div>
          </div>
          ${hasSelected ? '<div style="font-size:10px; background:var(--accent); color:#fff; padding:2px 8px; border-radius:10px; font-weight:800; margin-left:auto; margin-right:8px;">выбрано</div>' : '<div style="margin-left:auto; margin-right:8px;"></div>'}
          <div class="arrow-icon" style="font-size:20px; color:var(--muted); transition:transform 0.3s; transform:rotate(${hasSelected ? '90deg' : '0deg'});">›</div>
        </div>
        
          <div class="builder-book-body ${hasSelected ? 'open' : ''}" style="padding:0 14px 14px 14px; border-top:1px solid var(--border); background:var(--card2);">
          <div style="padding-top:10px;">
    `;
    
    b.practices.forEach(p=>{
      const key=b.id+':'+p.id;
      const on=customRitual.includes(key);
      html+=`<div class="ritual-builder-item ${on?'on':''}">
        <div class="rbi-check" onclick="event.stopPropagation();toggleCustomPractice('${key}')">✓</div>
        <div class="rbi-body" onclick="event.stopPropagation();previewPractice('${b.id}','${p.id}')">
          <div class="rbi-title" style="display:flex; justify-content:space-between; align-items:center;">
            <span>${p.title}</span>
            <span style="font-size:16px; color:var(--accent-2); opacity:0.7;">ⓘ</span>
          </div>
          <div class="rbi-time">${p.sub}</div>
        </div>
      </div>`;
    });
    
    html+=`
          </div>
        </div>
      </div>
    `;
  });
  
  document.getElementById('ritualBuilderList').innerHTML=html;
  updateCustomSummary();
}

// Функция для открытия/закрытия книги в списке
function toggleBuilderBook(el) {
  const body = el.nextElementSibling;
  const arrow = el.querySelector('.arrow-icon');
  if(body) {
    body.classList.toggle('open');
    if (arrow) {
      arrow.style.transform = body.classList.contains('open') ? 'rotate(90deg)' : 'rotate(0deg)';
    }
  }
}

// НОВАЯ ФУНКЦИЯ ДЛЯ ОКНА ОПИСАНИЯ
function previewPractice(bookId, practiceId) {
  const b = BOOKS.find(x => x.id === bookId);
  if (!b) return;
  const p = b.practices.find(x => x.id === practiceId);
  if (!p) return;

  document.getElementById('previewContent').innerHTML = `
    <div style="text-align:center; margin-bottom:15px;">
      <div style="font-size:50px; margin-bottom:10px;">${p.ico}</div>
      <h2 style="font-size:20px; margin-bottom:5px;">${p.title}</h2>
      <div style="color:var(--muted); font-size:13px;">${p.sub}</div>
    </div>
    <div style="margin-bottom:15px;">
      <b style="color:var(--accent-2); text-transform:uppercase; font-size:11px;">Зачем это нужно</b>
      <p style="margin-top:4px;">${p.why}</p>
    </div>
    <div style="margin-bottom:15px;">
      <b style="color:var(--accent-2); text-transform:uppercase; font-size:11px;">Как делать</b>
      <ul style="padding-left:16px; margin-top:4px;">
        ${p.how.map(step => `<li style="margin-bottom:6px;">${step}</li>`).join('')}
      </ul>
    </div>
    <div style="background:rgba(255,184,0,0.1); padding:12px; border-radius:10px; border-left:3px solid var(--gold);">
      <b style="color:var(--gold); font-size:11px; text-transform:uppercase;">Совет</b>
      <p style="margin-top:4px; font-size:13px; font-style:italic;">${p.advice}</p>
    </div>
  `;
  document.getElementById('previewPracticeModal').classList.remove('hidden');
}
function toggleCustomPractice(key){
  const idx=customRitual.indexOf(key);
  if(idx>=0)customRitual.splice(idx,1);else customRitual.push(key);
  playClick();
  renderRitualBuilder();
}
function updateCustomSummary(){
  const sum=document.getElementById('ritualBuilderSummary');
  if(!customRitual.length){sum.style.display='none';return}
  let totalSec=0;
  customRitual.forEach(key=>{
    const[bid,pid]=key.split(':');
    const b=BOOKS.find(x=>x.id===bid);if(!b)return;
    const p=b.practices.find(x=>x.id===pid);if(p)totalSec+=p.time;
  });
  document.getElementById('rbsCount').textContent=
    customRitual.length+' '+plural(customRitual.length,'практика','практики','практик');
  document.getElementById('rbsTime').textContent='~'+Math.round(totalSec/60)+' минут';
  sum.style.display='flex';
}
function launchCustomRitual(){
  if(!customRitual.length)return;
  ritualQueue=[];
  customRitual.forEach(key=>{
    const[bid,pid]=key.split(':');
    const b=BOOKS.find(x=>x.id===bid);if(!b)return;
    const p=b.practices.find(x=>x.id===pid);
    if(p)ritualQueue.push({...p,_bookId:b.id,_bookTitle:b.title});
  });
      ritualIndex=0;
  hideAll();
  const rEl=document.getElementById('ritualScreen');
  rEl.className='ritual';
  rEl.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;z-index:9999;display:flex;flex-direction:column;background:var(--bg)';
  startMusic();
  renderRitualStep();
}

// ─── ОВЕРЛЕЙ ЗАВЕРШЕНИЯ ───
function showCompleteOverlay(practice,context){
  completeCallback={practice,context};
  document.getElementById('completeTitle').textContent='Практика завершена';
  
  // Выбираем умную цитату
  let quoteHtml = '';
  if(currentBook && currentBook.quotes && currentBook.quotes.length > 0) {
    const randomQuote = currentBook.quotes[Math.floor(Math.random() * currentBook.quotes.length)];
    quoteHtml = `<div style="margin-top: 15px; font-style: italic; color: var(--accent-2); font-size: 13px; border-top: 1px solid var(--border); padding-top: 15px;">«${randomQuote.text}»</div>`;
  }

  document.getElementById('completeSub').innerHTML = `${practice.title}<br>⏱ ${Math.round(practice.time/60)} минут ${quoteHtml}`;
  document.getElementById('completeOverlay').classList.remove('hidden');
}
async function completePracticeDone(){
  stopMusic();
  document.getElementById('completeOverlay').classList.add('hidden');
  if(!completeCallback)return;
  
  const{practice,context}=completeCallback;completeCallback=null;
  
  // Сохраняем заметку из модалки
  const noteInput = document.getElementById('completeNoteInput');
  const noteText = noteInput ? noteInput.value : '';
  
  if (noteText.trim()) {
    if (context === 'ritual') {
      const p = ritualQueue[ritualIndex];
      if (p) await savePracticeNote(p.title, noteText, p._bookId);
    } else {
      await savePracticeNote(practice.title, noteText, currentBook.id);
    }
    // Очищаем поле после сохранения
    if(noteInput) noteInput.value = '';
  }

  if(context==='ritual'){
    stopTimer();timerState='idle';
    const p=ritualQueue[ritualIndex];
    if(p)markPracticeDoneForBook(p._bookId,p.id);
    playCheck();
    ritualIndex++;
    setTimeout(()=>renderRitualStep(),300);
  }else{
    markPracticeDone(practice.id);
    playCheck();
    fireConfetti();
    closePractice();
  }
}
function completePracticeSkip(){
  stopMusic(); // <--- ДОБАВИЛИ ОСТАНОВКУ МУЗЫКИ
  document.getElementById('completeOverlay').classList.add('hidden');
  if(!completeCallback)return;
  const{context}=completeCallback;completeCallback=null;
  if(context==='ritual'){
    stopTimer();timerState='idle';
    ritualIndex++;
    setTimeout(()=>renderRitualStep(),300);
  }else closePractice();
}
function addFiveMinutes(){
  document.getElementById('completeOverlay').classList.add('hidden');
  timerRemaining=300;timerState='idle';
  const ctx=completeCallback?completeCallback.context:'practice';
  completeCallback=null;
  const timeEl=document.getElementById(ctx==='ritual'?'ritualTime':'timerDisplay');
  const btn=document.getElementById(ctx==='ritual'?'ritualTimerBtn':'timerBtn');
  if(timeEl)timeEl.textContent=formatTime(300);
  if(btn){btn.textContent='▶ Старт';btn.className='timer-big-btn'}
  startTimer(ctx);timerState='running';
  if(btn)btn.textContent='⏸ Пауза';
}

// ─── ПРАКТИКА ───
function openPractice(id){
  if(!currentBook){toast('Сначала выбери книгу','warm');return}
    const day = currentDay(currentBook.id);
  const date = dateByDay(currentBook.id, day);
  const bs = getBookState(currentBook.id);
  if (bs.days[date] && bs.days[date].closed) {
    toast('Вы уже выполнили все практики на сегодня. Ждем завтра!', 'warm');
    return;
  }
  const p=currentBook.practices.find(x=>x.id===id);if(!p)return;
  currentPractice=p;
  document.getElementById('psTitle').textContent=p.title;
  document.getElementById('psSub').textContent=p.sub;
  document.getElementById('psContent').innerHTML=
    `<div class="ps-hero"><div class="ico">${p.ico}</div><div class="time">⏱ ${Math.round(p.time/60)} минут</div></div>
     <div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${p.why}</p></div>
     <div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${p.how.map(s=>`<li>${s}</li>`).join('')}</ol></div>
     ${p.affirm?`<div class="ps-block"><h3>✨ Аффирмации</h3><ul class="affirm-list">${p.affirm.map(a=>`<li onclick="copyAffirm(this)">«${a}»</li>`).join('')}</ul></div>`:''}
     <div class="ps-block"><h3>🎯 Результат</h3><p>${p.result}</p></div>
     <div class="ps-block"><h3>⚠️ Ошибки</h3><ul class="mistakes">${p.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></div>
     <div class="ps-block"><h3>💬 Совет</h3><div class="advice">${p.advice}</div></div>
     
     <div class="ps-block timer-wrapper" style="margin-top:30px; border-top:1px solid var(--border); padding-top:20px;">
       <h3>⏱ Время практики</h3>
       <div class="timer-box"><div class="timer-display" id="timerDisplay">${formatTime(p.time)}</div><button class="timer-big-btn" id="timerBtn" onclick="toggleTimer('practice')">▶ Старт</button></div>
     </div>
     
<div class="ps-block" style="margin-top:20px; background:linear-gradient(135deg, rgba(124,92,255,0.1), transparent); padding:16px; border-radius:var(--radius-md); border:1px solid var(--accent);">
       <h3 style="margin-top:0; color:var(--accent-2);">🎯 Ожидаемый результат</h3>
       <p style="font-size:14px; color:#dcdcf0; margin-bottom:16px; font-style:italic;">${p.result || 'Новое осознание и спокойствие.'}</p>
       
       <h3>✍️ Твоя заметка</h3>
       <textarea id="practiceNoteInput" placeholder="Что получилось? С какими мыслями столкнулся?..." style="width:100%; background:var(--card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:12px; color:var(--text); font-size:14px; min-height:100px; resize:vertical;"></textarea>
     </div>
     
     <button class="btn" style="margin-top:20px; margin-bottom:50px;" onclick="markPracticeFromScreen('${p.id}')">✓ Отметить выполненным</button>`;
  document.getElementById('practiceScreen').classList.remove('hidden');
  document.body.style.overflow='hidden';
  window.scrollTo(0,0);
  timerRemaining=p.time;
  timerState='idle';
  startMusic();
  updateSoundUI();
}
function closePractice(){
  document.getElementById('practiceScreen').classList.add('hidden');
  document.body.style.overflow='';
  stopTimer();timerState='idle';stopMusic();
  currentPractice=null;
  smartHome();
}
async function markPracticeFromScreen(id){
  const noteInput = document.getElementById('practiceNoteInput');
  const noteText = noteInput ? noteInput.value : '';
  const p = currentBook.practices.find(x => x.id === id);
  
  if (noteText.trim() && p) {
    await savePracticeNote(p.title, noteText, currentBook.id); // ДОБАВИЛИ ID КНИГИ
  }

markPracticeDone(id);
  playCheck();
  fireConfetti(); 
  
  // ВАУ-ЭФФЕКТ: Опыт и Вибрация
  toast('🔥 +10 к огоньку!', 'success');
  if(navigator.vibrate) navigator.vibrate([100, 50, 100]); // Двойная вибрация
  closePractice();
}
function copyAffirm(el){
  const text=el.textContent.replace(/[«»]/g,'');
  if(navigator.clipboard){
    navigator.clipboard.writeText(text);
    el.style.background='rgba(124,92,255,.15)';
    setTimeout(()=>el.style.background='',500);
  }
}

// ─── МОДАЛКИ ───
function showSimpleModal(emoji,title,text){
  document.getElementById('modalEmoji').textContent=emoji;
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalText').textContent=text;
  document.getElementById('modalAchList').innerHTML='';
  document.getElementById('modal').classList.remove('hidden');
}
function showAchModal(emoji,title,text,items){
  document.getElementById('modalEmoji').textContent=emoji;
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalText').textContent=text;
  const list=items.map(i=>`<div class="modal-ach-item"><div class="ico">${i.ico}</div><div class="txt">${i.txt}<small>${i.sub}</small></div></div>`).join('');
  document.getElementById('modalAchList').innerHTML=list?`<div class="modal-ach-list">${list}</div>`:'';
  document.getElementById('modal').classList.remove('hidden');
}
function closeModal(){
  document.getElementById('modal').classList.add('hidden');
  const ritualOpen=!document.getElementById('ritualScreen').classList.contains('hidden');
  if(ritualOpen)closeRitual();
}

// ─── КОНФЕТТИ ───
function fireConfetti(){
  const box=document.getElementById('confetti');
  box.classList.remove('hidden');
  const colors=['#7c5cff','#a78bfa','#ff9a56','#ffb800','#3ecf8e'];
  for(let i=0;i<50;i++){
    const el=document.createElement('div');
    el.className='conf-piece';
    el.style.left=Math.random()*100+'%';
    el.style.background=colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDuration=(2+Math.random()*2)+'s';
    el.style.animationDelay=(Math.random()*0.3)+'s';
    if(Math.random()>0.5)el.style.borderRadius='50%';
    box.appendChild(el);
  }
  setTimeout(()=>{box.innerHTML='';box.classList.add('hidden')},4500);
}

// ─── ДЫХАНИЕ ───
let breathTimer=null;
const BREATH_CYCLE=[{t:'Вдох',d:4,cls:'inhale'},{t:'Задержка',d:7,cls:'hold'},{t:'Выдох',d:8,cls:'exhale'}];
function showBreathModal(){document.getElementById('breathModal').classList.remove('hidden')}
function closeBreath(){stopBreath();document.getElementById('breathModal').classList.add('hidden')}
function toggleBreath(){
  if(breathTimer){stopBreath();document.getElementById('breathBtn').textContent='▶ Начать';return}
  document.getElementById('breathBtn').textContent='⏸ Пауза';
  runBreathCycle();
}
function runBreathCycle(){
  let phase=0,remaining=BREATH_CYCLE[0].d;
  function update(){
    const el=document.getElementById('breathCircle');
    const txt=document.getElementById('breathText');
    const cur=BREATH_CYCLE[phase];
    if(el)el.className='breath-circle '+cur.cls;
    if(txt)txt.textContent=cur.t+' '+remaining;
    remaining--;
    if(remaining<0){
      phase=(phase+1)%BREATH_CYCLE.length;
      remaining=BREATH_CYCLE[phase].d;
    }
  }
  update();
  breathTimer=setInterval(update,1000);
}
function stopBreath(){
  if(breathTimer){clearInterval(breathTimer);breathTimer=null}
  const el=document.getElementById('breathCircle');
  if(el)el.className='breath-circle';
  const txt=document.getElementById('breathText');
  if(txt)txt.textContent='Готов?';
}
// ─── ПРОФИЛЬ ───
function renderProfile(){
  try {
    // Безопасное получение телефона
    const phone = (user && user.phone) ? user.phone : '79999999999';
    const phoneEl = document.getElementById('profilePhone');
    if(phoneEl) phoneEl.textContent = 
      '+7 ' + phone.slice(1,4) + ' *** ' + phone.slice(7,9) + ' ' + phone.slice(9);
    
    const fullEl = document.getElementById('profileFullName');
    if(fullEl) fullEl.value = ((user && user.name) ? user.name : '') + ((user && user.lastName) ? ' ' + user.lastName : '');
    
        // Считаем глобальный опыт для профиля
    let totalXP = 0;
    BOOKS.forEach(bb => {
      const bbs = getBookState(bb.id);
      Object.values(bbs.days).forEach(rec => {
        if(rec.practices) totalXP += rec.practices.length * 10;
        if(rec.closed) totalXP += 50;
      });
    });
    let lvlName = 'Новичок', lvlIco = '🌱';
    if (totalXP >= 2000) { lvlName = 'Легенда'; lvlIco = '👑'; }
    else if (totalXP >= 1000) { lvlName = 'Мастер'; lvlIco = '🏆'; }
    else if (totalXP >= 600) { lvlName = 'Опытный'; lvlIco = '💎'; }
    else if (totalXP >= 300) { lvlName = 'Практик'; lvlIco = '🔥'; }
    else if (totalXP >= 100) { lvlName = 'Ученик'; lvlIco = '🌿'; }
    
    const xpBadge = document.getElementById('profileXpBadge');
    if(xpBadge) xpBadge.textContent = `${lvlIco} ${lvlName} · ${totalXP} XP`;
    const avaEl = document.getElementById('profileAva');
    if(avaEl) avaEl.textContent = state.avatar || '👤';
    
    const emojiEl = document.getElementById('emojiRow');
    if(emojiEl) emojiEl.innerHTML = 
      EMOJIS.map(e => `<div class="emoji-pick ${state.avatar === e ? 'on' : ''}" onclick="setAvatar('${e}')">${e}</div>`).join('');
      
    updateSoundUI();
  } catch(e) {
    console.error('❌ renderProfile Error:', e);
  }
}
async function saveName(){
  const fullVal = document.getElementById('profileFullName').value.trim();
  if(!fullVal) return;
  const nameParts = fullVal.split(' ');
  const n = nameParts[0];
  const ln = nameParts.slice(1).join(' ');
  
  user.name = n;
  user.lastName = ln;
  
  await sb.from('profiles').update({name:n, last_name:ln}).eq('id',user.id);
  playSuccess();toast('Профиль сохранен');
}
function setAvatar(e){
  state.avatar=e;saveState();
  sb.from('profiles').update({avatar:e}).eq('id',user.id).then(()=>{});
  playClick();renderProfile();
}

// ─── НАСТРОЙКИ ───
function renderSettings(){
  updateSoundUI();
  const pushTog=document.getElementById('pushToggle');
  if(pushTog)pushTog.classList.toggle('on',state.pushEnabled===true);
  const mEl=document.getElementById('morningTime');
  const eEl=document.getElementById('eveningTime');
  if(mEl)mEl.textContent=state.morningTime||'07:00';
  if(eEl)eEl.textContent=state.eveningTime||'21:00';
}
async function setTheme(theme){
  state.theme=theme;
  applyTheme();
  sb.from('profiles').update({theme}).eq('id',user.id).then(()=>{});
  playClick();
}
function applyTheme(){
  const root=document.documentElement;
  let effective=state.theme||'dark';
  if(effective==='auto'){
    effective=window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';
  }
  if(effective==='light')root.classList.add('light');
  else root.classList.remove('light');
  // Подсветка выбранного варианта
  document.querySelectorAll('.theme-option').forEach(el=>{
    el.classList.toggle('on',el.dataset.theme===(state.theme||'dark'));
  });
}
// ─── PUSH ───
// Функция для конвертации ключа Push
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function togglePush(){
  if(state.pushEnabled){
    state.pushEnabled=false;
    sb.from('profiles').update({push_enabled:false}).eq('id',user.id).then(()=>{});
    renderSettings();
    toast('Уведомления отключены','warm');
    return;
  }
  if(!('Notification' in window)){
    alert('Ваш браузер не поддерживает уведомления');return;
  }
  
  try {
    const perm = await Notification.requestPermission();
    if(perm !== 'granted'){
      alert('Вы отклонили разрешение на уведомления. Разрешите их в настройках браузера.');
      return;
    }

    const reg = await navigator.serviceWorker.getRegistration();
    if(!reg || !reg.pushManager){
      alert('На iPhone уведомления работают только если добавить приложение на экран «Домой».');
      return;
    }

    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array('BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U')
    });
    
    state.pushSubscription = sub.toJSON();
    state.pushEnabled = true;
    
    await sb.from('profiles').update({push_enabled:true}).eq('id',user.id);
    await sb.from('notification_prefs').upsert({
      user_id:user.id,
      push_enabled:true,
      push_subscription:state.pushSubscription,
      morning_time:state.morningTime||'07:00',
      evening_time:state.eveningTime||'21:00'
    },{onConflict:'user_id'});

    renderSettings();
    toast('Включено');
    
  } catch (e) {
    console.error(e);
    alert('Ошибка при включении: ' + e.message);
  }
}

// ─── ПОМОЩЬ ───
function renderHelp(){
  const list=document.getElementById('faqList');
  if(!list)return;
  
  let html = '';
  FAQ_GROUPS.forEach(group => {
    html += `<h3 class="section-title" style="margin-top: 20px;">${group.title}</h3>`;
    group.items.forEach(item => {
      // Генерируем уникальный ID для каждого вопроса, чтобы открывать только его
      const faqId = 'faq_' + Math.random().toString(36).substr(2, 9);
      html += `
        <div class="faq-item" onclick="toggleFaq(this)">
          <div class="faq-q">${item.q}<span class="fq-arrow">›</span></div>
          <div class="faq-a">${item.a}</div>
        </div>
      `;
    });
  });
  
  list.innerHTML = html;
}

function toggleFaq(el){
  el.classList.toggle('open');
}

// ─── УВЕДОМЛЕНИЯ ───
async function loadNotifications(){
  try{
    const{data}=await sb.from('notifications')
      .select('*').eq('user_id',user.id)
      .order('created_at',{ascending:false}).limit(50);
    notifications=data||[];
    updateNotifBadge();
  }catch(e){notifications=[]}
}
function updateNotifBadge(){
  const unread = notifications.filter(n => !n.read).length;
  const badges = document.querySelectorAll('.notif-badge'); // Ищем ВСЕ бейджи
  badges.forEach(badge => {
    if(unread > 0){
      badge.textContent = unread > 9 ? '9+' : unread;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}
function renderNotifications(){
  const el=document.getElementById('notifList');
  if(!el)return;
  if(!notifications.length){
    el.innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px;font-size:14px">Пока нет уведомлений</div>';
    return;
  }
  el.innerHTML=notifications.map(n=>{
    let p = n.payload || {};
    if (typeof p === 'string') {
      try { p = JSON.parse(p); } catch(e) { p = {}; }
    }
    let ico='🔔',title='',text='';
    if(n.type==='msg'){ico='💬';title='Новое сообщение';text=p.text||''}
    else if(n.type==='like'){ico='❤️';title='Новый лайк';text=p.text||'Кому-то понравился твой пост'}
    else if(n.type==='comment'){ico='💬';title='Новый комментарий';text=p.text||''}
    else if(n.type==='ach'){ico='🏆';title='Новая награда';text=p.title||''}
    else {title='Уведомление';text=p.text||''}
    return `<div class="notif-item ${n.read?'':'unread'}" onclick="openNotification(${n.id})">
      <div class="ni-ico">${ico}</div>
      <div class="ni-body">
        <div class="ni-title">${title}</div>
        <div class="ni-text">${escapeHtml(text)}</div>
        <div class="ni-time">${timeAgo(n.created_at)}</div>
      </div>
    </div>`;
  }).join('');
}
async function openNotification(id){
  const n=notifications.find(x=>x.id===id);if(!n)return;
  if(!n.read){
    await sb.from('notifications').update({read:true}).eq('id',id);
    n.read=true;
    updateNotifBadge();
  }
  if(n.type==='msg'&&n.payload?.from){
    const fromId=n.payload.from;
    const{data:p}=await sb.from('profiles').select('*').eq('id',fromId).single();
    if(p)openDialog(fromId,p);
  }else if(n.type==='like'||n.type==='comment'){
    showCommunityScreen();
  }
  renderNotifications();
}
async function createNotification(userId,type,payload){
  try{
    const {data, error} = await sb.from('notifications').insert({user_id:userId,type,payload}).select();
    if(error) {
      console.error('❌ Ошибка создания уведомления (возможно RLS):', error);
    } else {
      console.log('✅ Уведомление создано в БД:', data);
    }
  }catch(e){
    console.error('Критическая ошибка уведомления:', e);
  }
}

// ─── ПУБЛИЧНЫЙ ПРОФИЛЬ ───
async function ensureSlug(){
  if(state.slug)return state.slug;
  const slug='u'+user.phone.slice(-6);
  await sb.from('profiles').update({public_slug:slug}).eq('id',user.id);
  state.slug=slug;saveState();
  return slug;
}
async function showPublicProfile(){
  await ensureSlug();
  document.getElementById('ppAva').textContent=state.avatar||'👤';
  document.getElementById('ppName').textContent=user.name||'Друг';
  let totalFire=0,totalBest=0,booksCount=0;
  BOOKS.forEach(b=>{
    const s=calcStreak(b.id),best=calcBest(b.id);
    totalFire=Math.max(totalFire,s);totalBest=Math.max(totalBest,best);
    if(countClosedDays(b.id)>0)booksCount++;
  });
  const lv=getLevel(countClosedDays(currentBook?.id||BOOKS[0]?.id||''));
  document.getElementById('ppStatus').textContent=`${lv.ico} ${lv.name}`;
  document.getElementById('ppFire').textContent=totalFire;
  document.getElementById('ppRecord').textContent=totalBest;
  document.getElementById('ppBooks').textContent=booksCount;
  hideAll();
  document.getElementById('publicProfileScreen').classList.remove('hidden');
}
async function copyPublicLink(){
  await ensureSlug(); // Ждем генерации ссылки
  const url='https://andger.ru/u/'+(state.slug||'me');
  copyToClipboard(url);
  toast('Скопировано');
}
async function sharePublicProfile(){
  await ensureSlug(); // Ждем генерации ссылки
  const url='https://andger.ru/u/'+(state.slug||'me');
  if(navigator.share) {
    navigator.share({title:user.name, text:'Мой прогресс в ANDGER', url});
  } else {
    copyPublicLink();
  }
}

// ─── РЕФЕРАЛ ───
async function ensureReferral(){
  if(state.referralCode)return state.referralCode;
  const code=(user.name||'user').toLowerCase().slice(0,5)+user.phone.slice(-4);
  await sb.from('profiles').update({referral_code:code}).eq('id',user.id);
  state.referralCode=code;saveState();
  return code;
}
async function copyReferral(){
  await ensureReferral();
  const url='https://andger.ru/?ref='+state.referralCode;
  copyToClipboard(url);
  toast('Скопировано');
}

// ─── ДНЕВНИК ───
let journalFilter = 'all'; // Глобальная переменная для фильтра

async function renderJournal(){
  document.getElementById('journalAvatar').textContent = state.avatar||'👤';
  
  // 1. Рисуем фильтры по книгам
  const filterWrap = document.getElementById('journalFilters');
  let filterHtml = `<div class="lib-filter ${journalFilter==='all'?'on':''}" onclick="setJournalFilter('all', this)">Все книги</div>`;
  let dotsHtml = `<div class="b-dot ${journalFilter==='all'?'on':''}"></div>`;
  
  BOOKS.forEach(b => {
    filterHtml += `<div class="lib-filter ${journalFilter===b.id?'on':''}" onclick="setJournalFilter('${b.id}', this)">${b.emoji} ${b.title}</div>`;
    dotsHtml += `<div class="b-dot ${journalFilter===b.id?'on':''}"></div>`;
  });
  filterWrap.innerHTML = filterHtml;
  document.getElementById('journalDots').innerHTML = dotsHtml;

  // 2. Тянем записи из БД
  let query = sb.from('notes').select('*').eq('user_id', user.id).order('created_at', {ascending: false});
  if (journalFilter !== 'all') {
    query = query.eq('book_id', journalFilter);
  }
  const { data: notes } = await query;

  // 3. Рисуем карточки записей
  let historyHtml = '';
  if (!notes || !notes.length) {
    historyHtml = '<div style="text-align:center; color:var(--muted); padding:40px 20px;">Пока нет записей.<br>Сделай практику и оставь заметку!</div>';
  } else {
    historyHtml = notes.map(n => {
      const d = new Date(n.created_at);
      const dateStr = `${d.getDate()} ${['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'][d.getMonth()]} · ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
      
      const b = BOOKS.find(x => x.id === n.book_id);
      const bookEmoji = b ? b.emoji : '📚';

      return `<div class="jh-entry" style="position:relative;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div style="font-size:11px; font-weight:800; color:var(--accent-2); text-transform:uppercase;">${bookEmoji} ${n.practice_title}</div>
          <div style="font-size:10px; color:var(--muted);">${dateStr}</div>
        </div>
        <div class="jh-a">${escapeHtml(n.text)}</div>
        <div style="text-align:right; margin-top:8px;">
          <span style="font-size:16px; color:var(--muted); cursor:pointer;" onclick="deleteNote(${n.id})">🗑</span>
        </div>
      </div>`;
    }).join('');
  }

  // 4. Статистика
  const statsHtml = `
    <div style="display:flex; gap:10px; margin-bottom:20px;">
      <div style="flex:1; background:linear-gradient(135deg, var(--card), var(--card2)); border:1px solid var(--border); border-radius:var(--radius-md); padding:16px; text-align:center; box-shadow: var(--shadow-sm);">
        <div style="font-size:28px; font-weight:900; color:var(--accent-2);">${notes ? notes.length : 0}</div>
        <div style="font-size:11px; color:var(--muted); text-transform:uppercase; font-weight:800; margin-top:4px; letter-spacing:1px;">Записей</div>
      </div>
    </div>
  `;

  document.getElementById('journalHistory').innerHTML = statsHtml + historyHtml;
  renderMoodTracker(); // Оставляем график настроения
  renderMoodChart();
}

function setJournalFilter(bookId, el) {
  journalFilter = bookId;
  renderJournal(); // Перерисовываем всё
  playClick();
}

async function deleteNote(noteId) {
  showCustomConfirm('Удалить запись?', 'Она пропадет из дневника навсегда.', async () => {
    await sb.from('notes').delete().eq('id', noteId);
    playSuccess();
    renderJournal();
  });
}
function dateToDay(bookId,date){
  const bs=getBookState(bookId);
  if(!bs.start)return '?';
  const start=new Date(bs.start+'T00:00:00');
  const d=new Date(date+'T00:00:00');
  return Math.floor((d-start)/86400000)+1;
}
async function saveJournal(){
  const today = todayStr();
  const q1 = document.getElementById('jq1').value;
  const q2 = document.getElementById('jq2').value;
  const q3 = document.getElementById('jq3').value;

  try {
    await sb.from('journals').upsert({
      user_id: user.id,
      date: today,
      q1: q1,
      q2: q2,
      q3: q3
    }, { onConflict: 'user_id,date' });

    playSuccess();
    const msg = document.getElementById('journalMsg');
    msg.textContent = '✓ Сохранено';
    setTimeout(() => msg.textContent = '', 2000);
    renderJournal(); // Перерисовываем, чтобы обновилась история
  } catch(e) {
    toast('Ошибка сохранения', 'danger');
  }
}

// ─── НАСТРОЕНИЕ ───
async function renderMoodTracker(){
  const today=todayStr();
  let moods={morning:null,evening:null};
  try{
    const{data}=await sb.from('moods').select('*').eq('user_id',user.id).eq('date',today).maybeSingle();
    if(data)moods=data;
  }catch(e){}
  ['morning','evening'].forEach(period=>{
    const el=document.getElementById('mood'+(period==='morning'?'Morning':'Evening'));
    if(!el)return;
    el.innerHTML=MOODS.map((m,i)=>
      `<div class="mood-emoji ${moods[period]===i+1?'on':''}" onclick="setMood('${period}',${i+1})">${m}</div>`
    ).join('');
  });
}
// ─── ГРАФИК НАСТРОЕНИЯ ───
async function renderMoodChart() {
  const wrap = document.getElementById('moodChartWrap');
  if (!wrap) return;

  // Получаем последние 7 дней
  const days = [];
  const dows = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']; // Воскресенье=0
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push({
      date: localDate(d),
      dow: dows[d.getDay()]
    });
  }

  try {
    const startDate = days[0].date;
    const { data } = await sb.from('moods').select('*').eq('user_id', user.id).gte('date', startDate);
    const moodsMap = {};
    (data || []).forEach(m => moodsMap[m.date] = m);

    let html = '';
    days.forEach(day => {
      const m = moodsMap[day.date] || {};
      let val = 0;
      let count = 0;
      if (m.morning) { val += m.morning; count++; }
      if (m.evening) { val += m.evening; count++; }
      
      const avg = count > 0 ? (val / count) : 0;
      const heightPct = Math.max(4, (avg / 5) * 100); // Минимальная высота 4%, чтобы полоска была видна
      const isEmpty = avg === 0;

      html += `
        <div class="mc-bar-wrap">
          <div class="mc-val">${isEmpty ? '' : avg.toFixed(1)}</div>
          <div class="mc-bar ${isEmpty ? 'empty' : ''}" style="height: ${isEmpty ? 4 : heightPct}%"></div>
          <div class="mc-label">${day.dow}</div>
        </div>
      `;
    });
    wrap.innerHTML = html;
  } catch (e) {
    console.error('Ошибка графика настроения:', e);
  }
}
async function setMood(period,val){
  const today=todayStr();
  playCheck();
  
  // 1. Мгновенно красим выбранный эмодзи (чтобы был отклик)
  const el=document.getElementById('mood'+(period==='morning'?'Morning':'Evening'));
  if(el){
    const emojis = el.querySelectorAll('.mood-emoji');
    emojis.forEach((e, idx) => {
      if (idx === val - 1) e.classList.add('on');
      else e.classList.remove('on');
    });
  }

  // 2. Сохраняем в базу данных
  try{
    await sb.from('moods').upsert({user_id:user.id,date:today,[period]:val},{onConflict:'user_id,date'});
    renderMoodChart();
  }catch(e){toast('Ошибка сохранения','danger')}
}

// ═══════════════════════════════════════════════
// СООБЩЕСТВО
// ═══════════════════════════════════════════════

let communityTab='feed';
function switchCommunityTab(tab,el){
  communityTab=tab;
  document.querySelectorAll('.tab-pill').forEach(t=>t.classList.remove('on'));
  if(el)el.classList.add('on');
  
  // Показываем/скрываем контент
  document.getElementById('communityFeed').classList.toggle('hidden',tab!=='feed');
  document.getElementById('communityChats').classList.toggle('hidden',tab!=='chats');
  document.getElementById('communityPeople').classList.toggle('hidden',tab!=='people');
  
  // Окно ввода показываем ТОЛЬКО в Ленте
  const inputWrap = document.getElementById('feedInputWrap');
  if(inputWrap) {
    inputWrap.style.display = (tab === 'feed') ? 'flex' : 'none';
  }

  if(tab==='feed')loadFeed();
  else if(tab==='chats')loadChats();
  else loadPeople();
}

// ─── ЛЕНТА ───
async function loadFeed(){
    // Показываем скелетоны, пока грузим данные
  document.getElementById('feedList').innerHTML = `
    <div class="skeleton skeleton-post">
      <div class="skeleton-post-head"><div class="skeleton skeleton-avatar"></div><div style="flex:1"><div class="skeleton skeleton-text-1" style="width:40%"></div><div class="skeleton skeleton-text-2" style="width:20%"></div></div></div>
      <div class="skeleton skeleton-post-text"></div>
    </div>
    <div class="skeleton skeleton-post">
      <div class="skeleton-post-head"><div class="skeleton skeleton-avatar"></div><div style="flex:1"><div class="skeleton skeleton-text-1" style="width:50%"></div><div class="skeleton skeleton-text-2" style="width:30%"></div></div></div>
      <div class="skeleton skeleton-post-text"></div>
    </div>
  `;
  const{data,error}=await sb.from('messages').select('*').eq('room','feed')
    .order('created_at',{ascending:false}).limit(50);
  if(error){
    document.getElementById('feedList').innerHTML='<div style="color:var(--danger);text-align:center;padding:20px">Ошибка</div>';
    return;
  }
  if(!data||!data.length){
    document.getElementById('feedList').innerHTML=
      '<div style="color:var(--muted);text-align:center;padding:40px 20px;font-size:14px">Пока пусто.<br>Напиши первое сообщение ✍️</div>';
    return;
  }
  const ids=data.map(m=>m.id);
  let likes=[],comments=[];
  try{
    const{data:l}=await sb.from('likes').select('*').in('message_id',ids);
    likes=l||[];
    const{data:c}=await sb.from('comments').select('*').in('message_id',ids).order('created_at');
    comments=c||[];
  }catch(e){}
    document.getElementById('feedList').innerHTML=data.map(m=>{
    const own=m.user_id===user.id;
    const t=timeAgo(m.created_at);
    const postLikes=likes.filter(l=>l.message_id===m.id);
    const postComments=comments.filter(c=>c.message_id===m.id);
    
    // Считаем лайки по типам
    const myLike = postLikes.find(l => l.user_id === user.id);
    const myType = myLike ? (myLike.type || 'heart') : null;
    
    const countHeart = postLikes.filter(l => (l.type === 'heart' || !l.type)).length;
    const countFire = postLikes.filter(l => l.type === 'fire').length;
    const countMuscle = postLikes.filter(l => l.type === 'muscle').length;
    const countClap = postLikes.filter(l => l.type === 'clap').length;
    
    return `<div class="feed-post">
      <div class="fp-head" onclick="viewUserProfile('${m.user_id}', 'feed')" style="cursor:pointer">
        <div class="fp-ava">${m.user_avatar||'👤'}</div>
        <div class="fp-info">
          <div class="fp-name">${escapeHtml(m.user_name||'Аноним')}${own?' · ты':''}</div>
          <div class="fp-time">${t}</div>
        </div>
      </div>
      <div class="fp-text">${escapeHtml(m.text)}</div>
            <div class="fp-actions" style="display:flex; justify-content:space-between; width:100%;">
        <div style="display:flex; gap:10px;">
                    <div class="fp-action ${myType === 'heart' ? 'on' : ''}" onclick="event.stopPropagation(); toggleLike(${m.id},'heart',this)">❤️ <span>${countHeart>0?countHeart:''}</span></div>
          <div class="fp-action ${myType === 'fire' ? 'on' : ''}" onclick="event.stopPropagation(); toggleLike(${m.id},'fire',this)">🔥 <span>${countFire>0?countFire:''}</span></div>
          <div class="fp-action ${myType === 'muscle' ? 'on' : ''}" onclick="event.stopPropagation(); toggleLike(${m.id},'muscle',this)">💪 <span>${countMuscle>0?countMuscle:''}</span></div>
          <div class="fp-action ${myType === 'clap' ? 'on' : ''}" onclick="event.stopPropagation(); toggleLike(${m.id},'clap',this)">👏 <span>${countClap>0?countClap:''}</span></div>
        </div>
                <div style="display:flex; gap:12px;">
          <div class="fp-action" onclick="event.stopPropagation(); toggleComments(${m.id})">💬 <span>${postComments.length}</span></div>
          <div class="fp-action" onclick="event.stopPropagation(); reportPost(${m.id},'${m.user_id}')" style="color:var(--danger);">🚩</div>
        </div>
      </div>
      <div class="feed-comments" id="comments-${m.id}">
        ${postComments.map(c=>`<div class="feed-comment"><div class="fc-ava">${c.user_avatar||'👤'}</div><div class="fc-body"><div class="fc-name">${escapeHtml(c.user_name||'Аноним')}</div><div class="fc-text">${escapeHtml(c.text)}</div></div></div>`).join('')}
        <div class="feed-comment-form"><input type="text" id="cin-${m.id}" placeholder="Ответить..." maxlength="300"><button class="feed-post-btn" style="width:36px;height:36px;font-size:16px" onclick="sendComment(${m.id},'${m.user_id}')">➤</button></div>
      </div>
    </div>`;
  }).join('');
}

async function sendFeedPost(){
  const inp=document.getElementById('feedInput');
  const text=inp.value.trim();
  if(!text)return;
  inp.value='';
  try{
    const{error}=await sb.from('messages').insert({
      user_id:user.id,
      user_name:user.name,
      user_avatar:state.avatar||'👤',
      room:'feed',
      text
    });
    if(error)throw error;
    playCheck();loadFeed();
  }catch(e){toast('Ошибка отправки','danger')}
}

async function toggleLike(msgId, type, el){
  // Мгновенный визуальный отклик (оптимистичный UI)
  const isCurrentlyOn = el.classList.contains('on');
  const postEl = el.closest('.feed-post');
  
  if (postEl) {
    // Убираем подсветку у всех реакций в этом посте
    postEl.querySelectorAll('.fp-action').forEach(btn => btn.classList.remove('on'));
    // Если реакция не была нажата ранее, подсвечиваем текущую
    if (!isCurrentlyOn) el.classList.add('on');
  }

  try{
    const{data:existing}=await sb.from('likes').select('*')
      .eq('message_id',msgId).eq('user_id',user.id).maybeSingle();

    if(existing){
      if (existing.type === type || (!existing.type && type === 'heart')) {
        // Удаляем лайк
        await sb.from('likes').delete().eq('message_id',msgId).eq('user_id',user.id);
      } else {
        // Меняем тип лайка
        await sb.from('likes').update({type: type}).eq('message_id',msgId).eq('user_id',user.id);
        playCheck();
      }
    } else {
      // Ставим новый лайк
      await sb.from('likes').insert({message_id:msgId, user_id:user.id, type: type});
      playCheck();
      
      const{data:post}=await sb.from('messages').select('user_id').eq('id',msgId).single();
      if(post&&post.user_id!==user.id){
        await createNotification(post.user_id,'like',{
          text:(user.name||'Кто-то')+' отреагировал на твой пост',
          from:user.id,
          msg_id:msgId
        });
      }
    }

    // Обновляем цифры конкретно для этого поста (без перезагрузки всей ленты)
    if(postEl) {
      const {data: allLikes} = await sb.from('likes').select('*').eq('message_id', msgId);
      const actions = postEl.querySelectorAll('.fp-action');
      const types = ['heart', 'fire', 'muscle', 'clap'];
      const emojis = ['❤️', '🔥', '💪', '👏'];
      const myLike = (allLikes || []).find(l => l.user_id === user.id);
      const myType = myLike ? (myLike.type || 'heart') : null;

      types.forEach((t, i) => {
        const count = (allLikes || []).filter(l => (l.type === t || (!l.type && t === 'heart'))).length;
        const actionDiv = Array.from(actions).find(a => a.textContent.includes(emojis[i]));
        if (actionDiv) {
          actionDiv.innerHTML = `${emojis[i]} <span>${count > 0 ? count : ''}</span>`;
          if (myType === t) actionDiv.classList.add('on');
          else actionDiv.classList.remove('on');
        }
      });
    }

  }catch(e){
    console.error(e);
    toast('Ошибка','danger');
    if(postEl) loadFeed(); // Откат в случае ошибки сети
  }
}

function toggleComments(msgId){
  const el=document.getElementById('comments-'+msgId);
  if(el)el.classList.toggle('open');
}

async function sendComment(msgId,postAuthorId){
  const inp=document.getElementById('cin-'+msgId);
  const text=inp.value.trim();
  if(!text)return;
  inp.value='';
  try{
    await sb.from('comments').insert({
      message_id:msgId,
      user_id:user.id,
      user_name:user.name,
      user_avatar:state.avatar||'👤',
      text
    });
    playCheck();
    if(postAuthorId&&postAuthorId!==user.id){
      await createNotification(postAuthorId,'comment',{
        text:(user.name||'Кто-то')+': '+text.slice(0,50),
        from:user.id,
        msg_id:msgId
      });
    }
    loadFeed();
  }catch(e){toast('Ошибка','danger')}
}

// ─── REALTIME ЛЕНТА ───
function subscribeFeed(){
  if(feedChannel)return;
  feedChannel=sb.channel('feed-rt')
    .on('postgres_changes',{event:'*',schema:'public',table:'messages',filter:'room=eq.feed'},()=>{
      if(communityTab==='feed'&&!document.getElementById('communityScreen').classList.contains('hidden')){
        loadFeed();
      }
    })
    .on('postgres_changes',{event:'*',schema:'public',table:'likes'},()=>{
      if(communityTab==='feed'&&!document.getElementById('communityScreen').classList.contains('hidden')){
        loadFeed();
      }
    })
    .on('postgres_changes',{event:'*',schema:'public',table:'comments'},()=>{
      if(communityTab==='feed'&&!document.getElementById('communityScreen').classList.contains('hidden')){
        loadFeed();
      }
    })
    .subscribe();
}
// ─── СПИСОК ЧАТОВ ───
async function loadChats(){
  const el=document.getElementById('chatsList');
  if(!el)return;

  // 1. Показываем скелетоны при загрузке
  el.innerHTML = `
    <div class="skeleton skeleton-book"><div class="skeleton skeleton-avatar" style="border-radius:50%"></div><div style="flex:1"><div class="skeleton skeleton-text-1"></div><div class="skeleton skeleton-text-2"></div></div></div>
    <div class="skeleton skeleton-book"><div class="skeleton skeleton-avatar" style="border-radius:50%"></div><div style="flex:1"><div class="skeleton skeleton-text-1"></div><div class="skeleton skeleton-text-2"></div></div></div>
  `;

  try{
    const{data:msgs,error}=await sb.from('private_messages')
      .select('*')
      .or(`from_user.eq.${user.id},to_user.eq.${user.id}`)
      .order('created_at',{ascending:false})
      .limit(200);
      
    if(error)throw error;

    // Группируем по собеседнику — берём последнее сообщение
    const dialogs={};
    (msgs||[]).forEach(m=>{
      const otherId=m.from_user===user.id?m.to_user:m.from_user;
      if(!dialogs[otherId])dialogs[otherId]={otherId,last:m,unread:0};
      if(m.to_user===user.id&&!m.read)dialogs[otherId].unread++;
    });

    const ids=Object.keys(dialogs);
    if(!ids.length){
      el.innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px;font-size:14px">Пока нет диалогов.<br><br>Найди человека в разделе «Сообщество» и напиши ему 👥</div>';
      return;
    }

    const{data:profiles}=await sb.from('profiles').select('id,name,avatar').in('id',ids);
    const profMap={};
    (profiles||[]).forEach(p=>profMap[p.id]=p);

    let html='<div class="chats-list">';
    ids.forEach(id=>{
      const d=dialogs[id];
      const p=profMap[id]||{name:'Участник',avatar:'👤'};
      const preview=d.last.from_user===user.id?'Ты: ':'';
      html+=`<div class="chat-row">
        <div class="cr-ava" onclick="event.stopPropagation(); viewUserProfile('${id}', 'chats')" style="cursor:pointer;">${p.avatar||'👤'}</div>
        <div class="cr-info" onclick="openDialog('${id}')" style="cursor:pointer;">
          <div class="cr-name">
            <span onclick="event.stopPropagation(); viewUserProfile('${id}', 'chats')">${escapeHtml(p.name||'Участник')}</span>
            <span class="cr-time">${timeAgo(d.last.created_at)}</span>
          </div>
          <div class="cr-preview">${preview}${escapeHtml((d.last.text||'').slice(0,40))}</div>
        </div>
        ${d.unread>0?`<div class="cr-unread">${d.unread}</div>`:''}
      </div>`;
    });
    html+='</div>';
    el.innerHTML=html;

  }catch(e){
    el.innerHTML='<div style="color:var(--danger);text-align:center;padding:20px">Ошибка загрузки</div>';
  }
}

// ─── ОТКРЫТЬ ДИАЛОГ ───
let currentDialogProfile=null;
async function openDialog(otherId,p){
  if(otherId===user.id){toast('Это ты 😄','warm');return}
  currentDialogUserId=otherId;
  if(!p){
    const{data}=await sb.from('profiles').select('id,name,avatar').eq('id',otherId).single();
    p=data||{name:'Участник',avatar:'👤'};
  }
  currentDialogProfile=p;
  document.getElementById('dialogName').textContent=(p.name||'Участник').toUpperCase();
  
  // Показываем статус
  const statusEl = document.getElementById('dialogStatus');
  if (statusEl) {
    if (p.last_seen) {
      const diffMins = Math.floor((Date.now() - new Date(p.last_seen).getTime()) / 60000);
      if (diffMins < 2) {
        statusEl.textContent = 'в сети'; // Меньше 2 минут назад
        statusEl.style.color = 'var(--success)'; // Зеленый
      } else {
        statusEl.textContent = 'был(а) ' + timeAgo(p.last_seen);
        statusEl.style.color = 'var(--muted)';
      }
    } else {
      statusEl.textContent = 'недавно';
    }
  }
  document.getElementById('dialogMessages').innerHTML='<div style="color:var(--muted);text-align:center;padding:20px">Загрузка...</div>';
  hideAll();
  document.getElementById('dialogScreen').classList.remove('hidden');
  document.getElementById('dialogInputWrap').style.display='flex';
  window.scrollTo(0, document.body.scrollHeight);
  window.scrollTo(0,0);

  // Пометить входящие как прочитанные
  try{
    await sb.from('private_messages').update({read:true})
      .eq('from_user',otherId).eq('to_user',user.id).eq('read',false);
  }catch(e){}

  await loadDialog();
  subscribeDialog();
  setTimeout(()=>{
    const inp=document.getElementById('dialogInput');
    if(inp)inp.focus();
  },300);
    // Слушаем ввод текста, чтобы отправить сигнал "Печатает..."
  const inp = document.getElementById('dialogInput');
  if(inp) {
    inp.addEventListener('input', () => {
      if(dialogChannel) {
        dialogChannel.send({
          type: 'broadcast',
          event: 'typing',
          payload: { user_id: user.id }
        });
      }
    });
  }
}

async function loadDialog(){
  if(!currentDialogUserId)return;
  const el=document.getElementById('dialogMessages');
  try{
    const{data,error}=await sb.from('private_messages')
      .select('*')
      .or(`and(from_user.eq.${user.id},to_user.eq.${currentDialogUserId}),and(from_user.eq.${currentDialogUserId},to_user.eq.${user.id})`)
      .order('created_at',{ascending:true})
      .limit(100);
    if(error)throw error;
    if(!data||!data.length){
      el.innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px;font-size:13px">Напиши первым 👋</div>';
      return;
    }
        el.innerHTML=data.map(m=>{
      const own=m.from_user===user.id;
      const t=new Date(m.created_at).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});
      
      // Логика галочек: если сообщение мое, показываем статус
      let tick = '';
      if (own) {
        if (m.read) {
          // Прочитано (две фиолетовые галочки)
          tick = '<span style="color:#7c5cff; margin-left:4px; font-weight:bold;">✓✓</span>';
        } else {
          // Отправлено (одна серая галочка)
          tick = '<span style="color:rgba(255,255,255,0.4); margin-left:4px;">✓</span>';
        }
      }

      return `<div class="msg-bubble ${own?'own':'other'}">${escapeHtml(m.text)}<span class="msg-time">${t} ${tick}</span></div>`;
    }).join('');
    el.scrollTop=el.scrollHeight;
    window.scrollTo(0,document.body.scrollHeight);
  }catch(e){
    el.innerHTML='<div style="color:var(--danger);text-align:center;padding:20px">Ошибка</div>';
  }
}

async function sendPrivateMessage(){
  const inp=document.getElementById('dialogInput');
  const text=inp.value.trim();
  if(!text||!currentDialogUserId)return;
  inp.value='';
  try{
    await sb.from('private_messages').insert({
      from_user:user.id,
      to_user:currentDialogUserId,
      text
    });
    playCheck();
    // Уведомление получателю
    await createNotification(currentDialogUserId,'msg',{
      text:(user.name||'Кто-то')+': '+text.slice(0,50),
      from:user.id
    });
    await loadDialog();
  }catch(e){toast('Ошибка отправки','danger')}
}

function subscribeDialog(){
  if(dialogChannel)sb.removeChannel(dialogChannel);
  if(!currentDialogUserId)return;
  
  dialogChannel=sb.channel('dialog-'+currentDialogUserId)
    .on('postgres_changes',
      {event:'INSERT',schema:'public',table:'private_messages',filter:`to_user=eq.${user.id}`},
      (payload)=>{
        if(payload.new.from_user===currentDialogUserId){
          loadDialog();
          sb.from('private_messages').update({read:true}).eq('id',payload.new.id).then(()=>{});
        }
      })
    // ДОБАВЛЯЕМ СЛУШАТЕЛЬ "ПЕЧАТАЕТ..."
    .on('broadcast', { event: 'typing' }, (payload) => {
      if(payload.payload.user_id !== user.id) {
        const indicator = document.getElementById('typingIndicator');
        if(indicator) {
          indicator.style.display = 'block';
          
          // Скрываем через 2 секунды после последнего ввода
          clearTimeout(window.typingTimeout);
          window.typingTimeout = setTimeout(() => {
            indicator.style.display = 'none';
          }, 2000);
        }
      }
    })
    .subscribe();
}

// ─── ЛЮДИ / ТОП ───
async function loadPeople(){
  const el=document.getElementById('leadersList');
  if(!el)return;
  el.innerHTML='<div style="color:var(--muted);text-align:center;padding:20px">Загрузка...</div>';
  try{
    const weekAgo=new Date(Date.now()-7*86400000).toISOString();
    const{data:profiles}=await sb.from('profiles').select('id,name,avatar');
    const{data:prog}=await sb.from('progress').select('*');

    const scores={};
    (prog||[]).forEach(p=>{
      const d=p.data||{},days=d.days||{};
      let closed=0;
      Object.keys(days).forEach(k=>{
        if(days[k].closed&&k>=weekAgo.slice(0,10))closed++;
      });
      scores[p.user_id]=(scores[p.user_id]||0)+closed;
    });

    const list=(profiles||[])
      .filter(p=>p.id!==user.id)
      .map(p=>({...p,score:scores[p.id]||0}))
      .sort((a,b)=>b.score-a.score)
      .slice(0,30);

    if(!list.length){
      el.innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px">Пока никого нет</div>';
      return;
    }

    const top3=list.slice(0,3);
    const rest=list.slice(3);

    let html='';
    // Топ-3
    if(top3.some(p=>p.score>0)){
      html+='<h3 class="section-title">🔥 Топ недели</h3>';
      top3.forEach((p,i)=>{
        if(p.score<=0)return;
        const medal=['🥇','🥈','🥉'][i];
        html+=`<div class="admin-item" onclick="viewUserProfile('${p.id}', 'people')">
          <div class="ai-ava">${p.avatar||'👤'}</div>
          <div class="ai-info">
            <div class="ai-name">${escapeHtml(p.name||'Аноним')}</div>
            <div class="ai-phone">🔥 ${p.score} ${plural(p.score,'день','дня','дней')} за неделю</div>
          </div>
          <div style="font-size:22px">${medal}</div>
        </div>`;
      });
    }
    // Остальные
    if(rest.length){
      html+='<h3 class="section-title">👥 Все участники</h3>';
      rest.forEach(p=>{
        html+=`<div class="admin-item" onclick="viewUserProfile('${p.id}', 'people')">
          <div class="ai-ava">${p.avatar||'👤'}</div>
          <div class="ai-info">
            <div class="ai-name">${escapeHtml(p.name||'Аноним')}</div>
            <div class="ai-phone">${p.score>0?'🔥 '+p.score+' за неделю':'Без активности'}</div>
          </div>
          <div class="ai-arrow">›</div>
        </div>`;
      });
    }
    el.innerHTML=html;
  }catch(e){
    el.innerHTML='<div style="color:var(--danger);text-align:center;padding:20px">Ошибка загрузки</div>';
  }
}

async function openUserProfile(userId){
  if(userId===user.id){showProfile();return}
  const{data:p}=await sb.from('profiles').select('id,name,avatar').eq('id',userId).single();
  if(!p)return;
  const ok=confirm('Написать '+(p.name||'участнику')+'?');
  if(ok)openDialog(userId,p);
}

// ─── ГЛОБАЛЬНЫЕ REALTIME-КАНАЛЫ ───
function subscribeNotifications(){
  if(notificationsChannel)return;
  notificationsChannel=sb.channel('notif-'+user.id)
    .on('postgres_changes',
      {event:'INSERT',schema:'public',table:'notifications',filter:`user_id=eq.${user.id}`},
      (payload)=>{
        notifications.unshift(payload.new);
        updateNotifBadge();
        // Если внутри приложения на экране уведомлений — обновить
        const notifScreen=document.getElementById('notificationsScreen');
        if(notifScreen&&!notifScreen.classList.contains('hidden'))renderNotifications();
        // Показать тост
        if(payload.new.type==='msg'){
          toast('💬 Новое сообщение');
          playCheck();
        }else if(payload.new.type==='like'){
          toast('❤️ Новый лайк');
        }else if(payload.new.type==='comment'){
          toast('💬 Новый комментарий');
        }
      })
    .subscribe();
}
// ═══════════════════════════════════════════════
// АДМИНКА
// ═══════════════════════════════════════════════

function switchAdminTab(tab,el){
  document.querySelectorAll('.admin-tab').forEach(t=>t.classList.remove('on'));
  if(el)el.classList.add('on');
  ['adminUsers','adminBooks','adminAnalytics','adminSystem'].forEach(id=>{
    document.getElementById(id)?.classList.add('hidden');
  });
  if(tab==='users'){
    document.getElementById('adminUsers').classList.remove('hidden');
    loadAdminUsers();
  }else if(tab==='books'){
    document.getElementById('adminBooks').classList.remove('hidden');
    loadAdminBooks();
  }else if(tab==='analytics'){
    document.getElementById('adminAnalytics').classList.remove('hidden');
    renderAnalytics();
  }else if(tab==='reports'){
    document.getElementById('adminReports').classList.remove('hidden');
    loadAdminReports();
  }else if(tab==='system'){
    document.getElementById('adminSystem').classList.remove('hidden');
    renderSystem();
    loadAdminQuotes();}
}

async function showAdmin(){
  if(!isAdmin())return;
  hideAll();
  document.getElementById('adminScreen').classList.remove('hidden');
  document.getElementById('adminDetailWrap').innerHTML='';
  document.getElementById('adminSearch').value='';
    adminFilter='all';
  document.querySelectorAll('.admin-filter').forEach((f,i)=>f.classList.toggle('on',i===0));
    adminFilter='all';
  document.querySelectorAll('.admin-filter').forEach((f,i)=>f.classList.toggle('on',i===0));
  document.querySelectorAll('.admin-tab').forEach((t,i)=>t.classList.toggle('on',i===0));
  ['adminBooks','adminAnalytics','adminSystem'].forEach(id=>document.getElementById(id)?.classList.add('hidden'));
  document.getElementById('adminUsers').classList.remove('hidden');
  await loadAdminUsers();
}

async function loadAdminUsers(){
  const{data,error}=await sb.from('profiles').select('*').order('created_at',{ascending:false});
  if(error){
    document.getElementById('adminUserList').innerHTML='<div style="color:var(--danger);padding:20px;text-align:center">Ошибка загрузки</div>';
    return;
  }
  adminAllUsers=data||[];
  const now=Date.now();
  const active=adminAllUsers.filter(p=>p.last_seen&&(now-new Date(p.last_seen).getTime())<30*86400000).length;
  const today=adminAllUsers.filter(p=>p.last_seen&&p.last_seen.slice(0,10)===todayStr()).length;
  document.getElementById('adminUsersCount').textContent=adminAllUsers.length;
  document.getElementById('adminActiveCount').textContent=active;
  document.getElementById('adminTodayCount').textContent=today;
  renderAdminList(adminAllUsers);
}

function renderAdminList(list){
  if(!list.length){
    document.getElementById('adminUserList').innerHTML='<div style="color:var(--muted);text-align:center;padding:20px">Никого не найдено</div>';
    return;
  }
  document.getElementById('adminUserList').innerHTML=list.map(p=>{
    const isMe=p.id===user.id;
    const phone=isMe?user.phone:(p.phone||'');
    const phoneShown=phone?'+7 ('+phone.slice(1,4)+') '+phone.slice(4,7)+'-'+phone.slice(7,9)+'-'+phone.slice(9):'—';
    return `<div class="admin-item" onclick="openAdminUser('${p.id}')">
      <div class="ai-ava">${p.avatar||'👤'}</div>
      <div class="ai-info">
        <div class="ai-name">${escapeHtml(p.name||'Без имени')} ${p.is_admin?'👑':''} ${isMe?'(ты)':''} ${p.blocked?'🚫':''}</div>
        <div class="ai-phone">${phoneShown}</div>
      </div>
      <div class="ai-arrow">›</div>
    </div>`;
  }).join('');
}

function setAdminFilter(f,el){
  adminFilter=f;
  document.querySelectorAll('.admin-filter').forEach(x=>x.classList.remove('on'));
  if(el)el.classList.add('on');
  filterAdmin();
}
function filterAdmin(){
  const q=document.getElementById('adminSearch').value.toLowerCase().trim();
  let list=[...adminAllUsers];
  if(adminFilter==='active'){
    const now=Date.now();
    list=list.filter(p=>p.last_seen&&(now-new Date(p.last_seen).getTime())<30*86400000);
  }else if(adminFilter==='blocked'){
    list=list.filter(p=>p.blocked===true);
  }else if(adminFilter==='admin'){
    list=list.filter(p=>p.is_admin===true);
  }else if(adminFilter==='sub'){
    const now = new Date();
    list=list.filter(p=>p.sub_until && new Date(p.sub_until) > now);
  }
  
  if(q){
    list=list.filter(p=>{
      const name=(p.name||'').toLowerCase();
      const isMe=p.id===user.id;
      const phone=isMe?user.phone:(p.phone||'');
      return name.includes(q)||phone.includes(q.replace(/\D/g,''));
    });
  }
  renderAdminList(list);
}

async function openAdminUser(id){
  const wrap = document.getElementById('adminDetailWrap');
  wrap.dataset.openUserId = id;

  const p=adminAllUsers.find(x=>x.id===id);if(!p)return;
  const isMe=p.id===user.id;
  const phone=isMe?user.phone:(p.phone || 'Нет данных');
  const{data:prog}=await sb.from('progress').select('*').eq('user_id',id);
  
  let closed=0,journal=0;
  (prog||[]).forEach(pr=>{
    const d=pr.data||{},days=d.days||{};
    closed+=Object.keys(days).filter(k=>days[k].closed).length;
    const j=d.journal||{};
    journal+=Object.keys(j).filter(k=>{
      const x=j[k];return x.q1||x.q2||x.q3;
    }).length;
  });
  
  const regDate=p.created_at?new Date(p.created_at).toLocaleDateString('ru'):'—';
  const lastSeen=p.last_seen?new Date(p.last_seen).toLocaleString('ru', {day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit'}):'—';
  const access=p.book_access||[];
  
  let isSubActive = false;
  let subDateText = 'Нет подписки';
  if (p.sub_until) {
    const subDate = new Date(p.sub_until);
    if (subDate > new Date()) {
      isSubActive = true;
      subDateText = 'Активна до ' + subDate.toLocaleDateString('ru-RU');
    } else {
      subDateText = 'Истекла ' + subDate.toLocaleDateString('ru-RU');
    }
  }
  
  const booksHtml=BOOKS.map(b=>{
    let has = p.is_admin || access.includes(b.id);
    return `<div class="admin-book-row">
      <div class="ab-title"><span>${b.emoji}</span><span>${b.title}</span></div>
      <div class="toggle-switch ${has?'on':''}" onclick="event.stopPropagation();toggleBookAccess('${id}','${b.id}',${!has})"></div>
    </div>`;
  }).join('');
  
  document.getElementById('adminDetailWrap').innerHTML=`
    <div class="admin-detail">
      <div class="ad-head" style="justify-content:space-between;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div class="ad-ava">${p.avatar||'👤'}</div>
          <div>
            <h3>${escapeHtml(p.name||'Без имени')} ${p.is_admin?'👑':''}</h3>
            <p>${isMe?'Это ты':''}${p.blocked?' · 🚫 Заблокирован':''}</p>
          </div>
        </div>
        <span onclick="document.getElementById('adminDetailWrap').innerHTML=''" style="color:var(--muted); cursor:pointer; font-size:24px; line-height:1; padding:0 10px;">︿</span>
      </div>
      <div class="admin-row"><span>Имя</span><span>${escapeHtml(p.name||'—')}</span></div>
      <div class="admin-row"><span>Телефон</span><span>${(phone && phone !== 'Нет данных') ? '+7 ('+phone.slice(1,4)+') '+phone.slice(4,7)+'-'+phone.slice(7,9)+'-'+phone.slice(9) : 'Нет данных'}</span></div>
      <div class="admin-row"><span>Регистрация</span><span>${regDate}</span></div>
      <div class="admin-row"><span>Последний визит</span><span>${lastSeen}</span></div>
      <div class="admin-row"><span>Закрыто дней</span><span>${closed}</span></div>
      <div class="admin-row"><span>Записей</span><span>${journal}</span></div>
      
      <div class="admin-row" style="border-bottom:none; margin-top:10px;">
        <span>Подписка</span>
        <span style="color:${isSubActive ? 'var(--success)' : 'var(--muted)'}">${subDateText}</span>
      </div>
      <div style="display:flex; gap:8px; margin-bottom:16px;">
        <button class="admin-action" style="flex:1; background:var(--accent) !important; color:#fff !important; border:none;" onclick="adminGrantSub('${id}', 30)">🎁 +1 Месяц</button>
        ${isSubActive ? `<button class="admin-action danger" style="flex:1;" onclick="adminGrantSub('${id}', 0)">❌ Забрать</button>` : ''}
      </div>
      
      <div style="margin-top:16px">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;font-weight:800">📚 Доступ к книгам</div>
          <div style="display:flex; gap:6px;">
            <button class="btn-small-inline" style="margin-top:0; padding:6px 10px; font-size:10px; background:var(--success);" onclick="event.stopPropagation(); setAllBooksAccess('${id}', true)">Включить все</button>
            <button class="btn-small-inline" style="margin-top:0; padding:6px 10px; font-size:10px; background:var(--danger);" onclick="event.stopPropagation(); setAllBooksAccess('${id}', false)">Выключить все</button>
          </div>
        </div>
        <div class="admin-books">${booksHtml}</div>
      </div>
      
      ${!isMe?`<div class="admin-actions">
        <button class="admin-action" onclick="adminSendMessage('${id}')">💬 Написать</button>
        <button class="admin-action ${p.blocked?'':'warn'}" onclick="adminToggleBlock('${id}',${!p.blocked})">${p.blocked?'✓ Разблокировать':'🚫 Заблокировать'}</button>
        <button class="admin-action gold" onclick="adminToggleAdmin('${id}',${!p.is_admin})">${p.is_admin?'↓ Снять админа':'👑 Сделать админом'}</button>
        <button class="admin-action danger" onclick="adminDelete('${id}')">🗑 Удалить</button>
      </div>`:''}
    </div>`;
  document.getElementById('adminDetailWrap').scrollIntoView({behavior:'smooth'});
}

async function adminToggleBlock(id,blocked){
  if(!confirm(blocked?'Заблокировать участника?':'Разблокировать?'))return;
  await sb.from('profiles').update({blocked,blocked_reason:blocked?'Нарушение правил':null}).eq('id',id);
  await logAdmin('block',id,{blocked});
  await loadAdminUsers();openAdminUser(id);playSuccess();
}

async function adminToggleAdmin(id,makeAdmin){
  if(!confirm(makeAdmin?'Сделать админом?':'Снять права админа?'))return;
  await sb.from('profiles').update({is_admin:makeAdmin}).eq('id',id);
  await logAdmin('admin',id,{makeAdmin});
  await loadAdminUsers();openAdminUser(id);playSuccess();
}

async function adminDelete(id){
  if(!confirm('УДАЛИТЬ участника? Данные будут удалены навсегда.'))return;
  if(!confirm('Точно уверен?'))return;
  try{
    await sb.rpc('delete_user_completely',{target_id:id});
    await logAdmin('delete',id,{});
    alert('Участник удалён');
  }catch(e){
    await sb.from('progress').delete().eq('user_id',id);
    await sb.from('profiles').delete().eq('id',id);
    alert('Профиль удалён (auth-запись может остаться)');
  }
  await loadAdminUsers();
  document.getElementById('adminDetailWrap').innerHTML='';
}

async function adminSendMessage(id){
  const{data:p}=await sb.from('profiles').select('id,name,avatar').eq('id',id).single();
  if(p)openDialog(id,p);
}

async function toggleBookAccess(userId,bookId,grant){
  const p=adminAllUsers.find(x=>x.id===userId);if(!p)return;
  let access=[...(p.book_access||[])];
  if(access.length===0&&bookAccessMode==='individual'){
    access=BOOKS.map(b=>b.id);
  }
  if(grant){if(!access.includes(bookId))access.push(bookId)}
  else access=access.filter(x=>x!==bookId);
  await sb.from('profiles').update({book_access:access}).eq('id',userId);
  await logAdmin('grant_book',userId,{book:bookId,grant});
  p.book_access=access;
  playCheck();
  openAdminUser(userId);
}

async function logAdmin(action,targetId,meta){
  try{
    await sb.from('admin_logs').insert({
      admin_id:user.id,action,target_id:targetId,meta:meta||{}
    });
  }catch(e){}
}

// ─── АНАЛИТИКА ───
async function renderAnalytics(){
  const total=adminAllUsers.length;
  const active30=adminAllUsers.filter(p=>p.last_seen&&(Date.now()-new Date(p.last_seen).getTime())<30*86400000).length;
  const active7=adminAllUsers.filter(p=>p.last_seen&&(Date.now()-new Date(p.last_seen).getTime())<7*86400000).length;
  const today=adminAllUsers.filter(p=>p.last_seen&&p.last_seen.slice(0,10)===todayStr()).length;
  const blocked=adminAllUsers.filter(p=>p.blocked).length;
  const admins=adminAllUsers.filter(p=>p.is_admin).length;

  // Retention
  const{data:prog}=await sb.from('progress').select('*');
  const activeUsers=new Set((prog||[]).map(p=>p.user_id));
  const d1=activeUsers.size;

  document.getElementById('analyticsContent').innerHTML=`
    <div class="admin-summary">
      <div><div class="as-num">${total}</div><div class="as-lbl">Всего</div></div>
      <div><div class="as-num">${active30}</div><div class="as-lbl">30 дней</div></div>
      <div><div class="as-num">${active7}</div><div class="as-lbl">7 дней</div></div>
    </div>
    <div class="admin-summary">
      <div><div class="as-num">${today}</div><div class="as-lbl">Сегодня</div></div>
      <div><div class="as-num">${BOOKS.length}</div><div class="as-lbl">Книг</div></div>
      <div><div class="as-num">${Math.round(active7/Math.max(total,1)*100)}%</div><div class="as-lbl">Активность</div></div>
    </div>
    <div class="admin-detail" style="margin-top:14px">
      <h3 style="font-size:14px;margin-bottom:10px">👥 Воронка</h3>
      <div class="admin-row"><span>Зарегистрировано</span><span>${total}</span></div>
      <div class="admin-row"><span>С прогрессом</span><span>${d1}</span></div>
      <div class="admin-row"><span>Активны за 7 дней</span><span>${active7}</span></div>
      <div class="admin-row"><span>Активны сегодня</span><span>${today}</span></div>
      <div class="admin-row"><span>Заблокированы</span><span>${blocked}</span></div>
      <div class="admin-row"><span>Админов</span><span>${admins}</span></div>
    </div>`;
}

// ─── СИСТЕМА ───
async function renderSystem(){
  document.getElementById('systemContent').innerHTML=`
    <div class="admin-detail" style="margin-top:12px">
      <h3 style="font-size:14px;margin-bottom:10px">⚙️ Глобальные настройки</h3>
      
      <div class="admin-row" style="padding:14px 0; border-bottom:none; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span style="display:block; font-weight:800; color:var(--text); margin-bottom:4px;">Режим доступа к книгам</span>
          <span style="font-size:11px; color:var(--muted);">Всем открыто или по подписке</span>
        </div>
        <div class="toggle-switch ${bookAccessMode === 'everyone' ? 'on' : ''}" onclick="toggleBookAccessMode()"></div>
      </div>
      
    </div>
  `;
}

async function toggleBookAccessMode() {
  bookAccessMode = bookAccessMode === 'everyone' ? 'individual' : 'everyone';
  try {
    await sb.from('app_settings').upsert({key:'book_access_mode', value:bookAccessMode}, {onConflict:'key'});
    toast(bookAccessMode === 'everyone' ? 'Режим: Всем открыто' : 'Режим: Индивидуально');
    playCheck();
    renderSystem(); // Перерисовываем кнопку
  } catch(e) {
    toast('Ошибка сохранения', 'danger');
  }
}

function exportUsers(){
  if(!adminAllUsers.length)return;
  const rows=[['Имя','Телефон','Регистрация','Последний визит','Админ','Заблокирован']];
  adminAllUsers.forEach(p=>{
    rows.push([
      p.name||'',
      p.phone||'',
      p.created_at?new Date(p.created_at).toLocaleDateString('ru'):'',
      p.last_seen?new Date(p.last_seen).toLocaleDateString('ru'):'',
      p.is_admin?'да':'нет',
      p.blocked?'да':'нет'
    ]);
  });
  const csv=rows.map(r=>r.map(c=>`"${(c||'').toString().replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download='andger_users_'+todayStr()+'.csv';
  a.click();
  URL.revokeObjectURL(url);
  toast('CSV скачан');
}

// ─── РЕДАКТОР КНИГ ───

function showBookEditor(id){
  editingBookId=id||null;
  const b=id?BOOKS.find(x=>x.id===id):null;

  // --- ДОБАВЛЯЕМ СБОР КАТЕГОРИЙ ---
  const catList = document.getElementById('edCategoryList');
  if(catList) {
    const uniqueCats = [...new Set(BOOKS.map(book => book.category).filter(Boolean))];
    catList.innerHTML = uniqueCats.map(c => `<option value="${c}"></option>`).join('');
  }
  
  // Безопасное присваивание (если элемента нет, приложение не упадёт)
  const setVal = (elId, val) => { const el = document.getElementById(elId); if(el) el.value = val; };
  
  setVal('edTitle', b?.title||'');
  setVal('edAuthor', b?.author||'');
  setVal('edEmoji', b?.emoji||'');
  setVal('edDays', b?.days||30);
  setVal('edCategory', b?.category || 'Разное');
  setVal('edAbout', b?.about||'');
  setVal('edMethod', (b?.method && Array.isArray(b.method)) ? b.method.join(', ') : '');
  setVal('edAuthorBio', b?.authorBio || '');
  setVal('edForWhom', b?.forWhom || '');
  setVal('edResult', b?.result || '');
  setVal('edPractices', b?.practices ? JSON.stringify(b.practices, null, 2) : '');
  
  window._tempQuotes = b?.quotes || [];
  const errEl = document.getElementById('edErr');
  if(errEl) errEl.textContent='';
  
// Показываем кнопку удаления только для существующих книг
  const delBtn = document.getElementById('edDeleteBtn');
  if (delBtn) delBtn.style.display = id ? 'block' : 'none';

  hideAll();
  document.getElementById('bookEditorScreen').classList.remove('hidden');
}
function backFromBookEditor(){
  hideAll();
  document.getElementById('adminScreen').classList.remove('hidden');
  loadAdminBooks();
}

async function loadAdminBooks(){
  const el=document.getElementById('adminBookList');
  if(!el)return;
  const{data}=await sb.from('books').select('*').order('created_at',{ascending:false});
  adminAllBooks=data||[];
  if(!adminAllBooks.length){
    el.innerHTML='<div style="color:var(--muted);text-align:center;padding:20px;font-size:13px">В базе пока нет книг.<br>Все книги — из JS-файлов (books/*.js).</div>';
    return;
  }
  el.innerHTML=adminAllBooks.map(b=>`
    <div class="book-row" onclick="showBookEditor('${b.id}')">
      <div class="br-emoji">${b.emoji||'📖'}</div>
      <div class="br-info">
        <div class="br-title">${escapeHtml(b.title)} ${b.published?'✅':'📝'}</div>
        <div class="br-author">${escapeHtml(b.author||'')} · ${b.days} дней</div>
      </div>
      <div class="br-pct">›</div>
    </div>
  `).join('');
}

// AI-генерация через Groq (нужен ключ в Edge Function)
async function generateBookAI(){
  const title=document.getElementById('edTitle').value.trim();
  const author=document.getElementById('edAuthor').value.trim();
  const prompt=document.getElementById('edPrompt').value.trim();
  const err=document.getElementById('edErr');
  if(!title){err.textContent='Введи название';return}
  err.textContent='⏳ Генерирую... это может занять до 30 сек';
  try{
    // Вызов Edge Function (нужно создать в Supabase)
    const{data,error}=await sb.functions.invoke('generate-book',{
      body:{title,author,prompt}
    });
    if(error)throw error;
    if(data){
      if(data.emoji)document.getElementById('edEmoji').value=data.emoji;
      if(data.days)document.getElementById('edDays').value=data.days;
      if(data.about)document.getElementById('edAbout').value=data.about;
      err.textContent='✅ Готово! Проверь и опубликуй';
      err.style.color='var(--success)';
      // Остальные поля сохраним в window для публикации
      window._aiBook=data;
    }
  }catch(e){
    err.textContent='❌ Edge Function не подключена. Обратись к разработчику.';
    err.style.color='var(--danger)';
  }
}

async function saveBook(published){
  const err=document.getElementById('edErr');
  const id=editingBookId||('book-'+Date.now());
  
  // Получаем практики из текстового поля
  let practicesData = [];
  const practicesText = document.getElementById('edPractices').value.trim();
  if(practicesText) {
    try {
      practicesData = JSON.parse(practicesText);
    } catch(e) {
      err.textContent = '❌ Ошибка в JSON практик. Проверьте кавычки и запятые.';
      err.style.color = 'var(--danger)';
      return;
    }
  }

  const data={
    id,
    title:document.getElementById('edTitle').value.trim(),
    author:document.getElementById('edAuthor').value.trim(),
    emoji:document.getElementById('edEmoji').value.trim()||'📖',
    days:parseInt(document.getElementById('edDays').value)||30,
    category: document.getElementById('edCategory').value.trim() || 'Разное',
    about:document.getElementById('edAbout').value.trim(),
    
    // БЕРЕМ ДАННЫЕ ИЗ ПОЛЕЙ ВВОДА (они уже заполнены из JSON)
    method: document.getElementById('edMethod').value.split(',').map(s=>s.trim()).filter(Boolean),
    author_bio: document.getElementById('edAuthorBio').value.trim(),
    for_whom: document.getElementById('edForWhom').value.trim(),
    result: document.getElementById('edResult').value.trim(),
    
    practices: practicesData, 
    quotes: window._tempQuotes || [], // Цитаты берем из временной переменной
    published,
    created_by:user.id,
    updated_at:new Date().toISOString()
  };
  
  try{
    const{error}=await sb.from('books').upsert(data,{onConflict:'id'});
    if(error)throw error;
    err.textContent=published?'✅ Опубликовано':'💾 Черновик сохранён';
    err.style.color='var(--success)';
    window._aiBook=null;
    toast(published?'Опубликовано ✓':'Черновик сохранён');
    setTimeout(()=>backFromBookEditor(),800);
  }catch(e){
    err.textContent='❌ '+e.message;
    err.style.color='var(--danger)';
  }
}

// ═══════════════════════════════════════════════
// ─── PWA ОБНОВЛЕНИЯ ───
let newWorker;
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('/sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        newWorker = reg.installing;
        newWorker.addEventListener('statechange', () => {
          // Если новый воркер установился и ждет активации
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            const banner = document.getElementById('updateBanner');
            if(banner) banner.style.display = 'flex'; // Показываем баннер
          }
        });
      });
    }).catch(err=>console.log('SW error',err));
  });
}

// ─── PWA SHORTCUTS ───
const urlParams=new URLSearchParams(location.search);
const action=urlParams.get('action');
if(action==='ritual')setTimeout(()=>startRitual(),1500);
else if(action==='journal')setTimeout(()=>showJournalScreen(),1500);

// ─── SCROLL-ИНДИКАТОРЫ (КНИГИ И ПРАКТИКИ) ───
document.addEventListener('scroll', (e) => {
  // Точки для практик (внизу)
  if (e.target && e.target.id === 'heroScroll') {
    const wrap = e.target;
    const cardWidth = wrap.children[0] ? wrap.children[0].offsetWidth : 1;
    const idx = Math.round(wrap.scrollLeft / (cardWidth + 10));
    document.querySelectorAll('.hero-dot').forEach((d, i) => {
      d.classList.toggle('on', i === idx);
    });
  }
  
    // Точки для книг (сверху)
  if (e.target && e.target.id === 'activeBookWrap') {
    const wrap = e.target;
    const cardWidth = wrap.children[0] ? wrap.children[0].offsetWidth : 1;
    const idx = Math.round(wrap.scrollLeft / (cardWidth + 10));
    document.querySelectorAll('.books-dots .b-dot').forEach((d, i) => {
      d.classList.toggle('on', i === idx);
    });
  }

  // ДОБАВЛЯЕМ СЛУШАТЕЛЬ ДЛЯ ДНЕВНИКА
  if (e.target && e.target.id === 'journalFilters') {
    const wrap = e.target;
    const cardWidth = wrap.children[0] ? wrap.children[0].offsetWidth : 1;
    const idx = Math.round(wrap.scrollLeft / (cardWidth + 10)); 
    document.querySelectorAll('#journalDots .b-dot').forEach((d, i) => {
      d.classList.toggle('on', i === idx);
    });
  }

  // ДОБАВЛЯЕМ СЛУШАТЕЛЬ ДЛЯ СТАТИСТИКИ
  if (e.target && e.target.id === 'statsBooksSwipe') {
    const wrap = e.target;
    const cardWidth = wrap.children[0] ? wrap.children[0].offsetWidth : 1;
    const idx = Math.round(wrap.scrollLeft / (cardWidth + 10)); 
    document.querySelectorAll('#statsBooksDots .b-dot').forEach((d, i) => {
      d.classList.toggle('on', i === idx);
    });
  }
}, true);
// ─── Слежение за системной темой (для режима «Авто») ───
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change',()=>{
  if(state.theme==='auto')applyTheme();
});
// ─── СИСТЕМНАЯ КНОПКА "НАЗАД" (Android) ───
window.addEventListener('popstate', (e) => {
  // Проверяем, какие экраны сейчас открыты
  const ritualOpen = !document.getElementById('ritualScreen').classList.contains('hidden');
  const practiceOpen = !document.getElementById('practiceScreen').classList.contains('hidden');
  const authOpen = !document.getElementById('authScreen').classList.contains('hidden');
  const helpOpen = !document.getElementById('helpScreen').classList.contains('hidden');
  const settingsOpen = !document.getElementById('settingsScreen').classList.contains('hidden');
  const notifOpen = !document.getElementById('notificationsScreen').classList.contains('hidden');

  if (ritualOpen) { closeRitual(); history.pushState(null, null, location.href); return; }
  if (practiceOpen) { closePractice(); history.pushState(null, null, location.href); return; }
  
  // Если мы в Помощи, Настройках или Уведомлениях — возвращаем в Профиль
  if (helpOpen || settingsOpen || notifOpen) {
    showProfile();
  } else if (currentScreen !== 'today' && !authOpen) {
    smartHome();
  }
  
  // Блокируем выход из приложения
  history.pushState(null, null, location.href);
});

// Блокируем закрытие приложения на главном экране (опционально, если хочешь как в PWA)
history.pushState(null, null, location.href);
async function toggleBookAccessMode(){
  bookAccessMode=bookAccessMode==='everyone'?'individual':'everyone';
  try{
    await sb.from('app_settings').upsert({key:'book_access_mode',value:bookAccessMode},{onConflict:'key'});
  }catch(e){}
  toast(bookAccessMode==='everyone'?'Режим: Всем открыто':'Режим: Индивидуально');
  playCheck();
  renderSystem();
}
async function setAllBooksAccess(userId,grant){
  const p=adminAllUsers.find(x=>x.id===userId);if(!p)return;
  let access=grant?BOOKS.map(b=>b.id):[];
  await sb.from('profiles').update({book_access:access}).eq('id',userId);
  p.book_access=access;
  playCheck();
  openAdminUser(userId);
}// ─── УПРАВЛЕНИЕ ЦИТАТАМИ ───
let editingQuoteId=null;

async function loadAdminQuotes(){
  const el=document.getElementById('adminQuotesList');
  if(!el)return;
  try{
    const{data}=await sb.from('quotes').select('*').order('sort_order',{ascending:true});
    const quotes=data||[];
    if(!quotes.length){
      el.innerHTML='<div style="color:var(--muted);text-align:center;padding:20px;font-size:13px">Пока нет цитат</div>';
      return;
    }
    el.innerHTML=quotes.map(q=>`
      <div class="admin-item" style="cursor:default">
        <div class="ai-info" style="flex:1">
          <div class="ai-name" style="font-style:italic;line-height:1.4;font-weight:600">«${escapeHtml(q.text)}»</div>
          <div class="ai-phone">${q.active?'🟢 Активна':'⚫ Скрыта'} · ${escapeHtml(q.author||'Андрей Герасимов')}</div>
        </div>
        <button class="icon-btn" onclick="editQuote(${q.id})" style="width:36px;height:36px">✏️</button>
        <button class="icon-btn" onclick="toggleQuoteActive(${q.id},${!q.active})" style="width:36px;height:36px">${q.active?'👁':'🚫'}</button>
        <button class="icon-btn" onclick="deleteQuote(${q.id})" style="width:36px;height:36px;color:var(--danger)">🗑</button>
      </div>
    `).join('');
  }catch(e){
    el.innerHTML='<div style="color:var(--danger);padding:20px;text-align:center">Ошибка</div>';
  }
}

function openQuoteEditor(id){
  editingQuoteId=id||null;
  const modal=document.getElementById('quoteModal');
  if(!modal)return;
  if(id){
    // Редактирование — подтянем данные
    sb.from('quotes').select('*').eq('id',id).single().then(({data:q})=>{
      if(!q)return;
      document.getElementById('quoteModalTitle').textContent='Редактировать цитату';
      document.getElementById('quoteText').value=q.text||'';
      document.getElementById('quoteAuthor').value=q.author||'Андрей Герасимов';
    });
  }else{
    document.getElementById('quoteModalTitle').textContent='Новая цитата';
    document.getElementById('quoteText').value='';
    document.getElementById('quoteAuthor').value='Андрей Герасимов';
  }
  modal.classList.remove('hidden');
}

function closeQuoteEditor(){
  document.getElementById('quoteModal').classList.add('hidden');
  editingQuoteId=null;
}

async function saveQuote(){
  const text=document.getElementById('quoteText').value.trim();
  const author=document.getElementById('quoteAuthor').value.trim()||'Андрей Герасимов';
  if(!text){toast('Введи текст','danger');return}
  try{
    if(editingQuoteId){
      await sb.from('quotes').update({text,author}).eq('id',editingQuoteId);
    }else{
      await sb.from('quotes').insert({text,author,active:true,sort_order:999});
    }
    closeQuoteEditor();
    toast('Сохранено');
    await loadAdminQuotes();
    await loadQuotes();
  }catch(e){toast('Ошибка','danger')}
}

async function editQuote(id){openQuoteEditor(id)}

async function toggleQuoteActive(id,active){
  await sb.from('quotes').update({active}).eq('id',id);
  await loadAdminQuotes();
  await loadQuotes();
  playCheck();
}

async function deleteQuote(id){
  if(!confirm('Удалить цитату?'))return;
  await sb.from('quotes').delete().eq('id',id);
  await loadAdminQuotes();
  await loadQuotes();
  toast('Удалено');
}
// ─── Публичный профиль через URL /u/{slug} ───
async function handlePublicProfileUrl(){
  const m=location.pathname.match(/^\/u\/([a-zA-Z0-9_-]+)$/);
  if(!m)return false;
  const slug=m[1];
  try{
    const{data}=await sb.from('profiles').select('id,name,avatar,public_slug').eq('public_slug',slug).single();
    if(!data){
      alert('Профиль не найден');
      return false;
    }
    // Показываем публичный профиль
    document.getElementById('ppAva').textContent=data.avatar||'👤';
    document.getElementById('ppName').textContent=data.name||'Друг';
    // Считаем прогресс этого юзера
    const{data:prog}=await sb.from('progress').select('*').eq('user_id',data.id);
    let totalFire=0,totalBest=0,booksCount=0;
    (prog||[]).forEach(row=>{
      const d=row.data||{};
      const days=d.days||{};
      let closed=Object.keys(days).filter(k=>days[k].closed).length;
      if(closed>0)booksCount++;
      // Считаем streak грубо
      if(closed>totalFire)totalFire=closed;
    });
    const lv=getLevel(0);
    document.getElementById('ppStatus').textContent=`${lv.ico} ${lv.name}`;
    document.getElementById('ppFire').textContent=totalFire;
    document.getElementById('ppRecord').textContent=totalBest;
    document.getElementById('ppBooks').textContent=booksCount;
    hideAll();
    document.getElementById('publicProfileScreen').classList.remove('hidden');
    return true;
  }catch(e){
    return false;
  }
}
// ─── НОВЫЙ КАЛЕНДАРЬ И БЫСТРЫЙ РИТУАЛ ───
function renderWeekCalendar() {
  const el = document.getElementById('weekCalendar');
  if (!el || !currentBook) return;

  const bs = getBookState(currentBook.id);
  if (!bs.start) {
    el.innerHTML = '<div style="color:var(--muted); font-size:12px;">Начните книгу, чтобы увидеть календарь</div>';
    return;
  }

  const today = new Date();
  const todayStr = localDate(today);
  
  // Находим понедельник текущей недели
  const dayOfWeek = today.getDay() === 0 ? 6 : today.getDay() - 1; // ПН=0, ВС=6
  const monday = new Date(today);
  monday.setDate(today.getDate() - dayOfWeek);

  const dows = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  let html = '';

  // Рисуем 7 дней текущей недели
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    
    const dateStr = localDate(d);
    const isToday = dateStr === todayStr;
    
    // Проверяем, есть ли активность в этот день
    let hasActivity = false;
    const rec = bs.days[dateStr];
    if (rec && rec.practices && rec.practices.length > 0) {
      hasActivity = true;
    }

    // Проверяем, не выходит ли этот день за рамки книги (до начала или после конца)
    const bookStart = new Date(bs.start + 'T00:00:00');
    const isBeforeStart = d < bookStart;
    const isAfterEnd = currentDay(currentBook.id) === currentBook.days && d > today; // Если книга пройдена, дни после сегодня не показываем

    let extraClass = '';
    if (isBeforeStart) extraClass = 'opacity: 0.3;'; // Дни до начала книги бледные
    if (isToday) extraClass = 'border-color: var(--warm); background: rgba(255, 154, 86, 0.1); color: var(--warm);';

    html += `<div class="cal-day ${hasActivity ? 'active' : ''}" 
                  style="${extraClass} border: ${hasActivity ? '1px solid var(--accent-2)' : '1px solid var(--border)'}; background: ${hasActivity ? 'rgba(124,92,255,0.15)' : ''}"
                  onclick="showDayStats('${dateStr}')">
      <div class="dow">${dows[i]}</div>
      <div class="dom" style="${isToday ? 'color: var(--warm);' : ''}">${d.getDate()}</div>
    </div>`;
  }
  
  el.innerHTML = html;
}

function showDayStats(dateStr) {
  const modal = document.getElementById('dayStatsModal');
  const content = document.getElementById('dayStatsContent');
  const title = document.getElementById('dayStatsTitle');
  
  const d = new Date(dateStr);
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  title.textContent = `${d.getDate()} ${months[d.getMonth()]}`;

  let html = '';
  let total = 0;

  BOOKS.forEach(b => {
    const bs = getBookState(b.id);
    const rec = bs.days[dateStr];
    if (rec && rec.practices && rec.practices.length > 0) {
      total += rec.practices.length;
      const pNames = rec.practices.map(pid => {
        const p = b.practices.find(x => x.id === pid);
        return p ? p.title : pid;
      }).join(', ');
      
      html += `<div style="margin-bottom:10px;padding:10px;background:var(--card2);border-radius:10px;">
        <b>${b.emoji} ${b.title}</b>
        <div style="color:var(--muted);font-size:12px;margin-top:4px;">Выполнено: ${pNames}</div>
      </div>`;
    }
  });

  if (total === 0) {
    html = '<div style="text-align:center;color:var(--muted);">В этот день не было практик 🌱</div>';
  }

  content.innerHTML = html;
  modal.classList.remove('hidden');
}

function startFastRitual() {
  let queue = [];
  BOOKS.forEach(b => {
    if (hasBookAccess(b.id) && b.practices.length > 0) {
      const shortest = b.practices.reduce((prev, curr) => (prev.time < curr.time) ? prev : curr);
      queue.push({ ...shortest, _bookId: b.id, _bookTitle: b.title });
    }
  });
  if (!queue.length) { toast('Нет доступных книг', 'warm'); return; }
  
  ritualQueue = queue;
  ritualIndex = 0;
  hideAll();
  const rEl = document.getElementById('ritualScreen');
  rEl.className = 'ritual';
  rEl.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;z-index:9999;display:flex;flex-direction:column;background:var(--bg)';
  window.scrollTo(0, 0);
  startMusic();
  renderRitualStep();
}

async function reportPost(postId, authorId) {
  if(authorId === user.id) { toast('Нельзя жаловаться на свой пост', 'warm'); return; }
  const reason = prompt('Укажите причину жалобы (спам, мат, оскорбления):');
  if(!reason) return;
  try {
    await sb.from('reports').insert({ reporter_id: user.id, post_id: postId, reason: reason });
    toast('Жалоба отправлена модератору', 'success');
  } catch(e) { toast('Ошибка отправки', 'danger'); }
}
function switchActiveBook(bookId) {
  const b = BOOKS.find(x => x.id === bookId);
  if(!b) return;
  if(currentBook && currentBook.id === bookId) {
    // Если нажали на уже активную книгу, открываем её карточку
    openBookDetail(bookId);
  } else {
    // Переключаем книгу
    currentBook = b;
    state.lastBook = b.id;
    saveState();
    renderToday(); // Перерисовываем весь экран
    playClick();
  }
}
// Сброс прогресса ОДНОЙ книги
function resetBookProgress() {
  if(!bookDetailId) return;
  const b = BOOKS.find(x => x.id === bookDetailId);
  if(!b) return;

  showCustomConfirm(
    'Сбросить прогресс?', 
    `Все практики, дни и заметки по книге "${b.title}" будут удалены. Вы уверены?`, 
    () => {
      const bs = getBookState(b.id);
      bs.start = null;
      bs.days = {};
      bs.journal = {};
      
      // Если удалили текущую активную книгу, нужно переключить currentBook
      if(currentBook && currentBook.id === b.id) {
        currentBook = null;
        state.lastBook = null;
      }
      
      saveState();
      playSuccess();
      toast('Прогресс книги сброшен');
      smartHome(); // Возвращаемся на Главную
    }
  );
}

// Сброс ВСЕГО прогресса
function resetAllProgress() {
  document.getElementById('resetProgressModal').classList.add('hidden'); // Закрываем меню выбора
  showCustomConfirm(
    'Удалить ВСЁ?', 
    'Весь прогресс, ВСЕ заметки, настроение и статистика будут стёрты навсегда. Это действие нельзя отменить.', 
    async () => { // Делаем функцию асинхронной
      state.books = {};
      state.lastBook = null;
      currentBook = null;
      
      try {
        // Очищаем ВСЕ таблицы с данными пользователя
        await Promise.all([
          sb.from('journals').delete().eq('user_id', user.id),
          sb.from('notes').delete().eq('user_id', user.id),
          sb.from('moods').delete().eq('user_id', user.id)
        ]);
      } catch (error) {
        console.error('Ошибка удаления данных:', error);
      }
      
      saveState();
      playSuccess();
      toast('Весь прогресс и данные очищены');
      smartHome();
    }
  );
}
async function loadAdminReports() {
  const el = document.getElementById('adminReportsList');
  el.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Загрузка жалоб...</div>';
  
  try {
    const { data: reports, error } = await sb.from('reports').select('*').order('created_at', {ascending: false});
    if (error) throw error;
    
    if (!reports || !reports.length) {
      el.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Жалоб нет. Все молодцы! 🎉</div>';
      return;
    }

    let html = '';
    for (let r of reports) {
      // Подтягиваем автора жалобы
      const { data: prof } = await sb.from('profiles').select('name').eq('id', r.reporter_id).single();
      // Подтягиваем текст поста
      const { data: post } = await sb.from('messages').select('text, user_name').eq('id', r.post_id).single();
      
      const time = new Date(r.created_at).toLocaleString('ru-RU', {day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit'});
      
      html += `
        <div class="admin-detail" style="border-left: 4px solid var(--danger); margin-bottom: 10px;">
          <div class="admin-row"><span>Автор жалобы</span><span>${prof ? prof.name : 'Неизвестный'}</span></div>
          <div class="admin-row"><span>Причина</span><span style="color:var(--danger)">${escapeHtml(r.reason)}</span></div>
          <div class="admin-row"><span>Текст поста</span><span style="font-size:12px; font-style:italic; color:var(--muted); text-align:right; max-width:60%;">"${post ? escapeHtml(post.text) : 'Пост удален'}"</span></div>
          <div class="admin-row"><span>Автор поста</span><span>${post ? post.user_name : '—'}</span></div>
          <div class="admin-row"><span>Время</span><span>${time}</span></div>
        </div>
      `;
    }
    el.innerHTML = html;
  } catch(e) {
    el.innerHTML = '<div style="color:var(--danger); text-align:center;">Ошибка загрузки жалоб</div>';
  }
}
async function saveBookDraft(){
  const title=document.getElementById('edTitle').value.trim();
  if(!title){document.getElementById('edErr').textContent='Введи название';return}
  await saveBook(false);
}

async function publishBook(){
  const title=document.getElementById('edTitle').value.trim();
  if(!title){document.getElementById('edErr').textContent='Введи название';return}
  await saveBook(true);
}

async function deleteBookFromEditor(){
  if(!editingBookId) return;
  if(!confirm('Удалить эту книгу навсегда? Все пользователи потеряют к ней доступ.')) return;
  
  try {
    const { error } = await sb.from('books').delete().eq('id', editingBookId);
    if (error) throw error;
    
    toast('Книга удалена');
    // Удаляем из локального массива
    BOOKS = BOOKS.filter(b => b.id !== editingBookId);
    
    setTimeout(() => backFromBookEditor(), 500);
  } catch(e) {
    toast('Ошибка удаления: ' + e.message, 'danger');
  }
}

function parseSmartJson() {
  const raw = document.getElementById('edSmartJson').value.trim();
  if(!raw) return;
  
  try {
    let jsonStr = raw;
    // Убираем лишние символы, если ИИ добавил ```json ... ```
    if (raw.includes('```json')) jsonStr = raw.split('```json')[1].split('```')[0];
    else if (raw.includes('```')) jsonStr = raw.split('```')[1].split('```')[0];
    
    // Пытаемся распарсить. Если ИИ выдал массив практик, оборачиваем его.
    const data = JSON.parse(jsonStr.trim());
    
    if(data.title) document.getElementById('edTitle').value = data.title;
    if(data.author) document.getElementById('edAuthor').value = data.author;
    if(data.emoji) document.getElementById('edEmoji').value = data.emoji;
    if(data.days) document.getElementById('edDays').value = data.days;
    if(data.category) document.getElementById('edCategory').value = data.category;
    if(data.about) document.getElementById('edAbout').value = data.about;
    
    if(data.method) document.getElementById('edMethod').value = Array.isArray(data.method) ? data.method.join(', ') : data.method;
    if(data.authorBio) document.getElementById('edAuthorBio').value = data.authorBio;
    if(data.forWhom) document.getElementById('edForWhom').value = data.forWhom;
    if(data.result) document.getElementById('edResult').value = data.result;
    
    // Практики могут быть как в корне, так и внутри массива
    if(Array.isArray(data)) {
      document.getElementById('edPractices').value = JSON.stringify(data, null, 2);
    } else if(data.practices) {
      document.getElementById('edPractices').value = JSON.stringify(data.practices, null, 2);
    }
    
    if(data.quotes) window._tempQuotes = data.quotes;
    
    toast('✅ Данные распознаны!');
    document.getElementById('edSmartJson').value = ''; // Очищаем поле
  } catch(e) {
    toast('Ошибка парсинга JSON. Проверь текст.', 'danger');
    console.error(e);
  }
}
// ─── УМНЫЙ СБРОС ПРОГРЕССА ───
function showResetOptions() {
  const list = document.getElementById('resetBooksList');
  let html = '';
  BOOKS.forEach(b => {
    const bs = getBookState(b.id);
    const hasProgress = bs.start || Object.keys(bs.days).length > 0;
    if(hasProgress) {
      html += `<div class="settings-row" style="border:1px solid var(--border); margin-bottom:8px; border-radius:10px;" onclick="resetSpecificBook('${b.id}')">
        <div class="sr-left"><span class="sr-ico">${b.emoji}</span>${b.title}</div>
        <div class="sr-arrow">🗑</div>
      </div>`;
    }
  });
  if(!html) html = '<div style="text-align:center; color:var(--muted); font-size:13px; padding:20px 0;">Нет активного прогресса по книгам</div>';
  list.innerHTML = html;
  document.getElementById('resetProgressModal').classList.remove('hidden');
}

function resetSpecificBook(bookId) {
  showCustomConfirm('Сбросить книгу?', 'Прогресс по этой книге будет удален.', () => {
    const bs = getBookState(bookId);
    bs.start = null; bs.days = {}; bs.journal = {};
    if(currentBook && currentBook.id === bookId) { currentBook = null; state.lastBook = null; }
    saveState(); playSuccess();
    document.getElementById('resetProgressModal').classList.add('hidden');
    toast('Прогресс книги сброшен');
    smartHome();
  });
}
// ─── НАСТРОЙКА ВРЕМЕНИ НАПОМИНАНИЙ ───
let currentNotifPeriod = 'morning';

function setNotifTime(period) {
  currentNotifPeriod = period;
  const title = period === 'morning' ? 'Утреннее напоминание' : 'Вечернее напоминание';
  document.getElementById('timeModalTitle').textContent = title;
  
  const currentTime = period === 'morning' ? (state.morningTime || '07:00') : (state.eveningTime || '21:00');
  const timeInput = document.getElementById('timeInput');
  if (timeInput) timeInput.value = currentTime;
  
  document.getElementById('timeModal').classList.remove('hidden');
}

function closeTimeModal() {
  document.getElementById('timeModal').classList.add('hidden');
}

function saveTimeFromModal() {
  const timeInput = document.getElementById('timeInput');
  const time = timeInput ? timeInput.value : '07:00';

  if (currentNotifPeriod === 'morning') {
    state.morningTime = time;
    document.getElementById('morningTime').textContent = time;
  } else {
    state.eveningTime = time;
    document.getElementById('eveningTime').textContent = time;
  }

  saveState();
  playSuccess();
  toast('Время сохранено');
  closeTimeModal();
}
// ─── ПРОСМОТР ПРОФИЛЯ ДРУГОГО ПОЛЬЗОВАТЕЛЯ (ИЗ ЧАТА) ───
let profileSource = 'feed'; // Откуда пришли

async function viewUserProfile(userId, source = 'feed') {
  if (!userId) return;
  if (userId === user.id) { showProfile(); return; }
  profileSource = source;

  try {
    const { data: p } = await sb.from('profiles').select('*').eq('id', userId).single();
    if (!p) { toast('Пользователь не найден', 'danger'); return; }

    const { data: prog } = await sb.from('progress').select('*').eq('user_id', userId);

    let totalFire = 0; 
    let totalBest = 0; 
    let booksCount = 0;
    let totalPractices = 0;
    let totalJournal = 0;
    let perfectDays = 0;

    (prog || []).forEach(row => {
      const d = row.data || {};
      if (d.start) booksCount++;
      
      const days = d.days || {};
      const journal = d.journal || {};
      
      totalJournal += Object.keys(journal).filter(k => journal[k].q1 || journal[k].q2 || journal[k].q3).length;

      let best = 0, cur = 0;
      Object.keys(days).sort().forEach(date => {
        if (days[date].closed) { 
          cur++; 
          if (cur > best) best = cur; 
        } else { 
          cur = 0; 
        }
        
        if (days[date].practices) {
          totalPractices += days[date].practices.length;
          const b = BOOKS.find(x => x.id === row.book_id);
          if (b && days[date].practices.length === b.practices.length) perfectDays++;
        }
      });
      
      if (best > totalBest) totalBest = best;
      if (best > totalFire) totalFire = best;
    });

    const fullName = (p.name || 'Друг') + (p.last_name ? ' ' + p.last_name : '');
    document.getElementById('ppAva').textContent = p.avatar || '👤';
    document.getElementById('ppName').textContent = fullName;
    document.getElementById('ppStatus').textContent = p.last_seen ? 'Был(а) в сети ' + timeAgo(p.last_seen) : 'Статус скрыт';
    
    document.getElementById('ppFire').textContent = totalFire; 
    document.getElementById('ppRecord').textContent = totalBest;
    document.getElementById('ppBooks').textContent = booksCount;

    // Считаем награды
    const extra = { journal: totalJournal, practices: totalPractices, perfect: perfectDays > 0, perfectStreak: perfectDays, otherAch: 99 };
    let achHtml = '';
    let allItems = [];
    ACHIEVEMENTS_GROUPS.forEach(g => g.items.forEach(a => allItems.push(a)));
    
    allItems.forEach(a => {
      if (a.secret) return; 
      // Передаем totalBest как кол-во закрытых дней, и totalBest как стрик (упрощенно)
      const unlocked = a.check(totalBest, totalBest, extra); 
      if (unlocked) {
        achHtml += `<div class="ach-card unlocked"><div class="ach-badge">${a.ico}</div><div class="ach-name">${a.name}</div></div>`;
      }
    });
    
    if (!achHtml) achHtml = '<div style="color:var(--muted); font-size:13px; grid-column: 1 / -1; text-align:center;">Пока нет наград</div>';
    
    const achEl = document.getElementById('ppAchievements');
    if (achEl) achEl.innerHTML = achHtml;

    const mainBtn = document.querySelector('#publicProfileScreen .btn');
    const ghostBtn = document.querySelector('#publicProfileScreen .btn-ghost');
    
    mainBtn.textContent = '💬 Написать сообщение';
    mainBtn.style.display = '';
    mainBtn.onclick = () => openDialog(userId, p);
    ghostBtn.style.display = 'none';

    hideAll();
    document.getElementById('publicProfileScreen').classList.remove('hidden');
    
    // ПРИНУДИТЕЛЬНО СКРОЛЛИМ НАВЕРХ (исправляет съезжающую шапку)
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 10);
    
  } catch(e) {
    console.error(e);
    toast('Ошибка загрузки профиля', 'danger');
  }
}
function togglePassword() {
  const p = document.getElementById('password');
  if(p) p.type = p.type === 'password' ? 'text' : 'password';
}
async function savePracticeNote(practiceTitle, noteText, bookId) {
  if (!noteText || !noteText.trim()) return;
  
  try {
    await sb.from('notes').insert({
      user_id: user.id,
      book_id: bookId || (currentBook ? currentBook.id : 'unknown'),
      practice_title: practiceTitle,
      text: noteText.trim()
    });
    console.log('✅ Заметка сохранена в БД');
  } catch(e) {
    console.error('Ошибка сохранения заметки:', e);
  }
}
// ─── ОЗВУЧКА ТАЙМЕРА ───
function speakTimerEnd() {
  if (state.soundOn === false) return;
  
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Сбрасываем предыдущую очередь
    
    const text = "Время практики завершено. Зафиксируйте мысли и открывайте глаза.";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.9;
    utterance.volume = 1.0;

    // Функция, которая выберет голос и запустит озвучку
    const playVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      
      // Ищем ЛЮБОЙ русский голос (обычно женские стоят первыми)
      const ruVoice = voices.find(v => v.lang === 'ru-RU' || v.lang === 'ru');
      
      if (ruVoice) {
        utterance.voice = ruVoice;
        console.log('🔊 Озвучка голосом:', ruVoice.name);
      } else {
        console.log('⚠️ Русский голос не найден, используется стандартный.');
      }
      
      window.speechSynthesis.speak(utterance);
    };

    // Проверяем: если голоса уже загружены в браузер — запускаем сразу
    if (window.speechSynthesis.getVoices().length !== 0) {
      playVoice();
    } else {
      // Если нет — ждем события загрузки голосов
      window.speechSynthesis.onvoiceschanged = () => {
        playVoice();
window.speechSynthesis.onvoiceschanged = null; // Убираем слушатель
      };
    }
  }
}

// ─── ВЫДАЧА ПОДПИСКИ ───
async function adminGrantSub(userId, days) {
  try {
    let newDate = null;
    if (days > 0) {
      const d = new Date();
      d.setDate(d.getDate() + days);
      newDate = d.toISOString();
    }
    
    const { error } = await sb.from('profiles').update({ sub_until: newDate }).eq('id', userId);
    if (error) throw error;
    
    const p = adminAllUsers.find(x => x.id === userId);
    if (p) p.sub_until = newDate;
    
    playSuccess();
    toast(days > 0 ? 'Подписка выдана ✓' : 'Подписка забрана');
    openAdminUser(userId); // Перерисовываем карточку
  } catch (e) {
    toast('Ошибка: ' + e.message, 'danger');
  }
}