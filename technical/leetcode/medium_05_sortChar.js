/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (string) {
  // split the string into array
  let array = string.split("");

  //   turn the array into object to get all the values and counts
  let result = array.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = {
        count: 0,
        char: item,
      };
    }
    obj[item].count++;
    return obj;
  }, {});

  //   iterate through the objects and add the char into new array
  //  based on count. so aaaccc would become [aaa, ccc]
  let answers = [];
  for (let key in result) {
    answers.push(key.repeat(result[key].count));
  }

  //   return the array and sort it based on the length of the element
  return answers.sort((a, b) => b.length - a.length).join("");
};

console.log(frequencySort("Aabb"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("ttttree"));
