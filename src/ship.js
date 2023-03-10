
const Ship = (length = 2, isHorizontal = 0, sunk = false) => {
 const ship = {
    length: length,
    hits: 0,
    sunk: sunk,
    horizontal: undefined
  }

   isHorizontal = Math.round(Math.random());
  ship.horizontal = isHorizontal == 1;

  const hit = () =>{
    ship.hits += 1;
    return ship.hits;
  }
  function isShipHorizontal(){
    return ship.horizontal;
  }
  const getShip = () => {
    return ship;
  }
  
  const isSunk = () =>{
    if(ship.hits == ship.length) ship.sunk = true;
    return ship.sunk;
  }

  return {Ship,getShip,hit,isSunk,isShipHorizontal};
}


module.exports = Ship;