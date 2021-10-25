"use strict";

function stripProperty(obj, prop) {
  delete obj[prop];
  return obj;
}

const object = {
  foo: 2,
  bar: 3,
  baz: 3,
};
console.log(stripProperty(object, "foo"));

const counter = (function counter() {
  let value = 0;
  return {
    getValue: function () {
      return value;
    },
    changeBy: function (k) {
      value += k;
    },
  };
})();

function getFixedCounter(k) {
  let myCounter = counter;
  return {
    increment: () => {
      myCounter.changeBy(k);
    },
    decrement: () => {
      myCounter.changeBy(-k);
    },
    getValue: () => {
      return myCounter.getValue();
    },
  };
}
