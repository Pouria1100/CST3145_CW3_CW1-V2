const cacheName = 'cache-v1';
const filesToCache = [
    'index.html',
    'afterschool.webmanifest',
    'app_small.png',
    'app_large.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log("[Service Worker] Caching all the static files...")
                return cache.addAll(filesToCache);
            })
    );
});