
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('kfs-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/login.html',
        '/menu1.html',
        '/menu2.html',
        '/css/style.css',
        '/js/login.js'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
