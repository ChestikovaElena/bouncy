document.getElementById("button_more").onclick = function() {
    var more_content = document.getElementById("promo-more__content");
    more_content.style.display = (more_content.style.display == 'block') ? 'none' : 'block';
}