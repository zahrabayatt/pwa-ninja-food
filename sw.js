const staticCacheName = "site-static-v2";
const dynamicCacheName = "site-dynamic-v1";
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
  "/pages/fallback.html",
];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

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
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// listening to fetch event
self.addEventListener("fetch", (event) => {
  // event.respondWith(
  //   caches
  //     .match(event.request)
  //     .then((cacheRes) => {
  //       return (
  //         cacheRes ||
  //         fetch(event.request).then((fetchRes) => {
  //           return caches.open(dynamicCacheName).then((cache) => {
  //             cache.put(event.request.url, fetchRes.clone());
  //             limitCacheSize(dynamicCacheName, 15);
  //             return fetchRes;
  //           });
  //         })
  //       );
  //     })
  //     .catch(() => {
  //       if (event.request.url.indexOf(".html") !== -1) {
  //         return caches.match("/pages/fallback.html");
  //       }
  //     })
  // );
});
