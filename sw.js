const staticCacheName = "site-static";
const assets = [
  "/",
  "/index.html",
  "/js/app.js",
  "/js/ui.js",
  "/js/materialize.min.js",
  "/css/styles.css",
  "/css/materialize.min.css",
  "img/dish.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
];

// listening to install service worker event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets...");
      cache.addAll(assets);
    })
  );
});

// listening to activate service worker event
self.addEventListener("activate", (event) => {
  console.log("Service worker has been activated");
});

// listening to fetch event
self.addEventListener("fetch", (event) => {
  // explanation: https://youtu.be/0mAw9Na6hyM?si=nlVGVNrL3LvszX1R
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request);
    })
  );
});
