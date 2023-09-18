class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.lives = 3;
    this.gameOver = false;
    this.player = new Player(35, 170);
    this.obstacles = [new Obstacle(850, 60)];
  }
  start() {
    this.gameLoop();
  }
  gameLoop() {
    this.update();

    requestAnimationFrame(() => this.gameLoop());
  }
  update() {
    //initiates the movement of all the elements
    this.player.move();
    this.obstacles.forEach((obstacle) => obstacle.move());
  }
}
