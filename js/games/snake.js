class SnakeGameController {
  gameSize = [25, 16];
  snakeTiles = [];
  snakeVector = [1, 0];
  canvas;
  ctx;

  constructor() {
    this.init();
  }
  init() {
    this.initCanvas();
    this.resetGameState();
    setInterval(() => this.update(), 1000 / 2);
    document.addEventListener("keydown", this.onKeyPress.bind(this));
  }
  resetGameState() {
    this.snakeTiles = Array(3)
      .fill([0, Math.floor(this.gameSize[1] / 2)])
      .map((pos) => [Math.floor(this.gameSize[0] / 2), pos[1]]);
    this.snakeVector = [1, 0];
  }
  update() {
    let lastTile = this.snakeTiles[this.snakeTiles.length - 1];
    let newTile = lastTile.map((d, i) => d + this.snakeVector[i]);
    this.snakeTiles.push(newTile);
    this.snakeTiles.shift();
    if (this.detectColition()) this.resetGameState();
    this.draw();
  }
  initCanvas() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.snakeTiles.forEach((tile) => {
      this.ctx.fillStyle = "#350";
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
        this.snakeVector = [0, -1];
        break;
      case "ArrowDown":
        this.snakeVector = [0, 1];
        break;
      case "ArrowLeft":
        this.snakeVector = [-1, 0];
        break;
      case "ArrowRight":
        this.snakeVector = [1, 0];
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
      if (
        index !== this.snakeTiles.length - 1 &&
        JSON.stringify(tile) === JSON.stringify(head)
      )
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

const snakeGame = new SnakeGameController();
