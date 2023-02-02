
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
         ship: null,
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
            if(board[i][o].ship){
              string +='[S]';
            }else
            string +='[ ]';

          }
        }
        console.log(string);
      }

     return {location,addShip}; 

}

module.exports = gameboard;