import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TodoForm(props) {
  const navigate = useNavigate();
  const params = useParams();

  const [newTodoValue, setNewTodoValue] = useState(props.defaultValue);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue === "") {
      return alert("Escriba una tarea");
    }
    if (params.id) {
      navigate("/");
      props.updateTodo(params.id, newTodoValue);
    } else {
      setNewTodoValue("");
      props.addTodo(newTodoValue);
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
          {params.id && (
            <button
              type="button"
              className="btn btn-danger form-control me-2"
              onClick={onCancel}
            >
              Cancelar
            </button>
          )}
          <button type="submit" className="btn btn-success form-control">
            {params.id ? "Editar" : "Agregar"}
          </button>
        </div>
      </div>
    </form>
  );
}

export { TodoForm };
