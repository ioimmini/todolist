import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import { getItem } from "./storage.js";

export default function App({ $target, initialState }) {
  if (!new.target) {
    throw new Error("컴포넌트 앞에 new를 붙여서 생성해주세요");
  }

  const updateState = (state) => {
    todoList.setState(state);
    todoCount.setState(state);
  };

  new Header({
    $target,
    text: "Simple Todo List",
  });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      let count = 0;
      const todos = getItem("todos");
      
      if (todos?.length) {
        count = Number(todos[todos.length - 1].id);
      }
      const nextState = [
        ...todoList.state,
        {
          text,
          id: count + 1,
          isCompleted: false,
        },
      ];
      updateState(nextState);
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,

    deleteTodo: (btnId) => {
      const nextState = [
        ...todoList.state.filter((todo) => {
          return todo.id !== Number(btnId);
        }),
      ];

      updateState(nextState);
    },

    clickTodo: (todoId) => {
      const nextState = [
        ...todoList.state.map((todo) => {
          if (todo.id === Number(todoId)) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        }),
      ];
      updateState(nextState);
    },
  });
  const todoCount = new TodoCount({
    $target,
    initialState,
  });
}