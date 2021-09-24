function checkAnagram(string1, string2) {
  // convert the string params into array
  let firstArray = stringIntoArray(string1);
  let secondArray = stringIntoArray(string2);

  firstArray = sortArray(firstArray);
  secondArray = sortArray(secondArray);

  firstArray = arrayIntoString(firstArray);
  secondArray = arrayIntoString(secondArray);

  return firstArray == secondArray;
}

function stringIntoArray(string) {
  const array = [];
  for (let i = 0; i < string.length; i++) {
    array[i] = string[i];
  }
  return array;
}

function arrayIntoString(array) {
  let temp = "";
  for (let i = 0; i < array.length; i++) {
    temp += array[i];
  }
  return temp;
}

function sortArray(array) {
  const newArr = array;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] > newArr[j]) {
        const temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }
  return newArr;
}

console.log(checkAnagram("bebek", "motor"));
