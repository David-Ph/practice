"use strict";
// * Chess Game
Object.defineProperty(exports, "__esModule", { value: true });
// Represents a chess game
class Game {
    constructor() {
        this.pieces = Game.makePieces();
    }
    static makePieces() {
        return [new King("White", "E", 1), new King("Black", "E", 8)];
    }
}
// A chess piece
// protected  makes  theproperty  visible  both  to  instances  of  Piece  and  to  instances of any subclass of Piece.
// We’ve  defined  a  Piece  class,  but  we  don’t  want  users  to  instantiate  a  new  Piece directly
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    moveTo(position) {
        this.position = position;
    }
}
// A set of coordinates for a piece
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
        };
    }
}
class King extends Piece {
    canMoveTo(position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    }
}
// * super
// /////////////////////
class Animal {
    constructor(legs, name) {
        this.legs = legs;
        this.name = name;
    }
    makeSounds() {
        console.log("Woof!");
    }
}
class Dog extends Animal {
    constructor(legs, name, sounds = "bark") {
        super(legs, name);
        this.sounds = sounds;
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
    constructor(contents) {
        this.contents = contents;
    }
    has(value) {
        return this.contents.includes(value);
    }
    add(value) {
        this.contents.push(value);
        return this;
    }
}
class MutableSet extends Set {
    delete(value) {
        return true;
    }
}
let set = new Set_ts([]);
set.add(1).add(2).add(3);
console.log(set);
console.log(set.has(2));
console.log(set.has(4));
//# sourceMappingURL=interfaces.js.map