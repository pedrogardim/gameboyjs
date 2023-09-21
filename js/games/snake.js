class SnakeGameController {
  constructor() {
    this.init();
  }
  init() {
    this.initCanvas();
    this.gameSize = [32, 20];
    this.snakeVector = [1, 0];
    this.snakeTiles = [[16, 10]];
    setInterval(() => this.update(), 1000 / 2);
    document.addEventListener("keydown", this.onKeyPress);
  }
  update() {
    let lastTile = this.snakeTiles[this.snakeTiles.length - 1];
    let newTile = lastTile.map((d, i) => d + this.snakeVector[i]);
    this.snakeTiles.push(newTile);
    let a = this.snakeTiles.shift();
    console.log(a);
    this.draw();
  }
  initCanvas() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.snakeTiles.forEach((tile) => {
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fillRect(
        (this.getTileSize()[0] + 2) * tile[0],
        (this.getTileSize()[1] + 2) * tile[1],
        this.getTileSize()[0],
        this.getTileSize()[1]
      );
    });
  }
  // utils
  getRandomPosition() {
    return this.gameSize.map((dim) => Math.floor(Math.random() * dim));
  }
  getTileSize() {
    return [
      this.canvas.width / this.gameSize[0],
      this.canvas.height / this.gameSize[1],
    ];
  }
}

const dinoGame = new SnakeGameController();

// let num = parseFloat(prompt("Insertar número"));
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }
