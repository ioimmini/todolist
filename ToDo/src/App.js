import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import { setItem } from "./storage.js";

export function updateLocalStorage(data) {
  localStorage.setItem("todos", JSON.stringify(data));
}
export default function App({ $target, initialState }) {
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
    onClick: (count) => {
      const nextState = count;
      todoCount.setState(nextState);
    },
  });

  const todoCount = new TodoCount({
    $target,
    initialState: initialState,
  });

  new TodoForm({
    $target,
    initialState,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];
      todoList.setState(nextState);

      setItem("todos", JSON.stringify(nextState));
    },
    onClick: (count) => {
      const nextState = count;
      todoCount.setState(nextState);
    },
  });
}
