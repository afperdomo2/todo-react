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
import { TodosEmpty } from "../components/TodosEmpty";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { useTodos } from "../hooks/useTodos";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
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

  const editTodo = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-lg-7 col-md-12 col-sm-12">
        <div className="card-header text-primary ps-2">
          <h1>TODO React</h1>
        </div>

        <div className="card-body">
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
            onEmpty={() => <TodosEmpty />}
            render={(todo) => (
              <TodoItem
                id={todo.id}
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeToggleTodo(todo.id)}
                onEdit={() => editTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            )}
          />

          <Modal>
            <TodoForm addTodo={addTodo} />
          </Modal>

          <CreateTodoButton loading={loading} />

          <ChangeAlert sincronize={sincronizeTodos} />
        </div>
      </div>
    </div>
  );
}

export { HomePage };
