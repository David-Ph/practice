"use strict";
let age = 55; // because type is just a number, you can omit Age
let driver = {
    name: "John",
    age: age,
};
// for intersections, it needs to have ALL the properties
// of both types
let bothCatAndDog = {
    name: "Neko",
    purrs: true,
    barks: false,
    wags: false,
};
let newDog = {
    name: "Inugami",
    barks: true,
    wags: false,
};
// for unions, it allows to have a few of them only
let newCat = {
    name: "Inu",
    purrs: true,
    wags: false,
};
function trueOrNull(isTrue) {
    if (isTrue) {
        let returning = null;
        return returning;
    }
    return null;
}
// ? array
let a_array = [1, 2, 3]; // number[]
var b_array = ["a", "b"]; // string[]
let c_array = ["a"]; // string[]
let d_array = [1, "a"]; // (string | number)[]
const e_array = [2, "b"]; // (string | number)[]
let f_array = ["red"];
f_array.push("blue");
// f_array.push(true); // Error TS2345: Argument of type 'true' is not
// assignable to parameter of type 'string'.
let g_array = []; // any[]
g_array.push(1); // number[]
g_array.push("red"); // (string | number)[]
let h_array = []; // number[]
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
let a_tuples = [1];
// A tuple of [first name, last name, birth year]
let b_tuples = ["malcolm", "gladwell", 1963];
// b_tuples = ["queen", "elizabeth", "ii", 1926]; // Error TS2322: Type 'string' is not
// assignable to type 'number'.
// An array of train fares, which sometimes vary depending on direction
// [number, number?][] -> this means that the array type is a
// two dimensional array, and the second index of the array is optional
let trainFares = [[3.75], [8.25, 7.7], [10.5]];
// A list of strings with at least 1 element
let friends = ["Sara", "Tali", "Chloe", "Claire"];
// A heterogeneous list
let list = [1, false, "a", "b", "c"];
let myFriends = ["Sara", "Tali", "Chloe"];
// ? readonly arrays and tupples
// you can't mutate readonly array directly
// but you can use non-mutating array methods like
// concat and slice
let as_readonly = [1, 2, 3]; // readonly number[]
let bs_readonly = as_readonly.concat(4); // readonly number[]
let three = bs_readonly[2]; // number
// ? null, undefined, never, void
// (a) A function that returns a number or null
function a_null(x) {
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
function addAnchovies(pizza) {
    console.log(pizza);
}
let newPizza = {
    topping: "pineapple",
    size: 6,
};
addAnchovies(newPizza);
//# sourceMappingURL=alias.js.map