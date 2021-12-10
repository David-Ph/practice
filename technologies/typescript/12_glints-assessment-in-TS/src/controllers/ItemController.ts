import { Request, Response, NextFunction, RequestHandler } from "express";
import { Item } from "../models/index";

type NumberOrUndefined = number | undefined;

class ItemController {
  async getItems(req: Request, res: Response, next: NextFunction) {
    try {
      // price and stock filter
      let priceMin = 0;
      let priceMax = 1000000000;
      let stockMin = 0;
      let stockMax = 100000;

      if(req.query.price_min) priceMin = +req.query.price_min; 
      if(req.query.price_max) priceMax = +req.query.price_max; 
      if(req.query.stock_min) stockMin = +req.query.stock_min; 
      if(req.query.stock_max) stockMax = +req.query.stock_max; 

      const query: any = {
        price: { $gte: priceMin, $lte: priceMax },
        stock: { $gte: stockMin, $lte: stockMax },
      };

      if (req.query.category) query.category = req.query.category;

      // sorting
      const sortField = req.query.sortBy as string || "created_at";
      const orderBy = req.query.orderBy as string || "desc";

      // pagination
      const page = req.query.page as NumberOrUndefined || 0;
      const limit = req.query.limit as NumberOrUndefined || 5;
      const skipCount = page > 0 ? (page as number - 1) * limit : 0;

      console.log(query);

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

const ItemService = new ItemController();
export { ItemService };