const names: Array<string | number> = ["Maax", "Manuel", 123];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 1000);
});

promise.then((data) => {
  console.log(data.split(""));
  //   Math.floor(data); // ERRROR
});
