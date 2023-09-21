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
    this.hearts = [];
    this.lives = 3;
    this.gameOver = false;
    this.bullets = [];

    //More obstacles showing with the setinterval
    this.obstacleIntervalId = setInterval(() => {
      const left = this.gameScreen.clientWidth - 60;
      let randomTop = Math.floor(Math.random() * (400 - 30)) + 30;
      this.obstacles.push(new Obstacle(left, randomTop));
    }, 1500);

    //Create a butterfly and add it to the game
    this.butterflyIntervalId = setInterval(() => {
      const left = this.gameScreen.clientWidth - 60;
      let randomTop = Math.floor(Math.random() * (400 - 30)) + 30;
      this.butterflies.push(new Butterfly(left, randomTop));
    }, 2500);

    //Add hearts to the game
    this.heartIntervalId = setInterval(() => {
      const left = this.gameScreen.clientWidth - 60;
      let randomTop = Math.floor(Math.random() * (400 - 30)) + 30;
      this.hearts.push(new Heart(left, randomTop));
    }, 3500);

    //Add bullet to the game
  }
  start() {
    this.gameLoop();
  }
  gameLoop() {
    this.update();

    if (this.lives < 1) {
      this.gameOver = true;
    }

    if (this.gameOver) {
      gameScreen.style.display = "none";
      let endScreen = document.getElementById("end-screen");
      startScreen.style.display = "none";
      endScreen.style.display = "flex";
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
        const collisionAudio = document.getElementById("collision-audio");
        collisionAudio.play();

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
         const scoreAudio = document.getElementById("score-audio");
         scoreAudio.play();

        let scoreCounter = document.getElementById("score");
        scoreCounter.innerHTML = this.score;

        if (this.score === 50) {
          alert("You win! Good job🎉");
          this.reset();
        }
      } else {
        nextButterflies.push(butterfly);
      }
    });
    this.butterflies = nextButterflies;
    //Make hearts move
    const nextHearts = [];
    this.hearts.forEach((heart) => {
      heart.move();
      if (this.player.didCollide(heart)) {
        this.lives += 1;
        heart.element.remove();

        let livesCounter = document.getElementById("lives");
        livesCounter.innerHTML = this.lives;
      } else {
        nextHearts.push(heart);
      }
    });
    this.hearts = nextHearts;

    //Make the bullets move:

    const obstaclesToKeep = this.obstacles.map((element) => element);
    this.obstacles.forEach((obstacle) => {
      obstacle.move();
    });
    for (let i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      bullet.move();
      
      this.obstacles.forEach((obstacle, index) => {
        if (obstacle.didCollide(bullet)) {
          obstacle.element.remove();
          bullet.element.remove();
          obstaclesToKeep.splice(index, 1);
          this.bullets.splice(i, 1);
          i--;
        }
      });
      this.obstacles = obstaclesToKeep;
    }
  }
  shoot() {
    // Create a bullet with the player's position
    const bullet = new Bullets(this.player.left, this.player.top);
    this.bullets.push(bullet);
  }
}
