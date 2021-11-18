function mergeSort(array) {
  if (array.length === 1) return array;

  const newArr = [...array];

  const middle = newArr.length / 2;
  const left = newArr.slice(0, middle);
  const right = newArr.slice(middle);

  return sort(mergeSort(left), mergeSort(right));
}

function sort(left, right) {
  const tempArr = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      tempArr.push(left.shift());
    } else {
      tempArr.push(right.shift());
    }
  }

  return tempArr.concat(left.slice().concat(right.slice()));
}

const data = [
  {
    session_name: "first test",
    classes: [{ class_name: undefined, students: [{ student_name: "budi" }] }],
  },
  {
    session_name: null,
    classes: [
      { class_name: "second class", students: [{ student_name: "adi" }] },
    ],
  },
];

function removeNull(arr) {
  const newData = Array.from(arr);

  newData.forEach((data) => {
    for (const [key, value] of Object.entries(data)) {
      if (value == null) {
        delete data[key];
        continue;
      }

      if (Array.isArray(value)) {
        value.forEach((innerData) => {
          for (const [innerKey, innerValue] of Object.entries(innerData)) {
            if (innerValue == null) {
              delete innerData[innerKey];
              continue;
            }
          }
        });
      }
    }
  });

  return newData;
}

// console.log(removeNull(data));
const newArr = removeNull(data);
console.log(newArr[1]);
// console.log(mergeSort([4, 2, 6, 1, 3, 5, 9, 8, 7]));
