function loaded() {
    setInterval(loop, 400)
}
document.addEventListener ? document.addEventListener("DOMContentLoaded", (function() {
    loaded()
})) : document.attachEvent && document.attachEvent("onreadystatechange", (function() {
    loaded()
}));
var x = 0,
    titleText = ["Twin Starzz", "333"];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
}
