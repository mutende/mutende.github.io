const CACHE = 'mutende-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/assets/fonts/inter-latin-400-normal.woff2',
  '/assets/fonts/inter-latin-500-normal.woff2',
  '/assets/fonts/inter-latin-600-normal.woff2',
  '/assets/fonts/inter-latin-700-normal.woff2',
  '/assets/fonts/inter-latin-900-normal.woff2',
  '/assets/images/elvis.jpeg',
  '/assets/images/elvis.webp',
  '/assets/docs/Elvis%20Mutende%20-%20Sr%20Eng%20CV.pdf',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
