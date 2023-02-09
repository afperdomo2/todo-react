import React from "react";

function TodoCounter({ total, completed }) {

    const percentage = Math.round((completed * 100) / total);

    return (
        <>
            <h4 className="text-secondary mt-4">Has completado {completed} de {total} tareas</h4>
            <div className="progress mb-4">
                <div
                    className={`progress-bar bg-${percentage === 100 ? 'success' : 'info'}`}
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${percentage}%` }}
                >
                    {percentage === 100 ? 'completado' : `${percentage} %`}
                </div>
            </div>
        </>
    );
}

export { TodoCounter };
