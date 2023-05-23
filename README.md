### MAKE BATTLESHIP GAME!

- supports dragging of ships.
- Supports vertical or horizontal (set automatically, did not implement a function to change it for a user)

## AI VS AI, and will logically choose squares based of a hit or miss.

### Update:

V1.1
Implemented a feature for user rotation of ships (Double Click the Ship)

### Notes:

## BEFORE GAME STARTS (Controller.js)

**shipCoord(s)** is an array that holds coordinates [0,1,0,2,0,3] instead of an array within an array. Some functions that need to know the shipcoords will require this understanding.

**newPositionCoord** will hold an integer of the new coordinate IE: 32 This is updated by an **add** value that will correctly update the next newCoordinate to process for the ship position on the board.
