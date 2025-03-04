//STORAGE OF BROWSER
const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];
const self = this;
// console.log("Pwa done")
//installation
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// listen for request
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
    .then((res) => {
      // console.log(res,"resres")
      return fetch(event.request)
    })
    .catch(() => caches.match("offline.html"))
  )
})

// actitivate the service worker
self.addEventListener("activate", (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
              // console.log(cacheNames,"cacheNames")

                if(!cacheWhitelist.includes(cacheName)){
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});