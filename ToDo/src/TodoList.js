import { setItem } from "./storage.js";

export default function TodoList({
  $target,
  initialState,
  deleteTodo,
  clickTodo,
}) {
  const $todoList = document.createElement("div");
  $target.appendChild($todoList);

  if (!new.target) {
    throw new Error("컴포넌트 앞에 new를 붙여서 생성해주세요");
  }

  const todovalidateTest = (nextState) => {
    return nextState.filter((todo) => {
      return todo.text && todo.isCompleted !== undefined && todo.id;
    });
  };

  if (todovalidateTest(initialState)) {
    this.state = todovalidateTest(initialState);
  }

  this.setState = (nextState) => {
    this.state = todovalidateTest(nextState);
    this.render();
    setItem("todos", JSON.stringify(this.state));
  };

  this.render = () => {
    $todoList.innerHTML = `
          <ul>
              ${this.state
                .map(
                  (todo) =>
                    `<li id=${todo.id}><span style= "${
                      todo.isCompleted
                        ? "text-decoration:line-through;"
                        : "text-decoration:none;"
                    }" id=${todo.id}> ${todo.text}</span><button id=${
                      todo.id
                    }> x </button></li>`
                )
                .join("")}
          </ul>
      `;


    $todoList.querySelectorAll("span").forEach((todoItem) => {
      todoItem.addEventListener("click", (e) => {
        clickTodo(e.target.id);
      });
    });

    $todoList.querySelectorAll("button").forEach((todoDelBtn) => {
      todoDelBtn.addEventListener("click", (e) => {
        deleteTodo(e.target.id);
      });
    });
  };
  this.render();
}