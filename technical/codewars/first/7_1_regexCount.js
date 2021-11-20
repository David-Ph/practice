function countAnimals(animals, count) {
  let arr = [];
  count.forEach((animal) => {
    let reg = new RegExp(animal, "ig");
    let animalCount = animals.match(reg) ?? 0;
    arr.push(animalCount.length ?? 0);
  });
  return arr;
}

console.log(countAnimals("dog,cat", ["dog", "cat"])); // [1, 1]
console.log(countAnimals("dog,cat", ["dog", "cat", "pig"])); // [1, 1, 0]
console.log(countAnimals("dog,dog,cat", ["dog", "cat"])); // [2, 1]
console.log(countAnimals("dog,cat", ["pig", "cow"])); // [0, 0]
