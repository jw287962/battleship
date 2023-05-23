import {
  player2,
  player1,
  player1Board,
  player1Display,
  player2Board,
} from "./index";

function checkWinner() {
  if (player2.board.checkAllSunk()) {
    player1.won();
  }
  if (player1.board.checkAllSunk()) {
    player2.won();
  }
}

// for after game started
function evalulatePlayerClick(e) {
  e.preventDefault();
  if (player1.isWinner() || player2.isWinner()) {
    return;
  }
  if (
    player1.board.turn + player2.board.turn == 0 &&
    e.target.parentElement.id === "playeronegrid"
  ) {
    //game has not started. can move ships....
    let coord = e.target.id.split("");
    if (player1.board.checkIsShip(player1.board.location(coord[0], coord[1]))) {
      // var data = e.dataTransfer.getData(e.target);
    }

    return;
  }

  if (
    player1.board.turn == player2.board.turn &&
    e.target.parentElement.id === "playertwogrid"
  ) {
    // player 1 turn
    player1.board.turn++;
    let coord = e.target.id.split("");
    if (player2.board.hitShip(coord[0], coord[1]) == undefined) {
      player1.board.turn--;
      return;
    }
    updateBoardGameLive();
    checkWinner();
  } else {
    console.log("ALL UNITS MUST ATTACK ENEMY.");
    return;
  }
  player2.board.turn++;
  player1.shootCoordinates(0, 0, player2.isAI);
  updateBoardGameLive();
  checkTurn();

  checkWinner();
}
function checkTurn() {
  const turnDiv = document.querySelector(".turn");
  if (player1.board.turn == player2.board.turn) {
    turnDiv.textContent = "PLAYER ONE TURN ";
  }
  if (player1.board.turn > player2.board.turn) {
    turnDiv.textContent = "PLAYER TWO TURN";
  }
}

function updateDisplayWithShipImage() {
  const box = document.querySelector("#playeroneDisplay");
  player1.board.shipsArray.forEach((ship) => {
    const coord = ship.getStartCoordinates();
    const shipLength = ship.getShip().length;
    let number = "" + coord[0] + coord[1];
    // if (ship.getShip() === element.ship.getShip()) {
    let translateXAmount = 36;
    let translateFix = 1;
    switch (shipLength) {
      case 2:
        translateFix = 1.6;
        break;
      case 4:
        translateFix = 0.88;
        break;
      case 5:
        translateFix = 0.75;
        break;
      default:
        translateFix = 1;
    }
    switch (shipLength) {
      case 2:
        translateXAmount = 28;
        break;
      case 5:
        translateXAmount = 38;
        break;
    }

    box.childNodes[+number].classList.toggle(`battleship${shipLength}`);
    if (!ship.isShipHorizontal()) {
      // box.childNodes[+number].classList.toggle(`horizontal`);
      box.childNodes[
        +number
      ].style.transform = `scale(${shipLength}) translateX(${translateXAmount}%) translateY(${
        translateXAmount * translateFix
      }%)`;
    } else {
      // box.childNodes[+number].classList.toggle(`vertical`);
      box.childNodes[
        +number
      ].style.transform = `rotate(90deg) scale(${shipLength}) translateX(${translateXAmount}%) translateY(${
        translateXAmount * translateFix
      }%) `;
    }
    // }
  });
}
//       }
//     });
//   });
// }
// WHEN GAME STARTS
function updateBoardGameLive() {
  player1.board.getBoard().forEach((element) => {
    element.forEach((element) => {
      let num = 0;
      let number = "" + element.x + element.y;
      const box = document.querySelector("#playeronegrid");
      box.childNodes[+number].textContent = "";
      if (element.hit == false)
        box.childNodes[+number].classList.toggle("miss");
      else if (!element.ship) box.childNodes[+number].textContent = "";
      else if (element.ship.isSunk())
        box.childNodes[+number].classList.toggle("sunk");
      else if (element.hit == true)
        box.childNodes[+number].classList.toggle("hit");
      else if (element.ship) {
        player1.board.shipsArray.forEach((ship) => {
          if (ship.getShip() === element.ship.getShip()) {
            box.childNodes[+number].classList.add(`ship${num}`);
          }
          num++;
        });
      }
    });
  });
  player2.board.getBoard().forEach((element) => {
    element.forEach((element) => {
      let number = "" + element.x + element.y;
      const box = document.querySelector("#playertwogrid");
      box.childNodes[+number].textContent = "";

      if (element.hit == false) box.childNodes[+number].classList.add("miss");
      else if (!element.ship) box.childNodes[+number].textContent = "";
      else if (element.ship.isSunk()) {
        box.childNodes[+number].classList.remove("hit");
        box.childNodes[+number].classList.add("sunk");
      } else if (element.hit == true)
        box.childNodes[+number].classList.add("hit");
    });
  });
}

// BEFORE GAME STARTS

// default grid for gameboard
function makeAGrid(parentDiv) {
  parentDiv.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    for (let o = 0; o < 10; o++) {
      const boxGrid = document.createElement("div");

      boxGrid.classList.add("box");
      boxGrid.setAttribute("id", `${i}${o}`);
      if (player1.board.getBoard()[i][o].ship) {
        boxGrid.draggable = true;
        boxGrid.addEventListener("dragstart", dragShip);
      }
      boxGrid.addEventListener("dragover", draggingfunction);
      // boxGrid.addEventListener('dropend',dragShipEnd);
      boxGrid.addEventListener("drop", dragShipEnd);
      boxGrid.addEventListener("dblclick", rotateShip);
      parentDiv.appendChild(boxGrid);
    }
  }
}

function checkTargetForShips(shipCoord, newPositionCoord, add) {
  // checks based on rotate
  let newPositionHolder = newPositionCoord.join("");
  // let add = nextShipCoordHelper(shipCoord, true);
  for (let i = 0; i < shipCoord.length; i++) {
    //check target has no ship
    let newShipCoordXY = getNewShipCoordinate(newPositionHolder * 1);

    if (
      player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship !=
      undefined
    )
      return false;

    newPositionHolder = newPositionHolder * 1 + add;
    i++;
  }
  return true;
}
function rotateShip(e) {
  const shipCoords = getShipCoordsAll(
    document.querySelectorAll(`.${e.target.classList[2]}`)
  );
  let add = nextShipCoordHelper(shipCoords, true);
  const coordinate = e.target.id.split("");
  let shipInstance =
    player1.board.getBoard()[+coordinate[0]][+coordinate[1]].ship;

  const newPositionCoord = [
    Math.round(Math.random() * 9),
    Math.round(Math.random() * 9),
  ];
  while (
    checkNewCoordinatePossible(
      player1.board.getBoard()[+shipCoords[0]][+shipCoords[1]].ship,
      shipCoords,
      newPositionCoord,
      true
    ) === false ||
    checkTargetForShips(shipCoords, newPositionCoord, add) === false
  ) {
    newPositionCoord.splice(
      0,
      Infinity,
      ...[Math.round(Math.random() * 9), Math.round(Math.random() * 9)]
    );
  }
  removeandAddNewShip(shipCoords, newPositionCoord, add, shipInstance, true);
  // move to new Position;
  makeAGrid(player1Board);
  makeAGrid(player1Display);
  setPreliminaryBoard();
}

function setPreliminaryBoard() {
  const box = document.querySelector("#playeronegrid");

  console.log(player1.board.prettyPrint());
  player1.board.getBoard().forEach((element) => {
    element.forEach((element) => {
      let number = "" + element.x + element.y;
      if (!element.ship) {
        return box.childNodes[+number].classList.remove(`ship`);
      }
      if (element.ship.getShip()) {
        let num = 0;

        player1.board.shipsArray.forEach((ship) => {
          if (ship.getShip() === element.ship.getShip()) {
            box.childNodes[+number].classList.add(`ship`);
            box.childNodes[+number].classList.add(`ship${num}`);
          }
          num++;
        });
      }
    });
  });
}

// before game starts
function dragShip(e) {
  // console.log(e.target.classList[2]);
  let shipName = e.target.classList[2];
  const ship = document.getElementsByClassName(shipName);
  // let shipCoordinate = [];
  // console.log(ship);
  e.dataTransfer.setData("text", e.target.id);
  e.dataTransfer.dropEffect = "copy";
  // for(let i = 0; i < ship.length;i++){
  //   shipCoordinate.push(ship[i].id);

  // }
}
function draggingfunction(e) {
  e.preventDefault();
}
function getShipCoordsAll(sourceShipNameArray) {
  const shipCoords = [];
  sourceShipNameArray.forEach((element) => {
    let xy = element.id.split("");
    shipCoords.push(+xy[0]);
    shipCoords.push(+xy[1]);
  });
  return shipCoords;
}
function dragShipEnd(e) {
  e.preventDefault();
  const userClickedCoordinate = e.dataTransfer.getData("text");
  let sourceShipCoord = document.getElementById(`${userClickedCoordinate}`);
  let sourceShipNameArray = document.querySelectorAll(
    `.${sourceShipCoord.classList[2]}`
  );
  const shipCoords = getShipCoordsAll(sourceShipNameArray);
  let coordinate = userClickedCoordinate.split("");

  let shipInstance =
    player1.board.getBoard()[+coordinate[0]][+coordinate[1]].ship;

  // player1.board.getBoard()
  // console.log(sourceShip);

  let targetID = e.target.id;

  checkUpdateGameBoard(
    shipCoords,
    shipInstance,
    userClickedCoordinate,
    targetID
  );

  makeAGrid(player1Board);
  makeAGrid(player1Display);
  setPreliminaryBoard();
}
function nextShipCoordHelper(shipCoord, rotate) {
  let add;
  if (rotate) {
    !player1.board
      .getBoard()
      [+shipCoord[0]][+shipCoord[1]].ship.isShipHorizontal()
      ? (add = 10)
      : (add = 1);
  } else {
    !player1.board
      .getBoard()
      [+shipCoord[0]][+shipCoord[1]].ship.isShipHorizontal()
      ? (add = 1)
      : (add = 10);
  }

  return add;
}
function checkUpdateGameBoard(shipCoord, shipInstance, sourceData, targetID) {
  let add;
  let newPositionCoord;
  let newPositionHolder;
  // coordinates add to determine current ship's next coordinates
  add = nextShipCoordHelper(shipCoord);

  newPositionCoord = findStartPosition(
    add,
    shipCoord,
    findCoordinateDifference(shipCoord, sourceData),
    targetID
  );

  if (
    checkNewCoordinatePossible(
      player1.board.getBoard()[+shipCoord[0]][+shipCoord[1]].ship,
      shipCoord,
      newPositionCoord
    ) === false
  ) {
    return;
  }
  newPositionHolder = newPositionCoord;

  // iterates through ship coordinates.

  for (let i = 0; i < shipCoord.length; i++) {
    //check target has no ship
    let newShipCoordXY = getNewShipCoordinate(newPositionHolder);
    if (
      player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship &&
      player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship !=
        shipInstance
    )
      return;

    newPositionHolder += add;
    i++;
  }
  removeandAddNewShip(shipCoord, newPositionCoord, add, shipInstance);
}

function removeandAddNewShip(
  shipCoord,
  newPositionCoord,
  add,
  shipInstance,
  rotate
) {
  if (Array.isArray(newPositionCoord)) {
    newPositionCoord = `${newPositionCoord[0]}${newPositionCoord[1]}` * 1;
  }
  console.log(shipCoord, newPositionCoord, add, shipInstance);
  for (let i = 0; i < shipCoord.length; i++) {
    //remove current ship
    player1.board.getBoard()[+shipCoord[i]][+shipCoord[i + 1]].ship = undefined;
    i++;
  }
  for (let i = 0; i < shipCoord.length; i++) {
    let newShipCoordXY = getNewShipCoordinate(newPositionCoord);

    if (i === 0) {
      shipInstance.setStartCoordinates(+newShipCoordXY[0], +newShipCoordXY[1]);
    }

    // console.log(+newShipCoordXY[0], +newShipCoordXY[1]);
    player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship =
      shipInstance;
    if (rotate && i === shipCoord.length - 2) {
      player1.board
        .getBoard()
        [+newShipCoordXY[0]][+newShipCoordXY[1]].ship.updateShipDirection();
    }
    i++;
    newPositionCoord += add;
  }
}

function checkNewCoordinatePossible(
  playerShip,
  shipCoord,
  newPositionCoord,
  rotate
) {
  if (Array.isArray(newPositionCoord)) {
    newPositionCoord = newPositionCoord.join("") * 1;
  }
  if (rotate) {
    console.log(newPositionCoord, shipCoord.length / 2);
    if (playerShip.isShipHorizontal()) {
      if ((newPositionCoord % 10) + shipCoord.length / 2 > 10) return false;
    } else {
      if (Math.round(newPositionCoord / 10 - 0.49) + shipCoord.length / 2 > 10)
        return false;
    }
  }
  if (!playerShip.isShipHorizontal()) {
    if ((newPositionCoord % 10) + shipCoord.length / 2 > 10) return false;
  } else {
    if (Math.round(newPositionCoord / 10 - 0.49) + shipCoord.length / 2 > 10)
      return false;
  }
}

// find start*(aka end) edge of ship (bottom or right edge)
function findCoordinateDifference(shipCoord, sourceData) {
  const answer =
    shipCoord[shipCoord.length - 2] * 10 +
    shipCoord[shipCoord.length - 1] -
    sourceData;

  return answer;
}
function findStartPosition(add, shipCoord, difference, targetID) {
  return +targetID + difference - (shipCoord.length / 2 - 1) * add;
}

function getNewShipCoordinate(newPositionCoord) {
  if (newPositionCoord <= 9) {
    return `0${newPositionCoord}`.split("");
  } else return `${newPositionCoord}`.split("");
}

export {
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
};
