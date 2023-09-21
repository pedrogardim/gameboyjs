import { sounds } from "./sounds.js";

const hightlightKey = (key, event) => {
  const keyElementId = {
    ArrowUp: "#gameboy-d-pad-top",
    ArrowDown: "#gameboy-d-pad-bottom",
    ArrowLeft: "#gameboy-d-pad-left",
    ArrowRight: "#gameboy-d-pad-right",
    z: "#gameboy-buttons-a",
    x: "#gameboy-buttons-b",
    Enter: "#gameboy-start-button",
    Backspace: "#gameboy-select-button",
  };

  if (keyElementId[key]) {
    const keyElement = document.querySelector(keyElementId[key]);
    const classListAction = event === "keydown" ? "add" : "remove";
    keyElement.classList[classListAction]("pressed");
  }
};

const gameboyBody = document.querySelector("#gameboy-body");

document.addEventListener("keydown", (event) => {
  hightlightKey(event.key, "keydown");

  switch (event.key) {
    case "ArrowUp":
      sounds.player("cursor").start();
      gameboyBody.classList.add("rotated-top");
      break;
    case "ArrowDown":
      sounds.player("cursor").start();
      gameboyBody.classList.add("rotated-down");
      break;
    case "ArrowLeft":
      sounds.player("cursor").start();
      gameboyBody.classList.add("rotated-left");
      break;
    case "ArrowRight":
      sounds.player("cursor").start();
      gameboyBody.classList.add("rotated-right");
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  hightlightKey(event.key, "keyup");

  switch (event.key) {
    case "ArrowUp":
      gameboyBody.classList.remove("rotated-top");
      break;
    case "ArrowDown":
      gameboyBody.classList.remove("rotated-down");
      break;
    case "ArrowLeft":
      gameboyBody.classList.remove("rotated-left");
      break;
    case "ArrowRight":
      gameboyBody.classList.remove("rotated-right");
      break;
  }
});
