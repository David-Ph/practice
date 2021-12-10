import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import express from "express";

import errorHandler from "./middlewares/errorHandler/errorHandler";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
  "/api/v1/healthcheck",
  (req: express.Request, res: express.Response) => {
    res.json({ info: "Health check okay!" });
  }
);

app.all("*", async (req, res, next) => {
  try {
    next({
      messages: "Page you're looking for is not found",
      statusCode: 404,
    });
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
