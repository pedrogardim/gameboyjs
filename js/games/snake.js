class SnakeGameController {
  constructor() {
    this.init();
  }
  init() {
    console.log("hey, inited");
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");
    this.gameSize = [32, 20];
    this.snakeVector = [2, 1];
    setInterval(this.update, 1000 / 2);
    document.addEventListener("keydown", this.onKeyPress);
  }
  onKeyPress(event) {
    console.log(event);
  }
  update() {
    console.log("updated");
  }
  draw() {}
}

const dinoGame = new SnakeGameController();
