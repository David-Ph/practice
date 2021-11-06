const vowels = ["a", "i", "u", "e", "o"];

function isVowels(char) {
  return (
    char.toLowerCase() === "a" ||
    char.toLowerCase() === "i" ||
    char.toLowerCase() === "u" ||
    char.toLowerCase() === "e" ||
    char.toLowerCase() === "o"
  );
}

function countVowelsAndConsonants(str) {
  const counts = str.split("").reduce((obj, char) => {
    if (isVowels(char)) {
      if(!obj.vowels){
          obj.vowels = 0;
      }
      obj.vowels++;
    } else {
      if (!obj.consonants) {
        obj.consonants = 0;
      }
      obj.consonants++;
    }

    return obj;
  }, {});

  return `Vowels: ${counts.vowels}, Consonants: ${counts.consonants}`;
}

console.log(countVowelsAndConsonants("hello"));
