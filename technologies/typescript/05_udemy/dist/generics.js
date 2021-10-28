"use strict";
const names = ["Maax", "Manuel", 123];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done!");
    }, 1000);
});
promise.then((data) => {
    // console.log(data.split(""));
    //   Math.floor(data); // ERRROR
});
// /////////////////////////////
// Generics
// the types are not defined when we delcare the function
// but when we call the function
// you can also put a constraint on the generics type
function merge(a, b) {
    return Object.assign(a, b);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
const mergedObj2 = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30, height: 175 });
// const mergedObj3 = merge({ name: "Max", hobbies: ["Sports"] }, 30);
console.log(mergedObj);
function countAndDescribe(element) {
    let description = "Has no value.";
    if (element.length > 0) {
        description = `Has ${element.length} elements`;
    }
    return [element, description];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
const objects = {
    name: "max",
    age: 30,
    height: 175,
};
for (const [key, value] of Object.entries(objects)) {
}
function extractAndConvert(obj, key) {
    return `Value : ${obj[key]}`;
}
console.log(extractAndConvert({ name: "Max" }, "name"));
// we want to make sure that T is at least a primitive data value
// because we don't want to accidentally pass an object
// because objects passes by reference, and not value
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("First Text");
textStorage.addItem("Second Text");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(50);
function createNewCourse(title, description, completeUntil) {
    let newCourse = {};
    newCourse.title = title;
    newCourse.description = description;
    newCourse.completeUntil = completeUntil;
    return newCourse;
}
// * readonly type
const myNames = ["Max", "Manu"];
//# sourceMappingURL=generics.js.map