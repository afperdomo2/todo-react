import React from "react";

function CreateTodoButton({ loading }) {
  return (
    <div className="d-flex justify-content-center mt-4 mb-2">
      <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
        disabled={loading}
      >
        + Agregar tarea
      </button>
    </div>
  );
}

export { CreateTodoButton };
