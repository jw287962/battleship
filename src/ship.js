const Ship = (length = 2, isHorizontal = 0, sunk = false) => {
  const ship = {
    length: length,
    hits: 0,
    sunk: sunk,
    horizontal: undefined,
  };

  isHorizontal = Math.round(Math.random());
  ship.horizontal = isHorizontal == 1;

  const hit = () => {
    ship.hits += 1;
    return ship.hits;
  };
  function isShipHorizontal() {
    return ship.horizontal;
  }
  function updateShipDirection() {
    ship.horizontal = !ship.horizontal;
    console.log(ship.horizontal);
  }
  const getShip = () => {
    return ship;
  };

  const isSunk = () => {
    if (ship.hits == ship.length) ship.sunk = true;
    return ship.sunk;
  };
  const setStartCoordinates = (x, y) => {
    ship.coordinate = [x, y];
  };

  const getStartCoordinates = () => {
    return ship.coordinate;
  };
  return {
    Ship,
    getShip,
    hit,
    isSunk,
    isShipHorizontal,
    setStartCoordinates,
    getStartCoordinates,
    updateShipDirection,
  };
};

module.exports = Ship;
