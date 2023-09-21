import { arraysEqual } from "../utils.js";

export class SnakeGameController {
  gameSize = [15, 12];
  snakeTiles = [];
  snakeVector = [1, 0];
  points = 0;
  started = false;
  applePosition;
  snakeTileMargin = 2;
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
    clearInterval(this.gameInterval);
    this.started = true;
    this.snakeTiles = Array(3)
      .fill([0, Math.floor(this.gameSize[1] / 2)])
      .map((pos) => [Math.floor(this.gameSize[0] / 2), pos[1]]);
    this.snakeVector = [1, 0];
    this.createApple();
    this.gameInterval = setInterval(() => this.update(), 1000 / 2);
  }
  onDeath() {
    clearInterval(this.gameInterval);
    this.snakeTiles = [];
    this.snakeVector = [1, 0];
    this.points = 0;
    this.started = false;
  }
  createApple() {
    this.applePosition = this.getRandomPosition();
  }
  update() {
    let lastTile = this.snakeTiles[this.snakeTiles.length - 1];
    let newTile = lastTile.map((d, i) => d + this.snakeVector[i]);
    this.snakeTiles.push(newTile);
    if (arraysEqual(newTile, this.applePosition)) {
      this.points++;
      this.createApple();
    } else {
      this.snakeTiles.shift();
    }
    if (this.detectColition()) this.onDeath();
    this.draw();
  }
  initCanvas() {
    this.canvas = document.getElementById("game");
    this.canvas.width = 250;
    this.canvas.height = this.canvas.width * 0.8;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "#350";
    this.ctx.font = `${this.canvas.height / 15}px Silkscreen`;
  }
  draw() {
    let tileSize = this.getTileSize();
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
        tileSize[0] * tile[0] + this.snakeTileMargin / 2,
        tileSize[1] * tile[1] - this.snakeTileMargin / 2,
        tileSize[0] - this.snakeTileMargin,
        tileSize[1] - this.snakeTileMargin
      );
    });

    if (this.applePosition) {
      let appleRadius = tileSize[1] / 5;
      this.ctx.beginPath();
      this.ctx.arc(
        tileSize[0] * this.applePosition[0] + tileSize[0] / 2,
        tileSize[1] * this.applePosition[1] + tileSize[1] / 2,
        appleRadius,
        0,
        2 * Math.PI
      );
      this.ctx.fill();
    }
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
