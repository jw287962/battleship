
const Ship = (length = 2, sunk = false) => {
 const ship = {
    length: length,
    hits: 0,
    sunk: sunk,
  }


  const hit = () =>{
    ship.hits += 1;
    return ship.hits;
  }

  const getShip = () => {
    return ship;
  }
  
  const isSunk = () =>{
    if(ship.hits == ship.length) ship.sunk = true;
    return ship.sunk;
  }

  return {Ship,getShip,hit,isSunk};
}


module.exports = Ship;