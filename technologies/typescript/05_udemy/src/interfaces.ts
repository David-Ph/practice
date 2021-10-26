// we can also use interface as a custom function type
// type AddFn = (a:number, b:number) => number;
interface AddFn {
  (a: number, b: number): number;
}
const add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

// /////////////////////////////////////

interface Names {
  readonly name: string;
  outputName?: string; // this makes outputName to be optional
}

interface Greetable extends Names {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  outputName = "My Name";

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
