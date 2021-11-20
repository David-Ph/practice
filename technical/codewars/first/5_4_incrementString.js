function incrementString(strng) {
  // check if string contains a number
  if (strng.match(/[0-9]/g)) {
    //   get the numberrs by using regex
    let numbers = strng.replace(/\D+/g, "");
    // replace the numbers in string with the incremeneted numbers
    return strng.replace(
      numbers,
      (parseInt(numbers) + 1 + "").padStart(numbers.length, 0)
    );
  } else {
    //   if not, just return string1
    return strng + 1;
  }
}

console.log(incrementString("Soslo322"));
console.log(incrementString("foobar000"));
console.log(incrementString("foobar001"));
