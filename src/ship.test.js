const Ship = require('./ship');

let ship1 = Ship(2);

test('Create Ship Object ', () => {
  expect(ship1.getShip()).toEqual({length: 2,health:2,hits: 0,sunk: false})

}
)


test('ship got hit', () => {
  expect(ship1.hit()).toBe(1)
})