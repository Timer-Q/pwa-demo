/* eslint-disable */
const cacheName = "file-cache-0";
const cacheFiles = ["/", "/index.html", "/favicon.ico"];

// 监听install事件，安装完成后，进行文件缓存
self.addEventListener("install", function(e) {
  console.log("Service Worker 状态： install");
  const cacheOpenPromise = caches.open(cacheName).then(function(cache) {
    return cache.addAll(cacheFiles);
  });
  e.waitUntil(cacheOpenPromise);
});

const handleIsUpdateCache = (request, cache) => {
  const requestUrl = new URL(request.url);
  const cacheUrl = new URL(cache.url);
  return requestUrl.search !== cacheUrl.search;
};

const handleUpdateCache = (apiCacheName, e) => {
  caches.open(apiCacheName).then(cache => {
    return fetch(e.request).then(response => {
      cache.put(e.request, response.clone()); // 这是因为请求和响应流只能被读取一次
      console.log("response in fetch: ", response);
      return response;
    });
  });
};

const apiCacheName = "api-cache-0";
self.addEventListener("fetch", function(e) {
  // NOTE: `respondWith` 方法旨在包裹代码，这些代码为来自受控页面的request生成自定义的response。
  // 这些代码通过返回一个 Response 、 network error 或者 Fetch的方式resolve。
  const url = new URL(e.request.url);
  const isHTMLDoc =
    e.request.headers.has("accept") &&
    e.request.headers.get("accept").includes("text/html") &&
    (url.pathname.endsWith(".html") || !/\.\w+$/.test(url.pathname));

  const request = isHTMLDoc ? new Request("/index.html") : e.request;

  const { request } = e;

  e.respondWith(
    caches
      .match(request)
      .then(cache => {
        if (!cache) {
          if (request.url.indexOf("/proxyDetail") >= 0) {
            handleUpdateCache(apiCacheName, e);
          }
          if (/\s*(\.webp || \.jpg || \.html)/.test(request.url)) {
            return fetch(new Request(request.url));
          } else {
            return fetch(request);
          }
        } else {
          const isUpdateCache = handleIsUpdateCache(request, cache);
          if (isUpdateCache) {
            handleUpdateCache(apiCacheName);
            return fetch(request);
          } else {
            console.log("response in cache: ", cache, apiCacheName);
            return cache || fetch(request);
          }
        }
      })
      .catch(function(err) {
        console.log(err);
        return fetch(request);
      })
  );
});

// 删除多余缓存
// self.addEventListener("activate", event => {
//   console.log("activate activate activate ");
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       console.log("cacheNames: ", cacheNames);
//       return Promise.all(
//         cacheNames.map(cacheName => {
//           if (cacheName.indexOf("api") >= 0 && cacheName !== apiCacheName) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
