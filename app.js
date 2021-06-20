

const gameBoard = document.getElementById('board');
const gameBoard2D = gameBoard.getContext('2d');
gameBoard.height = 100;
gameBoard.width = 100;

class SnakeBody {
    constructor(x,y){
      this.x = x
      this.y = y
    }
}

//snake starting position 
  let startX = 5;
  let startY = 5;
//refresh speed 
  let speed = 5;
//number of cells per axis
  let cellCount = 10;
//size of the cells 
  let cellSize = gameBoard.width && gameBoard.height / cellCount -2
//initial direction of snake 
  let xDirection = 0;
  let yDirection = 0;
//food starting position 
  let appleX = 7;
  let appleY = 7;
//array for body
  const snakeBodyParts = [];
//starting length of body
  let bodyLength = 1
//Score
 let score = 0;




resetBoard()


 



function resetBoard() {
  snakePosition()  
  clearBoard()

  let gameState = failed()
    if (gameState){
      return;
    }
  snakeEat()
  renderApple()
  renderSnake()
  addScore()
  setTimeout(resetBoard, 2000 / speed)
 
  console.log(setTimeout)
  };
  
function failed(){
  let gameOver = false 

  if (startX < 0){
    gameOver = true
    return gameOver;
  }

  else if (startX >= 10) {
    gameOver = true;
    return gameOver;
  }

  else if (startY < 0) {
    gameOver = true
    return gameOver;
  }

  else if (startY >= 10){
    gameOver = true
    return gameOver;
  }

  //  if (gameOver = true){
  //   gameBoard2D.fillStyle = '#d41727'
  //   gameBoard2D.font = '30px Verdana'
  //   gameBoard2D.textAlign = 'center'
  //   gameBoard2D.fillText('Press Space!', gameBoard , gameBoard) 
  //   console.log('working')
  //  }

}    

  

function renderSnake() { //creating the snake
    
    gameBoard2D.fillStyle = '#0ef8f8'
    for(let i = 0; i < snakeBodyParts.length; i++ ) {
      let part = snakeBodyParts[i];
      gameBoard2D.fillRect(part.x * cellCount, part.y * cellCount, cellSize, cellSize)
    }
    snakeBodyParts.push(new SnakeBody(startX, startY))
    while (snakeBodyParts.length > bodyLength) {
      snakeBodyParts.shift()
    }
    
    gameBoard2D.fillStyle = '	#0ef8f8'
    gameBoard2D.fillRect(startX * cellCount, startY * cellCount, cellSize, cellSize)
    
  }

function renderApple() {
    gameBoard2D.fillStyle = 'red'
    gameBoard2D.fillRect(appleX * cellCount, appleY * cellCount, cellSize, cellSize)
  }

function snakeEat() {
    if (appleX === startX && appleY === startY) {
      appleX = Math.floor(Math.random() * cellCount)
      appleY = Math.floor(Math.random() * cellCount)
      bodyLength ++;
      score ++;
      speed ++;
    }
  }
function clearBoard() {
    gameBoard2D.fillStyle = 'black';
    gameBoard2D.fillRect(0, 0, gameBoard.width, gameBoard.height);
  }

document.addEventListener('keydown', keyDown)

// up arrow 38 down arrow  40 left arrow 37  right arrow  39
function keyDown(event) {
  console.log('key down')
  if (event.keyCode == 38) {
    if (yDirection == 1){
      return;
    }
    yDirection = -1
    xDirection = 0
  }

  if (event.keyCode == 40) {
    if (yDirection == -1)
    return;
    yDirection = 1
    xDirection = 0
  }

  if (event.keyCode == 37) {
    if (xDirection == 1)
    return;
    yDirection = 0
    xDirection = -1
  }

  if (event.keyCode == 39) {
    if (xDirection == -1)
    return;
    yDirection = 0
    xDirection = 1
  }
}

function snakePosition() {
  startX = startX + xDirection
  startY = startY + yDirection
}

function addScore() {
let newScore = `<div class='score'>Score: ${score}</div>` 
 $('.score-container').html(newScore)
} 

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    console.log('Space pressed')
    window.location.reload();
  }
})