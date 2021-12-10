import { Document, Types } from "mongoose";

export interface HistoryInterface extends Document {
  _id: Types.ObjectId;
  item: { type: Types.ObjectId; ref: "Item" };
  previousStock: number;
  modifiedBy: number;
  newStock: number;
}
