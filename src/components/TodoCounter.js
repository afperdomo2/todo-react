import React from "react";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  const percentage = Math.round((completedTodos * 100) / totalTodos) || 0;

  return (
    <>
      <h4 className={`text-secondary mt-4 ${loading ? "opacity-25" : ""}`}>
        Has completado {completedTodos} de {totalTodos} tareas
      </h4>

      <div className="progress mb-4">
        <div
          className={`progress-bar bg-${
            percentage === 100 ? "success" : "info"
          }`}
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${percentage}%` }}
        >
          {percentage === 100 ? "completado" : `${percentage} %`}
        </div>
      </div>
    </>
  );
}

export { TodoCounter };
