import mongoose from "mongoose";
import { ItemInterface } from "../interfaces/ItemInterface";

const ItemSchema = new mongoose.Schema<ItemInterface>(
  {
    name: {
      type: String,
      required: [true, "Item name can't be empty"],
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
      required: [true, "Stock can't be empty"],
    },
    category: {
      type: String,
      required: [true, "Category can't be empty"],
    },
    previousStock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    toJSON: {
      versionKey: false,
    },
  }
);

const Item = mongoose.model<ItemInterface>("Item", ItemSchema);

export { Item };
