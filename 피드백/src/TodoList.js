import { setItem } from "./storage.js";

// $target - 해당 컴포넌트가 추가될 DOM 엘리먼트
// initialState - 해당 컴포넌트의 초기 상태

export default function TodoList({
  $target,
  initialState,
  onRemove,
  onCountMinus,
  onClickTodo,
  onCompleted,
}) {
  const $todoList = document.createElement("div");
  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
    setItem("todos", JSON.stringify(this.state));
  };

  this.render = () => {
    $todoList.innerHTML = `
              <ul>
                  ${this.state
                    .map(
                      ({ text, isCompleted }, idx) =>
                        `<li id=${idx}><span id=${idx} style="text-decoration: ${
                          isCompleted ? "line-through" : "none"
                        }">              
                        ${text}</span>
                        <button class="delete-button">X</button>
                        </li>`
                    )
                    .join("")}
              </ul>
          `;
    const deleteButtons = $todoList.querySelectorAll(".delete-button");

    $todoList.querySelectorAll("span").forEach((todoItem) => {
      todoItem.addEventListener("click", (e) => {
        //
        onClickTodo(e.target.id); // 1  // 2 // 3
        onCompleted(e.target.id);
      });
    });

    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const btnId = button.parentElement.getAttribute("id"); // 클릭한 삭제 버튼 의 id값 가져오기
        onRemove(btnId);
        onCountMinus(--initialState.length);
      });
    });
  };

  this.render();
}
