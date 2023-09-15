class Game {
  constructor() {
    this.lives = 3;
    this.gameOver = false;
    this.player = new Player();
    
  }
  start() {
    alert("beginning!!!");
    this.gameLoop();
  }
  gameLoop() {
    this.update();
    
    requestAnimationFrame(() => this.gameLoop());
  }
  update() {}

}