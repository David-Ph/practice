"use strict";
var _a;
const intersectionEmploye = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
const unionEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function addCombineable(a, b) {
    // this is a type guard
    // where we check type safety ourselves
    // usually used for union types flexibility where the type can be number or string
    if (!b)
        return a.toString();
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addCombineable(5, "5");
const fetchedUserData = {
    id: "user1",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
// optional chaining, will check if fetcheduserdata exist before continuing on
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const newUserInput = null;
const storedData = newUserInput !== null && newUserInput !== void 0 ? newUserInput : "Default";
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
function printEmployee(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log(emp.privileges);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
}
const firstEmployee = {
    name: "Max",
    privileges: ["create-server"],
};
printEmployee(firstEmployee);
printEmployee(unionEmployee);
printEmployee(intersectionEmploye);
class Car {
    constructor() {
        this.color = "black";
    }
    drive() {
        console.log(`I'm driving...`);
    }
}
class Truck {
    drive() {
        console.log(`Driving a truck...`);
    }
    loadCargo(amount) {
        console.log(`Loading cargo... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(5);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed = 0;
    switch (animal.tipe) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        default:
            break;
    }
    console.log(`Moving at speed ${speed}`);
}
moveAnimal({ tipe: "bird", flyingSpeed: 500 });
// const newParagraph = document.querySelector("h2")!;
// this is type casting
// basically telling typescript that this is what we will get
const userInput = document.getElementById("user-input");
const userInput2 = document.getElementById("userInput");
const hello = "Hello";
userInput.value = "Hello";
userInput2.value = "World";
const errorBag = {
    id: "error1",
    email: "maomao@gmail.com",
    message: "Invalid email",
    username: "Must start with an uppercase",
};
//# sourceMappingURL=intersection.js.map