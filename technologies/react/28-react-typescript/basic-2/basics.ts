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
