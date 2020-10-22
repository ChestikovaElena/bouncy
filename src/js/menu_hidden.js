document.getElementById("navbar-toggle-wrap-icon").onclick = function() {
    var menu_hidden = document.getElementById("navbar-toggle-menu");
    var icon_bar1 = document.getElementById("bar1");
    var icon_bar3 = document.getElementById("bar3");
    var icon_bar2 = document.getElementById("bar2");
    var header_wrap = document.getElementById("header-wrap");

    if(menu_hidden.classList.contains('nav-hide')){
        menu_hidden.classList.remove('nav-hide');
        icon_bar1.style.transform = 'rotate(45deg)';
        icon_bar1.style.transformOrigin = '10% 40%';
        icon_bar3.style.transform = 'rotate(-45deg)';
        icon_bar3.style.transformOrigin = '10% 40%';
        icon_bar2.style.backgroundColor = 'transparent';
        header_wrap.style.width = '50%';
    }
    else {
        menu_hidden.classList.add('nav-hide');
        icon_bar1.style.transform = 'none';
        icon_bar1.style.transformOrigin = 'none';
        icon_bar3.style.transform = 'none';
        icon_bar3.style.transformOrigin = 'none';
        icon_bar2.style.backgroundColor = '#fff';
        header_wrap.style.width = '100%';
    }
}

document.getElementById("navbar-toggle-menu-list").onclick = function() {
    var icon_bar1 = document.getElementById("bar1");
    var icon_bar3 = document.getElementById("bar3");
    var icon_bar2 = document.getElementById("bar2");
    var header_wrap = document.getElementById("header-wrap");

    document.getElementById("navbar-toggle-menu").classList.add('nav-hide');
    icon_bar1.style.transform = 'none';
    icon_bar1.style.transformOrigin = 'none';
    icon_bar3.style.transform = 'none';
    icon_bar3.style.transformOrigin = 'none';
    icon_bar2.style.backgroundColor = '#fff';
    header_wrap.style.width = '100%';
}