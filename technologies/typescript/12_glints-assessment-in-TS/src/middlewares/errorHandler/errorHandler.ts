import type { ErrorRequestHandler } from "express";

type errorType = {
  statusCode: number;
  messages: string;
};

const errorHandler: ErrorRequestHandler = (err: errorType, req, res, next) => {
  console.log("hello from error handler", err);
  res.status(err.statusCode || 500).json({
    errors: err.messages,
  });
};

export default errorHandler;