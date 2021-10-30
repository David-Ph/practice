import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uniqid from "uniqid";

function App() {
  // the first arg is all the todos we have (current state)
  // the second arg is the function to update the state
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  // this will only execute once when the page loads
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos) setTodos(localTodos);
  }, []);

  // when todos state changes, execute this function
  // and store the todos in there
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;

    if (!name) return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uniqid(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function clearComplete() {
    let todosCopy = todos.filter((todo) => !todo.complete);
    setTodos(todosCopy);
  }

  return (
    <>
      {/* this is called props, think of this like passing a variable in ejs */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={clearComplete}>Clear Todo</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
