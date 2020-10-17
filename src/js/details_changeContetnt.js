document.getElementById("icon_1").onclick = function() {
    var slide_1 = document.getElementById("icon_1");
    var slide_2 = document.getElementById("icon_2");
    var slide_3 = document.getElementById("icon_3");

    slide_1.style.backgroundColor = "#19bd9a";
    slide_2.style.backgroundColor = "#81868e";
    slide_3.style.backgroundColor = "#81868e";

    document.getElementById("details_content_1").classList.remove('section-inner-details-wrapper-content-hidden');
    document.getElementById("details_content_2").classList.add('section-inner-details-wrapper-content-hidden');
    document.getElementById("details_content_3").classList.add('section-inner-details-wrapper-content-hidden');
}

document.getElementById("icon_2").onclick = function() {
    var slide_1 = document.getElementById("icon_1");
    var slide_2 = document.getElementById("icon_2");
    var slide_3 = document.getElementById("icon_3");

    slide_1.style.backgroundColor = "#81868e";
    slide_2.style.backgroundColor = "#19bd9a";
    slide_3.style.backgroundColor = "#81868e";

    document.getElementById("details_content_1").classList.add('section-inner-details-wrapper-content-hidden');
    document.getElementById("details_content_2").classList.remove('section-inner-details-wrapper-content-hidden');
    document.getElementById("details_content_3").classList.add('section-inner-details-wrapper-content-hidden');
}

document.getElementById("icon_3").onclick = function() {
    var slide_1 = document.getElementById("icon_1");
    var slide_2 = document.getElementById("icon_2");
    var slide_3 = document.getElementById("icon_3");

    slide_1.style.backgroundColor = "#81868e";
    slide_2.style.backgroundColor = "#81868e";
    slide_3.style.backgroundColor = "#19bd9a";

    document.getElementById("details_content_1").classList.add('section-inner-details-wrapper-content-hidden');
    document.getElementById("details_content_2").classList.add('section-inner-details-wrapper-content-hidden');
    document.getElementById("details_content_3").classList.remove('section-inner-details-wrapper-content-hidden');
}