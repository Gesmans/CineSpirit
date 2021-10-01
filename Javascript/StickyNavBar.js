var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("myTopnav").style.top = "0";
        document.getElementById("myTopnav").style.backgroundColor = "snow";
        document.getElementById("myNavlinks").style.display = "block";

    } else {
        document.getElementById("myTopnav").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}