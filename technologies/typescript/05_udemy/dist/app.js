"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// class decorator
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// this is now a logger that executes when a new object
// is instantiated
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template.replace("#name#", this.name);
                }
            }
        };
    };
}
let PersonFactory = class PersonFactory {
    constructor() {
        this.name = "Max";
        console.log("Creating a person....");
    }
};
PersonFactory = __decorate([
    Logger("Logging PersonFactory") //
    ,
    WithTemplate("<h1>My name is #name#</h1>", "app") // this decorator executes first
    ,
    __metadata("design:paramtypes", [])
], PersonFactory);
const newPerson = new PersonFactory();
console.log(newPerson);
// property decorators
// target is constructor, propertyname is title
function Log(target, propertyName) {
    console.log(`Property decorator`);
    console.log(target, propertyName);
}
// accessor decorator
function Log2(target, name, descriptor) {
    console.log("Accessor Decorator");
    console.log("target is", target);
    console.log(`name is`, name);
    console.log(`descriptor is`, descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Accessor Decorator");
    console.log("target is", target);
    console.log(`name is`, name);
    console.log(`descriptor is`, descriptor);
}
function Log4(target, name, position) {
    console.log("Paramter Decorator");
    console.log("target is", target);
    console.log(`name is`, name);
    console.log(`position is`, position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    get price() {
        return this._price;
    }
    set price(val) {
        this._price = val;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log,
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    Log2,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Product.prototype, "getPriceWithTax", null);
const newProduct = new Product("Bread", 100);
// const newProduct = new Product("Bread", 100);
// console.log(newProduct.getPriceWithTax(0.1));
// console.log(newProduct.price);
// newProduct.price = 120;
// console.log(newProduct.price);
function Autobind(target, name, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedMethod = {
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
function Nope(target, name, descriptor) {
    descriptor.value = function () {
        console.log("Nope, not gonna print");
    };
    return descriptor;
}
class Printer {
    constructor() {
        this.message = "This is working!";
    }
    showMessage() {
        console.log(this.message);
    }
    printMessage() {
        console.log("PRINTING");
    }
}
__decorate([
    Autobind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Printer.prototype, "showMessage", null);
__decorate([
    Nope,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Printer.prototype, "printMessage", null);
const newPrinter = new Printer();
newPrinter.printMessage();
const button = document.querySelector("button");
button.addEventListener("click", newPrinter.showMessage);
// //////////////////////////////////////////////
const config = {};
const addValidator = (input, type) => {
    config[input] = config[input] ? [...config[input], type] : [type];
    console.log(config);
};
const Required = (_, input) => addValidator(input, "required");
const Maxlength = (_, input) => addValidator(input, "maxlength");
const Positive = (_, input) => addValidator(input, "positive");
const validate = (course) => Object.entries(config).every(([input, types]) => types.every((type) => (type === "required" && course[input]) ||
    (type === "positive" && course[input] > 0) ||
    (type === "maxlength" && course[input].length < 5)));
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required,
    Maxlength,
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    Required,
    Positive,
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEL = document.getElementById("title");
    const priceEL = document.getElementById("price");
    const title = titleEL.value;
    const price = +priceEL.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        console.log("Invalid input");
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map