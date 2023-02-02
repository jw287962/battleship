const gameboard = require('./gameboard');
const ship = require('./ship')
let battleshipGame = gameboard();

test('gameBoard has a board of coordinates ', () => {
  expect(battleshipGame.location(5,9)).toEqual({"ship": null, "x": 5, "y": 9})
});


test('gameBoard can add ship horizontal', () => {
  battleshipGame.addShip(3,3,2);

  expect(battleshipGame.location(3,3)).not.toBeNull()
   coordinate = battleshipGame.location(3,3)
  expect(battleshipGame.location(3,4).ship).not.toBeNull()
});


test('gameBoard can add ship vertical ', () => {
  battleshipGame.addShip(2,2,2,false);
  expect(battleshipGame.location(2,2)).not.toBeNull()
  expect(battleshipGame.location(3,2)).not.toBeNull()
});


