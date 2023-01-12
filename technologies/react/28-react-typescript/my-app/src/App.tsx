import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const TodoItems: Todo[] = [
    { id: 1, text: "Learn React!" },
    { id: 2, text: "With Typescript!" },
  ];

  return (
    <div>
      <Todos items={TodoItems} />
    </div>
  );
}

export default App;
