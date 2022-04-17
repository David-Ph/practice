# Names should be meaningful!

It should explain explain to us what is the variable/function doing without us having to read inside the blocks

# How to name things

- Variables and constants;
  - Data containers -> user input data, validation results, a list of products, etc
  - use nouns or short phrases with adjectives -> userData, isValid, etc
- Functions and methods:
  - Commands or calculated values -> send data to server, check if user input is valid or not
  - use verbs or short phrases with adjectives -> sendData(), inputIsValid()
- Classes:
  - to create things / objects -> a user, a product, a http request body
  - use nouns or short phrases with nouns -> User(), RequestBody()

# Name Casing

- snake_case: is_valid, send_response -> python (variables, functions, methods)
- camelCase: isValid, sendResponse -> javascript, java (variables, functions, methods)
- PascalCase: AdminRole, UserRepository -> python, javsacript, java (classes)
- kebab-case: <side-drawer> -> html (custom html elements)

# Naming Variables, Constants & Properties

- Value is an object:
  - describe the value -> user, database -> authenticatedUser, sqlDatabase
- Value is number or string:
  - desribe the value -> name, age -> firstName, age
- value is a boolean:
  - answers a true/false question -> isValid, isLoggedIn

# Examples

- What is stored?
  - A user object (name, email, age)
    - Bad names -> u, data (u and data could contain anything)
    - Okay names -> userData, person (userData is a bit redundant, and person is too unspecific)
    - Good names -> user, customer (user is descriptive, and customer is specific)
  - User input validation
    - bad names -> v, val
    - okay names -> correct, validatedInput
    - good names -> isCorrect, isValid, inputIsValid

# Naming functions and methods

- functions performs and operation
  - Describe the operation: getUser(), response.send()
  - More descriptibe: getUserByEmail(), response.send()
- function computes a boolean
  - answers a true/false question: isValid, purchase.isPaid()
  - More descriptibe: emailIsValid(), purchase.isPaid()

# examples

- Save user data to database
  - Bad names -> process, handle (both very unspecific)
  - Okay names -> save, storeData
  - Good names -> saveUser(), user.Store()
- Validate user input
  - Bad names -> process(), save()
  - Okay names -> validateSave(), check()
  - Good names -> validate(), isValid()

# Classes

- Should describe the Object
  - UserProduct -> Provide more details without introducing redundancy
  - CustomerCourse -> Avoid redundant suffixes
  - DatabaseManager

# Examples

- A user
  - Bad names -> UEntity, ObjA (both very unspecific)
  - Okay names -> UserObj, AppUser
  - Good names -> User, Admin
- A Database
  - Bad names -> Data, DataStorage
  - Okay names -> Db, Data
  - Good names -> Database, SQLDatabase

# Exceptions
