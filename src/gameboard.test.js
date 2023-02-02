const gameboard = require('./gameboard');

let battleshipGame = gameboard();

test('gameBoard has a board of coordinates', () => {
  expect(battleshipGame.location(5,9)).toBe(59)
});

