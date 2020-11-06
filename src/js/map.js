document.getElementById("more-interactive").onclick = function() {
    var map_interactive = document.getElementById("map-interactive");
    map_interactive.style.display = (map_interactive.style.display == 'block') ? 'none' : 'block';
    var map_interactive_close = document.getElementById("more-interactive-close");
    map_interactive_close.style.display = (map_interactive_close.style.display == 'block') ? 'none' : 'block';
    document.getElementById("more-interactive-close").onclick = function() {
        map_interactive.style.display = (map_interactive.style.display == 'block') ? 'none' : 'block';
        map_interactive_close.style.display = (map_interactive_close.style.display == 'block') ? 'none' : 'block';
    }
}