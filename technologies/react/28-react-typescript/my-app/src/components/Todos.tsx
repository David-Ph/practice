import { ReactNode } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type TodosProps = {
  items: Todo[];
  children?: ReactNode;
};

/* 
this method is outdated and not encouraged
const Todos: React.FC<{ items: string[] }> = (props) => {
  return <ul>{}</ul>;
};
*/

const Todos = (props: TodosProps) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id}>{item.text}</TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
