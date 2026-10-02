// The old address /main-hk/... has moved to /daily/... Same section where there is one, otherwise the home page.
(function () {
  var NEW = '/daily/';
  var SECTIONS = { arrivals: 1, cams: 1, hiking: 1, savings: 1, study: 1, weather: 1 };
  var parts = location.pathname.replace(/^\/main-hk\/?/, '').split('/');
  var target = NEW + (SECTIONS.hasOwnProperty(parts[0]) ? parts[0] + '/' : '');
  var canon = document.querySelector('link[rel="canonical"]');   // say where the page now lives, to anything that reads it
  if (canon) canon.href = location.origin + target;
  location.replace(target + location.search + location.hash);
})();
