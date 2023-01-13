import React, { ReactNode } from "react";
import classes from "./TodoItem.module.css";

type TodoProps = {
  children?: ReactNode;
  id: string;
  onRemoveTodo: (id: string) => void;
};

const TodoItem = (props: TodoProps) => {
  const removeTodo = (e: React.MouseEvent) => {
    props.onRemoveTodo(props.id);
  };

  return (
    <li className={classes.item} onClick={removeTodo}>
      {props.children}
    </li>
  );
};

export default TodoItem;
