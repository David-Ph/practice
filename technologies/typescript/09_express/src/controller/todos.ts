import { RequestHandler } from "express";
import { Todo } from "../models/todo";

let todosArray: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  todosArray.push(newTodo);

  res.status(201).json({ message: "Success", newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ message: "Success", todosArray });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  const newText = (req.body as { text: string }).text;

  const todoIndex = todosArray.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    throw new Error("Todo not found");
  }

  todosArray[todoIndex] = {
    id: id,
    text: newText,
  };

  res.status(200).json({ message: "Success", newTodo: todosArray[todoIndex] });
};
export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;

  todosArray = todosArray.filter((todo) => todo.id !== id);

  res.status(200).json({ message: "Success", todosArray });
};
