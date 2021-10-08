/* 
? INTRO TO TYPESCRIPT

    - programs are files that contain a bunch of text written by you, the
    programmer. 
    - That text is parsed by a special program called a compiler, 
    - which transforms it into an abstract syntax tree (AST), a data structure that ignores things like whitespace, comments
    - compiler then converts that AST to a lower-level representation called bytecode. 
    - You can feed that bytecode into another program called a runtime to evaluate it and get a result.

What is type safety?
    using types to prevent programs from doing invalid things, such as: 
        - multiplying a number and a list
        - calling a function with a list of strings when it actually needs a list of objects
        - calling a method on an object when that method doesnt actually exist on that objcet
        - importing a module that was recently moved
    
javascript would allow you to make these kinds of mistakes by trying to make sense of it, instead of throwing an error

The problem is, you only found out that you made a typing error when your program runs and the user uses it

TypeScript  gives  you  error messages  in  your  text  editor,  as  you  type.

If we use typescript in our program, this is how the process looks like when we compile it
    - TS -> TypeScript Source > TypeScript AST
    - TS -> AST is checked by typechecker
    - TS -> TypeScript AST > Javascript source
    - JS -> Javascript Source > javascript AST
    - JS -> AST -> Bytecode
    - JS -> Bytecode is evaluated by runtime
    
Steps 1–3 are done by TSC, and steps 4–6 are done by the JavaScript runtime that
lives in your browser, NodeJS, or whatever JavaScript engine you’re using.

? What is Type?

A set of values and the things that you can do with them
for example boolean type is just true or false
for numbers, you can do + - * /
for strings, you can do concatenate etc

*/
/* 
? TYPES OF TYPE SYSTEMS

there are two types of type systems, each with its own tradeoffs
    
    - You can explicitly annotate your types
    - Or you can let TypeScript infer most of them for you

explicitly annotate your types example

    let a: number = 1 // a is a number
    let b: string = 'hello' // b is a string
    let c: boolean[] = [true, false] // c is an array of booleans

let typescript infer it

    let a = 1 // a is a number
    let b = 'hello' // b is a string
    let c = [true, false] // c is an array of booleans

In general, it is good style to let TypeScript infer as many types as it
can for you, keeping explicitly typed code to a minimum.

? How are types bound?

Javascript bound types dynamically, that means javascript needs to run your program to know the types of things in it.

Typescript is a gradually typed language. This means typescript works best when it knows the types of everything in it, but it doesn't have to know them.

* how javascript works

3 + [1] // "31" => not explicit, but javascript tries to make sense of it

3.toString() + [1].toString() // "31" => explicit

* how typescript works

3 + [1] // typescript error

3.toString() + [1].toString() // "31" => no error

! If you must convert types, do it explicitly

? when are types checked?

Javascript doesn't care and will always try to do its best to convert what you gave to what it expects

Typescript will check during compile time

? when are errors surfaced?

javascript -> during program run
typescript -> during compile time

! to install typescript, run "npm i -D typescript tslint ts-node @types/node"

? tsconfig.json
This tsconfig.json is where TypeScript projects define things like which files should be compiled,  which  directory  to  compile  them  to, and  which  version  of  JavaScript to emit.

* > You can automatically generate tslint.json by running "npx tsc --init"

? tsling.json
Your project should also have a tslint.json file containing your TSLint configuration, codifying  whatever  stylistic  conventions  you  want  for  your  code 

* > You can automatically generate tslint.json by running "npx tslint --init"

? to compile your first typescript program

* > "npx tsc"
* > run it with "node dist/index"
* > or if you have ts-node installed, you can compile and run it at the same time with "npx ts-node src/index"

*/

/* 
? type literal
    - A type that represents a single value and nothing esle

? types
    - any
        accept anything. Try not to use it
    - unknown  
        use when you don't know the type ahead of time
    - boolean
    - number
    - bigint
    - symbol
    - object

? javascript and typescript typing - Structural typing

    A style of programming where you just care that an object
    has certain properties, and not what its name is (nominal
    typing). Also called duck typing in some languages (or, not
    judging a book by its cover).

    In duck typing, a programmer is only concerned with ensuring 
    that objects behave as demanded of them in a given context, 
    rather than ensuring that they are of a specific type.

    It comes from the idea that if it looks like a duck 
    and it quacks like a duck then it's probably a duck, 
    or at least close enough that it doesn't matter.
    
? Definite assignment

This  is  the  first  example  we’ve  looked  at  where  we  first  declare  a  variable  (a),  
then initialize it with values ({} and {b: 1, c: 2}). 
This is a common JavaScript pattern, and it’s supported by TypeScript too.
When you declare a variable in one place and initialize it later, 
TypeScript will make sure that your variable 
is definitely assigned a value by the time you use it      

By  default,  TypeScript  is  pretty  strict  about  object  properties 
if  you  say  the  object should have a property called b 
that’s a number, TypeScript expects b and only b. 
If b is missing, or if there are extra properties, 
TypeScript will complain.  

? Index signagtures
The  [key:  T]:  U  syntax  is  called  an  index  signature,  and  this  is  the  way  you  tell
TypeScript that the given object might contain more keys. The way to read it is, “For
this  object,  all  keys  of  type  T  must  have  values  of  type  U.”  Index  signatures  let  you
safely add more keys to an object, in addition to any keys that you explicitly declared.
There is one rule to keep in mind for index signatures: the index signature key’s type
(T) must be assignable to either number or string.3
Also  note  that  you  can  use  any  word  for  the  index  signature  key’s  name—it  doesn’t
have to be key:
let airplaneSeatingAssignments: {
  [seatNumber: string]: string
} = {
  '34D': 'Boris Cherny',
  '34E': 'Bill Gates'
}
*/
