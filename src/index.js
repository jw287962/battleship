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
checkTurn();

makeAGrid(player1Board);
makeAGrid(player2Board);

updateBoard();


// playGame();  //will need to change for when there is a user interface





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
    if(player1.board.turn == player2.board.turn && e.target.parentElement.id === 'playertwogrid' ){
    // player 1 turn
    player1.board.turn++
    let coord = e.target.id.split('');
    if(player2.board.hitShip(coord[0],coord[1]) == undefined){
      player1.board.turn--;
      return;
    }
      updateBoard();
      if(player2.board.checkAllSunk()){
          console.log(player1.getName(), 'won');
      }
  }else{
  console.log('ALL UNITS MUST ATTACK ENEMY.')
  return;

}
  // else if (player1.board.turn > player2.board.turn && e.target.parentElement.id === 'playeronegrid'){
    //player 2 turn
    player2.board.turn++;

    // let coord = e.target.id.split('');

    findMoveAI();

    updateBoard();
    if(player1.board.checkAllSunk()){
      console.log(player1.getName(), 'won');
    // }
 
  checkTurn();

    }
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
  console.log(player1.board.prettyPrint());
  player1.board.getBoard().forEach(element => {
    element.forEach( element=> {
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
      else if(element.ship)
      box.childNodes[+number].classList.toggle('ship');
    })
  });
  console.log(player2.board.prettyPrint());

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




function findMoveAI(){
  let x = Math.round(Math.random() *9);
  let y = Math.round(Math.random() *9);
    let movePossible = player1.board.hitShip(x,y);
     while(movePossible === undefined){
        let x = Math.round(Math.random() *9);
        let y = Math.round(Math.random() *9);
        movePossible = player1.board.hitShip(x,y);
      }


     // while(movePossible === undefined){
    //     let x = Math.round(Math.random() *9);
    //     let y = Math.round(Math.random() *9);
    //     movePossible = player2.board.hitShip(x,y);
    //   }
}