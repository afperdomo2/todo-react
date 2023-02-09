import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="col-12 my-5">
            <input
                className="col-12 form-control form-control-lg text-left"
                placeholder="Busca una tarea..."
                onChange={onSearchValueChange}
                value={searchValue}
            />
        </div>
    );
}

export { TodoSearch };
