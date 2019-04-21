var iColor = "222";
var iText = "Image1";
var iSize = "350x150";

function imgU() {
    if (event.target.type == "select-one") {
        iSize = event.target.value;
    } else if (event.target.type == "text") {
        iText = event.target.value;
    } else if (event.target.type == "color") {
        var nColor = event.target.value;
        iColor = nColor.replace("#", "");
    }
    var imsrc = "http://via.placeholder.com/" + iSize + "/" + iColor + "/fff?text=" + iText;
    message(imsrc);
    event.target.parentElement.myImage.src = imsrc;
}

function message(m) {
    document.getElementById('wrapper').innerHTML = m;
}