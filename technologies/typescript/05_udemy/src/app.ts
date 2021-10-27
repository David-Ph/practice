const names: Array<string | number> = ["Maax", "Manuel", 123];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 1000);
});

promise.then((data) => {
  // console.log(data.split(""));
  //   Math.floor(data); // ERRROR
});

// /////////////////////////////
// Generics
// the types are not defined when we delcare the function
// but when we call the function
// you can also put a constraint on the generics type
function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
const mergedObj2 = merge(
  { name: "Max", hobbies: ["Sports"] },
  { age: 30, height: 175 }
);
// const mergedObj3 = merge({ name: "Max", hobbies: ["Sports"] }, 30);

console.log(mergedObj);

interface hasLength {
  length: number;
}

function countAndDescribe<T extends hasLength>(element: T) {
  let description = "Has no value.";
  if (element.length > 0) {
    description = `Has ${element.length} elements`;
  }

  return [element, description];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

const objects = {
  name: "max",
  age: 30,
  height: 175,
};

for (const [key, value] of Object.entries(objects)) {
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value : ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Max" }, "name"));

type primitives = string | number | boolean;
// we want to make sure that T is at least a primitive data value
// because we don't want to accidentally pass an object
// because objects passes by reference, and not value
class DataStorage<T extends primitives> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("First Text");
textStorage.addItem("Second Text");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(50);
// numberStorage.addItem("50"); // error

//? generic utility types
// * partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createNewCourse(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let newCourse: Partial<CourseGoal> = {};
  newCourse.title = title;
  newCourse.description = description;
  newCourse.completeUntil = completeUntil;
  return newCourse as CourseGoal;
}

// * readonly type
const myNames: Readonly<string[]> = ["Max", "Manu"];
