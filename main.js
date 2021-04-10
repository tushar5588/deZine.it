const menuIcon = document.getElementById("menu-icons");
const slideoutMenu = document.getElementById("slideout-menu");
var a;
function show_hide() {
    if (a == 1) {
        document.getElementById("search-box").style.display = "inline";
        return a = 0;
    }
    else {
        document.getElementById("search-box").style.display = "none";
        return a = 1;

    }
}
menuIcon.addEventListener('click', function(){
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
    } else {
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto';
    }

})