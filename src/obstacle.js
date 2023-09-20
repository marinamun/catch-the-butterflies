class Obstacle {
  constructor(left, top) {
    this.element = document.createElement("img");
    this.element.src = "images/obstacle.png";
    this.element.style.position = "absolute";
    this.element.style.height = `50px`;
    this.element.style.width = `70px`;
    const gameScreen = document.getElementById("game-screen");
    gameScreen.appendChild(this.element);
    this.left = left;
    this.top = top;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  move() {
    //to update CSS
    this.updatePosition();
    this.element.style.left = `${this.left}px`;
  }
  updatePosition() {
    if (this.left < 20) {
      this.element.remove();
    } else {
      this.left -= 1;
    }
  }
  didCollide(bullet) {
    const obstacleRect = this.element.getBoundingClientRect();
    const bulletRect = bullet.element.getBoundingClientRect();

    if (
      obstacleRect.left < bulletRect.right &&
      obstacleRect.right > bulletRect.left &&
      obstacleRect.top < bulletRect.bottom &&
      obstacleRect.bottom > bulletRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
