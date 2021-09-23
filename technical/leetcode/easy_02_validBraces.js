// check if braces is valid

const opening = ["(", "[", "{"];
const closing = [")", "]", "}"];

function isValid(braces) {
  const bracesArray = braces.split("");
  const validArray = [];
  let validMatches = 0;

  for (let i = 0; i < bracesArray.length; i++) {
    if (opening.includes(bracesArray[i])) {
      validArray.push(bracesArray[i]);
      validMatches++;
    }

    if (closing.includes(bracesArray[i])) {
      const latestOpening = validArray[validArray.length - 1];
      if (opening.indexOf(latestOpening) !== closing.indexOf(bracesArray[i])) {
        return false;
      }
      validMatches--;
      validArray.pop();
    }
  }

  return true && validMatches === 0;
}

console.log(isValid("(){}[]")); // true
console.log(isValid("()[]")); // true
console.log(isValid("([{}])")); // true
console.log(isValid("[(])")); // false
console.log(isValid("[({})](]")); //false
console.log(isValid("(}")); // false
console.log(isValid("((("));
