if ('serviceWorker' in navigator) {
  var scope = location.pathname.replace(/\/[^\/]+$/, '/');
  if (!scope.match(/__browserfs__/)) {
    navigator.serviceWorker.register('sw.js', {scope})
    .then(function(reg) {
      reg.addEventListener('updatefound', function() {
        var installingWorker = reg.installing;
        console.log('A new service worker is being installed:',
                    installingWorker);
      });
      // registration worked
      console.log('Regristration succeeded. Scope is ' +
                  reg.scope);
    }).catch(function(error) {
      // regristration failed
      console.log('Regristration failed with ' + error);
    });
  }
}
