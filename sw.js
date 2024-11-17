// listening to install service worker event
self.addEventListener("install", (event) => {
  console.log("Service worker has been installed");
});

// listening to activate service worker event
self.addEventListener("activate", (event) => {
  console.log("Service worker has been activated");
});

// listening to fetch service worker event
self.addEventListener("fetch", (event) => {
  console.log("fetch event", event);
});

// What does it(the pwa app) take to be installable?
// https://web.dev/articles/install-criteria

// service workers only work over HTTPS connections and localhost is the exception but in the android emulator we see the app in this address: http://10.0.2.2:5500/index.html and it is not the https connection! and the service worker not going to work.
// in this case we go to the dev tool in our machine and go to the remote devices by type this chrome://inspect/#devices in the new tab and then we click on prot forwarding and enter 5500 as port and localhost:5500 as ip address and port and remember to check enable port forwarding option and then in android emulator if we type http://localhost:5500/index.html we see the app and also we see a install app banner.

// to run a app on the actual android mobile, you need to enable developer option in the mobile and then connect it using usb cable to the pc, and now you can see it in the remote devices in this address in chrome: chrome://inspect/#devices and then you can using port forwarding in this tab be able run the app in localhost in android mobile device.
// Guid to enable developer option on Android: https://developer.android.com/studio/debug/dev-options
