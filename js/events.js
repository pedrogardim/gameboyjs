const keyElementId = {
  ArrowUp: "#gameboy-d-pad-top",
  ArrowDown: "#gameboy-d-pad-bottom",
  ArrowLeft: "#gameboy-d-pad-left",
  ArrowRight: "#gameboy-d-pad-right",
};

const gameboyBody = document.querySelector("#gameboy-body");

document.addEventListener("keydown", (event) => {
  if (keyElementId[event.key]) {
    let keyElement = document.querySelector(keyElementId[event.key]);
    keyElement.classList.add("pressed");
  }

  switch (event.key) {
    case "ArrowUp":
      gameboyBody.classList.add("rotated-top");
      break;
    case "ArrowDown":
      gameboyBody.classList.add("rotated-down");
      break;
    case "ArrowLeft":
      gameboyBody.classList.add("rotated-left");
      break;
    case "ArrowRight":
      gameboyBody.classList.add("rotated-right");
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  if (keyElementId[event.key]) {
    let keyElement = document.querySelector(keyElementId[event.key]);
    keyElement.classList.remove("pressed");
  }

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
