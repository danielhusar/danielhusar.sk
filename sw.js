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
    "url": "webpack-runtime-1b9c490f5ebe5783fd4e.js"
  },
  {
    "url": "app-406653eac2653d3fb7d3.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a5d43f177c6de94f39cb.js"
  },
  {
    "url": "index.html",
    "revision": "cbb141759f81431becf8d971b0d689e6"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8d72b8c2e3b44333ad898f61b2d4dea5"
  },
  {
    "url": "component---src-pages-index-tsx.31bc8a61d314dd7c8860.css"
  },
  {
    "url": "component---src-pages-index-tsx-447bd886bc945454ea30.js"
  },
  {
    "url": "6-26fa5899e5e6849a5847.js"
  },
  {
    "url": "0-17f56a855fa803d4e4cb.js"
  },
  {
    "url": "static/d/123/path---index-6a9-ROF80qEwTPIuWDmCqJPKcSIxH4.json",
    "revision": "bbc8cde3ba617d562b829708198f8340"
  },
  {
    "url": "component---src-pages-404-tsx.31bc8a61d314dd7c8860.css"
  },
  {
    "url": "component---src-pages-404-tsx-7184d681061b560e22f5.js"
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