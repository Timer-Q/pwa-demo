/* eslint-disable */
const cacheName = "file-cache-0";
const cacheFiles = ["/", "./index.html", "./favicon.ico"];

// 监听install事件，安装完成后，进行文件缓存
self.addEventListener("install", function(e) {
  console.log("Service Worker 状态： install");
  const cacheOpenPromise = caches.open(cacheName).then(function(cache) {
    return cache.addAll(cacheFiles);
  });
  e.waitUntil(cacheOpenPromise);
});

// self.addEventListener("fetch", function(e) {
//   // 如果有cache则直接返回，否则通过fetch请求
//   e.respondWith(
//     caches
//       .match(e.request)
//       .then(function(cache) {
//         return cache || fetch(e.request);
//       })
//       .catch(function(err) {
//         console.log(err);
//         return fetch(e.request);
//       })
//   );
// });

// TODO: 更新静态缓存资源

const apiCacheName = "api-cache-0";
self.addEventListener("fetch", function(e) {
  // 需要缓存的xhr请求
  const cacheRequestUrls = [
    "http://localhost:3030/movies",
    "http://localhost:3030/detail"
  ];

  // 判断当前请求是否需要缓存
  const needCache = cacheRequestUrls.some(function(url) {
    console.log(
      "现在正在请求：" + e.request.url,
      e.request.url.indexOf(url) > -1
    );
    return e.request.url.indexOf(url) > -1;
  });

  /**** 这里是对XHR数据缓存的相关操作 ****/
  if (needCache) {
    // 需要缓存
    // 使用fetch请求数据，并将请求结果clone一份缓存到cache
    // 此部分缓存后在browser中使用全局变量caches获取
    caches.open(apiCacheName).then(function(cache) {
      return fetch(e.request).then(function(response) {
        cache.put(e.request.url, response.clone());
        console.log("response: ", response);
        return response;
      });
    });
  } else {
    /* ******************************* */
    // 非api请求，直接查询cache
    // 如果有cache则直接返回，否则通过fetch请求
    e.respondWith(
      caches
        .match(e.request)
        .then(function(cache) {
          return cache || fetch(e.request);
        })
        .catch(function(err) {
          console.log(err);
          return fetch(e.request);
        })
    );
  }
});
