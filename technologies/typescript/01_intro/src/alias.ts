// ? type aliases
type Age = number;
type Person_alias = {
  name: string;
  age: Age;
};

let age: Age = 55; // because type is just a number, you can omit Age
let driver: Person_alias = {
  name: "John",
  age: age,
};

// ? unions and intersections
// | = unions
// & = intersections
type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

// for intersections, it needs to have ALL the properties
// of both types
let bothCatAndDog: CatAndDog = {
  name: "Neko",
  purrs: true,
  barks: false,
  wags: false,
};

let newDog: Dog = {
  name: "Inugami",
  barks: true,
  wags: false,
};

// for unions, it allows to have a few of them only
let newCat: CatOrDogOrBoth = {
  name: "Inu",
  purrs: true,
  wags: false,
};

function trueOrNull(isTrue: boolean) {
  type Returns = string | null;
  if (isTrue) {
    let returning: Returns = null;
    return returning;
  }
  return null;
}

// ? array
let a_array = [1, 2, 3]; // number[]
var b_array = ["a", "b"]; // string[]
let c_array: string[] = ["a"]; // string[]
let d_array = [1, "a"]; // (string | number)[]
const e_array = [2, "b"]; // (string | number)[]

let f_array = ["red"];
f_array.push("blue");
// f_array.push(true); // Error TS2345: Argument of type 'true' is not
// assignable to parameter of type 'string'.

let g_array = []; // any[]
g_array.push(1); // number[]
g_array.push("red"); // (string | number)[]

let h_array: number[] = []; // number[]
h_array.push(1); // number[]
// h_array.push("red"); // Error TS2345: Argument of type '"red"' is not
// assignable to parameter of type 'number'.

function buildArray() {
  let a = []; // any[]
  a.push(1); // number[]
  a.push("x"); // (string | number)[]
  return a;
}
let myArray = buildArray(); // (string | number)[]
// myArray.push(true); // Error 2345: Argument of type 'true' is not
// assignable to parameter of type 'string | number'.

// ? tuples
let a_tuples: [number] = [1];
// A tuple of [first name, last name, birth year]

let b_tuples: [string, string, number] = ["malcolm", "gladwell", 1963];
// b_tuples = ["queen", "elizabeth", "ii", 1926]; // Error TS2322: Type 'string' is not
// assignable to type 'number'.

// An array of train fares, which sometimes vary depending on direction
// [number, number?][] -> this means that the array type is a
// two dimensional array, and the second index of the array is optional
let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];

// A list of strings with at least 1 element
let friends: [string, ...string[]] = ["Sara", "Tali", "Chloe", "Claire"];
// A heterogeneous list
let list: [number, boolean, ...string[]] = [1, false, "a", "b", "c"];

let myFriends: [...string[]] = ["Sara", "Tali", "Chloe"];

// ? readonly arrays and tupples
// you can't mutate readonly array directly
// but you can use non-mutating array methods like
// concat and slice
let as_readonly: readonly number[] = [1, 2, 3]; // readonly number[]
let bs_readonly: readonly number[] = as_readonly.concat(4); // readonly number[]
let three = bs_readonly[2]; // number
// as_readonly[4] = 5; // Error TS2542: Index signature in type
// 'readonly number[]' only permits reading.
// as_readonly.push(6); // Error TS2339: Property 'push' does not
// exist on type 'readonly number[]'.

type A_readonly = readonly string[]; // readonly string[]
type B_readonly = ReadonlyArray<string>; // readonly string[]
type C_readonly = Readonly<string[]>; // readonly string[]
type D_readonly = readonly [number, string]; // readonly [number, string]
type E_readonly = Readonly<[number, string]>; // readonly [number, string]

// ? null, undefined, never, void
// (a) A function that returns a number or null
function a_null(x: number) {
  if (x < 10) {
    return x;
  }
  return null;
}
// (b) A function that returns undefined
function b_undef() {
  return undefined;
}
// (c) A function that returns void
function c_void() {
  let a = 2 + 2;
  let b = a * a;
}
// (d) A function that returns never
function d_typeerror() {
  throw TypeError("I always error");
}
// (e) Another function that returns never
function e_never() {
  while (true) {
    // doSomething()
  }
}

type Pizza = {
  topping: string;
  size?: number;
};

function addAnchovies(pizza: Pizza) {
  console.log(pizza);
}

let newPizza: Pizza = {
  topping: "pineapple",
  size: 6,
};

addAnchovies(newPizza);

let exercise = null;
