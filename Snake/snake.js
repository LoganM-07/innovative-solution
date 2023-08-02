
//board
const blockSize = 25;
const rows = 20;
const cols = 20;
var board;
var context;


//snake head
var snakeX = blockSize*5;
var snakeY = blockSize*5;

//snake movement
var velocityX = 0;
var velocityY = 0;

//food 
var foodX;
var foodY;

var snakeBody = []

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); // use for drawing on the board

    this.placeFood();
    document.addEventListener("keyUp", changeDirection)
    // update();
    setInterval(update, 1000/10); // updates the game every 100ms
}

function update () {
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);
    
    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        placeFood();
    }
        for (let i =0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
    
    
    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize)
    for (let i = snakeBody.length - 1; i >0; i--) {
        snakeBody[i] = snakeBody[i-1];   
    }
}
    
function changeDirection () {
    if (e.code == "arrowUp" && velocityY !=1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "arrowDown" && velocityY !=-1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "arrowLeft" && velocityX !=1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "arrowRight" && velocityX !=-1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// randomly generates fruit location
function placeFood() {
    foodX = Math.floor(Math.random() * cols) *blockSize
    foodY = Math.floor(Math.random() * rows) *blockSize
}