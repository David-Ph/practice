import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const MONGO_URI: string = process.env.MONGO_URI ?? "";
import mongoose from "mongoose";
const uri = mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(err));

export {
  uri as uri
}