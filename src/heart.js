class Heart {
  constructor(left, top) {
    this.element = document.createElement("img");
    this.element.src = "images/heart.png";
    this.element.style.position = "absolute";
    this.element.style.height = `35px`;
    this.element.style.width = `35px`;
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
}