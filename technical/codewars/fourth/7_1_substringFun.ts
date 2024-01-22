const subStringFun = (args: string[]) =>
  args.reduce((res, val, index) => res + val[index], "");

console.log(subStringFun(["Yoda", "Best", "Has"]));
