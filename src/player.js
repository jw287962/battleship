const gameboard = require('./gameboard');
const ship = require('./ship');



const player = (name,isAI,number = 1) => {

  let playerName = name;
  let playerNumber = number;
  let board = gameboard(); 
const ships = [];

for(let i = 0; i <7; i++){
  let num;
  if(i <= 2)  num = 2;
  else if(i <= 4)  num = 3;
  else if(i <= 5)  num = 4;
  else if(i < 7) num = 5;
  const ship1 = ship(num);
  ships.push(ship1);
}

fillAllShips();

    function getAllShips(){
        return ships;
    }
    
    function fillAllShips(){
      ships.forEach(element => {
        board.fillBoardRandom(element);

      });
      board.prettyPrint();
    }
    
    function shootCoordinates(num1,num2){
      if(board.hitShip(num1,num2));
      console.log('YOU LOSE',this.playerName);
    }


    return {getAllShips,board,shootCoordinates, playerNumber}
  }


  module.exports = player;