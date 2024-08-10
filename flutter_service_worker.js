'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a2cc8dc044e43a2205cf8645801f382e",
"index.html": "12563e06f1a5751baade191ed6c94ee4",
"/": "12563e06f1a5751baade191ed6c94ee4",
"main.dart.js": "157cbd31393e0266755493b39b61de38",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "58e7b5ec20e60d226111499a67510e51",
"assets/AssetManifest.json": "3a09b226fbae00fcce09ec79bc25e3a1",
"assets/NOTICES": "50a2385b240b56035aa606c6742b5011",
"assets/FontManifest.json": "3e3fd8c34116545cee9e770144d06264",
"assets/AssetManifest.bin.json": "08db588b6798844ca1aa97138f06352c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5e19427883af50eb46624f158beec402",
"assets/fonts/MaterialIcons-Regular.otf": "743de8b41d771758dcd0ab53efa730bd",
"assets/assets/images/logo_ufrn.png": "bf7fadead91352342bf20b899220cd9e",
"assets/assets/images/icon_search.png": "a7f4659a7653aa1949d807eba2f2182f",
"assets/assets/images/new_register_background.png": "a565f04274e1d82e4ee84a2a21294486",
"assets/assets/images/icon_trash.png": "2ace79ed202c40a11fb167589db90d31",
"assets/assets/images/default_icon_error.png": "6ff6f6d2617ffcebbd603466286df22a",
"assets/assets/images/selfcare/estomias.png": "0e202dfda795cc69fe1d2b3a1d06243a",
"assets/assets/images/selfcare/assistencia.png": "e2044d763c55ee50095b9f7e07402b05",
"assets/assets/images/selfcare/leis.png": "e427688d82cc40f2016b4d37369b49a8",
"assets/assets/images/selfcare/curiosities/figure_4.png": "c5551b1ac7304ccfc10fb3dc9b659a5f",
"assets/assets/images/selfcare/curiosities/figure_2.png": "7142abb6240e16963ee9ceb38d2d9e01",
"assets/assets/images/selfcare/curiosities/figure_3.png": "b543a72173dd854b2fff44d3a3f1940e",
"assets/assets/images/selfcare/curiosities/figure_1.png": "0753b9ae118efee77d3b258c90aac68f",
"assets/assets/images/selfcare/curiosidades.png": "496b8db3acb1c26952b6fa4ef55684b8",
"assets/assets/images/selfcare/cuidados.png": "4dcfc6186bb0056af3bec3cdfd6b5b50",
"assets/assets/images/selfcare/alimentacao.png": "ef60e38e2718b8471290babaac353254",
"assets/assets/images/selfcare/cares/appearance_figure.png": "dac5eaf736eba28a976eda44bde0bfb1",
"assets/assets/images/selfcare/cares/products/figure_4.png": "9b1e701abe5fb622a4a7b615610c8ec3",
"assets/assets/images/selfcare/cares/products/figure_5.png": "a11468ec88d794a2075dd530f553f75d",
"assets/assets/images/selfcare/cares/products/figure_7.png": "4ecf33205a1d5e4541b151876116985f",
"assets/assets/images/selfcare/cares/products/figure_6.png": "b7715e1c0eba776280566bea873aed0a",
"assets/assets/images/selfcare/cares/products/figure_2.png": "6f88d6222512d6e9884c5234db91e302",
"assets/assets/images/selfcare/cares/products/figure_3.png": "03e26eea6b19400dadd9d54e1d5b4029",
"assets/assets/images/selfcare/cares/products/figure_1.png": "d8509cb94c1c09263b1951f78a5166cc",
"assets/assets/images/selfcare/cares/complications/figure_4.png": "7fee160c10697e8d4c2d4977593d8fb7",
"assets/assets/images/selfcare/cares/complications/figure_5.png": "58f5266dfa7898392112753df5578cbe",
"assets/assets/images/selfcare/cares/complications/figure_7.png": "fa21e27355bb89c267c2f78c5fb476b1",
"assets/assets/images/selfcare/cares/complications/figure_6.png": "940a8ae2edaf0eeb25251ecb51e9b5ab",
"assets/assets/images/selfcare/cares/complications/figure_2.png": "966bc6850eaf2b2bf41321972145c1fb",
"assets/assets/images/selfcare/cares/complications/figure_3.png": "e19cee44f5134f8527bd709a7f6937d2",
"assets/assets/images/selfcare/cares/complications/figure_1.png": "2875133db43d1d21fed5c883aa3299c0",
"assets/assets/images/selfcare/cares/complications/figure_8.png": "1664a59db5bf7566dc790843cef1fa93",
"assets/assets/images/selfcare/cares/changing/simplebag/figure_4.png": "af24b3abb6c2ddfbf0405ad2bf157f0c",
"assets/assets/images/selfcare/cares/changing/simplebag/figure_5.png": "221fa5f2af8978c6c3ef50a895e2ccce",
"assets/assets/images/selfcare/cares/changing/simplebag/figure_7.png": "2e8e42fea6f0fb1ec78352769102ce9a",
"assets/assets/images/selfcare/cares/changing/simplebag/figure_6.png": "619ac246d283f7652932ce02b36c35b4",
"assets/assets/images/selfcare/cares/changing/simplebag/figure_2.png": "992dff6c05f55b365a130d49581b6a5b",
"assets/assets/images/selfcare/cares/changing/simplebag/figure_3.png": "c35014acb732086b925c54b3f59b92c0",
"assets/assets/images/selfcare/cares/changing/simplebag/figure_1.png": "9554547e7e37da34acf67b89301de18c",
"assets/assets/images/selfcare/cares/changing/simplebag/figure_10.png": "1e3469c99e38d9ab079f99409757bf60",
"assets/assets/images/selfcare/cares/changing/simplebag/figure_8.png": "306b2788a519bf21ac68b3f0ed067be7",
"assets/assets/images/selfcare/cares/changing/simplebag/figure_9.png": "8cff454600d3fadddec83c546a67a54b",
"assets/assets/images/selfcare/cares/changing/bag/figure_4.png": "9ef95c9b0eb209fc41f28e6451d4fec2",
"assets/assets/images/selfcare/cares/changing/bag/figure_5.png": "cb1cf5b11aacaf0e78d84e7811f9be65",
"assets/assets/images/selfcare/cares/changing/bag/figure_7.png": "1c7d9ad98b11531b1a52e0db45819c2b",
"assets/assets/images/selfcare/cares/changing/bag/figure_6.png": "cd22b9cb2c613c1186e12c026089bf54",
"assets/assets/images/selfcare/cares/changing/bag/figure_2.png": "60beeb69787af197139882192e80dc42",
"assets/assets/images/selfcare/cares/changing/bag/figure_3.png": "77e6bed990f23034dc297175cd255e28",
"assets/assets/images/selfcare/cares/changing/bag/figure_1.png": "eb8a0725535d8d0c387641008c2c4d79",
"assets/assets/images/selfcare/cares/changing/bag/figure_8.png": "dde806b91d81d1d54d47d315771891f1",
"assets/assets/images/selfcare/cares/sexuality/figure_4.png": "79bec8df8eedeb9d65295f9c478dd6cc",
"assets/assets/images/selfcare/cares/sexuality/figure_2.png": "cae0700bfa96309773386f0d6e685219",
"assets/assets/images/selfcare/cares/sexuality/figure_3.png": "6375fa8cef003946d7a6a689667e7ca9",
"assets/assets/images/selfcare/cares/sexuality/figure_1.png": "28179a84b11df21cab1379f3d74327ab",
"assets/assets/images/selfcare/cares/sports/figure_2.png": "18b7d436d6c1dfc774d84d0c2f9b7872",
"assets/assets/images/selfcare/cares/sports/figure_3.png": "77c92d9a6d2d6383fe921154321b40cb",
"assets/assets/images/selfcare/cares/sports/figure_1.png": "79cb8ee71dfec0726574ecefcbcca85c",
"assets/assets/images/selfcare/cares/emptying/figure_4.png": "29a82c32fecc87ec38d89ba82842feb2",
"assets/assets/images/selfcare/cares/emptying/figure_5.png": "b43f5c9ea0ddb102c645aa086424b88e",
"assets/assets/images/selfcare/cares/emptying/figure_2.png": "529af303da61c99064db709fae3a0ea3",
"assets/assets/images/selfcare/cares/emptying/figure_3.png": "a554383f043716109f1098195d9f9b29",
"assets/assets/images/selfcare/cares/emptying/figure_1.png": "0347c8e248ef78999bf78648f2f81a7d",
"assets/assets/images/selfcare/cares/cleaning/figure_2.png": "088b82eaa51a7af57766f7d17aa973c7",
"assets/assets/images/selfcare/cares/cleaning/figure_3.png": "9e5d6b04e505e17400f3efb5fe519a72",
"assets/assets/images/selfcare/cares/cleaning/figure_1.png": "e448f55d7291b94e8588493946f5451a",
"assets/assets/images/selfcare/cares/skin_figure.png": "93a413705a244fb8f0f1d06a60a751ed",
"assets/assets/images/selfcare/feed/food_avoid.png": "31125a1713446719e8624178cb5045ec",
"assets/assets/images/selfcare/feed/dehydration/figure_4.png": "75a71c25f22fe03885bc4f2bb190b4b9",
"assets/assets/images/selfcare/feed/dehydration/figure_2.png": "5d804df7c55db2433afa976df3ae1988",
"assets/assets/images/selfcare/feed/dehydration/figure_3.png": "0aac759d809a627c04a047befd2b2b88",
"assets/assets/images/selfcare/feed/dehydration/figure_1.png": "396e4d0e6df1d18d605fe2edfba65bb1",
"assets/assets/images/selfcare/feed/effects/figure_4.png": "947f1e47e59fec1a94a216c5cda5f926",
"assets/assets/images/selfcare/feed/effects/figure_5.png": "fbda77b0d19fbeff8513d8f1e0efb7ea",
"assets/assets/images/selfcare/feed/effects/figure_2.png": "055c0ab7da9a591bee89890e09ef6bed",
"assets/assets/images/selfcare/feed/effects/figure_3.png": "9c1cc91e880c3858d8eb1f8ad660a32b",
"assets/assets/images/selfcare/feed/effects/figure_1.png": "f3b5feb297cceb61fd0b5b0d1eec7916",
"assets/assets/images/selfcare/estomias/types/figure_2.png": "8d964b997c2fb5bf05f8136c8e0a654f",
"assets/assets/images/selfcare/estomias/types/figure_3.png": "eacf78ffcee7608f0c414762abb6c4cc",
"assets/assets/images/selfcare/estomias/types/figure_1.png": "fb6a3d51124f558bce8b29d142ae374e",
"assets/assets/images/selfcare/estomias/types/destaque.gif": "4e19caa5c471056ca90614e458f976b9",
"assets/assets/images/selfcare/estomias/what_is_estomia.png": "55bfc979d5e4932f25b2b7facdc6cf74",
"assets/assets/images/selfcare/estomias/surgery/figure_2.png": "a261543e166972436e340b469c9279a0",
"assets/assets/images/selfcare/estomias/surgery/figure_3.png": "b2a32a3efb4a80e06895b95b17f37c1d",
"assets/assets/images/selfcare/estomias/surgery/figure_1.png": "55efdbc2bc91270bc083c1ccff85decc",
"assets/assets/images/default_background_header.png": "aa52fcb41ea79b1ac826017d87f88c75",
"assets/assets/images/icon_eye.png": "f5bdd14db65980901ff56e2b1a2e6815",
"assets/assets/images/logo_nepede.png": "123d2ec4e3435b21d31fc38a60a9e999",
"assets/assets/images/login_background_header.png": "59b55613fbe6e134dc64baafbd3c3818",
"assets/assets/images/icon_pencil.png": "3f2db781863af1e069f708a9818c77f2",
"assets/assets/images/menu/lamp_icon.png": "a476dd3f1fd14b1f15635a528ce3f494",
"assets/assets/images/menu/profile_icon.png": "1106f697bcddf44ecf18740e9e35d92a",
"assets/assets/images/menu/notebook_icon.png": "2869b4586d2787b943806b1d751657cb",
"assets/assets/images/menu/mail_icon.png": "f563f4811acb21f9f03bf89b6eb8770e",
"assets/assets/images/menu/notes_icon.png": "f1987805b0f47798aa70a7d070debfdb",
"assets/assets/images/menu/question_icon.png": "3964927ba0a4070f78222e7e7950fec2",
"assets/assets/images/icon_plus.png": "2a65a7403f09971dfd255d98b473afa4",
"assets/assets/images/logo_cnpq.png": "3489f6b88c29a1a0ddcb5c98bdd7a6e1",
"assets/assets/images/quiz.png": "4c3614534e2796333965cf9dda548728",
"assets/assets/images/accordion_icon.png": "fde9d5e11ce33f439ab4d7996f228913",
"assets/assets/fonts/Actor-Regular.ttf": "600a1ddb26c4a4a678d9e1d1fff01790",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
