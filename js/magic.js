
// This JavaScript function always returns a random number between min (included) and max (excluded)
// https://www.w3schools.com/js/js_random.asp
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

// https://stackoverflow.com/questions/6735470/get-pixel-color-from-canvas-on-mouseover
function getColorAtPixel(x, y) {
    var p = ctx.getImageData(x, y, 1, 1).data; 
    color = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    return color;
}

function getContext() {
    var c = document.getElementById("blobs-canvas");
    return c.getContext("2d");
}

var ctx = getContext();

function drawSquare(centerX, centerY, color) {
    ctx.beginPath();
    ctx.rect(centerX - 15 , centerY - 15, 30, 30);
    ctx.fillStyle = color;
    ctx.fill();
}
