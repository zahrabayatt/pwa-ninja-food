// navigator is an object in JS that represents the browsers and the information about it.
// check if the browsers can support the service workers:
if ("serviceWorker" in navigator) {
  // register the service worker
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("service worker registered", reg))
    .catch((err) => console.log("service worker not registered", err));
}
