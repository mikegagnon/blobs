var width = 600;
var height = 300;

async function run() {

    for (var i = 0; i < 10000; i++) {
        var x = randInt(0, width);
        var y = randInt(0, height);
        var color = randInt(0,2);
        if (color == 1) {
            color = 'black';
        } else {
            color = 'white';
        }
        drawSquare(x, y, color);
    }

    var count = 0;
    while (true) {
        var x = randInt(0, width);
        var y = randInt(0, height);
        var color = getColorAtPixel(x, y);
        drawSquare(x, y, color);
        count++;
        if (count == 100) {
            count = 0;
            await sleep(20);
        }
    }
}

run();

