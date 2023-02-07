import React from "react";

function TodoCounter() {
    return (
        <>
            <h4 className="text-secondary mt-4">Has completado 1 de 5 tareas</h4>
            <div className="progress mb-4">
                <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                >
                    75%
                </div>
            </div>
        </>
    );
}

export { TodoCounter };
