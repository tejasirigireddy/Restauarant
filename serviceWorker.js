self.addEventListener("install", (event) => {
  console.log("installing...");
  event.waitUntil(
    //creating cache
    caches.open("restaurant").then((cache) => {
      return cache.addAll([ 
      ]);
    }))
})
//Fetch addEvent
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request).then((response) => {
        return caches.open("restaurant").then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        })
      })
    })
  )
})
