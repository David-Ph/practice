# Database Normalization

## What is it?

it's a set of rules that you can follow that help to prevent logical inconsistency within a database and help make database more efficient. It is broken down into levels, named as 1st Normal Form (1NF) up to 5th Normal Form (5NF). Each normal form imposes some extra rules on top of the one that came before it. 1NF is the weakest with 5NF the strongest.

### Example 1

a user has username and password, each user should only have 1 password, so if a user has 2 passwords, that's an inconsistency that should not be allowed. A way to fix is to make each username unique so no user can be mistaken to have 2 passwords.

### Example 2

Let's say there's a database storing user info, one of them includes a person name and company they work for. We can store it like ["Bob", "IBM"], but what if the company changed name? What if we need other data about the company? One way we can do it is create another table called Company that stores company data and each company should have an identifying key like [1, "IBM"] and then in the user table we should have something like ["Bob", 1]

## 1NF Rules

- Using row order to convey information is not permitted
- Mixing data types within the same column is not permitted
- Having a table without a primary key is not permitted
- Repeating groups are not permitted

## 2NF Rules

- Each non-key attribute must depend on the entire primary key

## 3NF Rules

- Every non-key attribute in a table should depend on the key, the whole key, and nothing but the key.

## 4NF Rules

- Multivalued dependencies in a table must be multivalued dependencies on a key.

## 5NF Rules

- The table cannot be describeable as the result of joining someother tables together
