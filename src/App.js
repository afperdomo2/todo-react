import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import './App.css';

const todos = [
  { text: "Hace mercado", completed: false },
  { text: "Pasear al perro", completed: true },
  { text: "Cortar manzana", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="card col-lg-7 col-md-12 col-sm-12">
          <div className="card-body">
            <h1 className="card-header text-primary ps-0">TODO React</h1>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
              {todos.map((todo, index) => (
                <TodoItem
                  key={index}
                  text={todo.text}
                  completed={todo.completed}
                />
              ))}
            </TodoList>

            <CreateTodoButton />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
