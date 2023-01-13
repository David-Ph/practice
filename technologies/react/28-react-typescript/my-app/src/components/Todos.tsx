import { ReactNode, useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-store";

type TodosProps = {
  children?: ReactNode;
};

/* 
this method is outdated and not encouraged
const Todos: React.FC<{ items: string[] }> = (props) => {
  return <ul>{}</ul>;
};
*/

const Todos = (props: TodosProps) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} id={item.id}>
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
