// bubble sort
const array = [5, 2, 7, 1, 8, 10, 9, 6, 4, 3];

function bubble_sort(array) {
  const newArray = [...array];
  for (let i = 0; i < newArray.length; i++) {
    let hasSort = false;
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[i] > newArray[j]) {
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        hasSort = true;
      }
    }
    if (!hasSort) break;
  }
  return newArray;
}
