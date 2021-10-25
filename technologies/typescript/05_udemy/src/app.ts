interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
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

let user1: Greetable = new Person("Max");
user1.greet("Hello!");
