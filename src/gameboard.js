
const ship = require('./ship');
// const ship = { length, sunk,}
const gameboard = () => {
    let board = [[]]
    createBoard();
    
      function createBoard() {
        for(let i = 0; i <10;i ++){
          board.push([]);
          for(let o = 0; o <10; o++){
            board[i].push(createCoordinateObject(i,o));
          }
        }
      }

      function createCoordinateObject(x,y){
        let coordinate =
        {
          x: x,
         y: y,
         ship: undefined,
         hit: null,
       }
       return coordinate;
      }

      const location = (num1,num2) => {
          return board[num1][num2];
      }



      function addShip(num1,num2,size = 2, isHorizontal = true){
        const battleship = ship(size);

        if(isHorizontal){
            for(let i = 0 ;i < size; i ++){
              board[num1][num2+i].ship = battleship;
            }

        }
        else{
          for(let i = 0 ;i < size; i ++){
            board[num1+i][num1].ship = battleship;
          }

        }

        prettyPrint();
      }


     
      function prettyPrint(){
        let string = '';
        for(let i = 0; i <10;i ++){
          string += '\n'
          for(let o = 0; o <10; o++){
            if(!board[i][o].ship)
            string +='[ ]';
            else if(board[i][o].ship.isSunk())
            string += '[X]';
            else if(board[i][o].hit) 
            string += '[H]';
            else if(board[i][o].ship)
              string +='[S]';
          }
        }
        console.log(string);
        return string;
      }


      function hitShip(num1,num2){
          if(board[num1][num2].hit !== null) {
            return 'coordinate has been chose';
          }


          if(board[num1][num2].ship){
            board[num1][num2].ship.hit();
            board[num1][num2].ship.isSunk();
            board[num1][num2].hit = true;
            // see if all ships are sunk
            checkAllSunk();
          }else {
            board[num1][num2].hit = false;
            console.log("YOU MISS");
          }
          
          prettyPrint();
      }
      
      function checkAllSunk(){
        
        let allSunk = board.every(coord => coord.every( element => checkShip(element)));
// && coord.ship.sunk == false
        console.log(allSunk , "allSunk");
       if(allSunk){
        return true;
       }
        else
        return false;
      }
      function checkShip(coord){
   
          if(coord.ship == undefined) 
          return true;
          else if(coord.ship.getShip().sunk)
          return true;
          else
          return false;
      }

     return {location,addShip,hitShip,prettyPrint,checkAllSunk}; 

      
}

module.exports = gameboard;