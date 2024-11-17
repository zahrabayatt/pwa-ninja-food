// listening to install service worker event
self.addEventListener("install", (event) => {
  console.log("Service worker has been installed");
});

// listening to activate service worker event
self.addEventListener("activate", (event) => {
  console.log("Service worker has been activated");
});
