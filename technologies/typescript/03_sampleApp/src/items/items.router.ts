/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";
/**
 * Router Definition
 */
export const ItemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
ItemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e);
  }
});
// GET items/:id
ItemsRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const item: Item = await ItemService.find(parseInt(req.params.id));

    if (!item) return res.status(404).send("Not found");

    res.status(200);
  } catch (error) {
    res.status(500).send(error);
  }
});
// POST items
ItemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const createItem: BaseItem = req.body;

    const newItem = await ItemService.create(createItem);

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PUT items/:id
ItemsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const itemUpdate: BaseItem = req.body;

    const findItem = await ItemService.find(id);

    if (!findItem) return res.status(404).send("Not Found");

    const updateItem = await ItemService.update(id, itemUpdate);

    res.status(201).json(updateItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE items/:id
ItemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const deleteItem = await ItemService.remove(id);

    if (!deleteItem) return res.status(404).send("Not found");

    res.status(200).send("Deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});
