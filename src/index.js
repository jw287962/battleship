const player = require('./player');
import css from "./style.css";



let isAi = true;

const player1 = player('Player1',!isAi,1);
const player2 = player('AI',isAi,2);

let i = 0; 
let winner = false;
// make a board on website

const player1Board = document.querySelector('#playeronegrid');
const player2Board = document.querySelector('#playertwogrid');

makeAGrid(player1Board);
makeAGrid(player2Board);

updateBoard();


// playGame();  //will need to change for when there is a user interface


function updateBoard(){
  console.log(player1.board.prettyPrint());
  player1.board.getBoard().forEach(element => {
    element.forEach( element=> {
      if(element.ship != undefined){
        let number = "" + element.x+element.y;
        const box = document.querySelector('#playeronegrid');
        // box.childNodes.forEach(node => console.log(node));
      box.childNodes[+number].textContent = "S";
      }

    })
  });
  console.log(player2.board.prettyPrint());
  player2.board.getBoard().forEach(element => {
    element.forEach( element=> {
      if(element.ship != undefined){
        let number = "" + element.x+element.y;

        // HIDE THIS EVENTUALLY
        const box = document.querySelector('#playertwogrid');
        // box.childNodes.forEach(node => console.log(node));
      box.childNodes[+number].textContent = "S";
      }
    })
  });

}



function makeAGrid(parentDiv){

  for(let i = 0;i< 10;i++){
    for(let o =0;o <10;o++){
        const boxGrid = document.createElement('div');
        boxGrid.classList.add('box');
        boxGrid.setAttribute('id',`${i}${o}`)
        boxGrid.addEventListener('click',evalulatePlayerClick);
        parentDiv.appendChild(boxGrid);
    }
  }
}

function evalulatePlayerClick(e){
  console.log(e.target.id,e.target.parentElement.id);

}




// FUNCTIONS
function playGame(){


while(!winner){

  //get player1 coordinates to attack player2 board
  let x = Math.round(Math.random() *9);
  let y = Math.round(Math.random() *9);
  console.log('player 2 board');
  findMove(player2,x,y);
checkWinner(player2);
  console.log('player1 board');
 player1.board.hitShip(x,y);  

 findMove(player1,x,y);

  checkWinner(player1);


  i++;
  if(i == 100){
      console.log('no moves left')
  }
}




function findMove(player,x,y){
  if(player.playerNumber == 1){
    let movePossible = player2.board.hitShip(x,y);
    while(movePossible === undefined){
        let x = Math.round(Math.random() *9);
        let y = Math.round(Math.random() *9);
        movePossible = player1.board.hitShip(x,y);
      }
  }
  else {
    let movePossible = player1.board.hitShip(x,y);
    while(movePossible === undefined){
        let x = Math.round(Math.random() *9);
        let y = Math.round(Math.random() *9);
        movePossible = player2.board.hitShip(x,y);
      }
  }
  
}

}
function checkWinner(player){

  if(player.board.checkAllSunk()){
    console.log('player1 won')
    winner  = true;
    console.log(i);
}
}