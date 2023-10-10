export default function TodoCount({ $target, initialState, total, completed }) {
  const $count = document.createElement("div");
  $target.appendChild($count);

  this.state = {
    total: initialState.length,
    completed : initialState.filter((todo) => todo.isCompleted).length, 
  };

  this.setState = ({ total, completed }) => { // total과 completed를 구조분해하여 받도록 수정
    this.state.total = total !== undefined ? total : this.state.total;
    this.state.completed = completed !== undefined ? completed : this.state.completed;
    this.render();
  };

  this.render = () => {
    $count.textContent = `Total: ${this.state.total} Completed: ${this.state.completed}`;
  };

  // render 메서드를 처음에 한 번 호출하여 초기 상태를 설정합니다.
  this.render();
}
