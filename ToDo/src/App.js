function updateLocalStorage(data) {
  localStorage.setItem("todos", JSON.stringify(data));
}
function App({ $target, initialState }) {
  if (localStorage.getItem("todoCount") === null) {
    localStorage.setItem("todoCount", "0");
  }
  new Header({
    $target,
    text: `Simple Todo List`,
  });

  const todoList = new TodoList({
    $target,
    initialState,
  });

  const todoCount = new TodoCount({
    $target,

  });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];
      todoList.setState(nextState);
  
      // Increment the count in localStorage
      const count = parseInt(localStorage.getItem("todoCount")) || 0;
      localStorage.setItem("todoCount", (count + 1).toString());
      updateLocalStorage(nextState);
    },
  });
  
}