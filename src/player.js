const gameboard = require('./gameboard');
const ship = require('./ship');



const player = (name,isAInt,number = 1) => {
  const isAI = isAInt;
  const playerName = name;
  const playerNumber = number;
  const board = gameboard(); 
const ships = [];
const shipCoordinates = [];
const possibleMoves = [];

let winner = false; 
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
    
    function shootCoordinates(x =0 ,y = 0,isRobot){
      if(isRobot){
            let x = Math.round(Math.random() *9);
            let y = Math.round(Math.random() *9);

        // if(shipCoordinates.length >= 1){
        //   if(board.checkIsShip(board.location(shipCoordinates[0],shipCoordinates[1])))
        //     shipCoordinates.splice(0,shipCoordinates.length);
        //     else{
        //       x = shipCoordinates[0];
        //       y =  shipCoordinates[1];
        //       possibleMoves.push(x+1,y);
        //       possibleMoves.push(x-1,y);
        //       possibleMoves.push(x,y-1);
        //       possibleMoves.push(x,y+1);
        //       let coord = possibleMoves.splice(0,1);
        //       while(possibleMoves.length !=0 && board.hitShip(coord[0][0],coord[0][1]) == undefined ){
        //         coord = possibleMoves.splice(0,1);
        //       };


        //     }
        // }
          let movePossible = board.hitShip(x,y);
        
          while(movePossible === undefined){
              let x = Math.round(Math.random() *9);
              let y = Math.round(Math.random() *9);
              movePossible = board.hitShip(x,y);
            }
          if(movePossible == true){
            shipCoordinates.push(x);
            shipCoordinates.push(y);
          }
          console.log(shipCoordinates);

      
      }else{
        
        console.log('human');
        board.hitShip(x,y)
      }
    }
    function isWinner(){
      return winner;
    }
    function won(){
       winner = true;
    }
    function getName(){
      return name;
    }

    return {getAllShips,board,shootCoordinates, playerNumber,getName,isAI,isWinner,won}
  }


  module.exports = player;