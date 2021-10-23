const addArrow: (a: number, b: number) => number = (a, b) => a * b;

// rest paramters
const addSpread = (...a: number[]): number => {
  return a.reduce((a, b) => a + b, 0);
};

// array destructuring
const hobbies = ["Planning", "Music"];
const person = {
  myName: "Max",
  myAge: 25,
};
const [hobby1, hobby2] = hobbies;
const { myName, myAge } = person;
