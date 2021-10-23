const array = [
  { name: "David" },
  { name: "Kim" },
  { name: "Charlie" },
  { name: "Bob" },
  { name: "Alice" },
];

// Imperative programming
// use statements to mutate state
const usernames = [];
for (const users of array) {
  usernames.push(array.push);
}

// Declarative programming
// use functions to describe state
const newMap = array.map((user) => user.name);
