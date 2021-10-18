/* 
! CLASSES AND INTERFACES
TypeScript supports three access modifiers for properties and methods on a class:
    • public
        Accessible from anywhere. This is the default access level.
    • protected
        Accessible from instances of this class and its subclasses.
    • private
        Accessible from instances of this class only.

Declare classes with the class keyword. Extend them with the extends keyword.
    • Classes  can  be  either  concrete  or  abstract.  Abstract  classes  can  have  abstract methods and abstract properties.
    • Methods can be private, protected, or, by default, public. They can be instance
    methods or static methods.
    • Classes  can  have  instance  properties,  which  can  also  be  private,  protected,  or, by  default,  public.  You  can  declare  them  in  constructor  parameters  or  as  property initializers.
    • You can mark instance properties as readonly when declaring them.


* super
// ///////////////
If  your  child  class  overrides  a method defined on its parent class (say, if Queen and Piece both implement the take method),  the  child  instance  can  make  a  super  call  to  call  its  parent’s  version  of  the method (e.g., super.take).

* Using this as a Return Type
// /////////////////////
Just  like  you  can  use  this  as  a  value,  you  can  also  use  it  as  a  type

//* Interfaces
// /////////////////
Type  aliases  and  interfaces  are  mostly  two  syntaxes  for  the  same  thing  (like
function expressions and function declarations),

Interfaces  don’t  have  to  extend  other  interfaces.  In  fact,  an  interface  can  extend  any  shape:  an  object  type,  a  class,  or  another interface

Differences between types and interfaces:
    The first is that type aliases are more general, in that their righthand side can be any type, including a type expression (a type, and maybe some type operators like & or |);
    for an interface, the righthand side must be a shape. For example, there is no way to rewrite the following type aliases as interfaces:

?   type A = number
?   type B = A | string

    The  second  difference  is  that  when  you  extend  an  interface,  TypeScript  will  make sure that the interface you’re extending is assignable to your extension. For example:

?    interface A {
?        good(x: number): string
?        bad(x: number): string
?    }
?    interface B extends A {
?        good(x: string | number): string
?        bad(x: string): string  // Error TS2430: Interface 'B' incorrectly extends
?    }                         // interface 'A'. Type 'number' is not assignable
?                              to type 'string'.

    The third difference is that multiple interfaces with the same name in the same scope are automatically merged; multiple type aliases with the same name in the same scope will throw a compile-time error. This is a feature called declaration merging.

* Declaration Merging
// //////////////////
Declaration merging is TypeScript’s way of automatically combining multiple declarations that share the same name

For  example,  if  you  declare  two  identically  named  User  interfaces,  then  TypeScript will automatically combine them for you into a single interface:

Note that the two interfaces can’t conflict; if one types property as a T and the other types it as a U, and T and U aren’t identical, then you’ll get an error

And if your interface declares generics, those generics have to be declared the exact same way for two interfaces to be mergeable—down to the generic’s name!

*Implementations
// ////////////////
When you declare a class, you can use the implements keyword to say that it satisfies a particular interface. Like other explicit type annotations, this is a convenient way to add a type-level constraint that your class is implemented correctly as closely as possible to the implementation itself, so that the error from an incorrect implementation
doesn’t show up downstream where it’s less clear why it was thrown. It’s also a familiar way to implement common design patterns like adapters, factories, and strategies.

For example, Cat  has  to  implement  every  method  that  Animal  declares,  and  can  implement  more methods and properties on top if it wants.

nterfaces  can  declare  instance  properties,  but  they  can’t  declare  visibility  modifiers (private,  protected,  and  public)  and  they  can’t  use  the  static  keyword.  You  can also mark instance properties as readonly, just like we did for object types in Objects

You’re not limited to implementing just one interface—you can implement as many as you want:

*Implementing Interfaces Versus Extending Abstract Classes
// ////////////////
Implementing an interface is really similar to extending an abstract class. The difference is that interfaces are more general and lightweight, and abstract classes are more special-purpose and feature-rich. 

An interface is a way to model a shape. At the value level, that means an object, array, function,  class,  or  class  instance.  Interfaces  do  not  emit  JavaScript  code,  and  only exist at compile time. 

An  abstract  class  can  only  model,  well,  a  class. It  emits  runtime  code  that  is,  you guessed  it,  a  JavaScript class.  Abstract  classes  can  have  constructors,  provide  default implementations,  and  set  access  modifiers  for  properties  and  methods.  Interfaces can’t do any of those things.

Which  one  you  use  depends  on  your  use  case.  When  an  implementation  is  shared among multiple classes, use an abstract class. When you need a lightweight way to say “this class is a T,” use an interface.

*Classes Are Structurally Typed
// /////////////////////////////
Like  every  other  type  in  TypeScript,  TypeScript  compares  classes  by  their  structure, not  by  their  name.  A  class  is  compatible  with  any  other  type  that  shares  its  shape, including  a  regular  old  object  that  defines  the  same  properties  or  methods  as  the class

It  means  that  if  you have  a  function  that  takes  a  Zebra  and  you  give  it  a  Poodle,  TypeScript  might  not mind

The exception to this rule is classes with private or protected fields: when checking
whether  or  not  a  shape  is  assignable  to  a  class,  if  the  class  has  any  private  or  protected fields and the shape is not an instance of that class or a subclass of that class, then the shape is not assignable to the class:

class A {
  private x = 1
}
class B extends A {}
function f(a: A) {}

f(new A)   // OK
f(new B)   // OK
f({x: 1}) // error

* Classes Declare Both Values and Types
// ////////////////////////////////////
Most things that you can express in TypeScript are either values or types:

Types  and  values  are  namespaced  separately  in  TypeScript.  Depending  on  how  you use a term (a or b in this example), TypeScript knows whether to resolve it to a type or to a value:

Classes and enums are special. They are unique because they generate both a type in
the type namespace and a value in the value namespace

*Polymorphism
// //////////
Like  functions  and  types,  classes  and  interfaces  have  rich  support  for  generic  type parameters,  including  defaults  and  bounds.  You  can  scope  a  generic  to  your  whole class or interface, or to a specific method:

*EXERCISES
// //////////
1. What’s the difference between a class and an interface?

A class can have implementations, initialized class fields, and visibility modifiers. It also generates JavaScript code, so it supports instanceof checks at runtime. A class defines both a type and a value. An interface just defines a type, doesn't generate any JavaScript code, can only contain type-level members, and can't contain use modifiers.

2. When you mark a class' constructor as `private`, that means you can't instantiate or extend the class. What happens when you mark it as `protected` instead? Play around with this in your code editor, and see if you can figure it out.

class A {
  protected constructor() {}
}

class B extends A {} // ok
new A() // error
new B() // error

Unlike a class with a private constructor, a class with a protected constructor can be extended. Neither a class with a private constructor nor a class with a protected constructor can be new-ed.


*/
