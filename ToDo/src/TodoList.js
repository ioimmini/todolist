//params.$target - 해당 컴포넌트가 추가가 될  DOM 요소
// params.initialState - 해당 컴포넌트의 초기 상태

function TodoList({ $target, initialState, onClick }) {
  const $todoList = document.createElement("div");
  const $removeButton = document.createElement("button");

  $target.appendChild($todoList);
  $target.appendChild($removeButton);

  let isInit = false;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.removeTodo = (index) => {
    this.state.splice(index, 1);
    this.setState(this.state);
  };

  this.render = () => {
    // this.state = [{ text : '자바스크립트 공부하기 }, { text : '...' }]

    // map을 돈 이후에는 아래 처럼 만들어진다
    /*
     * this.state.map(todo => `<li>${todo.text}</li>`)
     * ['<li>자바스크립트 공부하기</li>,<li> ...</li>]
     * *join('')
     * ['<li>자바스크립트 공부하기</li><li> ...</li>]
     */

    $todoList.innerHTML = `
        <ul>
        ${this.state
          .map(
            (todo, index) =>
              `<li>${todo.text}  <button class='delete-button'>❌</button></li>`
          )
          .join("")}
        </ul>
        `;

    if (!isInit) {
      $todoList.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("delete-button")) {
          const index = parseInt(e.target.getAttribute("data-index"));
          this.removeTodo(index);
        
        }
      });

      isInit = true;
    }
  };

  this.render();
}
