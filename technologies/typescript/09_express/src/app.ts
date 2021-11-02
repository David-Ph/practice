// const express = require("express");
// const app = express();

import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todoRoutes);

// err handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log("Listening to 3000...."));
