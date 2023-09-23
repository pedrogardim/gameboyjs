import { SnakeGameController } from "./games/snake.js";
import { initEvents } from "./events.js";

export let snakeGame;

window.onload = async () => {
  snakeGame = new SnakeGameController();
  initEvents();
};
