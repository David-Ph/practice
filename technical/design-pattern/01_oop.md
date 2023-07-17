# Basics of OOP

OOP is a programming concept based on wrapping pieces and behavior of data into objects, which are constructed from a "blueprint" called classes

Data inside objects is referenced as state or properties

# Class Hierarchies

A parent class can be called the superclass, while its children is called subclass.

Subclasses can override the behavior of methods that they inherit from parent classes. A subclass can either completely replace the default behavior or just enhance it with some extra stuff.

# Pillars of OOP

## Abstraction

Abstraction is presenting a view of the world while hiding details that are not needed.
For example, we can expose a `ValidateForm` method to other objects, other objects would use it to validate a form and receive validation result, but they other objects doesn't need to know hown exactly the validation is implemented, they only need to know the result of validateform.

## Encapsulation

it's defined as the wrapping up of data under a single unit. It is a protective shield that prevents the data from being accessed by the code outside this shield.

in encapsulation, the variables or data of a class is hidden from any other class and can be accessed only through any member function of its own class in which they are declared

Encapsulation can be achieved by Declaring all the variables in the class as private and writing public methods in the class to set and get the values of variables.

## Inheritance

Inheritance is the ability to build new classes on top of exist-
ing ones. The main benefit of inheritance is code reuse. If you
want to create a class that’s slightly different from an existing
one, there’s no need to duplicate code. Instead, you extend the
existing class and put the extra functionality into a resulting
subclass, which inherits fields and methods of the superclass.

## Polymorphism

Polymorphism is an ability of a subclass to inherit methods of its parents class, and modify the methods implementation.

For example, we have an "Animal" parent class, it has a `makeSound()` method. Then we create a subclass "Dog" and "Cat" class, they inherit the `makeSound()` methods which has the same function signature, but their implementations are different, the Dog class may make a "woof" sound, and the Cat class may make a "meow" sound.
