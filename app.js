let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let cellSize = 50;
let boardHeight = 600;
let boardWidth = 1000;
let snakeCell = [[0, 0]];
let direction = 'right';

// Function to draw the snake
function draw() {
    context.clearRect(0, 0, boardWidth, boardHeight);
    for (const cell of snakeCell) {
        context.fillStyle = 'red';
        context.fillRect(cell[0], cell[1], cellSize, cellSize);
    }

}

// function to update snake length
function update() {
    let headX = snakeCell[snakeCell.length - 1][0];
    let headY = snakeCell[snakeCell.length - 1][1];

    let newHeadX = headX + cellSize;
    let newHeadY = headY;

    snakeCell.push([newHeadX, newHeadY]);
    snakeCell.shift();

}

// Cdode for movement of Snake
document.body.addEventListener('keydown', function (event) {
    if (key == 'ArrowUp') {
        
    }
    else if (key == 'ArrowDown') {

    }
    else if (key == 'ArrowRight') {

    }
    else {

    }
})

// It will update the snake after an interval of 2 ms
setInterval(function () {
    update();
    draw();
}, 200)





































// context.strokeStyle = 'Blue';
// context.fillStyle = 'blue';
// context.beginPath();

// // Row
// context.moveTo(0, 100);
// context.lineTo(1000, 100);
// context.moveTo(0, 200);
// context.lineTo(1000, 200);
// context.moveTo(0, 300);
// context.lineTo(1000, 300);
// context.moveTo(0, 400);
// context.lineTo(1000, 400);
// context.moveTo(0, 500);
// context.lineTo(1000, 500);

// // Column
// context.moveTo(100, 0);
// context.lineTo(100, 600);
// context.moveTo(200, 0);
// context.lineTo(200, 600);
// context.moveTo(300, 0);
// context.lineTo(300, 600);
// context.moveTo(400, 0);
// context.lineTo(400, 600);
// context.moveTo(500, 0);
// context.lineTo(500, 600);
// context.moveTo(600, 0);
// context.lineTo(600, 600);
// context.moveTo(700, 0);
// context.lineTo(700, 600);
// context.moveTo(800, 0);
// context.lineTo(800, 600);
// context.moveTo(900, 0);
// context.lineTo(900, 600);
// context.fill();
// context.closePath();




// context.stroke();
// // context.fill()
// context.closePath();
