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

main();

function main()
{
    clearCanvas();
    drawSnake();
}

function clearCanvas()
{
    snakeboard_ctx.fillStyle = board_background;
    snakeboard_ctx.strokeStyle = board_border;
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

function drawSnakePart(snakePart)
{
    snakeboard_ctx.fillStyle = "lightblue";
    snakeboard_ctx.strokeStyle = "darkblue";
    snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// Prints parts
function drawSnake(snakePart)
{
    snake.forEach(drawSnakePart);
}
