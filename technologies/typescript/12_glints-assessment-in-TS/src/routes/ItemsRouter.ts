import {Router} from "express";
import {ItemService} from "../controllers/ItemController";
const router = Router();

router.get('/', ItemService.getItems);
router.get('/detail/:id', ItemService.getOneItem);
router.post('/', ItemService.createItem);
router.put('/update/:id', ItemService.updateItem);
router.put('/update-stock/:id', ItemService.updateStock);
router.delete('/delete/:id', ItemService.deleteItem);


export { router as ItemsRouter };
