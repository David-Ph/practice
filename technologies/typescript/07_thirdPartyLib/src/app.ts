import "reflect-metadata";
import _ from "lodash";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";

const p1 = new Product("A book", 50);
validate(p1).then((errors: any) => {
  if (errors.length > 0) {
    console.log("validation errors");
    console.log(errors);
  } else {
    console.log(p1.getInformation());
  }
});

// console.log(_.shuffle([1, 2, 3]));
const products = [
  { title: "A Carpet", price: 55 },
  { title: "A Chair", price: 25 },
];

const loadedProducts = plainToClass(Product, products);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// console.log(p1.getInformation());
