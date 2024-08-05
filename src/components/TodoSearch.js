import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsValue = searchParams.get("search");

  useEffect(() => {
    if (paramsValue && !loading) {
      setSearchValue(paramsValue);
    }
  }, [loading, paramsValue, setSearchValue]);

  const onSearchValueChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setSearchParams({ search: value });
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
