/* 
! Chapter 1
? Let's say we have a duck class
*/
class Duck {
  quack() {} // quack
  swim() {} //  swim
  display() {} // abstract
}

class MallardDuck extends Duck {
  display() {} // display Mallard Duck
}

class RedHeadDuck extends Duck {
  display() {} // display redd head duck
}

// ? but what if we suddenly need the duck to fly?
/* 
we can add the fly method to the duck super class, but then we could have some variations of duck like rubber duck that can't fly, or maybe even a wooden duck that shouldn't quack.
*/
// ? This is where if we compose the behavior instead, it can help

/*
 * Design Principle: Identify the aspects of your application that vary and separate them from what stays the same.
 */
/*
 * Design Principle: Program to an interface, not an implementation
 */
/*
 * Design Principle: Favor composition to inheritance.
 */

class FlyBehaviorInterface {
  fly() {} // just an interface
}

class FlyWithWings extends FlyBehaviorInterface {
  fly() {} // implement fly
}

class NoWings extends FlyBehaviorInterface {
  fly() {} // do nothing
}

// ? What does it mean to program to an interface instead of implementation?
class Animal {
  makeSound() {} // abstract
}

class Dog {
  makeSound() {
    this.bark();
  }

  bark() {} // bark
}

class Cat {
  makeSound() {
    this.meow();
  }

  meow() {} // meow
}

// program to an implementation
const dog = new Dog();
dog.bark();

// program to an interface
const animal = new Dog();
animal.makeSound();

// so now how do we properly implement the new duck class?
class QuackBehaviorInterface {
  quack() {}
}
class FlyBehaviorInterface {
  fly() {}
}

class FlyWithWings extends FlyBehaviorInterface {
  fly() {} // implements fly
}
class FlyNoWay extends FlyBehaviorInterface {
  fly() {} // do nothing
}

class Quack extends QuackBehaviorInterface {
  quack() {} // implements quack
}
class Squeak extends FlyBehaviorInterface {
  quack() {} // implements squeak
}
class MuteQuack extends FlyBehaviorInterface {
  quack() {} // do nothing
}

class Duck {
  quackBehavior; // should be of type QuackBehaviorInterface
  flyBehavior; // should be of type FlyBehaviorInterface

  // to perform the quack, a duck just allows the object that is referenced by quackBehavior to quack for it, so the duck doesn't need to know how it quacks, it only knows that it DOES quacks
  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }

  setQuackBehavior(qb) {
    // should be of type QuackBehaviorInterface
    this.quackBehavior = qb;
  }

  setFlyBehavior(fb) {
    // should be of type FlykBehaviorInterface
    this.flyBehavior = fb;
  }
}

class MallardDuck extends Duck {
  MallardDuck() {
    quackBehavior = new QuackBehaviorInterface();
    flyBehavior = new FlyWithWings();
  }
}
