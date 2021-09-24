const clouds = [0, 1, 0, 0, 0, 1, 0];
const cloudsOne = [0, 0, 0, 0, 1, 0];
const cloudsTwo = [0, 0, 1, 0, 0, 1, 0];

function jump(array) {
  let steps = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 2] !== 1) {
      i++;
    }
    steps++;
  }

  return steps;
}

console.log(jump(clouds));
