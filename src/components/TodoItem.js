import React from "react";

function TodoItem(props) {
  return (
    <div className="card mb-2">
      <div className="card-body d-flex pb-0">
        <div className="form-check col-md-9 mt-1 mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked={props.completed}
            onClick={props.onComplete}
            id={`check_${props.id}`}
          />
          <label
            className={`form-check-label ${
              props.completed && "text-success text-decoration-line-through"
            }`}
            htmlFor={`check_${props.id}`}
          >
            {props.text}
          </label>
        </div>

        <div className="col-md-3 mb-3 d-flex justify-content-end">
          <button
            className="btn btn-sm btn-primary me-2"
            onClick={props.onEdit}
          >
            Editar
          </button>

          <button className="btn btn-sm btn-danger" onClick={props.onDelete}>
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
}

export { TodoItem };
