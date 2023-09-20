class Player {
  constructor(left, top) {
    this.element = document.createElement("img");
    this.element.src = "images/skater.png";
    this.element.style.position = "absolute";
    this.element.style.height = `140px`;
    this.element.style.width = `70px`;

    const gameScreen = document.getElementById("game-screen");
    gameScreen.appendChild(this.element);

    //create location properties that will receive a value as an argument
    this.left = left;
    this.top = top;
    //add the px to make it readable
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.directionX = 0;
    this.directionY = 0;
  }
  move() {
    //to update CSS
    this.updatePosition();
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  updatePosition() {
    //If it goes too much to the left, stop it. If it goes too much to the right, stop it. Else, keep it moving.
    if (this.left < 30) {
      this.left = 30;
    } else if (this.left > 820) {
      this.left = 820;
    } else {
      this.left += this.directionX;
    }

    //If it goes too much to the top, stop it. If it goes too much to the bottom, stop it. Else, keep it moving.
    if (this.top < 10) {
      this.top = 10;
    } else if (this.top > 360) {
      this.top = 360;
    } else {
      this.top += this.directionY;
    }
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
  
}
