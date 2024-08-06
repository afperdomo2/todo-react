const newTodoId = () => {
  return Date.now().toString(16);
};

export { newTodoId };
