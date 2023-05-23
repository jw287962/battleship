import {
  checkWinner,
  updateBoardGameLive,
  updateDisplayWithShipImage,
  checkUpdateGameBoard,
  setPreliminaryBoard,
  evalulatePlayerClick,
  makeAGrid,
  checkTurn,
  dragShip,
  dragShipEnd,
  draggingfunction,
} from "./Controller";

const player = require("./player");
import css from "./style.css";

let isAi = true;
addInfoHelper();
export let player1 = player("Player1", !isAi, 1);
export let player2 = player("AI", isAi, 2);

const newGameDiv = document.querySelector(".restart");
const startGameDiv = document.querySelector(".start");

// button to start game
newGameDiv.addEventListener("click", playGame);
startGameDiv.addEventListener("click", addEventListenerGameStart);

export const player1Board = document.querySelector("#playeronegrid");
export const player1Display = document.querySelector("#playeroneDisplay");
export const player2Board = document.querySelector("#playertwogrid");

playGame();

// make a board on website
function playGame() {
  startGameDiv.classList.remove("hidden");
  player1 = player("Player1", !isAi, 1);
  player2 = player("AI", isAi, 2);
  console.log("new game");

  makeAGrid(player1Board);
  makeAGrid(player1Display);
  makeAGrid(player2Board);

  setPreliminaryBoard();
}

// playGame();  //will need to change for when there is a user interface

function addEventListenerGameStart(e) {
  e.preventDefault();
  updateDisplayWithShipImage();
  checkTurn();

  startGameDiv.classList.toggle("hidden");
  player2.board.getBoard().forEach((element) => {
    const box = document.querySelector("#playertwogrid");

    element.forEach((element) => {
      let number = "" + element.x + element.y;
      box.childNodes[+number].addEventListener("click", evalulatePlayerClick);
    });
  });

  player1.board.getBoard().forEach((element) => {
    const box = document.querySelector("#playeronegrid");

    element.forEach((element) => {
      let number = "" + element.x + element.y;
      box.childNodes[+number].removeEventListener("dragstart", dragShip);
      box.childNodes[+number].classList.remove("ship");
      box.childNodes[+number].removeEventListener("dragover", draggingfunction);
      box.childNodes[+number].removeEventListener("drop", dragShipEnd);
    });
  });
}

// }

function addInfoHelper() {
  const info = document.querySelector(".info");
  const newDiv = document.createElement("div");
  newDiv.classList.add("infotext");
  newDiv.classList.add("hidden");
  info.appendChild(newDiv);
  info.addEventListener("mouseover", showHelp);
  info.addEventListener("mouseout", removeHelp);
}

function showHelp() {
  const infotext = document.querySelector(".infotext");
  infotext.classList.remove("hidden");
  infotext.textContent = "Double Click to Rotate";
}

function removeHelp() {
  const infotext = document.querySelector(".infotext");
  infotext.classList.add("hidden");
}
