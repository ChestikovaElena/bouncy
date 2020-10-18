document.getElementById("header-more-button").onclick = function() {
    var more_content = document.getElementById("header-more__content");
    more_content.style.display = (more_content.style.display == 'block') ? 'none' : 'block';
    var more_image = document.getElementById("header-more-image");
    more_image.src = (more_content.style.display == 'block') ? "../src/icons/more_up.png" : "../src/icons/more.png";
}
