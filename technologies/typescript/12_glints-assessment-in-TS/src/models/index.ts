import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const MONGO_URI: string = process.env.MONGO_URI ?? "";
import mongoose, { ConnectOptions } from "mongoose";
const uri = mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(err));

export { uri as uri };
