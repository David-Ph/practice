# SOLID

## Single Responsibility Principle

A class should have just one reason to change.

The real problems emerge when your program constantly grows and changes. At some point classes become so big that you can no longer remember their details. Code navigation slows down to a crawl, and you have to scan through whole classes or even an entire program to find specific things.

There’s more: if a class does too many things, you have to change it every time one of these things changes. While doing that, you’re risking breaking other parts of the class which you didn’t even intend to change.

## Open/Closed Principle

Classes should be open for extension but closed for modification.

The main idea of this principle is to keep existing code from breaking when you implement new features.

A class is open if you can extend it, produce a subclass and do whatever you want with it—add new methods or fields, override base behavior, etc.

### Example

You have an e-commerce application with an Order class that calculates shipping costs and all shipping methods are hardcoded inside the class. If you need to add a new shipping method, you have to change the code of the Order class and risk breaking it

You can solve the problem by applying the Strategy pattern. Start by extracting shipping methods into separate classes with a common interface.

Now when you need to implement a new shipping method, you can derive a new class from the Shipping interface without touching any of the Order class’ code. The client code of the Order class will link orders with a shipping object of the new class whenever the user selects this shipping methods in the UI.

# Liskov Substitution Principle

When extending a class, remember that you should be able to pass objects of the subclass in place of objects of the parent class without breaking the client code.

This means that the subclass should remain compatible with the behavior of the superclass. When overriding a method extend the base behavior rather than replacing it with something else entirely.

The substitution principle is a set of checks that help predict whether a subclass remains compatible with the code that was able to work with objects of the superclass.

# Interface Segregation Principle

Clients shouldn’t be forced to depend on methods they do not use.

Try to make your interfaces narrow enough that client classes don’t have to implement behaviors they don’t need

# Dependency Inversion Principle

High-level classes shouldn’t depend on low-level classes. Both should depend on abstractions. Abstractions shouldn’t depend on details. Details should depend on abstractions.
