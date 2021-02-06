self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("cache").then((cache) => {
      return cache.addAll([
        "./",
        "./components/",
        "./components/scripts/",
        "./components/styleSheets/",
        "./components/images/",
        "./index.html",
        "./components/styleSheets/style.css",
        "./components/scripts/script.js",
        "./components/scripts/serviceWorkerHandler.js",
        "./components/images/icon.png"
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
