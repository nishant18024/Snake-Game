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

// Function to update snake length and direction
function update() {
    let headX = snakeCell[snakeCell.length - 1][0];
    let headY = snakeCell[snakeCell.length - 1][1];

    let newHeadX, newHeadY;

    // this can be changed
    switch (direction) {
        case 'up':
            newHeadX = headX;
            newHeadY = headY - cellSize;
            break;
        case 'down':
            newHeadX = headX;
            newHeadY = headY + cellSize;
            break;
        case 'left':
            newHeadX = headX - cellSize;
            newHeadY = headY;
            break;
        case 'right':
            newHeadX = headX + cellSize;
            newHeadY = headY;
            break;
    }

    snakeCell.push([newHeadX, newHeadY]);
    snakeCell.shift();
}

// Code for handling arrow key events
document.body.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowUp':
            direction = 'up';
            break;
        case 'ArrowDown':
            direction = 'down';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowRight':
            direction = 'right';
            break;
    }
});

// It will update the snake after an interval of 200 ms
setInterval(function () {
    update();
    draw();
}, 200);
