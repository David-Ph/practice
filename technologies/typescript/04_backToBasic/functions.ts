// return number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// return void
// it means it doesn't return anything
function printResult(num: number) {
  console.log(`Result: ${num}`);
}

// function call signatures, best way to do it
// is NOT combineValues: function
let combineValues: (a: number, b: number) => number;
combineValues = add;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 2));

addAndHandle(5, 10, (result) => {
  console.log(result * result);
});
