// class decorator
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// this is now a logger that executes when a new object
// is instantiated
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template.replace("#name#", this.name);
        }
      }
    };
  };
}

@Logger("Logging PersonFactory") //
@WithTemplate("<h1>My name is #name#</h1>", "app") // this decorator executes first
class PersonFactory {
  name = "Max";

  constructor() {
    console.log("Creating a person....");
  }
}

const newPerson = new PersonFactory();
console.log(newPerson);

// property decorators
// target is constructor, propertyname is title
function Log(target: any, propertyName: string | symbol) {
  console.log(`Property decorator`);
  console.log(target, propertyName);
}

// accessor decorator
function Log2(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator");
  console.log("target is", target);
  console.log(`name is`, name);
  console.log(`descriptor is`, descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator");
  console.log("target is", target);
  console.log(`name is`, name);
  console.log(`descriptor is`, descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Paramter Decorator");
  console.log("target is", target);
  console.log(`name is`, name);
  console.log(`position is`, position);
}

class Product {
  @Log
  title: string;
  private _price: number;
  get price() {
    return this._price;
  }
  @Log2
  set price(val: number) {
    this._price = val;
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const newProduct = new Product("Bread", 100);

// const newProduct = new Product("Bread", 100);
// console.log(newProduct.getPriceWithTax(0.1));
// console.log(newProduct.price);
// newProduct.price = 120;
// console.log(newProduct.price);

function Autobind(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      //this will be triggered when the method is called
      const bindFunction = originalMethod.bind(this); // and then it will bind this to whoever called the method ( the object)
      return bindFunction;
    },
  };
  return adjustedMethod; // and then we return the adjusted method
}

function Nope(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  descriptor.value = function () {
    console.log("Nope, not gonna print");
  };
  return descriptor;
}

class Printer {
  message = "This is working!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
  @Nope
  printMessage() {
    console.log("PRINTING");
  }
}
const newPrinter = new Printer();
newPrinter.printMessage();
const button = document.querySelector("button")!;
button.addEventListener("click", newPrinter.showMessage);

// //////////////////////////////////////////////
const config: { [input: string]: string[] } = {};

const addValidator = (input: string, type: string) => {
  config[input] = config[input] ? [...config[input], type] : [type];
  console.log(config);
};

const Required = (_: any, input: string) => addValidator(input, "required");
const Maxlength = (_: any, input: string) => addValidator(input, "maxlength");
const Positive = (_: any, input: string) => addValidator(input, "positive");

const validate = (course: any) => {
  return Object.entries(config).every(([input, types]) =>
    types.every(
      (type) =>
        (type === "required" && course[input]) ||
        (type === "positive" && course[input] > 0) ||
        (type === "maxlength" && course[input].length < 5)
    )
  );
};

class Course {
  @Required @Maxlength title: string;
  @Required @Positive price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEL = document.getElementById("title") as HTMLInputElement;
  const priceEL = document.getElementById("price") as HTMLInputElement;

  const title = titleEL.value;
  const price = +priceEL.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    console.log("Invalid input");
    return;
  }
  console.log(createdCourse);
});
