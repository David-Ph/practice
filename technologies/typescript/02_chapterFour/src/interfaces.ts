// * Chess Game
// Represents a chess game
class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
    return [new King("White", "E", 1), new King("Black", "E", 8)];
  }
}
// A chess piece
// protected  makes  theproperty  visible  both  to  instances  of  Piece  and  to  instances of any subclass of Piece.
// We’ve  defined  a  Piece  class,  but  we  don’t  want  users  to  instantiate  a  new  Piece directly
abstract class Piece {
  protected position: Position;
  constructor(private readonly color: Color, file: boardFile, rank: boardRank) {
    this.position = new Position(file, rank);
  }
  moveTo(position: Position) {
    this.position = position;
  }
  abstract canMoveTo(position: Position): boolean;
}
// A set of coordinates for a piece
class Position {
  constructor(private file: boardFile, private rank: boardRank) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}

class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}

type Color = "Black" | "White";
type boardFile = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type boardRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// * super
// /////////////////////
class Animal {
  constructor(public legs: number, public name: string) {}

  makeSounds() {
    console.log("Woof!");
  }
}

class Dog extends Animal {
  constructor(legs: number, name: string, public sounds: string = "bark") {
    super(legs, name);
  }

  makeSounds() {
    super.makeSounds();
    console.log("I'm a dog!");
  }
}

console.log(new Dog(4, "Jack", "Woof").makeSounds());

// * Using this as a return type
// ////////////////////////////
class Set_ts {
  constructor(public contents: number[]) {}
  has(value: number): boolean {
    return this.contents.includes(value);
  }
  // we can use this as a return type
  add(value: number): this {
    this.contents.push(value);
    return this;
  }
}

class MutableSet extends Set {
  delete(value: number): boolean {
    return true;
  }
}

let set = new Set_ts([]);
set.add(1).add(2).add(3);
console.log(set);
console.log(set.has(2));
console.log(set.has(4));

//* Interfaces
// /////////////////
interface Food {
  calories: number;
  tasty: boolean;
}
interface Sushi extends Food {
  salty: boolean;
}
interface Cake extends Food {
  sweet: boolean;
}

// * Declaration Merging
// //////////////////
// User has a single field, name
interface User {
  name: string;
}
// User now has two fields, name and age
interface User {
  age: number;
}
let a_interface: User = {
  name: "Ashley",
  age: 30,
};

// *Implementations
// ////////////////
interface Animal_Implement {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

interface Feline {
  meow(): void;
}

class Cat_Implement implements Animal_Implement, Feline {
  constructor(public name: string) {}

  eat(food: string) {
    console.info("Ate some", food, ". Mmm!");
  }
  sleep(hours: number) {
    console.info("Slept for", hours, "hours");
  }
  meow() {
    console.log("Miawe I'm a slut");
  }
}

// * Classess delcar both value and types
type State = {
  [key: string]: string;
};

class StringDatabase {
  state: State = {};
  get(key: string): string | null {
    return key in this.state ? this.state[key] : null;
  }
  set(key: string, value: string): void {
    this.state[key] = value;
  }
  static from(state: State) {
    let db = new StringDatabase();
    for (let key in state) {
      db.set(key, state[key]);
    }
    return db;
  }
}

// * Polymorphism
// ///////////////
class MyMap<K, V> {
  constructor(initialKey: K, initialValue: V) {
    // ...
  }
  get(key: K): void {}
  set(key: K, value: V): void {
    // ...
  }
  // merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
  //   // ...
  // }
  // static of<K, V>(k: K, v: V): MyMap<K, V> {
  //   // ...
  // }
}
