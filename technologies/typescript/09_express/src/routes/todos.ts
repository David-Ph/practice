import { Router } from "express";
import * as TodosController from "../controller/todos";
// const express = require('exress')
// const router = express.Router();

const router = Router();

router.post("/", TodosController.createTodo);
router.get("/", TodosController.getTodos);
router.patch("/:id", TodosController.updateTodo);
router.delete("/:id", TodosController.deleteTodo);

export default router;
