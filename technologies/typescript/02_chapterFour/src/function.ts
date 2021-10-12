// ? declaring and invoking functions

// just like with variables, you can also let typescript
// infer its return types
function add(a: number, b: number) {
  return a + b;
}

// or you can explicitly type it
function addExplicit(a: number, b: number): number {
  return a + b;
}

// Named function
function greet(name: string) {
  return "hello " + name;
}
// Function expression
let greet2 = function (name: string) {
  return "hello " + name;
};
// Arrow function expression
let greet3 = (name: string) => {
  return "hello " + name;
};
// Shorthand arrow function expression
let greet4 = (name: string) => "hello " + name;
// Function constructor
let greet5 = new Function("name", 'return "hello " + name');

add(1, 2); // evaluates to 3
greet("Crystal"); // evaluates to 'hello Crystal'
// add(1)            // Error TS2554: Expected 2 arguments, but got 1.
// add(1, 'a')       // Error TS2345: Argument of type '"a"' is not assignable
// to parameter of type 'number'.

// ? Optional and Default Parameters
function log(message: string, userId = "Not signed in") {
  let time = new Date().toISOString();
  console.log(time, message, userId);
}
log("User clicked on a button", "da763be");
log("User signed out");

// You can also add explicit type annotations to your default parameters,
type Context = {
  appId?: string;
  userId?: string;
};
function log_context(message: string, context: Context = {}) {
  let time = new Date().toISOString();
  console.log(time, message, context.userId);
}
