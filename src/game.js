class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.lives = 3;
    this.gameOver = false;
    this.player = new Player(35, 170);
    this.score = 0;
    this.obstacles = [];
    this.butterflies = [];
    this.lives = 3;
    this.gameOver = false;

    //More obstacles showing with the setinterval
    this.obstacleIntervalId = setInterval(() => {
      let randomTop = Math.floor(Math.random() * (300 - 30)) + 30;
      this.obstacles.push(new Obstacle(850, randomTop));
    }, 2000);

    //Create a butterfly and add it to the game
     this.butterflyIntervalId = setInterval(() => {
       let randomTop = Math.floor(Math.random() * (300 - 30)) + 30;
       this.butterflies.push(new Butterfly(850, randomTop));
     }, 2500);
    
  }
  start() {
    this.gameLoop();
    
  }
  gameLoop() {
    this.update();
    
    if (this.gameOver) {
        gameScreen.style.display = "none";
        let endScreen = document.getElementById("end-screen");
        endScreen.style.display = "block"
    } else {
      requestAnimationFrame(() => this.gameLoop());
    }
  }
  update() {
    //initiates the movement of all the elements
    this.player.move();

    //Make the mosquitoes move, take a life, if collition happens they disappear, gameover
    const nextObstacles = [];
    this.obstacles.forEach((obstacle) => {
      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        this.lives -= 1;
        obstacle.element.remove();

        let liveCounter = document.getElementById("lives");
        liveCounter.innerHTML = this.lives;

        if (this.lives < 1) {
          this.gameOver = true;
        }
      } else {
        nextObstacles.push(obstacle);
      }
    });
    this.obstacles = nextObstacles;
    /////Make the butterflies move, take a life, if collition happens they disappear, gameover
    const nextButterflies = [];
    this.butterflies.forEach((butterfly) => {
      butterfly.move();
      if (this.player.didCollide(butterfly)) {
        this.score += 1;
        butterfly.element.remove();

        let scoreCounter = document.getElementById("score");
        scoreCounter.innerHTML = this.score;

        if (this.score === 20) {
          this.gameOver = true; ////you win!!!!!!!!
        }
      } else {
        nextButterflies.push(butterfly);
      }
    });
    this.butterflies = nextButterflies;
  }
}
