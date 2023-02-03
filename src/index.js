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
  console.log(player1.board.turn, "p1");
  console.log(player2.board.turn, "p2");
  if(player1.board.turn == player2.board.turn && e.target.parentElement.id === 'playertwogrid' ){
    // player 1 turn
    player1.board.turn++
    let coord = e.target.id.split('');
    if(player2.board.hitShip(coord[0],coord[1]) == undefined){
      player1.board.turn--;
    }
    
  
    // if(e.target)
      updateBoard();
  }
  else if (player1.board.turn > player2.board.turn && e.target.parentElement.id === 'playeronegrid'){
    //player 2 turn
    player2.board.turn++;

    let coord = e.target.id.split('');
    if(player1.board.hitShip(coord[0],coord[1]) == undefined){
      player2.board.turn--;
    };
    // if(e.target)
    updateBoard();
  }else{
    console.log('ALL UNITS MUST ATTACK ENEMY.')

  }

}

function updateBoard(){
  console.log(player1.board.prettyPrint());
  player1.board.getBoard().forEach(element => {
    element.forEach( element=> {
      let number = "" + element.x+element.y;
        const box = document.querySelector('#playeronegrid');
      if(element.hit == false) 
      box.childNodes[+number].textContent = '-';
      else if(!element.ship)
      box.childNodes[+number].textContent ='';
      else if(element.ship.isSunk())
      box.childNodes[+number].textContent = 'X';
      else if(element.hit == true) 
      box.childNodes[+number].textContent = '+';
      else if(element.ship)
      box.childNodes[+number].textContent = "S";
    })
  });
  console.log(player2.board.prettyPrint());
  player2.board.getBoard().forEach(element => {
    element.forEach( element=> {
      let number = "" + element.x+element.y;
        const box = document.querySelector('#playertwogrid');
   
        if(element.hit == false) 
        box.childNodes[+number].textContent = '-';
        else if(!element.ship)
        box.childNodes[+number].textContent ='';
        else if(element.ship.isSunk())
        box.childNodes[+number].textContent = 'X';
        else if(element.hit == true) 
        box.childNodes[+number].textContent = '+';
        else if(element.ship)
        box.childNodes[+number].textContent = "S";
    })
  });

}



// FUNCTIONS
function playGame(){


while(!winner){

  //get player1 coordinates to attack player2 board
  let x = Math.round(Math.random() *9);
  let y = Math.round(Math.random() *9);
  console.log('player 2 board');
  // findMove(player2,x,y);
checkWinner(player2);
  console.log('player1 board');
 player1.board.hitShip(x,y);  

//  findMove(player1,x,y);

  checkWinner(player1);


  i++;
  if(i == 100){
      console.log('no moves left')
  }
}




function findMove(player,x,y){
  if(player.playerNumber == 1){
    let movePossible = player2.board.hitShip(x,y);
 
  }
  else {
    let movePossible = player1.board.hitShip(x,y);
 
  }
     // while(movePossible === undefined){
    //     let x = Math.round(Math.random() *9);
    //     let y = Math.round(Math.random() *9);
    //     movePossible = player1.board.hitShip(x,y);
    //   }


     // while(movePossible === undefined){
    //     let x = Math.round(Math.random() *9);
    //     let y = Math.round(Math.random() *9);
    //     movePossible = player2.board.hitShip(x,y);
    //   }
}

}
function checkWinner(player){

  if(player.board.checkAllSunk()){
    console.log('player1 won')
    winner  = true;
    console.log(i);
}
}