let bulbimg = document.getElementById("bulbimg");
let catimg = document.getElementById("catimg");
let off = document.getElementById("off");
let on = document.getElementById("on");
let switchStatus = document.getElementById("switch-status");

function switchOff() {
    off.style.backgroundColor = "#cbd2d9";
    on.style.backgroundColor = "green";
    switchStatus.textContent = "Switched Off";
    switchStatus.style.color = "white";
    bulbimg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catimg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
}

function switchOn() {
    off.style.backgroundColor = "#e12d39";
    on.style.backgroundColor = "#cbd2d9";
    switchStatus.textContent = "Switched On";
    switchStatus.style.color = "white";
    bulbimg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catimg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
}