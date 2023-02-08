import React from "react";

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="col-12 my-5">
            <input
                className="col-12 form-control form-control-lg text-left"
                placeholder="Buscar una tarea..."
                onChange={onSearchValueChange}
                value={searchValue}
            />
            -->{searchValue}
        </div>
    );
}

export { TodoSearch };
