'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b2efa4250dd5857a4d263b605f3b5655",
"assets/AssetManifest.bin.json": "ae769b7da24686fc2f076f33757e3b0f",
"assets/AssetManifest.json": "b08d027d74c825f611f0888162bd2af3",
"assets/assets/fonts/Caveat-Regular.ttf": "04c3547e70bd8d53833d325c37f9621f",
"assets/assets/images/brownie-chocolate.jpg": "bd891a635303e6ce6e46ecfae3126519",
"assets/assets/images/caipirinha.jpg": "a27d4769a10cf2fc0017215af958beb5",
"assets/assets/images/cheesecake-frutas.jpg": "36e599b818bc0731d8cd2a0687985b3c",
"assets/assets/images/chicken-salad.png": "c67b3df688affe97d7249ef116114538",
"assets/assets/images/chicken-tender.png": "6e45a381ddf5655fd4311386042be27d",
"assets/assets/images/chicken-tortilla.png": "9c171abab08f2356e3900476b918f2e0",
"assets/assets/images/cold-noodles.png": "f349b4401a360b7eff716826d128267a",
"assets/assets/images/coxinhas.png": "fecf2de041f89eb99dbf13481bc4efcf",
"assets/assets/images/creme-brulee.jpg": "f65c89fa3fe16177f2d6b8b23cd1c3b6",
"assets/assets/images/fish-n-salsa.png": "e7fd62c478514500a74ffa53cb5f35d3",
"assets/assets/images/hamburger-ink.png": "c1e2a4860e0eb856e1d250a0f5f33c51",
"assets/assets/images/lasagna-bolognese.jpg": "a3e592dd6c0e63cbc63c427ca178ae92",
"assets/assets/images/mousse-maracuja.jpg": "e3ac58426dc7f522db3cc4c47c46e973",
"assets/assets/images/no_image.jpg": "9c210ab6d2ea9ecde51b94439085d142",
"assets/assets/images/pamonha.png": "b7413145eab19e3376b0c0424f9281cb",
"assets/assets/images/penne-au-sugo.png": "67fe89c285375cb6670f119157566473",
"assets/assets/images/pudim-leite.jpg": "ba4f6b0d2383497a41ca817a5b879cb0",
"assets/assets/images/rice-n-beans.jpg": "ec9c7cf6ddf406f931379e9166970fc6",
"assets/assets/images/shrimp-n-rice.png": "31300d12dc3b13dee71caf76d78aaacd",
"assets/assets/images/spagetti.png": "e1fc8d070af5eac521837cf600b76b15",
"assets/assets/images/special-drink1.png": "c3ab8e5ee04be2d097692865702654a6",
"assets/assets/images/special-drink2.png": "41bcf60448711782fe9c8448ad32bde9",
"assets/assets/images/special-drink3.png": "b5432011104d59059072d05426ec2cff",
"assets/assets/images/special-drink4.png": "98654e2a3d709ef2e279eaa7b7488280",
"assets/assets/images/special-drink5.png": "50476d163271f914dda30314d0ce39c5",
"assets/assets/images/special-drink6.png": "1a7c0690f674837db3a2bd9d962e2c7a",
"assets/assets/images/special-drink7.png": "3986b202c2e318e683ce1d6766d0c83b",
"assets/assets/images/steak-veggies.png": "660394a28fc5ff3ae95877d415626f1c",
"assets/assets/images/steak.png": "f6734d83883d371265dacdb3d4766b6e",
"assets/assets/images/tapioca-taco.jpg": "2fb20b1ff3162bfbf90fea6da60ac31d",
"assets/assets/images/visa.png": "395080dd383da732904ee2e9f39d8291",
"assets/FontManifest.json": "67300aac34da736d27956a21fc1d2b80",
"assets/fonts/MaterialIcons-Regular.otf": "2663fd427763b08c3fefee3d00b32ce2",
"assets/NOTICES": "0db47bd5857701e8849b6c261ed5cbb4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8b380889ae13a2bf81a0fb8e3b16c3fa",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "39e3577449d19c32fc9bc8bfc78ec2c8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4428c5b983fcbfa4d3dc61148ff30f3a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "96fe9d02556dedcf552ebb8618dc5a22",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d5b06368f6fb27dc9bce689f1f1a28f5",
"/": "d5b06368f6fb27dc9bce689f1f1a28f5",
"main.dart.js": "659da30d91b20e50dd5ffe76b9cbf8c7",
"manifest.json": "9008ac0e19eab5a3607aab1a87517713",
"version.json": "0d0da57e850bc38250c01f9e39db1c32"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
