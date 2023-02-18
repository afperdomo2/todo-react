import React from "react";
import { TodoContext } from "../App/Context/todo";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="col-12 my-4">
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
