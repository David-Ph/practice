import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["Learn React!", "With Typescript!"]} />
    </div>
  );
}

export default App;
