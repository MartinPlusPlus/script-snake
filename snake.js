const snakeboard = document.getElementById("gameCanvas");
const snakeboard_ctx = snakeboard.getContext("2d");

const board_border = 'black';
const board_background = "white";
const snake_col = 'lightblue';
const snake_border = 'darkblue';

let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
];

// Set velocities
let dx = 10;
let dy = 0;

function main()
{
    setTimeout(function onTick() {
        clearCanvas();
        move_snake();
        drawSnake();
        main();
    }, 100);
}

main();

// Fills the canvas in with white
function clearCanvas()
{
    snakeboard_ctx.fillStyle = board_background;
    snakeboard_ctx.strokeStyle = board_border;
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

// Draws the snake part given the position
function drawSnakePart(snakePart)
{
    snakeboard_ctx.fillStyle = "lightblue";
    snakeboard_ctx.strokeStyle = "darkblue";
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// Draws the snake
function drawSnake(snakePart)
{
    snake.forEach(drawSnakePart);
}


function move_snake()
{
    const head = {x: snake[0].x + dx, y: snake[0].y};
    snake.unshift(head);
    snake.pop();
}
