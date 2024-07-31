import React from "react";

function TodoForm({ addTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

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
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex flex-row py-2">
        <div className="col-md-9 pe-3">
          <input
            className="form-control"
            placeholder="Ingrese una tarea..."
            value={newTodoValue}
            onChange={onChange}
          />
        </div>
        <div className="col-md-3">
          <button type="submit" className="btn btn-success form-control">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}

export { TodoForm };
