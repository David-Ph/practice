// ? function

/* 
just like with variables, you can also let typescript
infer its return types

* Optional and Default Parameters
Like  in  object  and  tuple  types,  you  can  use  ?  to  mark  parameters  as  optional.  When declaring  your  function’s  parameters,  required  parameters  have  to  come  first,  followed by optional parameters:

Like  in  JavaScript, you  can  provide  default  values  for  optional  parameters. Semanti‐cally it’s similar to making a parameter optional, in that callers no longer have to pass it in (a difference is that default parameters don’t have to be at the end of your list of parameters, while optional parameters do).

Notice  how  when  we  give  userId  a  default  value,  we  remove  its  optional  annota‐tion,  ?.  We  also  don’t  have  to  type  it  anymore.  TypeScript  is  smart  enough  to  infer
the parameter’s type from its default value, keeping our code terse and easy to read
*/
