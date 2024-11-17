// listening to install service worker event
self.addEventListener("install", (event) => {
  console.log("Service worker has been installed");
});

// listening to activate service worker event
self.addEventListener("activate", (event) => {
  console.log("Service worker has been activated");
});

// in this app, we have a index.html file running in the browser which was initially fetched from a server ,in our case it is a local development server at the moment, and normally when the app makes a request for a resource like a stylesheet or images or some other page, it sends a request form the browser to the server, gets the resource and then that resource is sent back in a server response to the browser, so that we can use it in the app.
// now we have also a service worker sitting right in the background of browser and potentially listening for fetch request from our app when they happen now this service worker essentially acts as a proxy between our app and the server. now when our app makes a request for example for an image or CSS file, it goes through our service worker file and at this point fetch event is emitted and the service worker can listen for and react to that event.
// now at that point we could intercept the fetch request we could do nothing and later on as normal to the server and back or we could modify the request before it carries on or even stop the request and return a custom response to the app.accent-1
// but why we would do all this? why intercept the request at all?
// eventually our service worker will be handling cached assets and at some point when a fetch request is made from the browser we might want to stop that request in its tracks so that we get whatever it was requesting from the caph instead so doesn't have to go to the server and back and then return it to the browser right here and this makes for a really quick experience and good offline behavior and this is at the heart of what a service worker can do.

// listening to fetch service worker event
self.addEventListener("fetch", (event) => {
  // it occur whenever we try to get something from a server, that could be for example a CSS file or JS file or JSON file or HTML page or an image or even from a JS file if we were to make some kind of HTTP request that would be a fetch request and all these with fire fetch events that we can listen to inside our service worker and then do something with them.
  console.log("fetch event", event);
});
