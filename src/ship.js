
const Ship = (length = 2, sunk = false) => {
 const ship = {
    length: length,
    health: length,
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

  return {Ship,getShip,hit};
}


module.exports = Ship;