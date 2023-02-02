
const gameboard = require('./gameboard');
const player = require('./player');

let isAi = true;
const player1 = player('Player1',!isAi);
const player2 = player('AI',isAi);
test.only('gameBoard can add ship randomly ', () => {
  let shipsNumber = 21;
  player1.board.getBoard().forEach(element => {
    element.forEach(element => {
      if(element.ship != undefined) shipsNumber--;
    })
  });
  expect(shipsNumber).toBe(0);
});


