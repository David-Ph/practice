function binarySearch(array, start, stop, number) {
  if (start > stop) {
    return "Not found";
  }

  let mid = Math.ceil((start + stop) / 2);

  if (array[mid] === number) {
    return mid;
  } else if (number > array[mid]) {
    return binarySearch(array, mid, stop, number);
  } else {
    return binarySearch(array, start, mid, number);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 9, 7));

function anagramString(str1, str2) {
  if (str1.length !== str2.length) return "Not found";

  return str1.split("").sort().join("") == str2.split("").sort().join("");
}

console.log(anagramString("motor", "rotom"));

function palindromeString(str) {
  for (let i = 0; i < str.length / 2; i++) {
    let j = str.length - 1 - i;
    if (str[j] != str[i]) return false;
  }
  return true;
}

console.log(palindromeString("itopinonavevanonipoti"));

function splitArray(array) {
  const newArray = Array.from(array);
  if (newArray.length === 1) return newArray;

  const middle = newArray.length / 2;
  const left = newArray.slice(0, middle);
  const right = newArray.slice(middle);

  return sortArray(splitArray(left), splitArray(right));
}

function sortArray(left, right) {
  const tempArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      tempArray.push(left.shift());
    } else {
      tempArray.push(right.shift());
    }
  }

  return tempArray.concat(left.slice().concat(right.slice()));
}

console.log(splitArray([6, 4, 2, 9, 1, 8, 3, 7, 5]));
