console.log('This service-worker.js');
self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([ // <-- FIXME 현재 error: fetch 404
                '/index.html',
            ]);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    // 새로운 캐시 버전을 제외한 이전 버전의 캐시를 삭제합니다.
                    return cacheName.startsWith('v') && cacheName !== CACHE_NAME;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});


// const cacheName = 'js13kPWA-v1';