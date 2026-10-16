// ═══════════════════════════════════════════════
// ANDGER Service Worker v2.0
// Офлайн + Push + фоновая синхронизация
// ═══════════════════════════════════════════════

const CACHE_VERSION = 'andger-v2';
const CACHE_STATIC = 'andger-static-v2';
const CACHE_DYNAMIC = 'andger-dynamic-v2';

// Файлы, которые всегда в кэше
const STATIC_FILES = [
  '/Vnedri/',
  '/Vnedri/index.html',
  '/Vnedri/styles.css',
  '/Vnedri/app.js',
  '/Vnedri/manifest.json',
  '/Vnedri/icon.svg',
  '/Vnedri/books/magic-morning.js',
  '/Vnedri/books/atomic-habits.js',
  '/Vnedri/books/transurfing.js',
  '/Vnedri/books/registry.js'
];

// ─── INSTALL ───
self.addEventListener('install',(e)=>{
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_STATIC).then(cache=>{
      return cache.addAll(STATIC_FILES).catch(err=>{
        console.log('SW cache error:',err);
      });
    })
  );
});

// ─── ACTIVATE ───
self.addEventListener('activate',(e)=>{
  e.waitUntil(
    caches.keys().then(keys=>{
      return Promise.all(
        keys.filter(k=>k!==CACHE_STATIC&&k!==CACHE_DYNAMIC&&k!==CACHE_VERSION)
          .map(k=>caches.delete(k))
      );
    }).then(()=>self.clients.claim())
  );
});

// ─── FETCH ───
self.addEventListener('fetch',(e)=>{
  const url=new URL(e.request.url);

  // Supabase — всегда сеть, без кэша
  if(url.hostname.includes('supabase')){
    return;
  }

  // CDN — сеть с fallback на кэш
  if(url.hostname.includes('cdn.jsdelivr.net')){
    e.respondWith(
      fetch(e.request).then(resp=>{
        const clone=resp.clone();
        caches.open(CACHE_DYNAMIC).then(c=>c.put(e.request,clone));
        return resp;
      }).catch(()=>caches.match(e.request))
    );
    return;
  }

  // Только GET
  if(e.request.method!=='GET')return;

  // Свои файлы — cache-first с обновлением
  e.respondWith(
    caches.match(e.request).then(cached=>{
      const networkFetch=fetch(e.request).then(resp=>{
        if(resp&&resp.status===200){
          const clone=resp.clone();
          caches.open(CACHE_DYNAMIC).then(c=>c.put(e.request,clone));
        }
        return resp;
      }).catch(()=>cached);

      return cached||networkFetch;
    })
  );
});

// ─── PUSH-УВЕДОМЛЕНИЯ ───
self.addEventListener('push',(e)=>{
  let data={title:'ANDGER',body:'У тебя новое сообщение'};
  try{
    if(e.data)data=e.data.json();
  }catch(err){
    if(e.data)data={title:'ANDGER',body:e.data.text()};
  }

  const options={
    body:data.body||'',
    icon:'/Vnedri/icon-192.png',
    badge:'/Vnedri/icon-192.png',
    vibrate:[100,50,100],
    tag:data.tag||'andger-notif',
    data:data.data||{},
    actions:data.actions||[]
  };

  e.waitUntil(
    self.registration.showNotification(data.title||'ANDGER',options)
  );
});

// ─── КЛИК ПО УВЕДОМЛЕНИЮ ───
self.addEventListener('notificationclick',(e)=>{
  e.notification.close();
  const data=e.notification.data||{};
  let url='/Vnedri/';
  if(data.type==='msg'&&data.from)url='/Vnedri/?action=dialog&user='+data.from;
  else if(data.type==='ritual')url='/Vnedri/?action=ritual';
  else if(data.type==='journal')url='/Vnedri/?action=journal';

  e.waitUntil(
    clients.matchAll({type:'window',includeUncontrolled:true}).then(clientList=>{
      for(const client of clientList){
        if(client.url.includes('/Vnedri/')&&'focus' in client){
          client.navigate(url);
          return client.focus();
        }
      }
      if(clients.openWindow)return clients.openWindow(url);
    })
  );
});

// ─── BACKGROUND SYNC ───
self.addEventListener('sync',(e)=>{
  if(e.tag==='sync-progress'){
    e.waitUntil(syncProgress());
  }
});

async function syncProgress(){
  // Заглушка — можно расширить позже
  return Promise.resolve();
}

// ─── MESSAGE ───
self.addEventListener('message',(e)=>{
  if(e.data&&e.data.type==='SKIP_WAITING'){
    self.skipWaiting();
  }
  if(e.data&&e.data.type==='PUSH_TEST'){
    self.registration.showNotification('Тестовое уведомление',{
      body:'ANDGER push работает 🎉',
      icon:'/Vnedri/icon-192.png'
    });
  }
});