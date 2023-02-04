
const ship = require('./ship');
// const ship = { length, sunk,}
const gameboard = () => {
    let board = [[]]
    createBoard();
    let turn = 0;

    function getBoard(){
      return board;
    }
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

      function fillBoardRandom(battleship){
        let length = battleship.getShip().length;

          let x = Math.round(Math.random() *9);
          let y = Math.round(Math.random() *9);
          let isHorizontal = Math.round(Math.random());
          while(!checkNoShip(isHorizontal,length,x,y)){
            x = Math.round(Math.random() *9);
            y = Math.round(Math.random() *9);
          }

          if(isHorizontal){
            for(let i = 0 ;i < length; i++){
              board[x+i][y].ship = battleship;
            }
          }
              
        else{
          for(let i = 0 ;i < length; i++){
            board[x][y+i].ship = battleship;
          }

      }

    }
        function checkNoShip(isHorizontal,length,x,y){
          if(isHorizontal){
            if(x< 0 || (x+length) > 9 || y < 0 || y> 9)
            return false;
            for(let i = 0 ;i < length; i++){
              if(board[x+i][y].ship != undefined)
              return false;
            } 
          }
          else {
            if(x< 0 || x > 9 || y < 0 || (y+length) > 9)
            return false;
            for(let i = 0 ;i < length; i++){
              if(board[x][y+i].ship != undefined)
                return false;
          }    
     
        }
          return true;
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
             if(board[i][o].hit == false) 
            string += '[-]';
            else if(!board[i][o].ship)
            string +='[ ]';
            else if(board[i][o].ship.isSunk())
            string += '[X]';
            
            else if(board[i][o].ship)
              string +='[S]';
          }
        }
        return string;
      }


      function hitShip(num1,num2){

        if(num1 < 0 || num2< 0 || num1 >9 || num2 > 9){
          return undefined;
        }
          if(board[num1][num2].hit !== null) { 
            //can't hit something already hit before
            return undefined;
          }


          if(board[num1][num2].ship){ //if a ship  
            board[num1][num2].ship.hit();
            board[num1][num2].ship.isSunk();
            board[num1][num2].hit = true;
            // see if all ships are sunk
            prettyPrint();
           return true;
          }else {   //if a miss
            board[num1][num2].hit = false;
            prettyPrint();
            return false;
          }
          
       
          
      }
      
      function checkAllSunk(){
        
        let allSunk = board.every(coord => coord.every( element => checkShip(element)));
// && coord.ship.sunk == false
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

      function checkIsShip(coord){
        if(coord.ship == undefined) 
        return false;
        else if(coord.ship.isSunk())  
        return true;   //lol redudnat?
        else
        return false;
    }

     return {turn,getBoard,location,addShip,hitShip,prettyPrint,checkAllSunk,checkIsShip,fillBoardRandom}; 

      
}

module.exports = gameboard;