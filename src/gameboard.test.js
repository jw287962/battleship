const gameboard = require('./gameboard');
const ship = require('./ship')
let battleshipGame = gameboard();

test('gameBoard has a board of coordinates ', () => {
  expect(battleshipGame.location(5,9)).toEqual({"hit": false,"ship": null, "x": 5, "y": 9})
});


test('gameBoard can add ship horizontal', () => {
  battleshipGame.addShip(3,3,2);

  expect(battleshipGame.location(3,3).ship).not.toBeNull()
   coordinate = battleshipGame.location(3,3)
  expect(battleshipGame.location(3,4).ship).not.toBeNull()
});

test.skip('cannot allow ship to be added off board', () =>{
}
)

test('gameBoard can add ship vertical ', () => {
  battleshipGame.addShip(2,2,2,false);
  expect(battleshipGame.location(2,2).ship).not.toBeNull()
  expect(battleshipGame.location(3,2).ship).not.toBeNull()
});



test('can hit ship ', () => {
  battleshipGame.hitShip(2,2);
  expect(battleshipGame.location(2,2).ship.getShip().hits).toBe(1);
});

test('can sink ship ', () => {
  battleshipGame.hitShip(3,2);
  console.log(battleshipGame.prettyPrint()); 

  expect(battleshipGame.location(3,2).ship.getShip().hits).toBe(2);
  expect(battleshipGame.location(3,2).ship.isSunk()).toBeTruthy();

});

