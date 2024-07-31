import React from "react";

function TodoList(props) {
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.searchedTodos.length && props.onEmpty()}
      {!props.loading && props.searchedTodos.map(props.render)}

      <div>{props.children}</div>
    </section>
  );
}

export { TodoList };
