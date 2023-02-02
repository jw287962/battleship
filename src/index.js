const player = require('./player');




let isAi = true;
const player1 = player('Player1',!isAi);
const player2 = player('AI',isAi);

let i = 0; 
let winner = false;
while(!winner){

  //get player1 coordinates to attack player2 board
  let x = Math.round(Math.random() *9);
  let y = Math.round(Math.random() *9);

  console.log('player 2 board');
  let movePossible = player2.board.hitShip(x,y);
while(movePossible === undefined){
    let x = Math.round(Math.random() *9);
    let y = Math.round(Math.random() *9);
    movePossible = player1.board.hitShip(x,y);
  };


  if(player2.board.checkAllSunk()){
        console.log('player1 won')
        winner  = true;
        console.log(i);
  }
  console.log('player1 board');
  movePossible = player1.board.hitShip(x,y);  
  while(movePossible === undefined){
    let x = Math.round(Math.random() *9);
    let y = Math.round(Math.random() *9);
    movePossible = player2.board.hitShip(x,y);
  };
  player2.board.hitShip(x,y);
  if(player1.board.checkAllSunk()){
      console.log('player2 won')
      winner  = true;
      console.log(i);
  }

  i++;
  if(i == 100){
      console.log('no moves left')
  }
}
