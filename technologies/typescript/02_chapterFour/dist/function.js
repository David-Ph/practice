"use strict";
// ? declaring and invoking functions
// just like with variables, you can also let typescript
// infer its return types
function add(a, b) {
    return a + b;
}
console.log(typeof add); // should be (a: number, b: number) => number
// or you can explicitly type it
function addExplicit(a, b) {
    return a + b;
}
// Named function
function greet(name) {
    return "hello " + name;
}
// Function expression
let greet2 = function (name) {
    return "hello " + name;
};
// Arrow function expression
let greet3 = (name) => {
    return "hello " + name;
};
// Shorthand arrow function expression
let greet4 = (name) => "hello " + name;
// Function constructor
let greet5 = new Function("name", 'return "hello " + name');
add(1, 2); // evaluates to 3
greet("Crystal"); // evaluates to 'hello Crystal'
// add(1)            // Error TS2554: Expected 2 arguments, but got 1.
// add(1, 'a')       // Error TS2345: Argument of type '"a"' is not assignable
// to parameter of type 'number'.
// ? Optional and Default Parameters
// //////////////////////////////////
function log(message, userId = "Not signed in") {
    let time = new Date().toISOString();
    console.log(time, message, userId);
}
log("User clicked on a button", "da763be");
log("User signed out");
function log_context(message, context = {}) {
    let time = new Date().toISOString();
    console.log(time, message, context.userId);
}
// ? Rest Paramters
// //////////////////////////////////
// usually, a function would take a fixed number of arguments
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
sum([1, 2, 3]); // evaluates to 6
// sometimes, a function would take a variable number of arguments
function sumVariadicSafe(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
sumVariadicSafe(1, 2, 3); // evaluates to 6
// ? call, apply, or bind
// //////////////////////////////////
// function add(a: number, b: number): number {
//   return a + b;
// }
add(10, 20); // evaluates to 30
add.apply(null, [10, 20]); // evaluates to 30
add.call(null, 10, 20); // evaluates to 30
add.bind(null, 10, 20)(); // evaluates to 30
// ? this
// //////////////////////////////////
let x = {
    a() {
        console.log(this);
    },
};
x.a(); // will log x, because x is the context of calling a
let x_a = x.a;
x_a(); // will log undefined, because now the context of this is different
// typescript will ofr you to bind this
// this is a special reserved word
function fancyDate() {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}
fancyDate.call(new Date()); // evaluates to "6/13/2008"
// fancyDate(); // Error TS2684: The 'this' context of type 'void' is
// not assignable to method's 'this' of type 'Date'.
// ? generator functions
// //////////////////////////////////
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fibonacciGenerator = createFibonacciGenerator(); // IterableIterator<number>
fibonacciGenerator.next(); // evaluates to {value: 0, done: false}
fibonacciGenerator.next(); // evaluates to {value: 1, done: false}
fibonacciGenerator.next(); // evaluates to {value: 1, done: false}
fibonacciGenerator.next(); // evaluates to {value: 2, done: false}
fibonacciGenerator.next(); // evaluates to {value: 3, done: false}
fibonacciGenerator.next(); // evaluates to {value: 5, done: false}
// The asterisk (*) before a function’s name makes that function a generator. Calling a generator returns an iterable iterator.
// explicitly annotate a generator
function* createNumbers() {
    let n = 0;
    while (1) {
        yield n++;
    }
}
let numbers = createNumbers();
numbers.next(); // evaluates to {value: 0, done: false}
numbers.next(); // evaluates to {value: 1, done: false}
numbers.next(); // evaluates to {value: 2, done: false}
// ? Iterators
let numbers_iterators = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    },
};
for (let a of numbers_iterators) {
    // console.log(a);
}
// Spread an iterator
let allNumbers = [...numbers_iterators]; // number[]
// Destructure an iterator
let [one, two, ...rest] = numbers_iterators; // [number, number, number[]]
let log_signatures = (message, userId = "Not signed in") => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
};
log_signatures("Wake the fuck up, cunt");
//# sourceMappingURL=function.js.map