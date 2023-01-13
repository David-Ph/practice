import React, { ReactNode, useContext } from "react";
import { TodosContext } from "../store/todos-store";
import classes from "./TodoItem.module.css";

type TodoProps = {
  children?: ReactNode;
  id: string;
};

const TodoItem = (props: TodoProps) => {
  const todosCtx = useContext(TodosContext);

  const removeTodo = () => {
    todosCtx.removeTodo(props.id);
  };

  return (
    <li className={classes.item} onClick={removeTodo}>
      {props.children}
    </li>
  );
};

export default TodoItem;
