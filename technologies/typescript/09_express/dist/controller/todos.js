"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
let todosArray = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    todosArray.push(newTodo);
    res.status(201).json({ message: "Success", newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(200).json({ message: "Success", todosArray });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const id = req.params.id;
    const newText = req.body.text;
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
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    todosArray = todosArray.filter((todo) => todo.id !== id);
    res.status(200).json({ message: "Success", todosArray });
};
exports.deleteTodo = deleteTodo;
