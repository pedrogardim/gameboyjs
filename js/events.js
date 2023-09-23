import { sounds } from "./sounds.js";
import { getKeyByValue } from "./utils.js";
import { snakeGame } from "./main.js";

const keyToIdMap = {
  ArrowUp: "gameboy-d-pad-top",
  ArrowDown: "gameboy-d-pad-bottom",
  ArrowLeft: "gameboy-d-pad-left",
  ArrowRight: "gameboy-d-pad-right",
  z: "gameboy-buttons-a",
  x: "gameboy-buttons-b",
  Enter: "gameboy-start-button",
  Backspace: "gameboy-select-button",
};

const keyToGameboyClasses = {
  ArrowUp: "rotated-top",
  ArrowDown: "rotated-down",
  ArrowLeft: "rotated-left",
  ArrowRight: "rotated-right",
};

const gameboyBody = document.getElementById("gameboy-body");

const hightlightKey = (key, event) => {
  if (keyToIdMap[key]) {
    const keyElement = document.getElementById(keyToIdMap[key]);
    const classListAction = event === "press" ? "add" : "remove";
    keyElement.classList[classListAction]("pressed");
  }
};

const onGameboyButtonPress = (key) => {
  hightlightKey(key, "press");
  snakeGame.onKeyPress(key);
  if (key.includes("Arrow")) {
    sounds.player("cursor").start();
    gameboyBody.classList.add(keyToGameboyClasses[key]);
  }
};

const onGameboyButtonRelease = (key) => {
  hightlightKey(key, "release");
  if (key.includes("Arrow")) {
    gameboyBody.classList.remove(keyToGameboyClasses[key]);
  }
};

const onGameboyButtonReleaseAll = () => {
  gameboyBody.className = "";
  let pressedElements = document.querySelectorAll(".pressed");

  [].forEach.call(pressedElements, (el) => {
    el.classList.remove("pressed");
  });
};

export const initEvents = () => {
  document.addEventListener("keydown", (event) => {
    onGameboyButtonPress(event.key);
  });

  document.addEventListener("keyup", (event) => {
    onGameboyButtonRelease(event.key);
  });

  document.addEventListener("mousedown", (event) => {
    let equivalentKey = getKeyByValue(keyToIdMap, event.target.id);
    if (equivalentKey)
      onGameboyButtonPress(getKeyByValue(keyToIdMap, event.target.id));
  });

  document.addEventListener("mouseup", (event) => {
    onGameboyButtonReleaseAll();
  });
};
