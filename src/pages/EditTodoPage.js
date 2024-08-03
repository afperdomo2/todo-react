import { useParams } from "react-router-dom";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../hooks/useTodos";
import { TodosLoading } from "../components/TodosLoading";

function EditTodoPage() {
  const params = useParams();
  const { states, stateUpdaters } = useTodos();

  const { loading, getTodo } = states;
  const { updateTodo } = stateUpdaters;

  const id = params.id;
  const todo = loading ? "" : getTodo(id);

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-lg-7 col-md-12 col-sm-12">
        <div className="card-header text-primary ps-2">
          <h1>Editar todo</h1>
        </div>

        <div className="card-body">
          {loading ? (
            <TodosLoading />
          ) : (
            <TodoForm updateTodo={updateTodo} defaultValue={todo.text} />
          )}
        </div>
      </div>
    </div>
  );
}

export { EditTodoPage };
