// script.js
function myFunction() {
    let xyz = document.getElementById("box");
    let abc = document.getElementById("head_1");

    if (xyz.style.backgroundColor === "rgb(46, 204, 113)" && xyz.style.width === "400px" &&
        xyz.style.height === "400px" && abc.style.color === "rgb(25, 25, 25)" && abc.style.fontSize === "32px") {
        xyz.style.backgroundColor = "#191919";
        xyz.style.width = "800px";
        xyz.style.height = "800px";
        abc.style.color = "#2ecc71";
        abc.style.fontSize = "72px"; 
    } else {
        xyz.style.backgroundColor = "#2ecc71";
        xyz.style.width = "400px";
        xyz.style.height = "400px";
        abc.style.color = "#191919";
        abc.style.fontSize = "32px"; 
    }
}

function textbox() {
    var newHeadingValue = document.getElementById("head_change").value;
    var headingElement = document.getElementById("head_1");
    headingElement.textContent = newHeadingValue;
}

function myfont1() {
    let headingElement = document.getElementById("head_1");
    headingElement.style.fontFamily = "Bradley Hand ITC";
}

function myfont2() {
    let headingElement = document.getElementById("head_1");
    headingElement.style.fontFamily = "Comic Sans MS";
}

function myfont3() {
    let headingElement = document.getElementById("head_1");
    headingElement.style.fontFamily = "Brush Script MT";
}

function changeDivSize() {
    const sliderValue = document.getElementById("sizeSlider").value;
    const resizableDiv = document.getElementById("resizableDiv");

    resizableDiv.style.width = sliderValue + "px";
    resizableDiv.style.height = sliderValue + "px";
}

function changeImage() {
    const selectedImage = document.getElementById("imageSelector").value;
    const resizableImage = document.getElementById("resizableImage");

    resizableImage.src = selectedImage;
}