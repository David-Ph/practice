import { ReactNode } from "react";

type TodoProps = {
  children?: ReactNode;
};

const TodoItem = (props: TodoProps) => {
  return <li>{props.children}</li>;
};

export default TodoItem;
