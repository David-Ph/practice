Array.prototype.square = function () {
  return this.map((el) => el * el);
};
Array.prototype.cube = function () {
  return this.map((el) => el * el * el);
};
Array.prototype.average = function () {
  return this.reduce((total, element) => total + element, 0) / this.length;
};
Array.prototype.sum = function () {
  return this.reduce((total, el) => total + el, 0);
};
Array.prototype.even = function () {
  return this.filter((el) => el % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((el) => el % 2 !== 0);
};

let newArr = [1, 2, 3, 4, 5];
console.log(newArr.square()); // 1, 4, 9, 16, 25
console.log(newArr.cube()); // 1, 8, 27, 64, 125
console.log(newArr.average()); // 3
console.log(newArr.sum()); // 15
console.log(newArr.even()); // 2, 4
console.log(newArr.odd()); // 1, 3, 5
