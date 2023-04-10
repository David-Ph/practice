async function getUserData() {
  let response1 = await fetch("https://jsonplaceholder.typicode.com/users");
  let response2 = await fetch("https://jsonplaceholder.typicode.com/users");
  let response3 = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("After all promise is executed");
}
getUserData();
console.log("Hello World");
