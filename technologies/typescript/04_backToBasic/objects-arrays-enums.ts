// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "David",
//   age: 24,
// };

// const person = {
//   name: "David", // string
//   age: 24, // number
//   hobbies: ["Sports", "Cooking"], // array of string
//   role: [2, 'Author'] // tuple of array and string // union type
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string, ...string[]]; // tuple type
// } = {
//   name: "David", // string
//   age: 24, // number
//   hobbies: ["Sports", "Cooking"], // array of string
//   role: [2, "Author"], // tuple of array and string // union type
// };

enum Role {
  ADMIN = "Admin",
  READ_ONLY = "Read Only User",
  AUTHOR = "Author",
}

const person = {
  name: "David", // string
  age: 24, // number
  hobbies: ["Sports", "Cooking"], // array of string
  role: Role.ADMIN,
};

console.log(person.name);
// console.log(person.nickname); // ERROR

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   hobby.map() // ERROR
}

if (person.role === Role.ADMIN) {
  console.log(`${person.name} is an ${person.role}`);
}
