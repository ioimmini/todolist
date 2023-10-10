import { setItem } from "./storage.js";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";

export default function App({ $target, initialState }) {
  new Header({ $target, text: "Simple Todo List" });

  new TodoForm({
    $target,
    initialState,
    onSubmit: (text) => {
      const nextState = [
        ...todoList.state,
        {
          text,
          isCompleted: false,
        },
      ];
      todoList.setState(nextState);

      setItem("todos", JSON.stringify(nextState));
      const completedCount = nextState.filter(
        (todo) => todo.isCompleted
      ).length;
      todocount.setState({
        total: nextState.length,
        completed: completedCount,
      });
    },
    onCountPlus: (count) => {
      todocount.setState({
        total: count,
        completed: todocount.state.completed + 1,
      });
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
    onRemove: (btnId) => {
      const nextState = [
        ...todoList.state.filter((_, idx) => idx !== parseInt(btnId)),
      ];
      setItem("todos", JSON.stringify(nextState));
      todoList.setState(nextState);
      // 완료된 항목 개수를 업데이트
      const completedCount = nextState.filter(
        (todo) => todo.isCompleted
      ).length;
      todocount.setState({
        total: nextState.length,
        completed: completedCount,
      });
    },
    onCountMinus: (count) => {
      todocount.setState({
        total: count,
        completed: todocount.state.completed,
      });
    },
    onClickTodo: (todoId) => {
      const nextState = [
        ...todoList.state.map((todo, idx) => {
          if (idx === parseInt(todoId)) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        }),
      ];
      todoList.setState(nextState);
      // 완료된 항목 개수를 업데이트
      const completedCount = nextState.filter(
        (todo) => todo.isCompleted
      ).length;
      todocount.setState({
        total: nextState.length,
        completed: completedCount,
      });
    },
    onCompleted: (comple) => {
      const completedCount = todoList.state.filter(
        (todo) => todo.isCompleted
      ).length;
      // 총 개수와 완료된 항목 개수를 업데이트
      todocount.setState({
        total: todoList.state.length,
        completed: completedCount,
      });
    },
  });

  const todocount = new TodoCount({
    $target,
    initialState,
    total: initialState.length, // 초기 총 개수 설정
    completed: 0, // 초기 완료된 항목 개수는 0으로 초기화
  });
}
