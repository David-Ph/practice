function removeChar(str) {
    const arr = str.split('');
    arr.shift();
    arr.pop();
    return arr.join("");
}

console.log(removeChar("hello"));
