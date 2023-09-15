const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");

function startGame() {
  alert("hi");
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  const game = new Game();
  game.start();
}
startBtn.addEventListener("click", (event) => {
  startGame();
});
