class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.lives = 3;
    this.gameOver = false;
    this.player = new Player(35, 170);
    this.score = 0;
    this.obstacles = [new Obstacle(850, 60)];

//More obstacles showing with the setinterval
    this.intervalId = setInterval(() => {
      let randomTop = Math.floor(Math.random() * (300 - 30)) + 30;
      this.obstacles.push(new Obstacle(850, randomTop));
    }, 3000);
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
    this.obstacles.forEach((obstacle) => {
      obstacle.move();
    });
  }
}
