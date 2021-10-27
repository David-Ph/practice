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

*/
