class Game {
  constructor() {
    this.lives = 3;
    this.gameOver = false;
    this.player = new Player(35, 170);
  }
  start() {
    
    this.gameLoop();
  }
  gameLoop() {
    this.update();

    requestAnimationFrame(() => this.gameLoop());
  }
  update() {
    this.player.move();
  }
}
