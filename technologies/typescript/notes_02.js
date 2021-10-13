// ? function

/* 
just like with variables, you can also let typescript
infer its return types

* Optional and Default Parameters
Like  in  object  and  tuple  types,  you  can  use  ?  to  mark  parameters  as  optional.  When declaring  your  function’s  parameters,  required  parameters  have  to  come  first,  followed by optional parameters:

Like  in  JavaScript, you  can  provide  default  values  for  optional  parameters. Semanti‐cally it’s similar to making a parameter optional, in that callers no longer have to pass it in (a difference is that default parameters don’t have to be at the end of your list of parameters, while optional parameters do).

Notice  how  when  we  give  userId  a  default  value,  we  remove  its  optional  annota‐tion,  ?.  We  also  don’t  have  to  type  it  anymore.  TypeScript  is  smart  enough  to  infer
the parameter’s type from its default value, keeping our code terse and easy to read

* Rest paramters
If a function takes a list of arguments, you can of course simply pass the list in as an array:

Sometimes,  you  might  opt  for  a  variadic  function  API—one  that  takes  a  variable number of arguments—instead of a fixed-arity API that takes a fixed number of arguments. 

But  there’s  one  big  problem  with  using  arguments:  it’s  totally  unsafe! 

So, how can we safely type variadic functions?

Rest  parameters  to  the  rescue!  Instead  of  resorting  to  the  unsafe  arguments  magic variable,  we  can  instead  use  rest  parameters  to  safely  make  our  sum  function  accept
any number of arguments:

* call, apply, and bind
apply  binds  a  value  to  this  within  your  function  (in  this  example,  we  bind  this  to null),  and  spreads  its  second  argument  over  your  function’s  parameters.  call  does
the same, but applies its arguments in order instead of spreading.

bind()  is  similar,  in  that  it  binds  a  this-argument  and  a  list  of  arguments  to  your function.  The  difference  is  that  bind  does  not  invoke  your  function;  instead,  it
returns  a  new  function  that  you  can  then  invoke  with  (),  .call,  or  .apply,  passing more arguments in to be bound to the so far unbound parameters if you want

* this
in javascript, using *this* can be confusing.
Thankfully,  TypeScript  has  your  back.  If  your  function  uses  this,  be  sure  to  declare your  expected  this  type  as  your  function’s  first  parameter  (before  any  additional parameters), and TypeScript will enforce that this really is what you say it is at every
call  site.

* Generator Functions
Generator  functions  (generators  for  short)  are  a  convenient  way  to,  well,  generate  a bunch  of  values. 

* Iterators
terators  are  the  flip  side  to  generators:  while  generators  are  a  way  to  produce  a stream  of  values,  iterators  are  a  way  to  consume  those  values.

* Call Signatures
function call signatures is basically the general structures of a function
In typescript, another way you can declare a function is by creating a type like
this means that function of type Add accepts 2 parameters of number
and returns a number
? type Add = (a: number, b: number) => number
then you can create a function like this
? let add: Add = (a, b) => {
?    return a + b
? }
notice how we didn't need to explicitly type the paramter types?

* Type Level and Value Level Code
Throughout  this  book,  when  I  use  the  term  type-level  code,  what  I’m  referring  to  is code  that  consists  exclusively  of  types  and  type  operators.  Contrast  that  with  value-level  code,  which  is  everything  else.  A  rule  of  thumb  is:  if  it’s  valid  JavaScript  code, then  it’s  value-level;  if  it’s  valid  TypeScript  but  not  valid  JavaScript,  then  it’s  type-level.

* Contextual Typing
Notice that the last example was the first example we’ve seen where we didn’t have to explicitly  annotate  our  function  parameter  types.  Because  we  already  declared  that log is of type Log, TypeScript is able to infer from context that message has to be of type  string.  This  is  a  powerful  feature  of  TypeScript’s  type  inference  called  contextual typing.

* Overloaded Function Types
A function with multiple call signatures.
In  most  programming  languages,  once  you  declare  a  function  that  takes  some  set  of parameters  and  yields  some  return  type,  you  can  call  that  function  with  exactly  that set of parameters, and you will always get that same return type back. Not so in JavaScript.  Because  JavaScript  is  such  a  dynamic  language,  it’s  a  common  pattern  for there  to  be  multiple  ways  to  call  a  given  function;  not  only  that,  but  sometimes  the
output type will actually depend on the input type for an argument!
Shorthand call signature
? type Log = (message: string, userId?: string) => void
Full call signature
? type Log = {
?   (message: string, userId?: string): void
? }

*/
