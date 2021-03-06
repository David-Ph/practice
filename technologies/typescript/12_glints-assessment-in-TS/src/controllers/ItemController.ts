import { Request, Response, NextFunction } from "express";
import { UpdateQuery } from "mongoose";
import { Item } from "../models/index";
import {
  RequestQueryItem,
  FilterQueryItem,
} from "../interfaces/QueryInterfaces";
import { ItemInterface } from "../interfaces/ItemInterface";

class ItemController {
  async getItems(
    req: Request<{ id: string }, {}, ItemInterface, RequestQueryItem>,
    res: Response,
    next: NextFunction
  ) {
    try {
      // price and stock filter
      let priceMin = +req.query.price_min! || 0;
      let priceMax = +req.query.price_max! || 1000000000;
      let stockMin = +req.query.stock_min! || 0;
      let stockMax = +req.query.stock_max! || 100000;

      const query: FilterQueryItem = {
        price: { $gte: priceMin, $lte: priceMax },
        stock: { $gte: stockMin, $lte: stockMax },
      };

      if (req.query.category) query.category = req.query.category;

      // sorting
      const sortField = req.query.sortBy || "created_at";
      const orderBy = req.query.orderBy || "desc";

      // pagination
      const page = +req.query.page! || 0;
      const limit = +req.query.limit! || 5;
      const skipCount = page > 0 ? ((page as number) - 1) * limit : 0;

      // find data
      const data = await Item.find(query)
        .sort({ [sortField]: orderBy })
        .limit(limit)
        .skip(skipCount);

      const count = await Item.count(query);

      if (data.length === 0) {
        return next({ message: "No items found", statusCode: 404 });
      }

      res.status(200).json({ data, count });
    } catch (error) {
      next(error);
    }
  }

  async getOneItem(
    req: Request<{ id: string }, {}, ItemInterface, RequestQueryItem>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Item.findOne({ _id: req.params.id });

      if (!data) {
        return next({ message: "No items found", statusCode: 404 });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async createItem(
    req: Request<{ id: string }, {}, ItemInterface, RequestQueryItem>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Item.create(req.body);

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async updateItem(
    req: Request<{ id: string }, {}, ItemInterface, RequestQueryItem>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const updateData = req.body as UpdateQuery<ItemInterface>;

      const data = await Item.findOneAndUpdate(
        { _id: req.params.id },
        updateData,
        { new: true }
      );

      res.status(201).json({ data });
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
      const data = await Item.findOneAndUpdate(
        { _id: req.params.id },
        { stock: req.body.stock },
        { new: true }
      );

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async deleteItem(
    req: Request<{ id: string }, {}, ItemInterface, RequestQueryItem>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await Item.findOneAndDelete({ _id: req.params.id });

      if (!data) {
        return next({ statusCode: 404, message: "Item not found" });
      }

      res.status(200).json({ message: "Item successfully deleted" });
    } catch (error) {
      next(error);
    }
  }
}

const ItemService = new ItemController();
export { ItemService };
