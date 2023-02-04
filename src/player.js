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
             x = Math.round(Math.random() *9);
             y = Math.round(Math.random() *9);

        if(shipCoordinates.length >= 1 || possibleMoves.length >= 1){
          // if(board.checkIsShip(board.location(shipCoordinates[0],shipCoordinates[1])))
          //   shipCoordinates.splice(0,shipCoordinates.length);
          //   else{
            if(shipCoordinates.length >= 1){
              x = shipCoordinates.splice(0,1)[0];
              y =  shipCoordinates.splice(0,1)[0];
              possibleMoves.push(x+1,y);
              possibleMoves.push(x-1,y);
              possibleMoves.push(x,y-1);
              possibleMoves.push(x,y+1);
            }
              let coord = possibleMoves.splice(0,2);
                let hitWhat = board.hitShip(coord[0],coord[1])
              while(possibleMoves.length !=0 &&  hitWhat == undefined ){
                console.log(possibleMoves);
                coord = possibleMoves.splice(0,2);
                hitWhat  = board.hitShip(coord[0],coord[1]);
              };
              if(hitWhat != undefined){
                // console.log(hitWhat);
                  if(hitWhat){
                    shipCoordinates.push(coord[0]);
                    shipCoordinates.push(coord[1]);
                  }
                return;
              }
        }
          let movePossible = board.hitShip(x,y);
        
          while(movePossible === undefined){
               x = Math.round(Math.random() *9);
               y = Math.round(Math.random() *9);
              movePossible = board.hitShip(x,y);
            }
            console.log(movePossible, x,y);
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