import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  // When using useState, we have to explicitly tell typescript
  // what kind of array is it
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  // const TodoItems: Todo[] = [
  //   { id: 1, text: "Learn React!" },
  //   { id: 2, text: "With Typescript!" },
  // ];

  const addTodoHandler = (text: string) => {
    setTodoItems((todos) =>
      todos.concat({
        id: crypto.randomUUID(),
        text: text,
      })
    );
  };

  const removeTodoHandler = (id: string) => {
    const newTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(newTodos);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todoItems} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
