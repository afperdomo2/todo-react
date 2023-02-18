import React from "react";
import { TodoContext } from "./Context/todo";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

function AppUI() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="card col-lg-7 col-md-12 col-sm-12">
          <div className="card-body">
            <h1 className="card-header text-primary ps-0">TODO React</h1>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
              {({
                error,
                loading,
                searchedTodos,
                completeToggleTodo,
                deleteTodo,
              }) => (
                <TodoList>
                  {error && <p>Hubo un error</p>}
                  {loading && <p>Cargando... por favor espera</p>}
                  {!loading && !searchedTodos.length && (
                    <p>¡Crea tu primera tarea!</p>
                  )}

                  {searchedTodos.map((todo, index) => (
                    <TodoItem
                      key={todo.text}
                      index={index}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => completeToggleTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                  ))}
                </TodoList>
              )}
            </TodoContext.Consumer>

            <CreateTodoButton />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { AppUI };
