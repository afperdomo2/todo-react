import React from "react";

import { ChangeAlert } from "../components/ChangeAlert";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal";
import { TodoCounter } from "../components/TodoCounter";
import { TodoForm } from "../components/TodoForm";
import { TodoHeader } from "../components/TodoHeader";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { useTodos } from "./useTodos";

function App() {
  const { states, stateUpdaters } = useTodos();
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
  } = states;

  const {
    setSearchValue,
    addTodo,
    completeToggleTodo,
    deleteTodo,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-lg-7 col-md-12 col-sm-12">
        <div className="card-body">
          <h1 className="card-header text-primary ps-0">TODO React</h1>

          <TodoHeader loading={loading}>
            <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
            />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </TodoHeader>

          <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmpty={() => <TodosLoading />}
            render={(todo, index) => (
              <TodoItem
                key={todo.text}
                index={index}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeToggleTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )}
          />

          <Modal>
            <TodoForm addTodo={addTodo} loading={loading} />
          </Modal>

          <CreateTodoButton loading={loading} />

          <ChangeAlert sincronize={sincronizeTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
