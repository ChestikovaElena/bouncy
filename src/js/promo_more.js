document.getElementById("promo_button_more").onclick = function() {
    var promo_more_content = document.getElementById("promo-more__content");
    promo_more_content.style.display = (promo_more_content.style.display == 'block') ? 'none' : 'block';
    promo_more_button = document.getElementById("promo_button_more");
    promo_more_button.innerText = (promo_more_content.style.display == 'block') ? "Hide" : "Read More";
    promo_more_button.style.backgroundColor = (promo_more_content.style.display == 'block') ? '#19bd9a' : '#fff';
}