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

*/
