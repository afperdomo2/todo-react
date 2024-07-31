/**
 * React Context es una característica de React que permite a los componentes
 * compartir datos sin necesidad de pasar explícitamente props a través de la
 * jerarquía de componentes. En lugar de eso, se define un objeto de contexto
 * que se puede acceder desde cualquier componente que esté envuelto en un
 * proveedor de contexto. Esto simplifica la gestión de estados compartidos y
 * reduce la necesidad de pasar props de manera repetitiva a través de
 * múltiples niveles de componentes.
 */
import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

function useTodos() {
  const defaultTodos = [];
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  let searchedTodos = [];
  if (searchValue.length > 0) {
    searchedTodos = todos.filter((todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });
  } else {
    searchedTodos = todos;
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const completeToggleTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
  };

  const stateUpdaters = {
    setSearchValue,
    addTodo,
    completeToggleTodo,
    deleteTodo,
    sincronizeTodos,
  };

  return { states, stateUpdaters };
}

export { useTodos };
