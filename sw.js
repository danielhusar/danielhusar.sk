/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-97cf1eb04e00434123a6.js"
  },
  {
    "url": "app-90de39e5ff5ff2cf7d0a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a5d43f177c6de94f39cb.js"
  },
  {
    "url": "index.html",
    "revision": "f1bc2af3a10f0b8239319e34bb093ad4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2ebff22e2801b96a1606fb3218281b9e"
  },
  {
    "url": "component---src-pages-index-tsx.31bc8a61d314dd7c8860.css"
  },
  {
    "url": "component---src-pages-index-tsx-1057dca5857f83697b28.js"
  },
  {
    "url": "6-27fb9515771cea0a4372.js"
  },
  {
    "url": "0-9029306a02c28879c708.js"
  },
  {
    "url": "static/d/123/path---index-6a9-ROF80qEwTPIuWDmCqJPKcSIxH4.json",
    "revision": "bbc8cde3ba617d562b829708198f8340"
  },
  {
    "url": "component---src-pages-404-tsx.31bc8a61d314dd7c8860.css"
  },
  {
    "url": "component---src-pages-404-tsx-1aefc8c68dc0e804ac3e.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "7f867d0a0cac123ba05c1d85d13b87db"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});