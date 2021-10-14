// ? declaring and invoking functions

// just like with variables, you can also let typescript
// infer its return types
function add(a: number, b: number) {
  return a + b;
}
type Add = (a: number, b: number) => string;
console.log(typeof add); // should be (a: number, b: number) => number

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
// //////////////////////////////////
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

// ? Rest Paramters
// //////////////////////////////////
// usually, a function would take a fixed number of arguments
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
sum([1, 2, 3]); // evaluates to 6

// sometimes, a function would take a variable number of arguments
function sumVariadicSafe(...numbers: number[]): number {
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
function fancyDate(this: Date) {
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
function* createNumbers(): IterableIterator<number> {
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

// ? Call Signatures
// this is another way to declare a function
type Log = (message: string, userId?: string) => void;

let log_signatures: Log = (message, userId = "Not signed in") => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};
log_signatures("Wake the fuck up, cunt");

// ? Contextual Typing
// //////////////////////////////
// Let’s declare a function times that calls its callback f some number of times n, passing the current index to f each time:
// in this case, f is a type, and n is a number
function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}
// TypeScript  infers  from  context  that  n  is  a  number
times((n) => console.log(n), 4);

// ? Overloaded Function Types
// //////////////////////////////
type Reservation = {
  payment: number;
  name: string;
};
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};
let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  const reservation: Reservation = {
    payment: 15000,
    name: "David",
  };
  /* 
Since  reserve  might  be  called  in  either  of  two  ways,  when  you  implement  reserve
you have to prove to TypeScript that you checked how it was called
  */
  if (fromOrDestination instanceof Date && toOrDestination !== undefined) {
    // book a vacation that starts immediately
  } else if (toOrDestination instanceof Date && destination !== undefined) {
    // Book a one-way trip
  } else if (typeof toOrDestination === "string") {
    // Book a round trip
  }

  return reservation;
};

// ? Polymorphism and Generic type paramter
/* 
What we’ve done here is say: “This function filter uses a generic type parameter T; we  don’t  know  what  this  type  will  be  ahead  of  time,  so  TypeScript  if  you  can  infer what it is each time we call filter that would be swell.”
*/
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};
// From  the  type  signature  for  filter,  TypeScript  knows  that  array  is  an  array  of elements of some type T.
let filter: Filter = (array, f) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
};
//* (a) T is bound to number
// From  the  type  signature  for  filter,  TypeScript  knows  that  array  is  an  array  of elements of some type T.
// Wherever TypeScript sees a T, it substitutes in the number type. So the parameter f: (item: T) => boolean  becomes  f: (item: number) => boolean,  and  the return type T[] becomes number[].
//TypeScript checks that the types all satisfy assignability, and that the function we passed in as f is assignable to its freshly inferred signature.
console.log(filter([1, 2, 3], (_) => _ > 2));
//* (b) T is bound to string
console.log(filter(["a", "b"], (_) => _ !== "b"));
//* (c) T is bound to {firstName: string}
let names = [
  { firstName: "beth" },
  { firstName: "caitlyn" },
  { firstName: "xin" },
];
console.log(filter(names, (_) => _.firstName.startsWith("b")));

// TODO another example
// We need exactly two generic types: T for the type of the array members going in, and U for the type of the array members going out.
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}
// TODO yet another example
// has to implicitly set the type
let promise = new Promise<number>((resolve) => resolve(45));
promise.then((result) => result * 4);

// ? Bounded Polymorphism
// //////////////////////
// What  we’re  saying  is:  a  TreeNode  is  an  object  with  a  single  property,  value.  TheLeafNode  type  has  all  the  properties  TreeNode  has,  plus  a  property  isLeaf  that’salways  true.  InnerNode  also  has  all  of  TreeNode’s  properties,  plus  a  children  property that points to either one or two children.
type TreeNode = {
  value: string;
};
type LeafNode = TreeNode & {
  isLeaf: true;
};
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return { ...node, value: f(node.value) };
}

let a: TreeNode = { value: "a" };
let b: LeafNode = { value: "b", isLeaf: true };
let c: InnerNode = { value: "c", children: [b] };
let a1 = mapNode(a, (_) => _.toUpperCase()); // TreeNode
let b1 = mapNode(b, (_) => _.toUpperCase()); // LeafNode
let c1 = mapNode(c, (_) => _.toUpperCase()); // InnerNode

//TODO  ANOTHER FUCKING EXAMPLE
function call<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}
function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}
call(fill, 10, "a"); // evaluates to an array of 10 'a's

//TODO YES ANOTHER EXAMPLE
// Note  that  like  optional  parameters  in  functions,  generic  types  with  defaults  have  to appear after generic types without defaults
// Good
type MyEvent2<Type extends string, Target extends HTMLElement = HTMLElement> = {
  target: Target;
  type: Type;
};

//TODO exercise to implement a small typesafe assertion, is

function is<T>(a: T, ...b: [T, ...T[]]): boolean {
  return b.every((_) => _ === a);
}

// Compare a string and a string
is("string", "otherstring"); // false

// Compare a boolean and a boolean
is(true, false); // false

// Compare a number and a number
is(42, 42); // true

// Comparing two different types should give a compile-time error
// is(10, "foo"); // Error TS2345: Argument of type '"foo"' is not assignable
// to parameter of type 'number'.

// [Hard] I should be able to pass any number of arguments
is([1], [1, 2], [1, 2, 3]); // false
