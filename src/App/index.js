import React from "react";
import { AppUI } from "./appUI";

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos = [];
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  };

  const completeToggleTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
