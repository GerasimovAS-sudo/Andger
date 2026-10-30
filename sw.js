/* ANDGER service worker — cache versioned assets, online-first with offline fallback. */
const CACHE_VERSION = 'andger-v11.10.2';
const CACHE_STATIC = `${CACHE_VERSION}-static`;
const CACHE_DYNAMIC = `${CACHE_VERSION}-dynamic`;
const APP_SCOPE = new URL(self.registration.scope);
const STATIC_FILES = [
  './', './index.html', './styles.css', './design-system.css', './app.js',
  './manifest.json', './assets/icons/favicon.ico', './assets/icons/apple-touch-icon.png',
  './assets/icons/icon-192x192.png', './assets/icons/icon-512x512.png',
  
  // Медитации (7 треков)
  './assets/music/meditation/meditation-1.mp3', './assets/music/meditation/meditation-2.mp3', './assets/music/meditation/meditation-3.mp3',
  './assets/music/meditation/meditation-4.mp3', './assets/music/meditation/meditation-5.mp3', './assets/music/meditation/meditation-6.mp3', './assets/music/meditation/meditation-7.mp3',
  
  // Спорт (7 треков)
  './assets/music/sport/sport-1.mp3', './assets/music/sport/sport-2.mp3', './assets/music/sport/sport-3.mp3',
  './assets/music/sport/sport-4.mp3', './assets/music/sport/sport-5.mp3', './assets/music/sport/sport-6.mp3', './assets/music/sport/sport-7.mp3',
  
  // Чтение/Фокус (7 треков)
  './assets/music/focus/focus-1.mp3', './assets/music/focus/focus-2.mp3', './assets/music/focus/focus-3.mp3',
  './assets/music/focus/focus-4.mp3', './assets/music/focus/focus-5.mp3', './assets/music/focus/focus-6.mp3', './assets/music/focus/focus-7.mp3',
  
  // Спокойствие (7 треков)
  './assets/music/calm/calm-1.mp3', './assets/music/calm/calm-2.mp3', './assets/music/calm/calm-3.mp3',
  './assets/music/calm/calm-4.mp3', './assets/music/calm/calm-5.mp3', './assets/music/calm/calm-6.mp3', './assets/music/calm/calm-7.mp3',
  
  // Книги
  './books/magic-morning.js', './books/atomic-habits.js',
  './books/transurfing.js', './books/registry.js'
].map(path => new URL(path, APP_SCOPE).href);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_STATIC);
    await Promise.all(STATIC_FILES.map(async url => {
      try {
        const response = await fetch(url, { cache: 'reload' });
        if (response.ok) await cache.put(url, response);
      } catch (error) {
        // Missing optional assets must not prevent installation.
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('andger-') && key !== CACHE_STATIC && key !== CACHE_DYNAMIC).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    if (url.hostname.includes('supabase')) return;
    if (url.hostname === 'cdn.jsdelivr.net') {
      event.respondWith((async () => {
        try {
          const response = await fetch(request);
          if (response.ok) caches.open(CACHE_DYNAMIC).then(cache => cache.put(request, response.clone())).catch(() => {});
          return response;
        } catch (error) {
          return (await caches.match(request)) || Response.error();
        }
      })());
    }
    return;
  }
  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response.ok) caches.open(CACHE_DYNAMIC).then(cache => cache.put(request, response.clone())).catch(() => {});
      return response;
    } catch (error) {
      const cached = await caches.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        return (await caches.match(new URL('./index.html', APP_SCOPE).href)) || Response.error();
      }
      return Response.error();
    }
  })());
});

self.addEventListener('push', event => {
  let data = { title: 'ANDGER', body: 'У тебя новое сообщение' };
  try { if (event.data) data = { ...data, ...event.data.json() }; }
  catch (error) { if (event.data) data.body = event.data.text(); }
  const options = {
    body: data.body || '',
    icon: new URL('./assets/icons/icon-192x192.png', APP_SCOPE).href,
    badge: new URL('./assets/icons/icon-192x192.png', APP_SCOPE).href,
    tag: data.tag || ('andger-' + Date.now()),
    data: data.data || {},
    actions: Array.isArray(data.actions) ? data.actions : []
  };
  event.waitUntil(self.registration.showNotification(data.title || 'ANDGER', options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const data = event.notification.data || {};
  const target = new URL('./', APP_SCOPE);
  if (data.type === 'msg' && data.from) {
    target.searchParams.set('action', 'dialog');
    target.searchParams.set('user', String(data.from));
  } else if (data.type === 'ritual' || data.type === 'journal') {
    target.searchParams.set('action', data.type);
  }
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of windows) {
      if (new URL(client.url).origin === self.location.origin && 'focus' in client) {
        await client.navigate(target.href);
        return client.focus();
      }
    }
    return self.clients.openWindow ? self.clients.openWindow(target.href) : undefined;
  })());
});

self.addEventListener('sync', event => {
  if (event.tag === 'sync-progress') event.waitUntil(Promise.resolve());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data?.type === 'PUSH_TEST') {
    event.waitUntil(self.registration.showNotification('Тестовое уведомление', {
      body: 'ANDGER push работает', icon: new URL('./assets/icons/icon-192x192.png', APP_SCOPE).href
    }));
  }
});
