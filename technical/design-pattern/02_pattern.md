# What’s a Design Pattern?

Design patterns are typical solutions to commonly occurring
problems in software design. They are like pre-made blue-
prints that you can customize to solve a recurring design prob-
lem in your code

## Classification of patterns

- Creational patterns provide object creation mechanisms that
  increase flexibility and reuse of existing code.
- Structural patterns explain how to assemble objects and class-
  es into larger structures, while keeping the structures flexible
  and efficient.
- Behavioral patterns take care of effective communication and
  the assignment of responsibilities between objects.

# Features of Good Design

- Code reuse
- Extensibility

# Program to an Interface, not an Implementation

You can tell that the design is flexible enough if you can easily extend it without breaking any existing code.

1. Determine what exactly one object needs from the other:
   which methods does it execute?
2. Describe these methods in a new interface or abstract class.
3. Make the class that is a dependency implement this interface.
4. Now make the second class dependent on this interface rather
   than on the concrete class. You still can make it work with objects of the original class, but the connection is now much
   more flexible.

```
first example:
Cat (- energy, + eat(sausage S)) -> Sausage (+ getNutrition(), +getColor())

second example:
Cat (- energy, + eat(food S)) -> IFood (+getNutrition()) <-Sausage(+getNutrition, +getColor())
```

the code has become more complicated than it was before. However, if you feel that this might be a good extension point for some extra functionality, or that
some other people who use your code might want to extend it here, then go for it. This also applies one of OOP concept which is inheritance (extends or implements).

Another example:

```
Company (createSoftware()) -> Designer(designArchitecture()) + Programmer (writeCode()) + Tester (testSoftware())

in this case, in company class we'll probably do

new Designer()
designer.designArchitecture()
new Programmer()
programmer.writeCode()
new Tester()
tester.testSoftware()

This is not very efficient, a better a way to do this would be to apply polymorphism

Company (createSoftware()) -> IEmployee (doWork()) <-  Designer(doWork()) + Programmer ((doWork())) + Tester((doWork()))

then in company we'll do

employees = [new Designer(), new Programmer(), new Tester()]
employees.forEach((e) => e.doWork())
```
