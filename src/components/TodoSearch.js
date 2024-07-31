import React from "react";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="col-12 my-4">
      <input
        type="search"
        className="col-12 form-control form-control-lg text-left"
        placeholder="Busca una tarea..."
        onChange={onSearchValueChange}
        value={searchValue}
        disabled={loading}
      />
    </div>
  );
}

export { TodoSearch };
