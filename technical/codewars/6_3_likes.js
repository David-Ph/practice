function likes(names) {
  let string = "";
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names[0]} like this`;
  }
  if (names.length >= 4) {
    for (let i = 0; i < names.length; i++) {
      if (i === 1) {
        string += `${names[i]} and ${names.length - 2} others like this`;
        break;
      } else {
        string += `${names[i]}, `;
      }
    }
  } else {
    names.forEach((name, index) => {
      if (index === names.length - 1) {
        string += `and ${name} `;
      } else if (index === names.length - 2) {
        string += `${name} `;
      } else {
        string += `${name}, `;
      }
    });
    string += "like this";
  }

  return string;
}

console.log(likes(["Max"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
