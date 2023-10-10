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
      // Update the count in localStorage or perform any desired action
      localStorage.setItem("todoCount", count.toString());
    },
  });

  const todoCount = new TodoCount({
    $target,

  });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];
      todoList.setState(nextState);
  
      setItem('todos', JSON.stringify(nextState))
      // Increment the count in localStorage
      const count = parseInt(localStorage.getItem("todoCount")) || 0;
      localStorage.setItem("todoCount", (count + 1).toString());
      updateLocalStorage(nextState);
    },
  });
  
}