const gameboard = require('./gameboard');
const ship = require('./ship')
let battleshipGame = gameboard();

test.only('gameBoard has a board of coordinates ', () => {
  expect(battleshipGame.location(5,9)).toEqual({"hit": null,"ship": undefined, "x": 5, "y": 9})
});


test('gameBoard can add ship horizontal', () => {
  battleshipGame.addShip(3,3,2);

  expect(battleshipGame.location(3,3).ship).not.toBeUndefined()
   coordinate = battleshipGame.location(3,3)
  expect(battleshipGame.location(3,4).ship).not.toBeUndefined()
});

test.skip('cannot allow ship to be added off board', () =>{
}
)

test('gameBoard can add ship vertical ', () => {
  battleshipGame.addShip(2,2,2,false);
  expect(battleshipGame.location(2,2).ship).not.toBeUndefined()
  expect(battleshipGame.location(3,2).ship).not.toBeUndefined()
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



test('choosing same coordinate twice will let me know ', () => {
  battleshipGame.hitShip(2,2);
  expect(battleshipGame.hitShip(2,2)).toBe('coordinate has been chose');
});



test('can check if all has sunk', () => {
  battleshipGame.hitShip(3,3);
  expect(battleshipGame.checkAllSunk()).toBeFalsy();

battleshipGame.hitShip(3,4);
expect(battleshipGame.checkAllSunk()).toBeTruthy();
});

