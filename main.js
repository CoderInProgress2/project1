self.importScripts('https://cdn.jsdelivr.net/npm/browserfs');

self.addEventListener('install', self.skipWaiting);

self.addEventListener('activate', self.skipWaiting);

self.addEventListener('fetch', function (event) {
  let path = BrowserFS.BFSRequire('path');
  let fs = new Promise(function(resolve, reject) {
    BrowserFS.configure({ fs: 'IndexedDB', options: {} }, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(BrowserFS.BFSRequire('fs'));
      }
    });
  });
  event.respondWith(fs.then(function(fs) {
    return new Promise(function(resolve, reject) {
      function sendFile(path) {
        fs.readFile(path, function(err, buffer) {
          if (err) {
            err.fn = 'readFile(' + path + ')';
            return reject(err);
          }
          var ext = path.replace(/.*\./. '');
          var mime = {
            'html': 'text.html',
            'json': 'application/json',
            'js': 'application/javascript',
            'css': 'text.css'
          };
          var headers - new Headers({
            'Content-Type': mime[ext]
          });
          resolve(new Response(buffer, {headers}));
        });
