'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c6566f64461986ffe46c913e76644b70",
".git/config": "324db3dcb34f3cd1ba34e9421d539428",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3f5a051e10fdc34c07814c068823b54d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "abae71276b798dfb5d583a2e58db17dc",
".git/logs/refs/heads/master": "abae71276b798dfb5d583a2e58db17dc",
".git/logs/refs/remotes/origin/master": "cfde410ff4f4f5fc40e541d3e306a37b",
".git/objects/02/2de6974075e47b86bc2d42dc524e434ac87cfb": "8f654c2a64ce8f79ad7503c2a0dfb39a",
".git/objects/0c/f3430d805da031a1f0b08f60ce367dfeb2e87c": "f09bbfb02a79e0903e681e19a15579c5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/b56f403aac306dc4c87b7fb897b339552de2cd": "a216869b89157b8fcd57a12a7aed8bbe",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/7db3d3ef4e9481ff7501864a05fd634019fa2e": "fd766387859e269c28b41ccc04540422",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/5eb194192d046363366f7ad1cfa6be273bc0c4": "dd9686d8318c2619c9382fe19ae0ef9a",
".git/objects/2d/0b85bab1a61dfc8f5dc39cc56c587de75021b2": "cd02b10452218cc786bfca802dbd0983",
".git/objects/2e/b8be9b60df582b2a69d2c264c2ee4f87980b6a": "d1c0829b82bc7b34380bfecb2987ac66",
".git/objects/3b/5c9b4ec16db19a728741d7896dbcd08887051b": "e57201e67bd42e58e91ca34d340201db",
".git/objects/44/a351bbeba96a5b4fa1e638a23fded8a7b77282": "0fa7e040abb3e9c6b598ab7e031dac00",
".git/objects/46/a3c4ca21b78f853858cbc740459243bb30fb76": "37479428673bc975dff2ebed27a12392",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/3a80097833d4d8b228c8d0e15d4ec0b9dfefa1": "2337690b44e017c8a038a6c443dfbb3a",
".git/objects/4f/64751ce88e70a04c4bca4b0dc9426c78cfcf65": "afd160bc9942358dd46c1a65ba26ec3a",
".git/objects/57/88f46ed5c7c5175609bc9bd5be541f34133b26": "e9a67d6e336b99b81e821d0f5bc14436",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/b1908bac48c5243682957c40087b1cfca3f143": "fc2291fc6cdbcb9edabec66bf2b8c4b5",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/1d4779a274afd517c7fb8b0c8ce0378670a1f6": "0350eece1b3501e93c6b5461a821bc09",
".git/objects/75/ad6858087e1398b6c1baf785a60ce554492c25": "3407aa3a9863fd18f6c30dd2c06f5dac",
".git/objects/83/ba5225510aada6c6e2c8031c1b01fc4f6f1180": "5543cd7bc850f5fc663fe04c204b6306",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/e9341299752bcd6095e9eddefc7a64dff395ab": "077a5d282eae6fcbc83207726e15d087",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0c759c3f266d92f8cf4abb6a9c4c77e4975592": "b6b92db5eeff3f31b50a808f19c866e9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e2345ed87b9037fefa871a6e660eeb5257e095": "b71cfc5c0a055cfc7645ff08c82aba44",
".git/objects/8b/1acba5475b533ce8415d49dccdd70ba1e8bd1d": "9e4526db359a4d922e8684c9ff114f07",
".git/objects/8e/9aadc758cc2a951e32658ab6072051d665db04": "c15eb860a05996ba4b75b10cd2e36d8e",
".git/objects/90/ec07745aafe6ffa4554434b5a818fb380b69a6": "d78cb2eb92d1fe4159e28d7e7898ac79",
".git/objects/93/5be52da67686028ca3403c081ce7a1c9bbaa03": "802b012a2889a3dcb7d8caf25f17d171",
".git/objects/93/b7bf9732a0c752072d190ed300c8bbc25f8b9b": "25035775cf78d70c5f8ab24add1832a6",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/79afd1ef5c3b4aa5e0201929d0a544e612ff59": "6e03eb14a3152c360fa2e911bb111e45",
".git/objects/a0/a818729ef522dafe79d0c1763c863cd7d6f375": "a46a02f278b1c879450ff6424a77ee4c",
".git/objects/a1/45a389aa17da20017d789e5743085f3a691b72": "14f82111d3734cf3ade3738e9fa03ec3",
".git/objects/a5/fb36b2b050f3e2ae59f35e0d20e570eccc3b2a": "efe1be137bb73477af1fa81d9dc522e3",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/1ad16326e957601f1710dbe4d6d1998ce8db1f": "a88ca230e05daec541e80ec834d3ec2b",
".git/objects/c0/15ee7f21755a783fb8f6c1cfe893c343b0f533": "dfb89dd991026b562f849f83f8eb4994",
".git/objects/c0/4a846806076aa6ab27f044691c08259f7409b8": "f234888220064aca7ed3d29db7949c9b",
".git/objects/c1/8457a0537a36ebd3bfe7eb210a2817d21498c5": "027111bcbed3de6931115e79d5ab7ab1",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b7dc0717fe51161a02ac434b8d86dd4851ce36": "fcc34d13e884b5b2e00fe986604aa69e",
".git/objects/f1/24e9b8c3171aaeed1b4f0b60e4569b5d33a2d9": "83e3c360b02cce7cf1ebf7ed0d370e97",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/6f96cb38284dd56c127e641a1f58cbe315dbf5": "1846e4dbe18897686b1fee46661fc4b2",
".git/refs/heads/master": "42b8fdb672520b2a79854ed809f5fed9",
".git/refs/remotes/origin/master": "42b8fdb672520b2a79854ed809f5fed9",
".vscode/settings.json": "85115974e5e3988d6edf4e8687c537e8",
"assets/AssetManifest.bin": "96a3c525fe5c1eaacab7acc216abc29e",
"assets/AssetManifest.bin.json": "f5f6c23618314ce3608e733a025723ee",
"assets/AssetManifest.json": "d8c7c9835f6133bcbfa86fd19d1dcf70",
"assets/assets/background.jpg": "b3684344bb9d0d36507155662b090b1a",
"assets/assets/background.png": "6d0819fd9d2bf13f963ba9d9c1073d17",
"assets/assets/background2.png": "a6202d0964000cb3d38a5a5a55ddde68",
"assets/assets/bb_app.jpg": "50ca11ba5971eb814f67912b1b60cce7",
"assets/assets/dij.jpg": "bd4e8334b71761f7f03050e0a48afc68",
"assets/assets/fonts/jost.ttf": "fe00c6e60f102502ba9fc42bc1df7392",
"assets/assets/fonts/josti.ttf": "af5b332296fd1d62275390d948bb7f69",
"assets/assets/github.png": "0c4b636b62c0f3c685e0a1f9803e7434",
"assets/assets/instagram.png": "958cc5225b53d4d1c0c5d21d1463025e",
"assets/assets/linkdin.png": "edb6ddfd92bbfdb103a9323dff545605",
"assets/assets/note_app.jpg": "77257e45f7dca20d66abaf602a9ee196",
"assets/assets/profile.png": "6242e5e670e281fccb6e8298c12adcaa",
"assets/assets/recipe_app.jpg": "f0b6668873addd937c392d87b6c4c20e",
"assets/assets/sketcher_app.jpg": "d649a2169ac8c4c79a2d051219781281",
"assets/assets/takecare_app.jpg": "5fa878361007a90d0919a1dd569b97ce",
"assets/assets/weather_app.jpg": "9dd8ecf2980d3650d855c3297412a38b",
"assets/assets/y_chat_app.jpg": "da9db816c927718a959a9c028e4491f2",
"assets/FontManifest.json": "a76c4313262101d8f8c164ec0a1fbf66",
"assets/fonts/MaterialIcons-Regular.otf": "e40d6c0ed5635a5d8b46978930165006",
"assets/NOTICES": "58cbc41e376ec772b72ad190338d863e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e1ee838167cf370f94d003225d24de18",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a386129718ebed634f9eee89ee882497",
"/": "a386129718ebed634f9eee89ee882497",
"main.dart.js": "a233620ad03ab9fa1f3fd7b97a586f41",
"manifest.json": "44008d286d21757747a82f14c842f77b",
"version.json": "09582cad4398b8ccdf93e1f743dfd2cc"};
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
