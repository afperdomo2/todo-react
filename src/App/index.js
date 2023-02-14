import React from "react";
import { AppUI } from "./appUI";

const defaultTodos = [
  { text: "Hacer mercado", completed: false },
  { text: "Pasear al perro", completed: true },
  { text: "Cortar manzana", completed: true },
  { text: "Comprar zapatos", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  let searchedTodos = [];
  if (searchValue.length > 0) {
    searchedTodos = todos.filter(todo => {
      return todo.text.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    });
  } else {
    searchedTodos = todos;
  }

  const completeToggleTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeToggleTodo={completeToggleTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
