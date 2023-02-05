const player = require('./player');
import css from "./style.css";



let isAi = true;

let player1 = player('Player1',!isAi,1);
let player2 = player('AI',isAi,2);

let i = 0; 
let winner = false;

const newGameDiv = document.querySelector('.restart');
const startGameDiv = document.querySelector('.start')

// button to start game 
newGameDiv.addEventListener('click',playGame);
startGameDiv.addEventListener('click',addEventListenerGameStart);

const player1Board = document.querySelector('#playeronegrid');
const player2Board = document.querySelector('#playertwogrid');
playGame();



// make a board on website
function playGame(){
  startGameDiv.classList.remove('hidden');
   player1 = player('Player1',!isAi,1);
 player2 = player('AI',isAi,2);
  console.log("new game")


checkTurn();

makeAGrid(player1Board);
makeAGrid(player2Board);

updateBoard();

}



// playGame();  //will need to change for when there is a user interface

function addEventListenerGameStart(e){
  e.preventDefault();
  console.log('addListenrs')

  startGameDiv.classList.toggle('hidden');
  player2.board.getBoard().forEach(element => {
    element.forEach( element=> {
      let number = "" + element.x+element.y;
        const box = document.querySelector('#playertwogrid');
        box.childNodes[+number].addEventListener('click',evalulatePlayerClick);
     
    })
  });
}

function dragShip(e){
  console.log(e.target.classList[2])
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

function dragShipEnd(e){
  e.preventDefault();
const sourceData = e.dataTransfer.getData("text");
let sourceShipCoord = document.getElementById(`${sourceData}`);
let sourceShipNameArray = document.querySelectorAll(`.${sourceShipCoord.classList[2]}`);
const shipCoord = [];

sourceShipNameArray.forEach(element =>{
  let xy = element.id.split('');
  shipCoord.push(+xy[0]);
  shipCoord.push(+xy[1]);
});
let coordinate = (sourceData).split('');

let sourceShip = player1.board.getBoard()[+coordinate[0]][+coordinate[1]].ship;
// player1.board.getBoard()
let difference = (shipCoord[shipCoord.length-2]*10+shipCoord[shipCoord.length-1]) - sourceData;
let newPositionCoord = +e.target.id + difference - (shipCoord.length/2-1);

if(newPositionCoord%10+(shipCoord.length/2) > 10){
  return;
}


checkUpdateGameBoard(newPositionCoord,shipCoord,sourceShip);

makeAGrid(player1Board);
updateBoard();
}

// function updateShipsBoard(){
//   player1.board.getBoard().forEach(element => {
//     element.forEach( element=> {
//       let num = 0;
//       let number = "" + element.x+element.y;
//         const box = document.querySelector('#playeronegrid');
//         box.childNodes[+number].textContent = '';
//       if(element.ship){

//       }
//       box.childNodes[+number].classList.add('miss');
     
//   })})
// }

function checkUpdateGameBoard(newPositionCoord,shipCoord,sourceShip){
  let newPositionHolder = newPositionCoord;
  for(let i =0; i < shipCoord.length;i++){
    let  newShipCoordXY;
    if(newPositionHolder<=9){
      newShipCoordXY = (`0${newPositionHolder}`).split('');
    }else
      newShipCoordXY = (`${newPositionHolder}`).split('');
    if(player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship &&
    player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship != sourceShip)
    return;
    newPositionHolder++;
    i++;
  }
  for(let i =0; i < shipCoord.length;i++){
    
    player1.board.getBoard()[+shipCoord[i]][+shipCoord[i+1]].ship  = undefined;
    i++;
  }
  for(let i =0; i < shipCoord.length;i++){
    let  newShipCoordXY;
    if(newPositionCoord<=9){
      newShipCoordXY = (`0${newPositionCoord}`).split('');
    }else
      newShipCoordXY = (`${newPositionCoord}`).split('');
    player1.board.getBoard()[+newShipCoordXY[0]][+newShipCoordXY[1]].ship  = sourceShip;
    i++;
    newPositionCoord++;
  }
}
    
function draggingfunction(e){
  e.preventDefault();
}
function makeAGrid(parentDiv){
  parentDiv.innerHTML = "";
  for(let i = 0;i< 10;i++){
    for(let o =0;o <10;o++){
        const boxGrid = document.createElement('div');
        
        boxGrid.classList.add('box');
        boxGrid.setAttribute('id',`${i}${o}`)
        if(player1.board.getBoard()[i][o].ship){
          boxGrid.draggable  = true;
          boxGrid.addEventListener('dragstart',dragShip);
         
        }
        boxGrid.addEventListener('dragover',draggingfunction);
        // boxGrid.addEventListener('dropend',dragShipEnd);
        boxGrid.addEventListener('drop',dragShipEnd);
        parentDiv.appendChild(boxGrid);
    }
  }
}

function evalulatePlayerClick(e){
  e.preventDefault();
  if(player1.isWinner() ||  player2.isWinner()){
    return;
  }
  if(player1.board.turn+player2.board.turn == 0 && e.target.parentElement.id === 'playeronegrid' ){
    //game has not started. can move ships....
      let coord = e.target.id.split('');
      if(player1.board.checkIsShip(player1.board.location(coord[0],coord[1]))){
        // var data = e.dataTransfer.getData(e.target);
        console.log(e.dataTransfer.setData("text","hi"));
  
    }
    

    return;
  }
  
    if(player1.board.turn == player2.board.turn && e.target.parentElement.id === 'playertwogrid' ){
    // player 1 turn
    player1.board.turn++
    let coord = e.target.id.split('');
    if(player2.board.hitShip(coord[0],coord[1]) == undefined){
      player1.board.turn--;
      return;
    }
      updateBoard();
      checkWinner();
   
  }else{
  console.log('ALL UNITS MUST ATTACK ENEMY.')
  return;
}
    player2.board.turn++;
    player1.shootCoordinates(0,0,player2.isAI);
    updateBoard();


    checkTurn();

    checkWinner();


    
}
function checkTurn(){
  const turnDiv = document.querySelector('.turn');
  if(player1.board.turn == player2.board.turn) {
    turnDiv.textContent = 'PLAYER ONE TURN ';
  }
  if(player1.board.turn > player2.board.turn){
    turnDiv.textContent = 'PLAYER TWO TURN';
  }
}
function updateBoard(){
  player1.board.getBoard().forEach(element => {
    element.forEach( element=> {
      let num = 0;
      let number = "" + element.x+element.y;
        const box = document.querySelector('#playeronegrid');
        box.childNodes[+number].textContent = '';
      if(element.hit == false) 
      box.childNodes[+number].classList.toggle('miss');
      else if(!element.ship)
      box.childNodes[+number].textContent ='';
      else if(element.ship.isSunk())
      box.childNodes[+number].classList.toggle('sunk');
      else if(element.hit == true) 
      box.childNodes[+number].classList.toggle('hit');
      else if(element.ship){

      player1.board.shipsArray.forEach(ship => {
        if(ship.getShip() === element.ship.getShip()){
          box.childNodes[+number].classList.toggle(`ship`);
          box.childNodes[+number].classList.add(`ship${num}`);
        }
        num++;
      });


      }
    })
  });

  player2.board.getBoard().forEach(element => {
    element.forEach( element=> {
      let number = "" + element.x+element.y;
        const box = document.querySelector('#playertwogrid');
        box.childNodes[+number].textContent = '';
        
        if(element.hit == false) 
        box.childNodes[+number].classList.add('miss');
        else if(!element.ship)
        box.childNodes[+number].textContent ='';
        else if(element.ship.isSunk()){
          box.childNodes[+number].classList.remove('hit');
        box.childNodes[+number].classList.add('sunk');
        }
        else if(element.hit == true) 
        box.childNodes[+number].classList.add('hit');
        // else if(element.ship)
        // box.childNodes[+number].textContent = "S";
    })
  });

}


function checkWinner(){
  const turnDiv = document.querySelector('.turn');

  if(player2.board.checkAllSunk()){
    turnDiv.textContent = "Player 1 WON";
    player1.won();
}
if(player1.board.checkAllSunk()){
  turnDiv.textContent = "Player 2 WON";
  player2.won();
}
}

// function findMoveAI(){
//   let x = Math.round(Math.random() *9);
//   let y = Math.round(Math.random() *9);

//     let movePossible = player1.board.hitShip(x,y);
    
//      while(movePossible === undefined){
//         let x = Math.round(Math.random() *9);
//         let y = Math.round(Math.random() *9);
       
//       }
//       if(movePossible == true){
        
//       }
//       movePossible = player1.board.hitShip(x,y);
//      // while(movePossible === undefined){
//     //     let x = Math.round(Math.random() *9);
//     //     let y = Math.round(Math.random() *9);
//     //     movePossible = player2.board.hitShip(x,y);
//     //   }
// }