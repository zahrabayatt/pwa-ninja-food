const staticCacheName = "site-static";
// assets are array of path resources
const assets = [
  "/", // index.html
  "/index.html",
  "/js/app.js",
  "/js/ui.js",
  "/js/materialize.min.js",
  "/css/styles.css",
  "/css/materialize.min.css",
  "img/dish.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
];

// listening to install service worker event
self.addEventListener("install", (event) => {
  // it might only take a spilt second for the service worker to be installed and after installation if service worker do nothing the browser stopped it and to avoid this problem we use event.waitUntil
  event.waitUntil(
    // open api: open the cache if exist and if not exist, create it and then open it:
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets...");
      // to add items to cache we use add or addAll
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
  console.log("fetch event", event);
});
