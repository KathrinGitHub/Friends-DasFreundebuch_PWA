/*  
AUTHORS: Müslüm Atas & Mathias Knoll
DESCRIPTION: A service worker is installed and activated, which is also able to retrieve cached files.
LAST CHANGE: 17.12.2022
*/

//it creates a list of all the files to be cached
//@cacheName: 	It is used to give a unique name to the cache und to update it
//				      When the app has a new release such as version 2, we should then add 
//              all of our files (including our new files) to a new cache
var cacheName = 'lab05pwa-cache';
var filesToCache = [
  'img/apple_splash_640.png',
  'img/apple_splash_750.png',
  'img/apple_splash_1125.png',
  'img/apple_splash_1242.png',
  'img/apple_splash_1536.png',
  'img/apple_splash_1668.png',
  'img/apple_splash_2048.png',
  'img/touch-icon-iphone.png',
  'img/lab05pwa48.png',
  'img/lab05pwa72.png',
  'img/lab05pwa96.png',
  'img/lab05pwa144.png',
  'index.html',
  'next.html',
  'css/style.css',
  'use_webworker.js',
  'use_serviceworker.js',
  'webworker.js',
  'serviceworker.js',
  'main.js',
  'manifest.json'
];

// Install the service worker asynchronously, which then actually caches all the files contained in the above list
// NOTE: Cache only the files that do not change every time
// When registration is complete (see use_serviceworker.js file), the serviceworker.js file is automatically downloaded, 
//   then installed, and finally activated.
// In the install listener, we initialize the cache and add files to the cache for offline use. 
// @waituntil(): 	The service worker does not install until the code inside waitUntil is executed.
// The code inside "then" will be run, asynchronously
// @caches: Caches is a special CacheStorage object available in the scope of the given Service Worker to enable saving data
//					Saving to web storage won't work, because web storage is synchronous.
//					We open a cache with a given name, then add all the files our app uses to the cache, so they can be downloaded 
//          next time (identified by request URL).
self.addEventListener("install", event => {
  console.log("Service Worker Lab 05 PWA installing.");
  event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

// This event is usually used to delete any files that are no longer necessary and clean up after the app in general.
self.addEventListener("activate", event => {
  console.log("Service Worker Lab 05 PWA activating.");
});

// The service worker fetches content from the cache if it is available there, providing offline functionality
// @RespondWith:  It works as a virtual proxy server between the app and the network. 
//					      Allows to respond to every single request with any response we want: prepared by the Service Worker, 
//                taken from cache, modified if needed.
self.addEventListener('fetch', event => {
  console.log("Service Worker Lab 05 PWA fetching.");
  event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
  );
});

