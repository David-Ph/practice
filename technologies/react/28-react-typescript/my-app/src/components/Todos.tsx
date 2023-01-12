import { ReactNode } from "react";
import Todo from "../models/todo";

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
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
