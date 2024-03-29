import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-store";
import classes from "./NewTodo.module.css";

interface NewTodoProps {
  children?: React.ReactNode;
}

function NewTodo(props: NewTodoProps) {
  const todosCtx = useContext(TodosContext);
  // Initially, useRef has no idea what kind of element is using this
  // it could be anything, for example like a button
  // so that's why we have to use generics to be explicit about this
  // we also have explicitly enter an initial value of null
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const text = todoTextInputRef.current?.value;

    if (text?.trim().length === 0 || !text) {
      return;
    }

    todosCtx.addTodo(text);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;
