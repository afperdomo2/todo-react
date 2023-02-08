import React from "react";

function TodoSearch() {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <div className="col-12 my-5">
            <input
                className="col-12 form-control form-control-lg text-left"
                placeholder="Buscar una tarea..."
                onChange={onSearchValueChange}
            />
        </div>
    );
}

export { TodoSearch };
