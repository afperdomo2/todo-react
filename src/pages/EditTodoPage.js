import { useLocation, useParams } from "react-router-dom";

import { TodoForm } from "../components/TodoForm";
import { TodosLoading } from "../components/TodosLoading";
import { useTodos } from "../hooks/useTodos";

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();
  const { states, stateUpdaters } = useTodos();

  const { loading, getTodo } = states;
  const { updateTodo } = stateUpdaters;

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-lg-7 col-md-12 col-sm-12">
        <div className="card-header text-primary ps-2">
          <h1>Editar todo</h1>
        </div>

        <div className="card-body">
          {location.state?.todo ? (
            <TodoForm
              updateTodo={updateTodo}
              defaultValue={location.state.todo.text}
            />
          ) : loading ? (
            <TodosLoading />
          ) : (
            <TodoForm
              updateTodo={updateTodo}
              defaultValue={getTodo(params.id).text}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export { EditTodoPage };
