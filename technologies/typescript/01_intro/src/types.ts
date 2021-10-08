// this is the kind of function that's clearly meant for numbers
// so we explicitly say that it is a number type
// so with this, squareOf's parameter n is constrained to number
// the type of value 2 is assignable to squareOf
function squareOf(n: number) {
  return n * n;
}

function capitalizeFirstLetter(str: string) {
  return str.split("")[0].toUpperCase() + str.slice(1);
}

console.log(squareOf(2));
console.log(capitalizeFirstLetter("hi mum!"));
// squareOf("z");

// ? any
// ================================================
// avoid if possible
// if you want to use any, do it like this
let ab: any = 666;
let bb: any = ["Danger"];
let cb = ab + bb;
console.log(`cb is ${cb}`);

// ? unknown
// ================================================
// when you don't know what type ahead of time
let a_unk: unknown = 38;
let b_unk = a_unk === 123;
// let c = a + 10; // error
let d_unk;
if (typeof a_unk === "number") {
  // if you want to use operations for it,
  //   you can't assume the type
  // you need to prove the type
  d_unk = a_unk + 10;
}
console.log(d_unk);

// ? boolean
// ================================================
let a_bool = true;
let b_bool = false;
const c_bool = true;
let d_bool: boolean = true;
let e_bool: true = true;
let f_bool: false = false;

// ? type literal
// ================================================
const helloWorld = "Hello World"; // type literal
let hiWorld = "Hi world"; // type string

// ? number
// ================================================
let a_num = 1234; // number
let b_num = Infinity * 0.1; // number
const c_num = 5678; // 5678
let d_boolean = a_num < b_num; // boolean
let e_num: number = 100; // number
let f_num: 26.818 = 26.818; // 26.818
// let g_num: 26.218 = 10; // error: type '10' is not assignable
let long_num: 2_000_000 = 2_000_000; // equivalent to 2000000

// ? bigint
// ================================================
let a_bigint = 1234n; // bigint
const b_bigint = 5678n; // 5678n
var c_bigint = a_bigint + b_bigint; // bigint
let d_bigint = a_bigint < 1235; // boolean
// let e_bigint = 88.5n               // Error TS1353: A bigint literal must be an integer.
let f_bigint: bigint = 100n; // bigint
let g_bigint: 100n = 100n; // 100n
// let h_bigint: bigint = 100         // Error TS2322: Type '100' is not assignable
// to type 'bigint'.
console.log(g_bigint);

// ? string
// ================================================
let a_string = "hello"; // string
var b_string = "billy"; // string
const c_string = "!"; // '!'
let d_string = a_string + " " + b_string + c_string; // string
let e_string: string = "zoom"; // string
let f_string: "john" = "john"; // 'john'

// ? object
// ================================================
let a_object: object = {
  b: "x",
};
// will give an error
// console.log(a_object.b); // property b does not exist on type 'object'
let ab_object = {
  b: "x",
};
let b_object = {
  c: {
    d: "f",
  },
};
console.log(ab_object.b);
console.log(b_object.c.d);
// OR YOU CAN DO
let c_object: { b: number; c: string } = {
  b: 5,
  c: "string",
};
console.log(c_object);

// this works because in javascript, objects and arrays are mutable
const d_object: { b: number } = {
  b: 12,
};

// creating object literal with typescript
let cb_object_literal: {
  nameDepan: string;
  lastName: string;
} = {
  nameDepan: "John",
  lastName: "Doe",
};

// or with class
class Person {
  // public is shorthand for this.firstName = firstName
  constructor(
    public readonly nameDepan: string = "John",
    public readonly lastName: string = "Doe"
  ) {}
}
cb_object_literal = new Person("Matt", "Smith");
console.log(cb_object_literal);

// exploring other method
let abc_object: { b: number };
// if we don't put b
// abc_object = {}; // ERROR b is missing in type b: number
// if we put other property
abc_object = {
  b: 1,
  //   c: 3, // ERROR c does not exist in type b: number
};

// ? Definite assignment
let i_num: number;
// let j_num = i_num * 3; // ERROR i is used before assignment
// also error even if you leave off explicit type
let ib_num;
// let jb_num = ib_num * 3; // ERROR ib is possibly undefined

// ? optional or there might be more properties to an object
let a_opt: {
  b: number; // has property b thats a number
  c?: string; // might have property c thats a string or undefined
  [key: number]: boolean; // might have any number of numeric properties that's a boolean
};

a_opt = { b: 1 };
a_opt = { b: 2, c: undefined };
a_opt = { b: 3, c: "hello" };
a_opt = { b: 4, 10: true };
a_opt = { b: 5, 10: true, 20: false };
// a_opt = {b: 6, 10: 'hello'} // ERROR

let airplaneSeatingAssignments: {
  [seatNumber: string]: string;
  [planeNumber: number]: string;
} = {
  5849: "Chuck Bob",
  "34D": "Boris Cherny",
  "34E": "Bill Gates",
};
// You can also  mark  fields  as  read-only
let user: {
  readonly firstName: string;
} = {
  firstName: "abby",
};
