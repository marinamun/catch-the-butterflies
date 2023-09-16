class Player {
  constructor(left, top) {
    this.element = document.createElement("img");
    this.element.src = "../images/boy.png";
    this.element.style.position = "absolute";
    this.element.style.height = `140px`;
    this.element.style.width = `130px`;
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
    //
    this.updatePosition();
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  updatePosition(){
    this.left += this.directionX;
    this.top += this.directionY;

  }
}
