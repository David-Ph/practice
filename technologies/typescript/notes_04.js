/* 
* Dynamic vs Static types
javascript is a dynamically typed language, it means that types are resolved during runtime
typescript is a statically typed language, it means that types are resolved during compile time


* Classes static
static methods/properties are methods that can't be accessed from non static method inside the class.
To access static method/properties, you use ClassName.StaticMethod() or ClassName.StaticProperties from outside the class or static method.
if you're in a static method inside a class, you can use this instead
singleton pattern is where you want to make sure that a class can only be created once.

* Class vs Interface
You usually use Class to create a new instance of an object with methods
you usually use interface to enfore a Type of something

* interface vs types
very similar in use cases, but there are some differences:

Use type when defining an alias for primitive types (string, boolean, number, bigint, symbol, etc)
Use type when defining tuple types
Use type when defining function types
Use type when defining a union
Use type when trying to overload functions in object types via composition
Use type when needing to take advantage of mapped types


Use interface for all object types where using type is not required (see above)
Use interface when you want to take advatange of declaration merging.

*Decorators
!source:  https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/
In a nutshell, a decorator is a pattern in programming in which you wrap something to change its behavior.
They provide a handy means of dynamically extending the behavior of a class or function--i.e. add new methods and properties--using a reusable chunk of code.

* new (...args: any[]) => any
The new keyword here specifies that this function can be treated as a class constructor function and called with the new keyword.

This gives us the whole picture that the function is a function that accepts any amount of arguments (of type any) that returns type any and can be used as a constructor function with the new keyword.

When taken in the context of the API, it is essentially allowing you to pass any class constructor to the function.

*if we go { new (...args: any[]): { name: string } }
then this basically means that any object that is created by new, accepts any number of argument, and returns an object that at least has a property of name
*/
