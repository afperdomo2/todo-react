import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../hooks/useTodos";

function EditTodoPage() {
  const { stateUpdaters } = useTodos();
  const { updateTodo } = stateUpdaters;

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-lg-7 col-md-12 col-sm-12">
        <div className="card-header text-primary ps-2">
          <h1>Editar todo</h1>
        </div>

        <div className="card-body">
          <TodoForm updateTodo={updateTodo} />
        </div>
      </div>
    </div>
  );
}

export { EditTodoPage };
