document.getElementById("header-more-button").onclick = function() {
    var more_content = document.getElementById("header-more__content");
    more_content.style.display = (more_content.style.display == 'block') ? 'none' : 'block';
}
