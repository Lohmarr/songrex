document.addEventListener("DOMContentLoaded", function() {
  /* Make Spotify fit initial layout */
  respondify();
  console.log('respondified')
});

window.addEventListener("resize", function() {
  /* Make Spotify fit layout on resize */
  respondify();
});

function respondify() {
  var spotifyIframes = document.querySelectorAll('iframe[src*="spotify.com/"]');
  spotifyIframes.forEach(function(iframe) {
    var parentWidth = iframe.parentNode.offsetWidth;
    iframe.style.width = parentWidth + "px";

    var windowHeight = window.innerHeight;
    iframe.style.height = windowHeight + "px";

    iframe.src = iframe.src; // Refresh the iframe
  });
}