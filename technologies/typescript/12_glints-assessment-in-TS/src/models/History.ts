import { Schema, model, Types, Document } from "mongoose";

import { HistoryInterface } from "../interfaces/HistoryInterface";
import { ItemInterface } from "../interfaces/ItemInterface";

const HistorySchema = new Schema<HistoryInterface>(
  {
    item: {
      type: Types.ObjectId,
      ref: "Item",
      required: [true, "Item can't be empty"],
    },
    previousStock: {
      type: Number,
      required: true,
    },
    modifiedBy: {
      type: Number,
      required: true,
    },
    newStock: {
      type: Number,
      required: true,
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

const History = model<HistoryInterface>("History", HistorySchema);

export { History };
