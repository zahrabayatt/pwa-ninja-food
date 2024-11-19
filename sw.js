// if we change in assets content like in index.html we don't see it in browser because what is used, is the cached assets not updated assets and it only re cache it if the sw.js was change and the install event will fire to re cache it, we use versioning in static cache name and if we made changes in assets we change the version in this variable.
const staticCacheName = "site-static-v2";
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
  // for each change in sw.js the install event fires and in the callback for that we cache assets and it makes we have different caches for same files, and in the fetch event callback in sw.js, service worker may not fetch the correct assets and service worker not to know witch version of cache should check for matching assets. to solve this problem, we should delete old cache assets and we need to do this in activate callback event in sw.js because at this point the new service worker has been activated and the new version of assets have been cached.
  // delete all old caches:
  event.waitUntil(
    // waitUntil expect a promise and the caches.keys() return a promise.
    caches.keys().then((keys) => {
      // we need to wait for all caches.delete() for each old cache keys
      // the 35 line return a array of promises which is array of caches.delete(key) where key is a old cache key.
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key)) // caches.delete() return a promise
      );
    })
  );
});

// listening to fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request);
    })
  );
});
