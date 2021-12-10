import {Router} from "express";
import {ItemService} from "../controllers/ItemController";
const router = Router();

router.get('/', ItemService.getItems);

export { router as ItemsRouter };
