"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsRouter = void 0;
/**
 * Required External Modules and Interfaces
 */
const express_1 = __importDefault(require("express"));
const ItemService = __importStar(require("./items.service"));
/**
 * Router Definition
 */
exports.ItemsRouter = express_1.default.Router();
/**
 * Controller Definitions
 */
// GET items
exports.ItemsRouter.get("/", async (req, res) => {
    try {
        const items = await ItemService.findAll();
        res.status(200).send(items);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
// GET items/:id
exports.ItemsRouter.get("/:id", async (req, res) => {
    try {
        const item = await ItemService.find(parseInt(req.params.id));
        if (!item)
            return res.status(404).send("Not found");
        res.status(200);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// POST items
exports.ItemsRouter.post("/", async (req, res) => {
    try {
        const createItem = req.body;
        const newItem = await ItemService.create(createItem);
        res.status(201).json(newItem);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// PUT items/:id
exports.ItemsRouter.put("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const itemUpdate = req.body;
        const findItem = await ItemService.find(id);
        if (!findItem)
            return res.status(404).send("Not Found");
        const updateItem = await ItemService.update(id, itemUpdate);
        res.status(201).json(updateItem);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// DELETE items/:id
exports.ItemsRouter.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const deleteItem = await ItemService.remove(id);
        if (!deleteItem)
            return res.status(404).send("Not found");
        res.status(200).send("Deleted");
    }
    catch (error) {
        res.status(500).send(error);
    }
});
//# sourceMappingURL=items.router.js.map