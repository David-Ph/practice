import { Document, Types } from "mongoose";

export interface ItemInterface extends Document {
  _id: Types.ObjectId;
  name: string;
  stock: number;
  price: number;
  category: string;
  previousStock: number;
}
