// import dependencies
import express, { RequestHandler } from "express";
import * as dotenv from "dotenv";

// initialize express
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Express setting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ info: "Health check okay!" });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
