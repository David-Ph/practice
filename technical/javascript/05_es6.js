let d = b;
// let c = a;

// let a = 1;
var b = 2;

// console.log(c);
console.log(d);

let variable = 5;
variable = 10;

if (5 > 1) {
  var isBad = true;
  let isGood = false;
}

console.log(isBad); // true
console.log(isGood); // error

// arrow function vs function

function addFunction(a, b) {
  return a + b;
}

const addArrow = (a, b) => a * b;

// spread operator
const hobbies = ["Piano", "Dota"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies); // hobbies will return its element one by one
let string = "hello";
string = [...string];

const person = {
  name: "Max",
  age: 30,
};

const copyReference = person; // this actually copies the pointer/reference, and not the object
const copyPerson = { ...person };

var person = { name: "Max" };
var newPerson = person;
newPerson.name = "Anna";
console.log(person.name); // will print Anna
