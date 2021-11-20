var extend = function (...args) {
  return args.reduce((obj, item) => {
    if (typeof item !== 'object' || Array.isArray(item)) return obj;

    for (const char in item) {
      if (obj[char] === undefined) {
        obj[char] = item[char];
      }
    }

    return obj;
  }, {});
};

console.log(extend({ a: 1, b: 2 }, { c: 3 }));
console.log(extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 }));
console.log(extend({ a: 1, b: 2 }, { a: 3, c: 3 }));
console.log(extend({ a: 1, b: 2 }, { c: 3 }, { d: 5 }));
console.log(extend({ a: false, b: null }, { a: true, b: 2, c: 3 }));
console.log(
  extend({ a: 1, b: 2, length: 6 }, [], "nope", false, [Function], {
    c: 3,
    a: 3,
  })
);
