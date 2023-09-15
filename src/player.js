class Player {
  constructor() {
    this.element = document.createElement("img");
    this.element.src = "../images/boy.png";
    this.element.style.position = "absolute";
    this.element.style.height = `140px`;
    this.element.style.width = `130px`;
    this.element.style.left = `30px`;
    this.element.style.top = `170px`;
    const gameScreen = document.getElementById("game-screen");
    gameScreen.appendChild(this.element);
  }
}
