// primitives : number, string, boolean
// more complex types: arrays, objects
// function types, paramters

// primitives
let age: number;

age = 12;

let username: string;

username = "my name";

let isInstructor: boolean;

isInstructor = false;

// more complex types
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
  isEmployee?: boolean;
};

person = {
  name: "max",
  age: 12,
};

let people: {
  name: string;
  age: number;
  isEmployee?: boolean;
}[];

people = [
  { name: "Hello", age: 17 },
  { name: "Hello", age: 17 },
];

// Type Inference
let course: string = "Typescript + React course";
let someone = {
  name: "Max",
  age: 12,
};

// Union Type
let courses: string | number = "React";
courses = 15;
// courses = true;

// type aliases

type Book = {
  name: string;
  age: number;
}[];

let books: Book;
books = [
  { name: "Harry Potter", age: 2 },
  { name: "Harry Potter", age: 2 },
];

// Functions and Functions Types
function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

// Generics

// let's say we have helper function
// the issue with this is, typescript can't know what kind of data type
// the result will have
// so it shows as any type
// but now with the example below
// we can call the first element and the split it
// but we're not supposed to be able to split a number
// this is where generics can come in
function insertAtBeginning(array: any[], value: any) {
  return [value, ...array];
}

const demoArray = [1, 2, 3];

// array of any
const newArray = insertAtBeginning(demoArray, 4); // [4, 1, 2, 3]

newArray[0].split("");

// now we recreate the function with generics with the <>
// we tell typescript that the data type is the same
function insertAtBeginningGenerics<T>(array: T[], value: T) {
  return [value, ...array];
}

// array of number
const updatedArray = insertAtBeginningGenerics(demoArray, -1);

type numberOrString = number | string;
const myArray = ["a", 1];
const myNewArray: numberOrString[] = ["a", 1];
