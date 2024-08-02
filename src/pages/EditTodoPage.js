import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../hooks/useTodos";

function EditTodoPage() {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-lg-7 col-md-12 col-sm-12">
        <div className="card-header text-primary ps-2">
          <h1>Editar todo</h1>
        </div>

        <div className="card-body">
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export { EditTodoPage };
