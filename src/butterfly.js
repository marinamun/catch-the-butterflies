class Butterfly{
    constructor(left, top){
        
    this.element = document.createElement("img");
    this.element.src = "images/butterfly.png";
    this.element.style.position = "absolute";
    this.element.style.height = `55px`;
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
}