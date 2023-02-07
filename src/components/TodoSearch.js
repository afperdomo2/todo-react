import React from "react";

function TodoSearch() {
    return (
        <div className="col-12 my-5">
            <input
                className="col-12 form-control form-control-lg text-left"
                placeholder="Buscar una tarea..."
            />
        </div>
    );
}

export { TodoSearch };
