import { ReactNode } from "react";
import classes from "./TodoItem.module.css";

type TodoProps = {
  children?: ReactNode;
};

const TodoItem = (props: TodoProps) => {
  return <li className={classes.item}>{props.children}</li>;
};

export default TodoItem;
