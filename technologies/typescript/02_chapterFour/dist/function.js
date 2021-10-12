"use strict";
// ? declaring and invoking functions
// just like with variables, you can also let typescript
// infer its return types
function add(a, b) {
    return a + b;
}
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
function log(message, userId) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || "Not signed in");
}
log("Page loaded"); // Logs "12:38:31 PM Page loaded Not signed in"
log("User signed in", "da763be"); // Logs "12:38:31 PM User signed in da763be"
//# sourceMappingURL=function.js.map