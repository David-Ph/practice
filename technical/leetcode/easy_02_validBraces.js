// check if braces is valid

// array to check if it contains valid opening and closing
const opening = ["(", "[", "{"];
const closing = [")", "]", "}"];

function isValid(braces) {
  const bracesArray = braces.split(""); // first split the string into array
  const validArray = []; // create a temp array to store it
  let validMatches = 0; // create a temp var to check if there's a valid number of opening and closing

  for (let i = 0; i < bracesArray.length; i++) {
    // do a loop
    if (opening.includes(bracesArray[i])) {
      // if found an opening
      validArray.push(bracesArray[i]); // push it to the temp array
      validMatches++; // and increase validMatches by 1
    }

    if (closing.includes(bracesArray[i])) {
      // if instead you found a closing
      const latestOpening = validArray[validArray.length - 1]; // check what's the latest opening in the validArray
      if (opening.indexOf(latestOpening) !== closing.indexOf(bracesArray[i])) {
        // if the index in the opening (latestOpening) and closing(bracesArray[i]) is not the same
        return false; // return false, because it means something else closes first
      }
      validMatches--; // and decrease the validMatches by 1
      validArray.pop(); // and pop the latest element in the validArray because that mean it already closes
    }
  }

  return validMatches === 0;
}

console.log(isValid("(){}[]")); // true
console.log(isValid("()[]")); // true
console.log(isValid("([{}])")); // true
console.log(isValid("[(])")); // false
console.log(isValid("[({})](]")); //false
console.log(isValid("(}")); // false
console.log(isValid("((("));
