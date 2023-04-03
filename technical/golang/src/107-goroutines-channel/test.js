function cobaPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1000);
  });
}

function cobaAsync() {
  console.log("Start")
  const coba = cobaPromise();
  console.log("Before");
  console.log(coba);
  console.log("After");
}

cobaAsync();
