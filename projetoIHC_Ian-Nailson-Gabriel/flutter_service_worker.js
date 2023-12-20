'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bec401ba1b8d68654547f75083a67b7c",
"assets/AssetManifest.bin.json": "ccc5636ae8cb4044cc40e0410dd08cfb",
"assets/AssetManifest.json": "e6e7298fe64789818f63cddb936f99c8",
"assets/assets/imagens/bg1.jpg": "317227c579e568cad878f08d428f337d",
"assets/assets/imagens/bg2.jpg": "4945974d49c804ab308b8eafcc709489",
"assets/assets/imagens/bg3.png": "9ae25b34f7fbfd7f5b75836de8bd993e",
"assets/assets/imagens/c1.jpg": "933a225e0d5d6ebb21ae347be3864e32",
"assets/assets/imagens/c2.jpg": "88b77796de4049b1c357efb715cc5a31",
"assets/assets/imagens/c3.jpg": "fc655fd273f839d6ebc9860b25728d00",
"assets/assets/imagens/c4.jpg": "618c53e147f43b8cc27a8d3e5c9de70e",
"assets/assets/imagens/i1.png": "b6a6efe3061b39faafe2fe22a41bc2b7",
"assets/assets/imagens/i10.png": "2349fc0c4746d7e6159b8941dc3762bf",
"assets/assets/imagens/i11.png": "4057fe272bb446044ad460e4f91fab6d",
"assets/assets/imagens/i2.png": "bdfb71c42ecc8b62b445b07537606b98",
"assets/assets/imagens/i3.png": "4b389dd5a4c8ab414962826894a65daa",
"assets/assets/imagens/i4.png": "2df6e5b830763e098d4c1898d1163746",
"assets/assets/imagens/i5.png": "3f9e0826be368ba1b18231aad130c64e",
"assets/assets/imagens/i6.png": "4eb7c327530d531005a7e207afd284d0",
"assets/assets/imagens/i7.png": "b290fc53ecb6506f3ab55060e74ccac8",
"assets/assets/imagens/i8.png": "486fe72b5267716cda74eafac0d07d7e",
"assets/assets/imagens/i9.png": "83cf6dd043c4e0859c503afa286b4e35",
"assets/assets/imagens/logo.png": "507001747f39a5686eceb903cc512b69",
"assets/assets/imagens/logo2.png": "089ff340fbabd44aad865a70a57d9203",
"assets/assets/imagens/n1.jpg": "943f2c80065c29c272538d78f358dfbf",
"assets/assets/imagens/n10.jpg": "ff78daca487dc30bae918d793a2c2eb6",
"assets/assets/imagens/n11.jpg": "4b16e48e68c09c7876629173edc5ea11",
"assets/assets/imagens/n12.jpg": "0753987cb91bb4c8af95341f7f57e13a",
"assets/assets/imagens/n13.jpg": "ad86d4a9ad874e7184e5d47324bae45c",
"assets/assets/imagens/n14.jpg": "43b73d1da768b49f052b948d1e3e2965",
"assets/assets/imagens/n15.jpg": "0d2900dc9b4e4fac333a05aa6603d9ae",
"assets/assets/imagens/n16.jpg": "828a0efbbf8aa5c91f3a6ed0f21e3fd5",
"assets/assets/imagens/n17.jpg": "8f2503ef26995e579de630297dff987f",
"assets/assets/imagens/n18.jpg": "90652ea36b70cebfaf6cea8cbe1a1c0f",
"assets/assets/imagens/n19.jpg": "7524e743762a55f4e7867a75574b8866",
"assets/assets/imagens/n2.jpg": "27cc31df409dfbc12bf78fa094ecd108",
"assets/assets/imagens/n20.jpg": "1a63bb6a9eead02de7849d9a825daf85",
"assets/assets/imagens/n21.jpg": "3ba874823e282eb34fb26c0bdf445590",
"assets/assets/imagens/n22.jpg": "b5cc93bd54470ea8ea0298e07e9c28e6",
"assets/assets/imagens/n23.jpg": "a75a94150082930f0a221505904c19c7",
"assets/assets/imagens/n24.jpg": "7076782f26a3195e47b646021ab9eff3",
"assets/assets/imagens/n25.jpg": "a462102a25e06886f235c8235b090721",
"assets/assets/imagens/n26.jpg": "d758ada3fe5b3e4fa14344be8b9f948d",
"assets/assets/imagens/n27.jpg": "eebadc9b1655d06f010294b409c91c89",
"assets/assets/imagens/n3.jpg": "0d84e6b2ffd12354c0d673a477b08931",
"assets/assets/imagens/n4.jpg": "a62d65036c4bfce04492cfc0c1386ae0",
"assets/assets/imagens/n5.jpg": "19826eba07d20afc518050caa96359e4",
"assets/assets/imagens/n6.jpg": "1d0b2de2d9d5a96f7282587985e5a2bb",
"assets/assets/imagens/n7.jpg": "fb70c140fc2b52a114e75246d2c943de",
"assets/assets/imagens/n8.jpg": "a6869c9bef7800ed7cbf5cf58bb5d53e",
"assets/assets/imagens/n9.jpg": "25f0925397dd67c607a78eb417bc4b05",
"assets/assets/imagens/r1.jpg": "618c53e147f43b8cc27a8d3e5c9de70e",
"assets/assets/imagens/r2.jpg": "f2de94507e82dcd37d1920cc47047018",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "f7bb6b31ec8fda9a6aaea8d5aa34d0b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3601ac961f0400b151a6423baf61dfcd",
"/": "3601ac961f0400b151a6423baf61dfcd",
"main.dart.js": "9f465e68ff879765e29a02c235e866fb",
"manifest.json": "a67f410bd0e937207e3e4e734eca695e",
"version.json": "22450f184d305678d473951b6e485254"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
