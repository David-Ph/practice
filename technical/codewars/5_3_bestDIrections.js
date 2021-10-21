const opposite = {
  NORTH: "SOUTH",
  SOUTH: "NORTH",
  WEST: "EAST",
  EAST: "WEST",
};

function dirReduc(arr) {
  const directions = Array.from(arr);

  while (directions.length > 0) {
    if (directions.includes(opposite[directions[0]])) {
      directions.splice(directions.indexOf(opposite[directions[0]]), 1);
      directions.splice(0, 1);
      continue;
    }
    break;
  }

  return directions;
}

//,  ["WEST"]
console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
// , [  "NORTH",  "WEST",  "SOUTH",  "EAST", ]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
// , []
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
// ['WEST', 'WEST']
console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]));
// ['WEST' , "SOUTH']
console.log(dirReduc(["NORTH", "WEST", "WEST", "SOUTH", "SOUTH", "EAST"]));
