"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const product_model_1 = require("./product.model");
const class_validator_1 = require("class-validator");
const p1 = new product_model_1.Product("A book", 50);
(0, class_validator_1.validate)(p1).then((errors) => {
    if (errors.length > 0) {
        console.log("validation errors");
        console.log(errors);
    }
    else {
        console.log(p1.getInformation());
    }
});
const products = [
    { title: "A Carpet", price: 55 },
    { title: "A Chair", price: 25 },
];
const loadedProducts = (0, class_transformer_1.plainToClass)(product_model_1.Product, products);
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
//# sourceMappingURL=app.js.map