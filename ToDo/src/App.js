function App({ $target, initialState }) {
  new Header({
    $target,
    text: `Simple Todo List`,
  });
  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];
      todoList.setState(nextState);

      storage.setItem("todos", JSON.stringify(nextState));
    },
    onCount: (count) => {
      const nextState = count;
      todoCount.setState(nextState);
  }
  });

  const todoList = new TodoList({
    $target,
    initialState,

  });

  const todoCount = new TodoCount({
    $target,
    initialState : initialState
  });
}
