// add event listener for install event:
// self inside a service worker refers to service worker itself
self.addEventListener("install", (evt) => {
  // we use this to add assets to the cache so that a user can still see those assets in offline mode and those assets would be common assets to the site things that don't change much like the main CSS file or the logo or the index page, that kind of things.

  console.log("Service worker has been installed"); // we only see once it is installed, after refresh page we don't see it, unless the sw.js updated and then we refresh(ctrl+s/save file in vs code) the app.

  // after update the sw.js it is not immediately after install became active unless you do one of these things:

  // - close all active tabs and reopen the app then the new version of the sw.js become active

  // - Forcing the Updated Service Worker to Activate Immediately
  // By default, a new service worker waits until all tabs using the old version are closed. To override this and activate the new service worker immediately, use skipWaiting in the install event:
  // self.skipWaiting();

  // - or you can use update on reload option in service workers in application tab in dev tool and then after update sw.js refresh the page

  // **in chrome, JavaScript executing in the window context cannot access SW's context and vice versa. You have to implement a workaround of some sort. so In the console, there is a select box to select the JavaScript context. This defaults to top (which means "show everything"), but you can select a more specific context for just the service worker. this is the reason why after update the sw.js and install the new version of sw.js you don't see the log of install event in chrome console because the javascript context must manually selected to service worker.
  // another workaround for this issue to uncheck the Selected context only in console setting options

  // check this useful references:
  // https://gist.github.com/Rich-Harris/fd6c3c73e6e707e312d7c5d7d0f3b2f9
  // https://stackoverflow.com/questions/39143034/what-is-service-worker-console-where-is-it-in-chrome-browser
});
