# Functions should do work that's one level of abstraction below their name

In Programming we can't avoid low level operations.
But let's say we want to create a function called emailIsValid
we can write any low level logic or abstractions that checks if email is valid or not.
a bad example is if we create a function called saveUser
even though it makes sense that we'll usually validate user before saving it
if we write the validation logic here, it's gonna be hard to read
saveUser functions should only have high level operations to validate user and the low level steps to save user.

# Try not to mix levels of abstractions
