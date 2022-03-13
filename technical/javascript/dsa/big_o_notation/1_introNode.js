/* 
*  What's the idea of Big O Notation?
Imagine we have multiple implementations of the same function.
How can we determine which one is the "best?"

Who Cares?
It's important to have a precise vocabulary to talk about how our code performs
Useful for discussing trade-offs between different approaches
When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
Less important: it comes up in interviews!

so the problem with using time to measure speed of a block of code
is that it's unreliable
because different commputer may have different speed

another way we can check it is how many operations does it do?

? we say that an algorithm is o(f(n)) if the number of simple operations the computer has to do is eventually less than a constants times f(n), as n increases

there are rules of thumb when determining big o expressions
  - contants dont matter
  we mostly only cares about variables
  so there is no o(2n), there is only o(n)
  there is no o(500), there is only o(1)
  there is no o(13n*n), there is only o(n*n)
*/