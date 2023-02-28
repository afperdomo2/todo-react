import React from "react";

function CreateTodoButton() {
  const onClickButton = (msg) => {
    //alert(msg);
  };

  return (
    <div className="d-flex justify-content-center mt-4 mb-2">
      <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
        onClick={() => onClickButton("Abrir modal")}
      >
        + Agregar tarea
      </button>
    </div>
  );
}

export { CreateTodoButton };
