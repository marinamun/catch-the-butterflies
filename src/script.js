const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");
const restartBtn = document.getElementById("restart");
let game;

function startGame() {
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  endScreen.style.display = "none";
  game = new Game();
  game.start();
}
startBtn.addEventListener("click", (event) => {
  startGame();
});
restartBtn.addEventListener("click", (event) => {
  game.player.element.remove();
  game.obstacles.forEach((obstacle) => {
    obstacle.element.remove();
  });
  startGame();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    game.player.directionX = -1;
  } else if (event.code === "KeyD") {
    game.player.directionX = 1;
  } else if (event.code === "KeyW") {
    game.player.directionY = -1;
  } else if (event.code === "KeyS") {
    game.player.directionY = 1;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "KeyA") {
    game.player.directionX = 0;
  } else if (event.code === "KeyD") {
    game.player.directionX = 0;
  } else if (event.code === "KeyW") {
    game.player.directionY = 0;
  } else if (event.code === "KeyS") {
    game.player.directionY = 0;
  }
});
