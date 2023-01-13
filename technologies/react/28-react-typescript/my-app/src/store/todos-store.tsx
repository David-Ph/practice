import React, { useState } from "react";
import Todo from "../models/todo";

interface TodosContextProviderProps {
  children?: React.ReactNode;
}

interface TodosContextSignature {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

// we can use generic type here
// to better describe the todos context
export const TodosContext = React.createContext<TodosContextSignature>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = (props: TodosContextProviderProps) => {
  // When using useState, we have to explicitly tell typescript
  // what kind of array is it
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodoItems((todos) =>
      todos.concat({
        id: crypto.randomUUID(),
        text: text,
      })
    );
  };

  const removeTodoHandler = (id: string) => {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextSignature = {
    items: todoItems,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
