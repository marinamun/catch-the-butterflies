class Bullets {
  constructor(playerLeft, playerTop) {
    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.width = "10px";
    this.element.style.height = "5px";
    this.left = playerLeft;
    this.element.style.left = `${playerLeft}px`;
    this.element.style.top = `${playerTop}px`;
    this.element.style.backgroundColor = "white";

    this.speed = 5;

    const gameScreen = document.getElementById("game-screen");
    gameScreen.appendChild(this.element);
  }
  move() {
    // Update bullet position

    if (this.left > 900) {
      this.element.remove();
    } else {
      this.left += 1 * this.speed;
      
    }
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }
}
