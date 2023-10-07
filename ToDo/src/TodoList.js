//params.$target - 해당 컴포넌트가 추가가 될  DOM 요소
// params.initialState - 해당 컴포넌트의 초기 상태

function TodoList({ $target, initialState }) {
  const $todoList = document.createElement("div");

  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
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
        ${this.state.map(todo => `<li>${todo.text}</li>`).join("")}
        </ul>
        `;
  };

  this.render();
}


