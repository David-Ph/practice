import { Request, Response, NextFunction } from "express";
import { Item } from "../models/index";

class ItemController {
  async getItems(req: Request, res: Response, next: NextFunction) {
    try {
      const priceMin = req.query.price_min ?? 0;
      const priceMax = req.query.price_max ?? 1000000000;

      const stockMin = req.query.stock_min ?? 0;
      const stockMax = req.query.stock_max ?? 100000;

      const query: any = {
        price: { $gte: priceMin, $lte: priceMax },
        stock: { $gte: stockMin, $lte: stockMax },
      };

      if (req.query.category) query.category = req.query.category;

      // sorting
      const sortField = req.query.sortBy || "created_at";
      const orderBy = req.query.orderBy || "desc";

      // pagination
      const page = req.query.page || 1;
      const limit = req.query.limit || 5;
      const skipCount = page > 0 ? (page - 1) * limit : 0;

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
}
