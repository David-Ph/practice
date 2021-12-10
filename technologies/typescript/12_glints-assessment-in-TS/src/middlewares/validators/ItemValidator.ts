import { Types } from "mongoose";
import { Request, Response, NextFunction } from "express";
import validator from "validator";
import { Item } from "../../models";
import ItemCategory from "../../config/ItemCategory.json";
import { ItemInterface } from "../../interfaces/ItemInterface";
import { RequestQueryItem } from "../../interfaces/QueryInterfaces";

class ItemValidator {
  async create(
    req: Request<{ id: string }, {}, ItemInterface, RequestQueryItem>,
    res: Response,
    next: NextFunction
  ) {
    try {
      // if req.body.field is null/undefined, assign it an empty string
      // this is simply to avoid validator error: expected a string but received an undefied
      req.body.name = req.body.name ?? "";
      req.body.price = req.body.price ?? "";
      req.body.stock = req.body.stock ?? "";
      req.body.category = req.body.category ?? "";

      const errorMessages = [];

      if (!validator.isLength(req.body.name, { min: 3, max: 25 })) {
        errorMessages.push("Item name can only be between 3 and 25 characters");
      }

      if (
        !validator.isAlphanumeric(req.body.name, "en-US", {
          ignore: " ",
        })
      ) {
        errorMessages.push("Item name can only contains alphabets and numbers");
      }

      if (!validator.isInt(req.body.stock.toString(), { min: 0 })) {
        errorMessages.push("Item stock has to be positive integer");
      }

      if (!validator.isInt(req.body.price.toString(), { min: 0 })) {
        errorMessages.push("Item price has to be positive integer");
      }

      if (!ItemCategory.includes(req.body.category.toLowerCase())) {
        errorMessages.push("Invalid item category");
      }

      // make sure that category is inserted in database as lowercase
      req.body.category = req.body.category.toLowerCase();

      // Initialize previousStock as req.body.stock
      // this will also prevent malicious user from directly
      // inputting previousStock and create inconsistencies
      req.body.previousStock = req.body.stock;

      if (errorMessages.length > 0) {
        return next({ statusCode: 400, messages: errorMessages });
      }

      next();
    } catch (error) {
      next(error);
    }
  }

  async get(
    req: Request<{ id: string }, {}, ItemInterface, RequestQueryItem>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const errorMessages = [];
      console.log('HERE');

      if (req.params.id) {
        if (!Types.ObjectId.isValid(req.params.id)) {
          errorMessages.push("Please enter valid id");
        }
      }

      if (req.query.limit) {
        if (!validator.isInt(req.query.limit.toString())) {
          errorMessages.push("Please enter proper number for limit query");
        }
      }

      if (req.query.page) {
        if (!validator.isInt(req.query.page.toString())) {
          errorMessages.push("Please enter proper number for page query");
        }
      }

      if (errorMessages.length > 0) {
        return next({ statusCode: 400, messages: errorMessages });
      }

      next();
    } catch (error) {
      next(error);
    }
  }

  async update(
    req: Request<{ id: string }, {}, ItemInterface, RequestQueryItem>,
    res: Response,
    next: NextFunction
  ) {
    try {
      // find item first and fill it to missing req.body
      // this is to avoid user not sending a field when updating
      const findItem = await Item.findOne({ _id: req.params.id });
      if (!findItem) {
        return next({ statusCode: 404, message: "Item not found" });
      }
      req.body.name = req.body.name ?? findItem.name;
      req.body.stock = req.body.stock ?? findItem.stock;
      req.body.price = req.body.price ?? findItem.price;
      req.body.category = req.body.category ?? findItem.category;

      const errorMessages = [];

      if (!validator.isLength(req.body.name, { min: 3, max: 25 })) {
        errorMessages.push("Item name can only be between 3 to 25 characters");
      }

      if (
        !validator.isAlphanumeric(req.body.name, "en-US", {
          ignore: " ",
        })
      ) {
        errorMessages.push("Item name can only contains alphabets and numbers");
      }

      if (!validator.isInt(req.body.stock.toString(), { min: 0 })) {
        errorMessages.push("Item stock has to be positive integer");
      }

      if (!validator.isInt(req.body.price.toString(), { min: 0 })) {
        errorMessages.push("Item price has to be positive integer");
      }

      if (!ItemCategory.includes(req.body.category.toLowerCase())) {
        errorMessages.push("Invalid item category.");
      }

      // make sure that category is inserted in database as lowercase
      req.body.category = req.body.category.toLowerCase();
      if (errorMessages.length > 0) {
        return next({ statusCode: 400, messages: errorMessages });
      }

      next();
    } catch (error) {
      next(error);
    }
  }

  async updateStock(
    req: Request<{ id: string }, {}, ItemInterface, RequestQueryItem>,
    res: Response,
    next: NextFunction
  ) {
    try {
      req.body.stock = req.body.stock || 0;

      const errorMessages = [];

      if (!validator.isInt(req.body.stock.toString())) {
        errorMessages.push("Please enter an integer");
      }

      const findItem = await Item.findOne({ _id: req.params.id });
      if (!findItem) {
        return next({ statusCode: 404, message: "Item not found" });
      }
      // get new stock by adding previous stock and modified stock
      req.body.stock = +findItem.stock + +req.body.stock;

      // new stock shouldn't be less than 0
      if (req.body.stock < 0) {
        errorMessages.push("Not enough stock!");
      }

      if (errorMessages.length > 0) {
        return next({ statusCode: 400, messages: errorMessages });
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}

const ItemValidatorMiddleware = new ItemValidator();
export { ItemValidatorMiddleware };
