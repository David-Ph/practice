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

*/
