import { Router } from "express";
import { ItemService } from "../controllers/ItemController";
import { ItemValidatorMiddleware } from "../middlewares/validators/ItemValidator";
const router = Router();

router.get("/", ItemValidatorMiddleware.get, ItemService.getItems);
router.get("/detail/:id", ItemValidatorMiddleware.get, ItemService.getOneItem);
router.post("/", ItemValidatorMiddleware.create, ItemService.createItem);
router.put(
  "/update/:id",
  ItemValidatorMiddleware.get,
  ItemValidatorMiddleware.update,
  ItemService.updateItem
);
router.put(
  "/update-stock/:id",
  ItemValidatorMiddleware.get,
  ItemValidatorMiddleware.update,
  ItemService.updateStock
);
router.delete(
  "/delete/:id",
  ItemValidatorMiddleware.get,
  ItemService.deleteItem
);

export { router as ItemsRouter };
