import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TodoForm({ addTodo }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const isEditing = pathname.includes("/edit/");
  // const todoId = pathname.replace("/edit/", "");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue === "") {
      return alert("Escriba una tarea");
    }
    addTodo(newTodoValue);
    setNewTodoValue("");
    if (isEditing) {
      navigate("/");
    }
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex flex-row py-2">
        <div className="col-md-8 pe-3">
          <input
            className="form-control"
            placeholder="Ingrese una tarea..."
            value={newTodoValue}
            onChange={onChange}
          />
        </div>
        <div className="col-md-4 d-flex justify-content-between">
          {isEditing && (
            <button
              type="button"
              className="btn btn-danger form-control me-2"
              onClick={onCancel}
            >
              Cancelar
            </button>
          )}
          <button type="submit" className="btn btn-success form-control">
            {isEditing ? "Editar" : "Agregar"}
          </button>
        </div>
      </div>
    </form>
  );
}

export { TodoForm };
