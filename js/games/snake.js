import { arraysEqual } from "../utils.js";

export class SnakeGameController {
  gameSize = [25, 16];
  snakeTiles = [];
  snakeVector = [1, 0];
  started = false;
  gameInterval;
  canvas;
  ctx;

  constructor() {
    this.init();
  }
  init() {
    this.initCanvas();
    this.draw();
    document.addEventListener("keydown", this.onKeyPress.bind(this));
  }
  startGame() {
    this.started = true;
    this.snakeTiles = Array(3)
      .fill([0, Math.floor(this.gameSize[1] / 2)])
      .map((pos) => [Math.floor(this.gameSize[0] / 2), pos[1]]);
    this.snakeVector = [1, 0];
    this.gameInterval = setInterval(() => this.update(), 1000 / 2);
  }
  onDeath() {
    clearInterval(this.gameInterval);
    this.snakeTiles = [];
    this.snakeVector = [1, 0];
    this.started = false;
  }
  update() {
    let lastTile = this.snakeTiles[this.snakeTiles.length - 1];
    let newTile = lastTile.map((d, i) => d + this.snakeVector[i]);
    this.snakeTiles.push(newTile);
    this.snakeTiles.shift();
    if (this.detectColition()) this.onDeath();
    this.draw();
  }
  initCanvas() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "#350";
    this.ctx.font = "16px Silkscreen";
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (!this.started) {
      this.ctx.textAlign = "center";
      this.ctx.fillText(
        "Press enter to start",
        this.canvas.width / 2,
        this.canvas.height / 2
      );
      return;
    }

    this.snakeTiles.forEach((tile) => {
      this.ctx.fillRect(
        this.getTileSize()[0] * tile[0],
        this.getTileSize()[1] * tile[1],
        this.getTileSize()[0] - 2,
        this.getTileSize()[1] - 2
      );
    });
  }
  onKeyPress(event) {
    switch (event.key) {
      case "ArrowUp":
        if (arraysEqual(this.snakeVector, [0, 1])) return;
        this.snakeVector = [0, -1];
        break;
      case "ArrowDown":
        if (arraysEqual(this.snakeVector, [0, -1])) return;
        this.snakeVector = [0, 1];
        break;
      case "ArrowLeft":
        if (arraysEqual(this.snakeVector, [1, 0])) return;
        this.snakeVector = [-1, 0];
        break;
      case "ArrowRight":
        if (arraysEqual(this.snakeVector, [-1, 0])) return;
        this.snakeVector = [1, 0];
        break;
      case "Enter":
        this.startGame();
        break;
      default:
        break;
    }
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
  detectColition() {
    let hasCollided = false;
    const head = this.snakeTiles[this.snakeTiles.length - 1];
    this.snakeTiles.forEach((tile, index) => {
      if (index !== this.snakeTiles.length - 1 && arraysEqual(tile, head))
        hasCollided = true;
    });
    if (
      head[0] >= this.gameSize[0] ||
      head[1] >= this.gameSize[1] ||
      head[0] < 0 ||
      head[1] < 0
    ) {
      hasCollided = true;
    }
    return hasCollided;
  }
}
