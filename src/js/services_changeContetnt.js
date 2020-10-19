document.getElementById("services-icon-1").onclick = function() {
    var slide_1 = document.getElementById("services-icon-1");
    var slide_2 = document.getElementById("services-icon-2");
    var slide_3 = document.getElementById("services-icon-3");
    var slide_4 = document.getElementById("services-icon-4");

    slide_1.style.backgroundColor = "#19bd9a";
    slide_2.style.backgroundColor = "#81868e";
    slide_3.style.backgroundColor = "#81868e";
    slide_3.style.backgroundColor = "#81868e";

    document.getElementById("services-list-1").classList.remove('section-inner-services-content-list-hidden');
    document.getElementById("services-list-2").classList.add('section-inner-services-content-list-hidden');
    document.getElementById("services-list-3").classList.add('section-inner-services-content-list-hidden');
    document.getElementById("services-list-4").classList.add('section-inner-services-content-list-hidden');
}

document.getElementById("services-icon-2").onclick = function() {
    var slide_1 = document.getElementById("services-icon-1");
    var slide_2 = document.getElementById("services-icon-2");
    var slide_3 = document.getElementById("services-icon-3");
    var slide_4 = document.getElementById("services-icon-4");

    slide_1.style.backgroundColor = "#81868e";
    slide_2.style.backgroundColor = "#19bd9a";
    slide_3.style.backgroundColor = "#81868e";
    slide_3.style.backgroundColor = "#81868e";

    document.getElementById("services-list-1").classList.add('section-inner-services-content-list-hidden');
    document.getElementById("services-list-2").classList.remove('section-inner-services-content-list-hidden');
    document.getElementById("services-list-3").classList.add('section-inner-services-content-list-hidden');
    document.getElementById("services-list-4").classList.add('section-inner-services-content-list-hidden');
}

document.getElementById("services-icon-3").onclick = function() {
    var slide_1 = document.getElementById("services-icon-1");
    var slide_2 = document.getElementById("services-icon-2");
    var slide_3 = document.getElementById("services-icon-3");
    var slide_4 = document.getElementById("services-icon-4");

    slide_1.style.backgroundColor = "#81868e";
    slide_2.style.backgroundColor = "#81868e";
    slide_3.style.backgroundColor = "#19bd9a";
    slide_4.style.backgroundColor = "#81868e";

    document.getElementById("services-list-1").classList.add('section-inner-services-content-list-hidden');
    document.getElementById("services-list-2").classList.add('section-inner-services-content-list-hidden');
    document.getElementById("services-list-3").classList.remove('section-inner-services-content-list-hidden');
    document.getElementById("services-list-4").classList.add('section-inner-services-content-list-hidden');
}

document.getElementById("services-icon-4").onclick = function() {
    var slide_1 = document.getElementById("services-icon-1");
    var slide_2 = document.getElementById("services-icon-2");
    var slide_3 = document.getElementById("services-icon-3");
    var slide_4 = document.getElementById("services-icon-4");

    slide_1.style.backgroundColor = "#81868e";
    slide_2.style.backgroundColor = "#81868e";
    slide_3.style.backgroundColor = "#81868e";
    slide_4.style.backgroundColor = "#19bd9a";

    document.getElementById("services-list-1").classList.add('section-inner-services-content-list-hidden');
    document.getElementById("services-list-2").classList.add('section-inner-services-content-list-hidden');
    document.getElementById("services-list-3").classList.add('section-inner-services-content-list-hidden');
    document.getElementById("services-list-4").classList.remove('section-inner-services-content-list-hidden');
}