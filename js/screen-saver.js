
var width = 600;
var height = 300;
var ctx = getContext();

function drawRandomSquare(centerX, centerY, color) {
    ctx.beginPath();
    ctx.rect(centerX - 15 , centerY - 15, 30, 30);
    ctx.fillStyle = color;
    ctx.fill();
}

async function run() {

    var count = 0;

    for (var i = 0; i < 10000; i++) {
        var x = randInt(0, width);
        var y = randInt(0, height);
        color = randInt(0,2);
        if (color == 1) {
            color = 'black';
        } else {
            color = 'white';
        }
        drawRandomSquare(x, y, color);
    }

    var count = 0;
    while (true) {
        var x = randInt(0, width);
        var y = randInt(0, height);
        var color = getColorAtPixel(x, y);
        drawRandomSquare(x, y, color);
        count++;
        if (count % 100 == 0) {
            await sleep(1);
        }
    }
}

run();

