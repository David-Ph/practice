import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const TodoItems: Todo[] = [
    { id: 1, text: "Learn React!" },
    { id: 2, text: "With Typescript!" },
  ];

  const addTodoHandler = (text: string) => {
    TodoItems.push({
      id: TodoItems.length,
      text: text,
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={TodoItems} />
    </div>
  );
}

export default App;
