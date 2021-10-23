// function to reverse an array
// first, you pick a middle point
// then, loop until just before that middle point
// and then swap the first and the last array element
// and then the second and the second to last element
// and so on until the middle point
function reverseArray(array) {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i],
    ];
  }
  return array;
}

// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));
// console.log(reverseArray([15, 12, 28, 4, 55, 19, 74]));
// console.log(reverseArray([15, 12, 28, 4, 55, 19, 74, 88]));

console.log("-----------------------");

function findFibonacciNth(a, b, count) {
  if (count === 0) {
    return a;
  }

  return a + findFibonacciNth(b, a + b, count - 1);
}

function findFibonacciSum(a, b, count) {
  if (count === 0) {
    return a;
  }

  return a + findFibonacciSum(b, a + b, count - 1);
}

function findFibonacciArray(a, b, count) {
  if (count === 0) {
    return a;
  }

  if (a.length < 2) {
    a.push(b);
    return findFibonacciArray(a, b + 1, count - 1);
  } else {
    let prevPrevNumber = a[a.length - 2];
    let PrevNumber = a[a.length - 1];
    let newNumber = PrevNumber + prevPrevNumber;
    a.push(newNumber);
    return findFibonacciArray(a, newNumber, count - 1);
  }
}

// console.log(findFibonacci(0, 1, 5)); // 0, 1, 1, 2, 3, 5, 8, 13
// console.log(findFibonacci(0, 1, 10));
// console.log(findFibonacci(0, 1, 15));
// console.log(findFibonacciArray([], 0, 10)); // 0, 1, 1, 2, 3, 5

console.log("-----------------------");

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// console.log(factorial(5));
console.log("-----------------------");
function binarySearch(array, start, stop, n) {
  if (start > stop) {
    return -1;
  }

  let mid = Math.ceil((start + stop) / 2);

  if (n === array[mid]) {
    return mid;
  } else if (n > array[mid]) {
    return binarySearch(array, mid + 1, stop, n); // 6, 9
  } else {
    return binarySearch(array, start, mid - 1, n); // 6, 5
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 9, 7));

console.log("-----------------------");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`Hello I'm ${this.name}`);
  }
}

const Bob = new Person("Bob", 24);
// Bob.sayName();
/* 
    const this = {
        name: 'Bob',
        age: 24
    }
*/

function sayName(times) {
  let string = this.name.repeat(times);
  console.log(string);
  console.log(`${this.name}`);
}
const jeff = {
  name: "Jeff",
};
// first arguments puts a value to this
// sayName.call(null, 5);
// sayName.call(jeff, 5);

console.log("-----------------------");

const addNumbers = (() => {
  let count = 0;

  const addCount = () => ++count;
  return {
    addCount,
  };
})();

class Numbers {
  constructor(num = 0) {
    this.num = num;
  }

  addCount() {
    console.log(++this.num);
  }
}

console.log(addNumbers.addCount());
console.log(addNumbers.addCount());
console.log(addNumbers.addCount());
console.log(addNumbers.addCount());
console.log(addNumbers.addCount());

const newNumber = new Numbers(5);
newNumber.addCount();
newNumber.addCount();
newNumber.addCount();
newNumber.addCount();
newNumber.addCount();
newNumber.addCount();
