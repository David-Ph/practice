/* 
video: https://www.youtube.com/watch?v=IJ6EgdiI_wU 
*/

// generator function is useful when you want an infinite loop

function* generateId() {
  let id = 1;

  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}
const idGenerator = generateId(); // will return value: something and done: boolean
const firstPerson = {
  name: "Bambang",
  id: idGenerator.next().value,
};
// you can also pass a value to next and it will get pass
// to yield
const secondPerson = {
  name: "Alice",
  id: idGenerator.next(5).value, // return 5
};

console.log(firstPerson);
console.log(secondPerson);
