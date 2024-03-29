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
  const backgroundAudio = document.getElementById("background-audio");
  backgroundAudio.play();
  game = new Game();
  game.start();
}
startBtn.addEventListener("click", (event) => {
  startGame();
});
restartBtn.addEventListener("click", (event) => {
  //I need to remove the 3 elements and the 2 intervals for everything to restart correctly
  game.player.element.remove();
  game.bullets.forEach((bullet) => {
    bullet.element.remove();
  });

  game.obstacles.forEach((obstacle) => {
    obstacle.element.remove();
  });
  game.butterflies.forEach((butterfly) => {
    butterfly.element.remove();
  });
  game.hearts.forEach((heart) => {
    heart.element.remove();
  });
  clearInterval(game.obstacleIntervalId);
  clearInterval(game.butterflyIntervalId);
  clearInterval(game.heartIntervalId);

  let liveCounter = document.getElementById("lives");
  liveCounter.innerHTML = 3;

  let scoreCounter = document.getElementById("score");
  scoreCounter.innerHTML = 0;

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
  } else if (event.code === "Space") {
    event.preventDefault();
    game.shoot();
    const shootAudio = document.getElementById("shoot-audio");
    shootAudio.play();
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
  } else if (event.code === "Space") {
    return;
  }
});
