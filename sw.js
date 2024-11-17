// to get a clean state like it is first time to run the app on browser, use Unregister option in service workers in application tab in dev tool.

// listening to install service worker event
self.addEventListener("install", (event) => {
  console.log("Service worker has been installed");
});

// listening to activate service worker event
self.addEventListener("activate", (event) => {
  // for first time, we see this log after install service worker log, but for each update of sw.js we need to do something to activated it.
  // reopen the app
  // or use skipWaiting in service worker in application tab of dev tool
  // or use update on reload in service worker in application tab of dev tool and then reload the page.
  // or use self.skipWaiting() in install service worker event callback - only use it in development

  console.log("Service worker has been activated");

  // what we should do inside the callback after the service worker become activated?
  // this is another area that we could do some cash management.
});
