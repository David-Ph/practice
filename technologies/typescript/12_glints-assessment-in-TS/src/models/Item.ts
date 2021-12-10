import mongoose from "mongoose";
import { ItemInterface } from "../interfaces/ItemInterface";
import { History } from "./History";

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
    price: {
      type: Number,
      default: 0,
      min: 0,
      required: [true, "Price can't be empty"],
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

ItemSchema.statics.createHistoryEntry = async function (item: ItemInterface) {
  try {
    // check if stock has changed
    if (item.previousStock === item.stock) {
      return;
    }

    // create new history
    await History.create({
      item: item._id,
      previousStock: item.previousStock,
      modifiedBy: item.stock - item.previousStock,
      newStock: item.stock,
    });

    item.previousStock = item.stock;
    await item.save();
  } catch (error) {
    return;
  }
};

ItemSchema.post("findOneAndUpdate", function (doc) {
  // check if stock has changed
  doc.constructor.createHistoryEntry(doc);
});

const Item = mongoose.model<ItemInterface>("Item", ItemSchema);

export { Item };
