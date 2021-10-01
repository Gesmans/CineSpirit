// Loading Screen
var myVar;

function myLoading() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.getElementById("myNavlinks").style.display = "none";

}