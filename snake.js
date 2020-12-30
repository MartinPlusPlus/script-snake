const snakeboard = document.getElementById("gameCanvas");
const snakeboard_ctx = gameCanvas.getContext("2d");

let snake = [ {x: 200, y: 200}, {x: 190, y: 200},
    {x: 180, y: 200}, {x: 170, y: 200}, {x: 160, y: 200}
];

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
    snake.foreach(drawSnakePart);
}
