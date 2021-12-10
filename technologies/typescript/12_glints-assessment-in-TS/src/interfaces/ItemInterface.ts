import { Document } from "mongoose";

export interface ItemInterface extends Document {
  name: string;
  stock: number;
  price: number;
  category: string;
  previousStock: number;
}
