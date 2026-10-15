// ====== SUPABASE ======
const SUPABASE_URL = 'https://cangetbuejkwqgfxpeow.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-gGY5BghNH6nqi4j_wXmpw_xgHjUFax';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const DEV_TELEGRAM = 'Gerasimov_And';
const DEV_WHATSAPP = '79124325556';

// ====== ДАННЫЕ ======
let BOOKS=[],currentBook=null,currentPractice=null,ritualQueue=[],ritualIndex=0;
let timerInterval=null,timerRemaining=0,timerState='idle';
let user=null,state={},onbIndex=0,statsBookId=null;
let musicAudio=null,syncTimeout=null,isAdminFlag=false;
let chatChannel=null,feedChannel=null,completeCallback=null,adminAllUsers=[];
let bookDetailId=null;
let customRitual=[];

const DOW=['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
const MOODS=['😔','😐','🙂','😊','🤩'];

const ONB=[
{ico:'🌅',title:'Это игра по книгам',body:'<p>Ты не читаешь книги. Ты <strong>играешь в них</strong>. Каждое утро — цепочка практик, и день закрывается сам.</p>'},
{ico:'📚',title:'Библиотека книг',body:'<p>У тебя может быть <strong>несколько книг одновременно</strong>. У каждой — свои практики, свой прогресс, свой дневник.</p>'},
{ico:'🔥',title:'Собирай огонь',body:'<p>Каждое закрытое утро = <strong>+1 к огню</strong>. Не разрывай его!</p>'},
{ico:'🏆',title:'Награды и уровни',body:'<p>За прогресс ты получаешь <strong>награды</strong>. Растёшь в уровнях — от Новичка до Легенды.</p>'},
{ico:'🚀',title:'Готов?',body:'<p>Начни с 2 практик — тишины и аффирмаций.</p><p>Жми «Начать» — вперёд.</p>'}
];

const EMOJIS=['👤','😎','🧠','🔥','🌅','⚡','🎯','💪','🦁','🌟','🚀','🎨','🧘','🏆','☀️','🍀'];

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

// ====== RIPPLE ======
function attachRipple(el,e){
  if(!el||!e)return;
  if(!el.classList.contains('ripple'))el.classList.add('ripple');
  const r=document.createElement('span');r.className='ripple-effect';
  const rect=el.getBoundingClientRect();const size=Math.max(rect.width,rect.height);
  r.style.width=r.style.height=size+'px';
  r.style.left=(e.clientX-rect.left-size/2)+'px';
  r.style.top=(e.clientY-rect.top-size/2)+'px';
  el.appendChild(r);setTimeout(()=>r.remove(),700);
}
document.addEventListener('click',(e)=>{
  const btn=e.target.closest('button, .book-row, .nav-btn, .hero-play, .action-btn, .ach-card, .day-pill, .admin-item, .tab-pill, .feed-post, .mood-emoji');
  if(btn){playClick();attachRipple(btn,e);}
},true);

// ====== МУЗЫКА (плейлист) ======
const MUSIC_TRACKS=['meditation.mp3','meditation-2.mp3','meditation-3.mp3','meditation-4.mp3','meditation-5.mp3'];
let currentTrackIdx=0;
function startMusic(){
  if(state.soundOn===false)return;
  if(!musicAudio){
    currentTrackIdx=Math.floor(Math.random()*MUSIC_TRACKS.length);
    musicAudio=new Audio(MUSIC_TRACKS[currentTrackIdx]);
    musicAudio.volume=0;
    musicAudio.addEventListener('ended',nextTrack);
  }
  musicAudio.play().then(()=>fadeAudio(musicAudio,musicAudio.volume,0.2,2000)).catch(e=>{});
}
function nextTrack(){
  if(!musicAudio)return;
  currentTrackIdx=(currentTrackIdx+1)%MUSIC_TRACKS.length;
  musicAudio.src=MUSIC_TRACKS[currentTrackIdx];
  musicAudio.volume=0.2;
  musicAudio.play().catch(e=>{});
}
function stopMusic(){
  if(!musicAudio)return;
  fadeAudio(musicAudio,musicAudio.volume,0,1200,()=>{try{musicAudio.pause();musicAudio.currentTime=0}catch(e){}});
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

// ====== ИНИЦИАЛИЗАЦИЯ ======
window.addEventListener('DOMContentLoaded',async()=>{
  BOOKS=(typeof BOOK_REGISTRY!=='undefined'?BOOK_REGISTRY:[]).filter(Boolean);
  try{
    const{data:{session}}=await sb.auth.getSession();
    if(session)await handleSession(session);
    else{hideLoader();showAuth()}
  }catch(e){hideLoader();showAuth()}
});
function hideLoader(){const l=document.getElementById('appLoader');if(l){l.classList.add('hide');setTimeout(()=>l.remove(),500)}}
sb.auth.onAuthStateChange((event)=>{if(event==='SIGNED_OUT'){user=null;state={};currentBook=null;hideLoader();showAuth()}});

async function handleSession(session){
  const email=session.user.email;const phone=email.replace('@vnedri.app','');
  user={id:session.user.id,phone,email,name:session.user.user_metadata?.name||'Друг'};
  const{data:profile}=await sb.from('profiles').select('*').eq('id',user.id).single();
  if(profile){
    if(profile.blocked){hideLoader();alert('🚫 Аккаунт заблокирован.\n\nПричина: '+(profile.blocked_reason||'Нарушение правил'));await sb.auth.signOut();return}
    user.name=profile.name||user.name;
    state.avatar=profile.avatar||'👤';
    state.soundOn=profile.sound_on!==false;
    isAdminFlag=profile.is_admin===true;
    state.onboarded=profile.onboarded===true;
    state.lastBook=profile.last_book||null;
    state.bookAccess=profile.book_access||[];
    state.migrated=profile.migrated===true;
    state.slug=profile.public_slug||null;
    state.referralCode=profile.referral_code||null;
  }else{state.soundOn=true;state.avatar='👤'}
  await loadProgress();
  if(!state.migrated)await migrateLocalData();
  sb.from('profiles').update({last_seen:new Date().toISOString()}).eq('id',user.id).then(()=>{});
  hideLoader();
  if(!state.onboarded)showOnboarding();
  else smartHome();
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

// ====== СИНХРОНИЗАЦИЯ ======
async function loadProgress(){
  const{data,error}=await sb.from('progress').select('*').eq('user_id',user.id);
  if(error)return;
  state.books={};
  (data||[]).forEach(row=>{state.books[row.book_id]=row.data||{start:null,days:{},journal:{}}});
  if(state.soundOn===undefined)state.soundOn=true;
  if(state.avatar===undefined)state.avatar='👤';
}
async function syncProgress(){
  if(!user||!state.books)return;
  const rows=Object.keys(state.books).map(bookId=>({user_id:user.id,book_id:bookId,data:state.books[bookId],updated_at:new Date().toISOString()}));
  if(rows.length)await sb.from('progress').upsert(rows,{onConflict:'user_id,book_id'});
  await sb.from('profiles').update({name:user.name,avatar:state.avatar,sound_on:state.soundOn!==false,onboarded:state.onboarded===true,last_book:state.lastBook||null,last_seen:new Date().toISOString()}).eq('id',user.id);
}
async function syncNow(){await syncProgress();playSuccess();toast('✓ Синхронизировано')}
function saveState(){if(syncTimeout)clearTimeout(syncTimeout);syncTimeout=setTimeout(()=>syncProgress(),1500)}
function toast(msg,type='success'){const d=document.createElement('div');d.className='toast '+type;d.textContent=msg;document.body.appendChild(d);setTimeout(()=>d.remove(),2500)}

// ====== ЭКРАНЫ ======
function hideAll(){
  ['authScreen','onbScreen','welcomeScreen','libScreen','todayScreen','statsScreen','journalScreen','communityScreen','profileScreen','publicProfileScreen','adminScreen','bookDetailScreen','ritualBuilderScreen','ritualScreen','practiceScreen','completeOverlay'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.classList.add('hidden');
  });
  const pm=document.getElementById('pickModal');if(pm)pm.classList.add('hidden');
  const bn=document.getElementById('bottomNav');if(bn)bn.classList.add('hidden');
  window.scrollTo(0,0);
}
function showAuth(){hideAll();document.getElementById('authScreen').classList.remove('hidden')}
function showOnboarding(){hideAll();onbIndex=0;renderOnb();document.getElementById('onbScreen').classList.remove('hidden');updateSoundUI()}
function showWelcome(){
  hideAll();const b=BOOKS[0];if(!b)return smartHome();
  document.getElementById('welcomeName').textContent='Добро пожаловать, '+(user.name||'Друг')+'!';
  document.getElementById('welcomeBookIco').textContent=b.emoji;
  document.getElementById('welcomeBookTitle').textContent=b.title;
  document.getElementById('welcomeBookAuthor').textContent=b.author+' · '+b.days+' дней';
  document.getElementById('welcomeScreen').classList.remove('hidden');
}
function startFirstBook(){const b=BOOKS[0];if(!b)return;openBook(b.id)}
function skipWelcome(){showLibrary()}

function showLibrary(){
  hideAll();document.getElementById('libScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b,i)=>b.classList.toggle('on',i===1));
  renderLibrary();updateSoundUI();
}
function showTodayScreen(){
  if(!currentBook)return smartHome();
  state.lastBook=currentBook.id;saveState();
  hideAll();document.getElementById('todayScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b,i)=>b.classList.toggle('on',i===0));
  renderToday();updateSoundUI();checkInstallBanner();
}
function showStatsScreen(){
  if(!currentBook&&BOOKS.length)currentBook=BOOKS[0];
  if(!currentBook)return showLibrary();
  if(!statsBookId)statsBookId=currentBook.id;
  hideAll();document.getElementById('statsScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b,i)=>b.classList.toggle('on',i===3));
  renderStatsScreen();updateSoundUI();
}
function showJournalScreen(){
  if(!currentBook)return showLibrary();
  hideAll();document.getElementById('journalScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b,i)=>b.classList.toggle('on',i===0));
  renderJournal();updateSoundUI();
}
async function showCommunityScreen(){
  hideAll();document.getElementById('communityScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b,i)=>b.classList.toggle('on',i===2));
  document.getElementById('communityAvatar').textContent=state.avatar||'👤';
  updateSoundUI();
  await loadFeed();
}
function showRitualBuilder(){
  hideAll();
  document.getElementById('ritualBuilderScreen').classList.remove('hidden');
  renderRitualBuilder();updateSoundUI();
}
function backFromRitualBuilder(){smartHome()}

let profilePrev='today';
function showProfile(){
  const active=document.querySelector('.nav-btn.on');
  if(active)profilePrev=active.dataset.page||'today';
  hideAll();document.getElementById('profileScreen').classList.remove('hidden');
  renderProfile();checkAdminAccess();updateSoundUI();
}
function backFromProfile(){
  if(profilePrev==='lib')showLibrary();
  else if(profilePrev==='stats')showStatsScreen();
  else if(profilePrev==='community')showCommunityScreen();
  else smartHome();
}
function backFromStats(){smartHome()}
function backFromJournal(){smartHome()}
function backFromPublicProfile(){showProfile()}
function navTo(page){
  if(page==='lib')showLibrary();
  else if(page==='today')smartHome();
  else if(page==='stats')showStatsScreen();
  else if(page==='community')showCommunityScreen();
}

function smartHome(){
  if(!BOOKS.length)return showLibrary();
  if(state.lastBook){
    const b=BOOKS.find(x=>x.id===state.lastBook);
    if(b){const bs=getBookState(b.id);if(bs.start&&countClosedDays(b.id)<b.days){currentBook=b;return showTodayScreen()}}
  }
  for(const b of BOOKS){const bs=getBookState(b.id);if(bs.start&&countClosedDays(b.id)<b.days){currentBook=b;return showTodayScreen()}}
  for(const b of BOOKS){const bs=getBookState(b.id);if(!bs.start||countClosedDays(b.id)<b.days){currentBook=b;return showTodayScreen()}}
  showLibrary();
}

// ====== STATE ======
function getBookState(id){
  if(!state.books)state.books={};
  if(!state.books[id])state.books[id]={start:null,days:{},journal:{}};
  if(!state.books[id].journal)state.books[id].journal={};
  return state.books[id];
}
function hasBookAccess(id){
  if(isAdmin())return true;
  const access=state.bookAccess;
  if(!access||access.length===0)return true;
  return access.includes(id);
}

// ====== ЗВУКИ ======
let audioCtx=null;
function getCtx(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return null}}return audioCtx}
function playTone(freq,duration,type,vol){if(state.soundOn===false)return;const ctx=getCtx();if(!ctx)return;try{const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type=type||'sine';osc.frequency.value=freq;gain.gain.setValueAtTime(vol||0.15,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+duration);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+duration)}catch(e){}}
function playClick(){playTone(800,0.04,'sine',0.06);if(navigator.vibrate)navigator.vibrate(15)}
function playSuccess(){playTone(600,0.1,'sine',0.1);setTimeout(()=>playTone(900,0.15,'sine',0.1),100)}
function playError(){playTone(200,0.15,'square',0.08);if(navigator.vibrate)navigator.vibrate([50,30,50])}
function playFanfare(){if(state.soundOn===false)return;[523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,0.3,'sine',0.12),i*120));if(navigator.vibrate)navigator.vibrate([100,50,100,50,200])}
function playCheck(){if(state.soundOn===false)return;playTone(500,0.08,'sine',0.1);setTimeout(()=>playTone(750,0.12,'sine',0.1),60);if(navigator.vibrate)navigator.vibrate(80)}

function toggleSound(){
  state.soundOn=state.soundOn===false?true:false;saveState();updateSoundUI();
  if(state.soundOn){playClick();const inR=!document.getElementById('ritualScreen').classList.contains('hidden');const inP=!document.getElementById('practiceScreen').classList.contains('hidden');if(inR||inP)startMusic()}
  else stopMusic();
}
function updateSoundUI(){
  const icon=state.soundOn!==false?'🔊':'🔇';
  ['soundBtnLib','soundBtnToday','soundBtnStats','soundBtnJournal','soundBtnCommunity','soundBtnProfile','soundBtnPractice','soundBtnBookDetail'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=icon});
  const tog=document.getElementById('soundToggle');if(tog)tog.classList.toggle('on',state.soundOn!==false);
}

// ====== ОНБОРДИНГ ======
function renderOnb(){
  const s=ONB[onbIndex];
  document.getElementById('onbContent').innerHTML=`<div class="onb-ico">${s.ico}</div><h2>${s.title}</h2>${s.body}`;
  document.getElementById('onbDots').innerHTML=ONB.map((_,i)=>`<div class="onb-dot ${i===onbIndex?'on':''}"></div>`).join('');
  document.getElementById('onbBack').classList.toggle('hidden',onbIndex===0);
  document.getElementById('onbNext').textContent=onbIndex===ONB.length-1?'Начать путь 🚀':'Далее';
}
function onbNext(){if(onbIndex<ONB.length-1){onbIndex++;renderOnb()}else{state.onboarded=true;saveState();showWelcome()}}
function onbPrev(){if(onbIndex>0){onbIndex--;renderOnb()}}

// ====== ВХОД ======
let authMode='login';
function switchTab(mode){
  authMode=mode;
  document.getElementById('tabLogin').classList.toggle('on',mode==='login');
  document.getElementById('tabReg').classList.toggle('on',mode==='reg');
  document.getElementById('authBtn').textContent=mode==='login'?'Войти':'Зарегистрироваться';
  document.getElementById('authErr').textContent='';
  document.getElementById('nameField').style.display=mode==='reg'?'block':'none';
}
document.addEventListener('input',(e)=>{if(e.target.id==='phone')formatPhoneInput(e.target);if(e.target.classList.contains('error'))e.target.classList.remove('error')});
function formatPhoneInput(el){let v=el.value.replace(/\D/g,'');if(v.startsWith('8'))v='7'+v.slice(1);if(!v.startsWith('7'))v='7'+v;v=v.slice(0,11);let out='+7';if(v.length>1)out+=' '+v.slice(1,4);if(v.length>=4)out+=' '+v.slice(4,7);if(v.length>=7)out+='-'+v.slice(7,9);if(v.length>=9)out+='-'+v.slice(9,11);el.value=out}
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
      const{data,error}=await sb.auth.signUp({email,password:pass,options:{data:{name:nameInp}}});
      if(error){showError(error.message.includes('already')?'Номер уже зарегистрирован':'Ошибка регистрации');btn.disabled=false;btn.textContent='Зарегистрироваться';return}
      if(data.session)await handleSession(data.session);
      else{const{data:d2,error:e2}=await sb.auth.signInWithPassword({email,password:pass});if(e2){showError('Войдите с паролем');authMode='login';switchTab('login')}else await handleSession(d2.session)}
      playSuccess();
    }else{
      const{data,error}=await sb.auth.signInWithPassword({email,password:pass});
      if(error){showError(error.message.includes('Invalid')?'Неверный номер или пароль':'Ошибка входа',phoneEl,passEl);btn.disabled=false;btn.textContent='Войти';return}
      playSuccess();await handleSession(data.session);
    }
  }catch(e){showError('Ошибка соединения')}
  btn.disabled=false;btn.textContent=authMode==='login'?'Войти':'Зарегистрироваться';
}
function showError(msg,...els){
  const err=document.getElementById('authErr');
  err.textContent=msg;playError();
  els.forEach(el=>{if(el){el.classList.add('error');setTimeout(()=>el.classList.remove('error'),600)}});
  clearTimeout(window._errTimeout);
  window._errTimeout=setTimeout(()=>{err.textContent=''},4000);
}

function showForgotPassword(){document.getElementById('forgotModal').classList.remove('hidden')}
function showContactMenu(){document.getElementById('contactModal').classList.remove('hidden')}
function contactInApp(){document.getElementById('contactModal').classList.add('hidden');showCommunityScreen()}
function contactTelegram(){window.open('https://t.me/'+DEV_TELEGRAM,'_blank')}
function contactWhatsApp(){window.open('https://wa.me/'+DEV_WHATSAPP,'_blank')}
function contactDev(){showContactMenu()}

async function logout(){if(!confirm('Выйти? Прогресс сохранится.'))return;await syncProgress();await sb.auth.signOut()}
function isAdmin(){return isAdminFlag}
function checkAdminAccess(){const b=document.getElementById('adminBtnProfile');if(b)b.classList.toggle('hidden',!isAdmin())}
function shareApp(){const url='https://gerasimovas-sudo.github.io/Vnedri/';if(navigator.share)navigator.share({title:'ANDGER',text:'Практикум по книгам',url});else{navigator.clipboard.writeText(url);toast('Ссылка скопирована')}}

// ====== УСТАНОВКА ======
function isStandalone(){return window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true}
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
function dismissInstall(){localStorage.setItem('install_dismissed','1');const el=document.getElementById('installBanner');if(el)el.innerHTML=''}
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
// ====== ГЛАВНАЯ ======
function renderToday(){
  if(!currentBook)return;
  const b=currentBook,bs=getBookState(b.id),day=currentDay(b.id),closed=countClosedDays(b.id);
  document.getElementById('todayName').textContent=user.name||'Друг';
  document.getElementById('todayAvatar').textContent=state.avatar||'👤';
  const lv=getLevel(closed);document.getElementById('statusBadge').textContent=`${lv.ico} ${lv.name}`;

  // Карточка книги
  const total=b.practices.length;
  const date=dateByDay(b.id,day);
  const todayRec=bs.days[date]||{practices:[]};
  const todayCount=(todayRec.practices||[]).length;
  document.getElementById('activeBookWrap').innerHTML=`
    <div class="active-book-card" onclick="showBookDetail('${b.id}')">
      <div class="abc-head">
        <div class="abc-emoji">${b.emoji}</div>
        <div class="abc-info">
          <div class="abc-title">${b.title}</div>
          <div class="abc-day">День ${day} из ${b.days}</div>
        </div>
      </div>
      <div class="abc-bar"><div class="abc-fill" style="width:${Math.round(closed/b.days*100)}%"></div></div>
      <div class="abc-meta">
        <span>Сегодня: <b>${todayCount} из ${total}</b></span>
        <span>Прогресс: <b>${Math.round(closed/b.days*100)}%</b></span>
      </div>
    </div>`;

  document.getElementById('ritualSub').textContent=b.practices.length+' практик · ~'+Math.round(b.practices.reduce((s,p)=>s+p.time,0)/60)+' минут';

  renderCalendar('calWrap', b.id);
  renderHint();
  renderHeroCards();
}

function renderHint(){
  const b=currentBook,bs=getBookState(b.id),day=currentDay(b.id),date=dateByDay(b.id,day);
  const todayRec=bs.days[date]||{practices:[]},todayCount=(todayRec.practices||[]).length,total=b.practices.length;
  const streak=calcStreak(b.id);
  let html='';
  if(b.quotes&&b.quotes.length){
    const q=b.quotes[(day-1)%b.quotes.length];
    html+=`<div class="hint-card"><div class="hint-label">✨ Цитата дня</div><div class="hint-text">«${q.text}»</div><div class="hint-author">— ${q.author}</div></div>`;
  }
  document.getElementById('hintCard').innerHTML=html;
}

function renderHeroCards(){
  const b=currentBook,bs=getBookState(b.id),day=currentDay(b.id),date=dateByDay(b.id,day);
  const todayRec=bs.days[date]||{practices:[]};
  const cm={silence:'hero-silence',affirm:'hero-affirm',visual:'hero-visual',journal:'hero-journal',read:'hero-read',sport:'hero-sport','two-min':'hero-silence',anchor:'hero-affirm',env:'hero-visual',track:'hero-journal',identity:'hero-silence',stack:'hero-affirm',easy:'hero-visual',reward:'hero-read',review:'hero-journal',importance:'hero-visual',slides:'hero-affirm',pendulum:'hero-silence',intention:'hero-affirm',action:'hero-sport'};
  let html='';
  b.practices.forEach((p,i)=>{
    const done=todayRec.practices&&todayRec.practices.includes(p.id);
    const cls=done?'hero-card hero-done':'hero-card '+(cm[p.id]||'hero-silence');
    html+=`<div class="${cls}"><div class="hero-icon-bg">${p.ico}</div><div class="hero-badge">● ${i+1} из ${b.practices.length}</div>${done?'<div class="hero-done-badge">✓</div>':''}<div class="hero-content"><div class="hero-title">${p.title}</div><div class="hero-sub">${p.sub}</div><button class="hero-play" onclick="event.stopPropagation();openPractice('${p.id}')">${done?'✓ ГОТОВО':'▶ НАЧАТЬ'}</button></div></div>`;
  });
  document.getElementById('heroScroll').innerHTML=html;
  document.getElementById('heroDots').innerHTML=b.practices.map((p,i)=>{const done=todayRec.practices&&todayRec.practices.includes(p.id);return `<div class="hero-dot ${done?'done':''}" data-i="${i}"></div>`}).join('');
  const sc=document.getElementById('heroScroll');if(sc)sc.scrollLeft=0;
}

function renderCalendar(containerId,bookId){
  const b=BOOKS.find(x=>x.id===bookId);if(!b)return;
  const bs=getBookState(bookId),today=todayStr(),closed=countClosedDays(bookId);
  let html=`<div class="cal-head"><div class="label">📅 Прогресс пути</div><div class="count">${closed} из ${b.days}</div></div><div class="cal-bar">`;
  for(let d=1;d<=b.days;d++){
    const date=dateByDay(bookId,d);const rec=bs.days[date];
    let cls='cal-seg';
    if(rec&&rec.closed)cls+=' done';
    else if(rec&&rec.practices&&rec.practices.length>=2)cls+=' partial';
    else if(date===today)cls+=' today';
    else if(date>today)cls+=' future';
    html+=`<div class="${cls}"></div>`;
  }
  html+=`</div><div class="cal-nums"><span>1</span><span>10</span><span>20</span><span>${b.days}</span></div>`;
  const el=document.getElementById(containerId);if(el)el.innerHTML=html;
}

// ====== БИБЛИОТЕКА ======
function renderLibrary(){
  document.getElementById('libName').textContent=user.name||'Друг';
  document.getElementById('libAvatar').textContent=state.avatar||'👤';
  const q=(document.getElementById('libSearch')?.value||'').toLowerCase().trim();
  const list=BOOKS.filter(b=>{
    if(!q)return true;
    return b.title.toLowerCase().includes(q)||(b.author||'').toLowerCase().includes(q);
  });
  if(!list.length){
    document.getElementById('bookList').innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px">Ничего не найдено</div>';
    return;
  }
  document.getElementById('bookList').innerHTML=list.map(b=>{
    const bs=getBookState(b.id);
    const closed=countClosedDays(b.id);
    const pct=Math.round(closed/b.days*100);
    const started=bs.start!==null;
    const isDone=closed>=b.days;
    const isActive=state.lastBook===b.id&&started&&!isDone;
    const hasAccess=hasBookAccess(b.id);
    return `<div class="book-row ${isDone?'done':''} ${isActive?'active':''} ${!hasAccess?'locked':''}" onclick="showBookDetail('${b.id}')">
      ${!hasAccess?'<div class="br-lock">🔒</div>':''}
      <div class="br-emoji">${b.emoji}</div>
      <div class="br-info">
        <div class="br-title">${b.title} ${isDone?'👑':''}</div>
        <div class="br-author">${b.author} · ${b.days} дней</div>
        ${started?`<div class="br-bar"><div class="br-fill" style="width:${pct}%"></div></div>`:''}
      </div>
      <div class="br-pct">${started?pct+'%':'—'}</div>
    </div>`;
  }).join('');
}

// ====== КАРТОЧКА КНИГИ ======
function showBookDetail(id){
  const b=BOOKS.find(x=>x.id===id);if(!b)return;
  if(!hasBookAccess(id)){alert('🔒 Эта книга пока недоступна.\n\nНапиши разработчику, чтобы открыть доступ.');return}
  bookDetailId=id;
  document.getElementById('bdEmoji').textContent=b.emoji;
  document.getElementById('bdTitle').textContent=b.title;
  document.getElementById('bdAuthor').textContent=(b.author||'—')+' · '+b.days+' дней';
  document.getElementById('bdAbout').textContent=b.about||'Описание скоро появится.';

  // Тэги
  const totalTime=Math.round(b.practices.reduce((s,p)=>s+p.time,0)/60);
  document.getElementById('bdTags').innerHTML=`<span class="bd-tag">📋 ${b.practices.length} практик</span><span class="bd-tag">⏱ ~${totalTime} мин/день</span>`;

  // Звёзды (отзыв)
  renderBookStars(id);

  // Методики
  if(b.method&&b.method.length){
    document.getElementById('bdMethod').innerHTML=b.method.map(m=>`<div class="bm-item">${m}</div>`).join('');
    document.getElementById('bdMethodSection').style.display='';
  }else document.getElementById('bdMethodSection').style.display='none';

  // Автор
  if(b.authorBio){document.getElementById('bdAuthorBio').textContent=b.authorBio;document.getElementById('bdAuthorSection').style.display=''}
  else document.getElementById('bdAuthorSection').style.display='none';

  // Для кого
  if(b.forWhom){document.getElementById('bdForWhom').textContent=b.forWhom;document.getElementById('bdForWhomSection').style.display=''}
  else document.getElementById('bdForWhomSection').style.display='none';

  // Результат
  if(b.result){document.getElementById('bdResult').textContent=b.result;document.getElementById('bdResultSection').style.display=''}
  else document.getElementById('bdResultSection').style.display='none';

  // Кнопка
  const bs=getBookState(b.id);
  const closed=countClosedDays(b.id);
  const btn=document.getElementById('bdStartBtn');
  if(bs.start&&closed<b.days)btn.textContent='▶ Продолжить путь';
  else if(closed>=b.days)btn.textContent='🔄 Пройти заново';
  else btn.textContent='🚀 Начать путь';

  hideAll();
  document.getElementById('bookDetailScreen').classList.remove('hidden');
  updateSoundUI();
}
function backFromBookDetail(){showLibrary()}
function startBookFromDetail(){
  const b=BOOKS.find(x=>x.id===bookDetailId);if(!b)return;
  currentBook=b;
  const bs=getBookState(b.id);
  if(!bs.start){bs.start=new Date().toISOString().split('T')[0];saveState()}
  else{
    const closed=countClosedDays(b.id);
    if(closed>=b.days){
      if(confirm('Начать книгу заново? Прогресс сбросится.')){bs.days={};bs.journal={};bs.start=new Date().toISOString().split('T')[0];saveState()}
      else return;
    }
  }
  state.lastBook=b.id;saveState();
  showTodayScreen();
}
function buyBookLink(){
  const b=BOOKS.find(x=>x.id===bookDetailId);
  if(!b)return;
  const q=encodeURIComponent(b.title+' '+(b.author||''));
  window.open('https://www.litres.ru/search/?q='+q,'_blank');
}

async function renderBookStars(bookId){
  const el=document.getElementById('bdStars');
  let myStars=0,avg=0,count=0;
  try{
    const{data}=await sb.from('reviews').select('stars').eq('book_id',bookId);
    if(data&&data.length){avg=data.reduce((s,r)=>s+r.stars,0)/data.length;count=data.length}
    const{data:mine}=await sb.from('reviews').select('stars').eq('book_id',bookId).eq('user_id',user.id).maybeSingle();
    if(mine)myStars=mine.stars;
  }catch(e){}
  el.innerHTML=Array.from({length:5},(_,i)=>`<span class="bd-star ${i<myStars?'on':''}" onclick="rateBook('${bookId}',${i+1})">★</span>`).join('');
  if(count)el.innerHTML+=`<div style="font-size:11px;color:var(--muted);width:100%;margin-top:4px">Средняя: ${avg.toFixed(1)} · ${count} ${plural(count,'отзыв','отзыва','отзывов')}</div>`;
}
async function rateBook(bookId,stars){
  try{
    await sb.from('reviews').upsert({user_id:user.id,book_id:bookId,stars,text:''},{onConflict:'user_id,book_id'});
    playCheck();
    renderBookStars(bookId);
  }catch(e){toast('Ошибка','danger')}
}

// ====== СВОЙ РИТУАЛ ======
function showRitualBuilder(){
  customRitual=[];
  renderRitualBuilder();
  hideAll();
  document.getElementById('ritualBuilderScreen').classList.remove('hidden');
}
function renderRitualBuilder(){
  const activeBooks=BOOKS.filter(b=>hasBookAccess(b.id));
  if(!activeBooks.length){
    document.getElementById('ritualBuilderList').innerHTML='<p style="color:var(--muted);text-align:center">Нет доступных книг</p>';
    return;
  }
  let html='';
  activeBooks.forEach(b=>{
    html+=`<div class="ritual-builder-book"><h4>${b.emoji} ${b.title}</h4>`;
    b.practices.forEach(p=>{
      const key=b.id+':'+p.id;
      const on=customRitual.includes(key);
      html+=`<div class="ritual-builder-item ${on?'on':''}" onclick="toggleCustomPractice('${key}')">
        <div class="rbi-check">✓</div>
        <div class="rbi-body"><div class="rbi-title">${p.title}</div><div class="rbi-time">${p.sub}</div></div>
      </div>`;
    });
    html+='</div>';
  });
  document.getElementById('ritualBuilderList').innerHTML=html;
  updateCustomSummary();
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
  document.getElementById('rbsCount').textContent=customRitual.length+' '+plural(customRitual.length,'практика','практики','практик');
  document.getElementById('rbsTime').textContent='~'+Math.round(totalSec/60)+' минут';
  sum.style.display='flex';
}
function launchCustomRitual(){
  if(!customRitual.length)return;
  ritualQueue=[];
  customRitual.forEach(key=>{
    const[bid,pid]=key.split(':');
    const b=BOOKS.find(x=>x.id===bid);if(!b)return;
    const p=b.practices.find(x=>x.id===pid);if(p)ritualQueue.push({...p,_bookId:b.id,_bookTitle:b.title});
  });
  ritualIndex=0;
  document.getElementById('ritualScreen').classList.remove('hidden');
  startMusic();renderRitualStep();
}

// ====== СТАТИСТИКА ======
function renderStatsScreen(){
  if(!currentBook)return;
  document.getElementById('statsAvatar').textContent=state.avatar||'👤';
  let totalClosed=0,totalPractices=0,booksStarted=0;
  BOOKS.forEach(bb=>{
    const bbs=getBookState(bb.id);
    if(bbs.start)booksStarted++;
    totalClosed+=countClosedDays(bb.id);
    Object.values(bbs.days).forEach(rec=>{if(rec.practices)totalPractices+=rec.practices.length});
  });
  document.getElementById('globalBooks').textContent=booksStarted;
  document.getElementById('globalClosed').textContent=totalClosed;
  document.getElementById('globalPractices').textContent=totalPractices;

  // Свайп книг
  document.getElementById('statsBooksSwipe').innerHTML=BOOKS.map(b=>{
    const closed=countClosedDays(b.id);
    const pct=Math.round(closed/b.days*100);
    const isDone=closed>=b.days;
    const isActive=statsBookId===b.id;
    const circ=2*Math.PI*22;
    const offset=circ-(circ*pct/100);
    return `<div class="stats-book-card ${isActive?'active':''} ${isDone?'done':''}" onclick="selectStatsBook('${b.id}')">
      <div class="sbc-ring">
        <svg viewBox="0 0 52 52"><circle class="sbc-bg" cx="26" cy="26" r="22"/><circle class="sbc-fill" cx="26" cy="26" r="22" stroke-dasharray="${circ}" stroke-dashoffset="${offset}"/></svg>
        <div class="sbc-pct">${pct}%</div>
      </div>
      <div class="sbc-name">${b.emoji} ${b.title}</div>
    </div>`;
  }).join('');

  // Огонь и рекорд по выбранной книге
  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;
  document.getElementById('statStreakBig').textContent=calcStreak(b.id);
  document.getElementById('statBestBig').textContent=calcBest(b.id);

  renderAchievements();
}
function selectStatsBook(id){statsBookId=id;renderStatsScreen()}

// ====== НАГРАДЫ ======
function renderAchievements(){
  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;if(!b)return;
  const closed=countClosedDays(b.id),streak=calcStreak(b.id),bs=getBookState(b.id);
  const journal=Object.keys(bs.journal||{}).filter(k=>{const j=bs.journal[k];return j.q1||j.q2||j.q3}).length;
  let practices=0,perfect=false,perfectStreak=0,curPerfect=0;
  for(let i=1;i<=b.days;i++){
    const d=dateByDay(b.id,i);const rec=bs.days[d];
    if(rec&&rec.practices){
      practices+=rec.practices.length;
      if(rec.practices.length===b.practices.length){perfect=true;curPerfect++;if(curPerfect>perfectStreak)perfectStreak=curPerfect}
      else curPerfect=0;
    }else curPerfect=0;
  }
  const eb={journal,practices,perfect,perfectStreak,otherAch:0};let otherAch=0;
  ACHIEVEMENTS_GROUPS.slice(0,3).forEach(g=>{g.items.forEach(a=>{if(a.check(closed,streak,eb))otherAch++})});
  const extra={journal,practices,perfect,perfectStreak,otherAch};
  const allItems=[];ACHIEVEMENTS_GROUPS.forEach(g=>g.items.forEach(a=>allItems.push(a)));
  let unlockedCount=0;allItems.forEach(a=>{if(a.check(closed,streak,extra))unlockedCount++});
  document.getElementById('achCount').textContent=unlockedCount+' из '+allItems.length;
  document.getElementById('achBar').style.width=Math.round(unlockedCount/allItems.length*100)+'%';
  let html='';
  ACHIEVEMENTS_GROUPS.forEach(g=>{
    html+=`<div class="ach-group-title">${g.title}</div><div class="ach-grid">`;
    g.items.forEach(a=>{
      const unlocked=a.check(closed,streak,extra);const gold=a.gold&&unlocked;const secret=a.secret&&!unlocked;
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
  const journal=Object.keys(bs.journal||{}).filter(k=>{const j=bs.journal[k];return j.q1||j.q2||j.q3}).length;
  let practices=0,perfect=false,perfectStreak=0,curPerfect=0;
  for(let i=1;i<=b.days;i++){
    const d=dateByDay(b.id,i);const rec=bs.days[d];
    if(rec&&rec.practices){
      practices+=rec.practices.length;
      if(rec.practices.length===b.practices.length){perfect=true;curPerfect++;if(curPerfect>perfectStreak)perfectStreak=curPerfect}
      else curPerfect=0;
    }else curPerfect=0;
  }
  const eb={journal,practices,perfect,perfectStreak,otherAch:0};let otherAch=0;
  ACHIEVEMENTS_GROUPS.slice(0,3).forEach(g=>{g.items.forEach(a=>{if(a.check(closed,streak,eb))otherAch++})});
  const extra={journal,practices,perfect,perfectStreak,otherAch};
  const allItems=[];ACHIEVEMENTS_GROUPS.forEach(g=>g.items.forEach(a=>allItems.push(a)));
  const a=allItems.find(x=>x.id===achId);if(!a)return;
  const unlocked=a.check(closed,streak,extra);
  document.getElementById('achModalIco').textContent=unlocked?a.ico:(a.secret?'❓':'🔒');
  document.getElementById('achModalTitle').textContent=unlocked?a.name:(a.secret?'Секретная награда':a.name);
  document.getElementById('achModalText').textContent=unlocked?'✓ Получена!':a.desc;
  let progress='';
  if(!unlocked&&a.progress)progress=`<div style="background:rgba(124,92,255,.1);padding:12px;border-radius:12px;font-size:14px;font-weight:800;color:var(--accent-2)">Прогресс: ${a.progress(closed,streak,extra)}</div>`;
  document.getElementById('achModalProgress').innerHTML=progress;
  document.getElementById('achModal').classList.remove('hidden');
}

// ====== УРОВНИ ======
function getLevel(closed){
  if(closed===0)return{ico:'🌱',name:'Новичок',desc:'Начни первый день'};
  if(closed<3)return{ico:'🌱',name:'Первый шаг',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<7)return{ico:'🌿',name:'В ритме',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<14)return{ico:'🔥',name:'Практик',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<21)return{ico:'💎',name:'Опытный',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<30)return{ico:'🏆',name:'Мастер',desc:closed+' '+plural(closed,'день','дня','дней')};
  return{ico:'👑',name:'Легенда',desc:'Книга пройдена'};
}
function plural(n,one,few,many){
  const m10=n%10,m100=n%100;
  if(m10===1&&m100!==11)return one;
  if(m10>=2&&m10<=4&&(m100<10||m100>=20))return few;
  return many;
}

// ====== ПОДСЧЁТЫ ======
function countClosedDays(bookId){const bs=getBookState(bookId);return Object.keys(bs.days).filter(d=>bs.days[d].closed).length}
function currentDay(bookId){
  const bs=getBookState(bookId);
  if(!bs.start)return 1;
  const start=new Date(bs.start),now=new Date();
  const diff=Math.floor((now-start)/86400000)+1;
  return Math.min(Math.max(diff,1),BOOKS.find(b=>b.id===bookId).days);
}
function calcStreak(bookId){
  const b=BOOKS.find(x=>x.id===bookId),bs=getBookState(bookId);
  if(!bs.start)return 0;
  let streak=0;
  for(let i=1;i<=b.days;i++){const d=dateByDay(bookId,i);if(bs.days[d]&&bs.days[d].closed)streak++;else break}
  return streak;
}
function calcBest(bookId){
  const b=BOOKS.find(x=>x.id===bookId),bs=getBookState(bookId);
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
  const start=new Date(bs.start);
  start.setDate(start.getDate()+day-1);
  return start.toISOString().split('T')[0];
}
function todayStr(){return new Date().toISOString().split('T')[0]}

// ====== РИТУАЛ ======
function startRitual(){
  if(!currentBook){toast('Сначала выбери книгу','warm');return}
  const b=currentBook;
  ritualQueue=b.practices.map(p=>({...p,_bookId:b.id,_bookTitle:b.title}));
  ritualIndex=0;
  document.getElementById('ritualScreen').classList.remove('hidden');
  window.scrollTo(0,0);startMusic();renderRitualStep();
}
function renderRitualStep(){
  if(ritualIndex>=ritualQueue.length){finishRitual();return}
  const p=ritualQueue[ritualIndex];
  document.getElementById('rpStep').textContent=(ritualIndex+1)+' из '+ritualQueue.length;
  document.getElementById('rpFill').style.width=(ritualIndex/ritualQueue.length*100)+'%';
  const bookTag=p._bookTitle&&(!currentBook||p._bookTitle!==currentBook.title)?`<div style="text-align:center;font-size:11px;color:var(--muted);margin-bottom:8px">📚 ${p._bookTitle}</div>`:'';
  document.getElementById('ritualBody').innerHTML=`${bookTag}<div class="ritual-hero"><div class="ico">${p.ico}</div><h2>${p.title}</h2><div class="sub">${p.sub}</div></div><div class="ritual-timer"><div class="time" id="ritualTime">${formatTime(p.time)}</div><button class="timer-big-btn" id="ritualTimerBtn" onclick="toggleTimer('ritual')">▶ Старт</button><button class="timer-skip" onclick="nextRitual()">Отметить выполненным →</button></div><div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${p.why}</p></div><div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${p.how.map(s=>`<li>${s}</li>`).join('')}</ol></div>`;
  timerRemaining=p.time;timerState='idle';
}
function toggleTimer(ctx){
  const btn=ctx==='ritual'?document.getElementById('ritualTimerBtn'):document.getElementById('timerBtn');
  if(timerState==='running'){stopTimer();timerState='paused';if(btn){btn.textContent='▶ Продолжить';btn.className='timer-big-btn paused'}}
  else if(timerState==='done'){}
  else{startTimer(ctx);timerState='running';if(btn){btn.textContent='⏸ Пауза';btn.className='timer-big-btn'}}
}
function startTimer(ctx){
  timerInterval=setInterval(()=>{
    timerRemaining--;
    const el=document.getElementById(ctx==='ritual'?'ritualTime':'timerDisplay');
    if(el)el.textContent=formatTime(Math.max(0,timerRemaining));
    if(timerRemaining<=0){
      stopTimer();timerState='done';playFanfare();
      if(ctx==='ritual')showCompleteOverlay(ritualQueue[ritualIndex],'ritual');
      else showCompleteOverlay(currentPractice,'practice');
    }
  },1000);
}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null}}
function formatTime(sec){const m=Math.floor(sec/60),s=sec%60;return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')}
function nextRitual(){
  stopTimer();timerState='idle';
  const p=ritualQueue[ritualIndex];
  markPracticeDoneForBook(p._bookId,p.id);
  playCheck();ritualIndex++;renderRitualStep();
}
function closeRitual(){stopTimer();timerState='idle';stopMusic();document.getElementById('ritualScreen').classList.add('hidden');smartHome()}

function finishRitual(){
  stopTimer();timerState='idle';
  const b=currentBook;
  const day=currentDay(b.id),date=dateByDay(b.id,day),bs=getBookState(b.id);
  if(!bs.days[date])bs.days[date]={practices:[]};
  const count=bs.days[date].practices.length,total=b.practices.length;
  if(count>=4){
    const wasClosed=bs.days[date].closed;bs.days[date].closed=true;saveState();
    if(!wasClosed){fireConfetti();playFanfare()}
    buildModalWithAch(day,count,total,wasClosed);
  }else if(count>=2){saveState();showSimpleModal('💪','Хорошо идёшь!',count+' из '+total+'. Для закрытия нужно 4.')}
  else{saveState();showSimpleModal('🌱','Начало положено',count+' из '+total+'. Маленький шаг — тоже шаг.')}
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
  for(const t of targets){if(t.cond&&t.remaining>0)return{name:t.name,remaining:'Осталось '+t.remaining}}
  return null;
}
function markPracticeDone(pid){markPracticeDoneForBook(currentBook.id,pid)}
function markPracticeDoneForBook(bookId,pid){
  const day=currentDay(bookId),date=dateByDay(bookId,day),bs=getBookState(bookId);
  if(!bs.days[date])bs.days[date]={practices:[]};
  if(!bs.days[date].practices.includes(pid))bs.days[date].practices.push(pid);
  saveState();
}

// ====== ОВЕРЛЕЙ ЗАВЕРШЕНИЯ ======
function showCompleteOverlay(practice,context){
  completeCallback={practice,context};
  document.getElementById('completeTitle').textContent='Практика завершена';
  document.getElementById('completeSub').textContent=practice.title+' · '+Math.round(practice.time/60)+' минут';
  document.getElementById('completeOverlay').classList.remove('hidden');
}
function completePracticeDone(){
  document.getElementById('completeOverlay').classList.add('hidden');
  if(!completeCallback)return;
  const{practice,context}=completeCallback;completeCallback=null;
  if(context==='ritual'){stopTimer();timerState='idle';const p=ritualQueue[ritualIndex];if(p)markPracticeDoneForBook(p._bookId,p.id);playCheck();ritualIndex++;setTimeout(()=>renderRitualStep(),300)}
  else{markPracticeDone(practice.id);playCheck();closePractice()}
}
function completePracticeSkip(){
  document.getElementById('completeOverlay').classList.add('hidden');
  if(!completeCallback)return;
  const{context}=completeCallback;completeCallback=null;
  if(context==='ritual'){stopTimer();timerState='idle';ritualIndex++;setTimeout(()=>renderRitualStep(),300)}
  else closePractice();
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

// ====== ПРАКТИКА ======
function openPractice(id){
  if(!currentBook){toast('Сначала выбери книгу','warm');return}
  const p=currentBook.practices.find(x=>x.id===id);if(!p)return;
  currentPractice=p;
  document.getElementById('psTitle').textContent=p.title;
  document.getElementById('psSub').textContent=p.sub;
  document.getElementById('psContent').innerHTML=`<div class="ps-hero"><div class="ico">${p.ico}</div><div class="time">⏱ ${Math.round(p.time/60)} минут</div></div><div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${p.why}</p></div><div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${p.how.map(s=>`<li>${s}</li>`).join('')}</ol></div>${p.affirm?`<div class="ps-block"><h3>✨ Аффирмации</h3><ul class="affirm-list">${p.affirm.map(a=>`<li onclick="copyAffirm(this)">«${a}»</li>`).join('')}</ul></div>`:''}<div class="ps-block"><h3>⏱ Таймер</h3><div class="timer-box"><div class="timer-display" id="timerDisplay">${formatTime(p.time)}</div><button class="timer-big-btn" id="timerBtn" onclick="toggleTimer('practice')">▶ Старт</button></div></div><div class="ps-block"><h3>🎯 Результат</h3><p>${p.result}</p></div><div class="ps-block"><h3>⚠️ Ошибки</h3><ul class="mistakes">${p.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></div><div class="ps-block"><h3>💬 Совет</h3><div class="advice">${p.advice}</div></div><button class="btn" style="margin-top:20px" onclick="markPracticeFromScreen('${p.id}')">✓ Отметить выполненным</button>`;
  document.getElementById('practiceScreen').classList.remove('hidden');
  document.body.style.overflow='hidden';window.scrollTo(0,0);
  timerRemaining=p.time;timerState='idle';startMusic();updateSoundUI();
}
function closePractice(){
  document.getElementById('practiceScreen').classList.add('hidden');
  document.body.style.overflow='';
  stopTimer();timerState='idle';stopMusic();
  currentPractice=null;smartHome();
}
function markPracticeFromScreen(id){markPracticeDone(id);playCheck();closePractice()}
function copyAffirm(el){
  const text=el.textContent.replace(/[«»]/g,'');
  if(navigator.clipboard){navigator.clipboard.writeText(text);el.style.background='rgba(124,92,255,.15)';setTimeout(()=>el.style.background='',500)}
}

// ====== ПРОФИЛЬ ======
function renderProfile(){
  document.getElementById('profilePhone').textContent='+7 '+user.phone.slice(1,4)+' *** '+user.phone.slice(7,9)+' '+user.phone.slice(9);
  document.getElementById('profileName').value=user.name||'';
  document.getElementById('profileAva').textContent=state.avatar||'👤';
  document.getElementById('emojiRow').innerHTML=EMOJIS.map(e=>`<div class="emoji-pick ${state.avatar===e?'on':''}" onclick="setAvatar('${e}')">${e}</div>`).join('');
  updateSoundUI();
}
async function saveName(){
  const n=document.getElementById('profileName').value.trim();if(!n)return;
  user.name=n;
  await sb.from('profiles').update({name:n}).eq('id',user.id);
  playSuccess();toast('Имя сохранено');
}
function setAvatar(e){
  state.avatar=e;saveState();
  sb.from('profiles').update({avatar:e}).eq('id',user.id).then(()=>{});
  playClick();renderProfile();
}

// ====== ПУБЛИЧНЫЙ ПРОФИЛЬ ======
async function ensureSlug(){
  if(state.slug)return state.slug;
  const slug=(user.name||'user').toLowerCase().replace(/[^a-z0-9]/g,'')+user.phone.slice(-4);
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
  const lv=getLevel(countClosedDays(currentBook?.id||BOOKS[0].id));
  document.getElementById('ppStatus').textContent=`${lv.ico} ${lv.name}`;
  document.getElementById('ppFire').textContent=totalFire;
  document.getElementById('ppRecord').textContent=totalBest;
  document.getElementById('ppBooks').textContent=booksCount;
  hideAll();
  document.getElementById('publicProfileScreen').classList.remove('hidden');
}
function copyPublicLink(){
  const url='https://gerasimovas-sudo.github.io/Vnedri/u/'+(state.slug||'me');
  navigator.clipboard.writeText(url);
  toast('✓ Ссылка скопирована');
}
function sharePublicProfile(){
  const url='https://gerasimovas-sudo.github.io/Vnedri/u/'+(state.slug||'me');
  if(navigator.share)navigator.share({title:user.name,text:'Мой прогресс в ANDGER',url});
  else copyPublicLink();
}

// ====== РЕФЕРАЛ ======
async function ensureReferral(){
  if(state.referralCode)return state.referralCode;
  const code=(user.name||'user').toLowerCase().slice(0,5)+user.phone.slice(-4);
  await sb.from('profiles').update({referral_code:code}).eq('id',user.id);
  state.referralCode=code;saveState();
  return code;
}
async function copyReferral(){
  await ensureReferral();
  const url='https://gerasimovas-sudo.github.io/Vnedri/?ref='+state.referralCode;
  navigator.clipboard.writeText(url);
  toast('✓ Ссылка приглашения скопирована');
}
// ====== ДНЕВНИК ======
function renderJournal(){
  if(!currentBook)return showLibrary();
  document.getElementById('journalBookTitle').textContent=currentBook.emoji+' '+currentBook.title;
  document.getElementById('journalAvatar').textContent=state.avatar||'👤';
  const bs=getBookState(currentBook.id);
  const entries=Object.keys(bs.journal||{}).filter(k=>{const j=bs.journal[k];return j.q1||j.q2||j.q3});
  const day=currentDay(currentBook.id),date=dateByDay(currentBook.id,day);
  const today=bs.journal[date]||{};
  document.getElementById('jq1').value=today.q1||'';
  document.getElementById('jq2').value=today.q2||'';
  document.getElementById('jq3').value=today.q3||'';
  renderMoodTracker();
  const history=entries.sort().reverse().map(d=>{
    const j=bs.journal[d];
    return `<div class="jh-entry"><div class="jh-day">День ${dateToDay(currentBook.id,d)}</div>${j.q1?`<div class="jh-q">🌟 Получилось</div><div class="jh-a">${escapeHtml(j.q1)}</div>`:''}${j.q2?`<div class="jh-q">💭 Сложно</div><div class="jh-a">${escapeHtml(j.q2)}</div>`:''}${j.q3?`<div class="jh-q">🔍 Замечаю</div><div class="jh-a">${escapeHtml(j.q3)}</div>`:''}</div>`;
  }).join('');
  document.getElementById('journalHistory').innerHTML=history||'<div class="jh-entry" style="text-align:center;color:var(--muted);padding:24px">Пока пусто. Сделай первую запись.</div>';
}
function dateToDay(bookId,date){
  const bs=getBookState(bookId);
  if(!bs.start)return '?';
  const start=new Date(bs.start),d=new Date(date);
  return Math.floor((d-start)/86400000)+1;
}
function escapeHtml(s){return(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function saveJournal(){
  if(!currentBook)return;
  const day=currentDay(currentBook.id),date=dateByDay(currentBook.id,day),bs=getBookState(currentBook.id);
  bs.journal[date]={q1:document.getElementById('jq1').value,q2:document.getElementById('jq2').value,q3:document.getElementById('jq3').value};
  saveState();playSuccess();
  const msg=document.getElementById('journalMsg');
  msg.textContent='✓ Сохранено';setTimeout(()=>msg.textContent='',2000);
  renderJournal();
}

// ====== НАСТРОЕНИЕ ======
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
    el.innerHTML=MOODS.map((m,i)=>`<div class="mood-emoji ${moods[period]===i+1?'on':''}" onclick="setMood('${period}',${i+1})">${m}</div>`).join('');
  });
}
async function setMood(period,val){
  const today=todayStr();
  playCheck();
  try{
    await sb.from('moods').upsert({user_id:user.id,date:today,[period]:val},{onConflict:'user_id,date'});
    renderMoodTracker();
  }catch(e){toast('Ошибка','danger')}
}

// ====== ДЫХАНИЕ ======
let breathTimer=null,breathPhase=0;
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
function stopBreath(){if(breathTimer){clearInterval(breathTimer);breathTimer=null}const el=document.getElementById('breathCircle');if(el)el.className='breath-circle';const txt=document.getElementById('breathText');if(txt)txt.textContent='Готов?'}

// ====== СООБЩЕСТВО ======
let communityTab='feed';
function switchCommunityTab(tab,el){
  communityTab=tab;
  document.querySelectorAll('.tab-pill').forEach(t=>t.classList.remove('on'));
  if(el)el.classList.add('on');
  document.getElementById('communityFeed').classList.toggle('hidden',tab!=='feed');
  document.getElementById('communityChat').classList.toggle('hidden',tab!=='chat');
  document.getElementById('communityLeaders').classList.toggle('hidden',tab!=='leaders');
  document.getElementById('feedInputWrap').style.display=tab==='feed'?'flex':'none';
  if(tab==='feed')loadFeed();
  else if(tab==='chat')loadChat();
  else loadLeaders();
}

async function loadFeed(){
  const{data,error}=await sb.from('messages').select('*').eq('room','feed').order('created_at',{ascending:false}).limit(50);
  if(error){document.getElementById('feedList').innerHTML='<div style="color:var(--danger);text-align:center;padding:20px">Ошибка</div>';return}
  if(!data||!data.length){
    document.getElementById('feedList').innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px;font-size:14px">Пока пусто.<br>Напиши первое сообщение ✍️</div>';
    return;
  }
  const ids=data.map(m=>m.id);
  let likes=[],comments=[];
  try{
    const{data:l}=await sb.from('likes').select('*').in('message_id',ids);likes=l||[];
    const{data:c}=await sb.from('comments').select('*').in('message_id',ids).order('created_at');comments=c||[];
  }catch(e){}
  document.getElementById('feedList').innerHTML=data.map(m=>{
    const own=m.user_id===user.id;
    const time=timeAgo(m.created_at);
    const postLikes=likes.filter(l=>l.message_id===m.id);
    const liked=postLikes.some(l=>l.user_id===user.id);
    const postComments=comments.filter(c=>c.message_id===m.id);
    return `<div class="feed-post"><div class="fp-head"><div class="fp-ava">${m.user_avatar||'👤'}</div><div class="fp-info"><div class="fp-name">${escapeHtml(m.user_name||'Аноним')}${own?' · ты':''}</div><div class="fp-time">${time}</div></div></div><div class="fp-text">${escapeHtml(m.text)}</div><div class="fp-actions"><div class="fp-action ${liked?'on':''}" onclick="toggleLike(${m.id},this)">❤️ <span>${postLikes.length}</span></div><div class="fp-action" onclick="toggleComments(${m.id})">💬 <span>${postComments.length}</span></div></div><div class="feed-comments" id="comments-${m.id}">${postComments.map(c=>`<div class="feed-comment"><div class="fc-ava">${c.user_avatar||'👤'}</div><div class="fc-body"><div class="fc-name">${escapeHtml(c.user_name||'Аноним')}</div><div class="fc-text">${escapeHtml(c.text)}</div></div></div>`).join('')}<div class="feed-comment-form"><input type="text" id="cin-${m.id}" placeholder="Ответить..." maxlength="300"><button class="feed-post-btn" style="width:36px;height:36px;font-size:16px" onclick="sendComment(${m.id})">➤</button></div></div></div>`;
  }).join('');
}

async function sendFeedPost(){
  const inp=document.getElementById('feedInput');
  const text=inp.value.trim();if(!text)return;
  inp.value='';
  try{
    const{error}=await sb.from('messages').insert({user_id:user.id,user_name:user.name,user_avatar:state.avatar||'👤',room:'feed',text});
    if(error)throw error;
    playCheck();loadFeed();
  }catch(e){toast('Ошибка отправки','danger')}
}

async function toggleLike(msgId,el){
  try{
    const{data:existing}=await sb.from('likes').select('*').eq('message_id',msgId).eq('user_id',user.id).maybeSingle();
    if(existing){
      await sb.from('likes').delete().eq('message_id',msgId).eq('user_id',user.id);
    }else{
      await sb.from('likes').insert({message_id:msgId,user_id:user.id});
      playCheck();
    }
    loadFeed();
  }catch(e){toast('Ошибка','danger')}
}

function toggleComments(msgId){
  const el=document.getElementById('comments-'+msgId);
  if(el)el.classList.toggle('open');
}

async function sendComment(msgId){
  const inp=document.getElementById('cin-'+msgId);
  const text=inp.value.trim();if(!text)return;
  inp.value='';
  try{
    await sb.from('comments').insert({message_id:msgId,user_id:user.id,user_name:user.name,user_avatar:state.avatar||'👤',text});
    playCheck();loadFeed();
  }catch(e){toast('Ошибка','danger')}
}

async function loadChat(){
  const{data,error}=await sb.from('messages').select('*').eq('room','general').order('created_at',{ascending:true}).limit(100);
  if(error){document.getElementById('chatList').innerHTML='<div style="color:var(--danger);text-align:center;padding:20px">Ошибка</div>';return}
  if(!data||!data.length){document.getElementById('chatList').innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px;font-size:14px">Пока пусто</div>';return}
  document.getElementById('chatList').innerHTML=data.map(m=>{
    const own=m.user_id===user.id;
    const t=new Date(m.created_at).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});
    return `<div class="chat-msg ${own?'own':''}"><div class="cm-ava">${m.user_avatar||'👤'}</div><div class="cm-body"><div class="cm-name">${escapeHtml(m.user_name||'Аноним')}</div><div class="cm-text">${escapeHtml(m.text)}</div><div class="cm-time">${t}</div></div></div>`;
  }).join('');
}

async function loadLeaders(){
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
  const list=(profiles||[]).map(p=>({...p,score:scores[p.id]||0})).filter(p=>p.score>0).sort((a,b)=>b.score-a.score).slice(0,10);
  if(!list.length){document.getElementById('leadersList').innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px">На этой неделе пока никого</div>';return}
  document.getElementById('leadersList').innerHTML=list.map((p,i)=>{
    const medals=['🥇','🥈','🥉'];
    const m=medals[i]||(i+1)+'.';
    return `<div class="admin-item" style="cursor:default"><div class="ai-ava">${p.avatar||'👤'}</div><div class="ai-info"><div class="ai-name">${escapeHtml(p.name||'Аноним')}</div><div class="ai-phone">🔥 ${p.score} ${plural(p.score,'день','дня','дней')} за неделю</div></div><div style="font-size:20px;font-weight:900">${m}</div></div>`;
  }).join('');
}

function timeAgo(iso){
  const s=Math.floor((Date.now()-new Date(iso).getTime())/1000);
  if(s<60)return 'только что';
  if(s<3600)return Math.floor(s/60)+' мин назад';
  if(s<86400)return Math.floor(s/3600)+' ч назад';
  return Math.floor(s/86400)+' дн назад';
}

// ====== АДМИН ======
function switchAdminTab(tab,el){
  document.querySelectorAll('.admin-tab').forEach(t=>t.classList.remove('on'));
  if(el)el.classList.add('on');
  document.getElementById('adminUsers').classList.toggle('hidden',tab!=='users');
  document.getElementById('adminAnalytics').classList.toggle('hidden',tab!=='analytics');
  if(tab==='analytics')renderAnalytics();
}

async function showAdmin(){
  if(!isAdmin())return;
  hideAll();document.getElementById('adminScreen').classList.remove('hidden');
  document.getElementById('adminDetailWrap').innerHTML='';
  document.getElementById('adminSearch').value='';
  await loadAdminUsers();
}

async function loadAdminUsers(){
  const{data,error}=await sb.from('profiles').select('*').order('created_at',{ascending:false});
  if(error){document.getElementById('adminUserList').innerHTML='<div style="color:var(--danger);padding:20px;text-align:center">Ошибка загрузки</div>';return}
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
  if(!list.length){document.getElementById('adminUserList').innerHTML='<div style="color:var(--muted);text-align:center;padding:20px">Никого не найдено</div>';return}
  document.getElementById('adminUserList').innerHTML=list.map(p=>{
    const isMe=p.id===user.id;
    const phone=isMe?user.phone:'';
    const phoneShown=phone?'+7 '+phone.slice(1,4)+' '+phone.slice(4,7)+'-'+phone.slice(7,9)+'-'+phone.slice(9):(p.phone||'');
    return `<div class="admin-item" onclick="openAdminUser('${p.id}')"><div class="ai-ava">${p.avatar||'👤'}</div><div class="ai-info"><div class="ai-name">${escapeHtml(p.name||'Без имени')} ${p.is_admin?'👑':''} ${isMe?'(ты)':''} ${p.blocked?'🚫':''}</div><div class="ai-phone">${phoneShown||'—'}</div></div><div class="ai-arrow">›</div></div>`;
  }).join('');
}

function filterAdmin(){
  const q=document.getElementById('adminSearch').value.toLowerCase().trim();
  if(!q)return renderAdminList(adminAllUsers);
  const filtered=adminAllUsers.filter(p=>{
    const name=(p.name||'').toLowerCase();
    const isMe=p.id===user.id;
    const phone=isMe?user.phone:(p.phone||'');
    return name.includes(q)||phone.includes(q.replace(/\D/g,''));
  });
  renderAdminList(filtered);
}

async function openAdminUser(id){
  const p=adminAllUsers.find(x=>x.id===id);if(!p)return;
  const isMe=p.id===user.id;
  const phone=isMe?user.phone:(p.phone||'');
  const{data:prog}=await sb.from('progress').select('*').eq('user_id',id);
  let closed=0,journal=0;
  (prog||[]).forEach(pr=>{
    const d=pr.data||{},days=d.days||{};
    closed+=Object.keys(days).filter(k=>days[k].closed).length;
    const j=d.journal||{};
    journal+=Object.keys(j).filter(k=>{const x=j[k];return x.q1||x.q2||x.q3}).length;
  });
  const regDate=p.created_at?new Date(p.created_at).toLocaleDateString('ru'):'—';
  const lastSeen=p.last_seen?new Date(p.last_seen).toLocaleDateString('ru'):'—';
  const access=p.book_access||[];
  const booksHtml=BOOKS.map(b=>{
    const has=access.length===0||access.includes(b.id)||p.is_admin;
    return `<div class="admin-book-row"><div class="ab-title"><span>${b.emoji}</span><span>${b.title}</span></div><div class="toggle-switch ${has?'on':''}" onclick="event.stopPropagation();toggleBookAccess('${id}','${b.id}',${!has})"></div></div>`;
  }).join('');
  document.getElementById('adminDetailWrap').innerHTML=`
    <div class="admin-detail">
      <div class="ad-head"><div class="ad-ava">${p.avatar||'👤'}</div><div><h3>${escapeHtml(p.name||'Без имени')} ${p.is_admin?'👑':''}</h3><p>${isMe?'Это ты':''}${p.blocked?' · 🚫 Заблокирован':''}</p></div></div>
      <div class="admin-row"><span>Имя</span><span>${escapeHtml(p.name||'—')}</span></div>
      <div class="admin-row"><span>Телефон</span><span>${phone?'+7 '+phone.slice(1,4)+' *** '+phone.slice(7):'—'}</span></div>
      <div class="admin-row"><span>Регистрация</span><span>${regDate}</span></div>
      <div class="admin-row"><span>Последний визит</span><span>${lastSeen}</span></div>
      <div class="admin-row"><span>Закрыто дней</span><span>${closed}</span></div>
      <div class="admin-row"><span>Записей</span><span>${journal}</span></div>
      <div style="margin-top:16px"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;font-weight:800;margin-bottom:8px">📚 Доступ к книгам</div><div class="admin-books">${booksHtml}</div></div>
      ${!isMe?`<div class="admin-actions"><button class="admin-action" onclick="adminSendMessage('${id}')">💬 Написать</button><button class="admin-action ${p.blocked?'':'warn'}" onclick="adminToggleBlock('${id}',${!p.blocked})">${p.blocked?'✓ Разблокировать':'🚫 Заблокировать'}</button><button class="admin-action gold" onclick="adminToggleAdmin('${id}',${!p.is_admin})">${p.is_admin?'↓ Снять админа':'👑 Сделать админом'}</button><button class="admin-action danger" onclick="adminDelete('${id}')">🗑 Удалить</button></div>`:''}
    </div>`;
  document.getElementById('adminDetailWrap').scrollIntoView({behavior:'smooth'});
}
async function adminToggleBlock(id,blocked){
  if(!confirm(blocked?'Заблокировать пользователя?':'Разблокировать?'))return;
  await sb.from('profiles').update({blocked,blocked_reason:blocked?'Нарушение правил':null}).eq('id',id);
  await loadAdminUsers();openAdminUser(id);playSuccess();
}
async function adminToggleAdmin(id,makeAdmin){
  if(!confirm(makeAdmin?'Сделать админом?':'Снять права админа?'))return;
  await sb.from('profiles').update({is_admin:makeAdmin}).eq('id',id);
  await loadAdminUsers();openAdminUser(id);playSuccess();
}
async function adminDelete(id){
  if(!confirm('УДАЛИТЬ пользователя? Данные будут удалены навсегда.'))return;
  if(!confirm('Точно уверен?'))return;
  await sb.from('progress').delete().eq('user_id',id);
  await sb.from('profiles').delete().eq('id',id);
  alert('Пользователь удалён');
  await loadAdminUsers();document.getElementById('adminDetailWrap').innerHTML='';
}
function adminSendMessage(id){alert('Личные сообщения появятся в следующем обновлении.\n\nПока напишите через «Связаться с разработчиком»')}
async function toggleBookAccess(userId,bookId,grant){
  const p=adminAllUsers.find(x=>x.id===userId);if(!p)return;
  let access=[...(p.book_access||[])];
  if(access.length===0)access=BOOKS.map(b=>b.id);
  if(grant){if(!access.includes(bookId))access.push(bookId)}
  else{access=access.filter(x=>x!==bookId)}
  await sb.from('profiles').update({book_access:access}).eq('id',userId);
  p.book_access=access;
  playCheck();
  openAdminUser(userId);
}

async function renderAnalytics(){
  const total=adminAllUsers.length;
  const active30=adminAllUsers.filter(p=>p.last_seen&&(Date.now()-new Date(p.last_seen).getTime())<30*86400000).length;
  const active7=adminAllUsers.filter(p=>p.last_seen&&(Date.now()-new Date(p.last_seen).getTime())<7*86400000).length;
  const today=adminAllUsers.filter(p=>p.last_seen&&p.last_seen.slice(0,10)===todayStr()).length;
  document.getElementById('analyticsContent').innerHTML=`
    <div class="admin-summary">
      <div><div class="as-num">${total}</div><div class="as-lbl">Всего</div></div>
      <div><div class="as-num">${active30}</div><div class="as-lbl">30 дней</div></div>
      <div><div class="as-num">${active7}</div><div class="as-lbl">7 дней</div></div>
    </div>
    <div class="admin-summary">
      <div><div class="as-num">${today}</div><div class="as-lbl">Сегодня</div></div>
      <div><div class="as-num">${BOOKS.length}</div><div class="as-lbl">Книг</div></div>
      <div><div class="as-num">${Math.round(active7/Math.max(total,1)*100)}%</div><div class="as-lbl">Retention</div></div>
    </div>
    <div class="admin-detail" style="margin-top:14px">
      <h3 style="font-size:14px;margin-bottom:10px">👥 Активность</h3>
      <div class="admin-row"><span>Активны за 7 дней</span><span>${active7}</span></div>
      <div class="admin-row"><span>Активны сегодня</span><span>${today}</span></div>
      <div class="admin-row"><span>Заблокированы</span><span>${adminAllUsers.filter(p=>p.blocked).length}</span></div>
      <div class="admin-row"><span>Админов</span><span>${adminAllUsers.filter(p=>p.is_admin).length}</span></div>
    </div>`;
}

// ====== МОДАЛКИ ======
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
function closeModal(){document.getElementById('modal').classList.add('hidden');closeRitual()}

// ====== КОНФЕТТИ ======
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

// ====== PWA SHORTCUTS ======
const urlParams=new URLSearchParams(location.search);
const action=urlParams.get('action');
if(action==='ritual')setTimeout(()=>startRitual(),1500);
else if(action==='journal')setTimeout(()=>showJournalScreen(),1500);

// Hero scroll dots
document.addEventListener('scroll',(e)=>{
  if(e.target&&e.target.id==='heroScroll'){
    const idx=Math.round(e.target.scrollLeft/(e.target.offsetWidth*0.62));
    document.querySelectorAll('.hero-dot').forEach((d,i)=>d.classList.toggle('on',i===idx));
  }
},true);