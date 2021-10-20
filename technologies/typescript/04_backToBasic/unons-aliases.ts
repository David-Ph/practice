// * union types
type Combinable = number | string;
function combine(n1: Combinable, n2: Combinable) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combineAge = combine(15, 12);
const combineString = combine("Max", "Anna");
