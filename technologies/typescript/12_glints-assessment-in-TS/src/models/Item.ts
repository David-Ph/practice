import mongoose from "mongoose";

interface ItemInterface {
  name: string;
  stock: number;
  price: number;
  category: string;
  previousStock: number;
}

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

module.exports = mongoose.model<ItemInterface>('Item', ItemSchema);