"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        this.outputName = "My Name";
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} I'm ${this.name}`);
    }
}
//* interface
// let user1: Person;
// user1 = {
//   name: "Max",
//   greet(phrase: string) {
//     console.log(`${phrase} I'm ${this.name}`);
//   },
// };
let user1 = new Person("Max");
user1.greet("Hello!");
//# sourceMappingURL=app.js.map