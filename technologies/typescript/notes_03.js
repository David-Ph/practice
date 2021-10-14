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
*/
