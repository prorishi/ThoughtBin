self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./components/styleSheets/style.css",
        "./components/scripts/script.js",
        "./components/scripts/serviceWorkerHandler.js",
        "https://cdn.glitch.com/e2f8ef06-c96b-4fc5-815c-d78bc92522d8%2FTRASH_BIN-512.png?v=1612452722105"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
