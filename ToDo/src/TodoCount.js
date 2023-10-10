import { setItem } from "./storage.js";

export default function TodoCount({ $target, initialState }) {


  const $div = document.createElement("div");
  $target.appendChild($div);


  const todovalidateTest = (nextState) => {
    return nextState.filter((todo) => {
      return todo.text && todo.isCompleted !== undefined && todo.id;
    });
  };

  if (!new.target) {
    throw new Error("컴포넌트 앞에 new를 붙여서 생성해주세요");
  }
  if (todovalidateTest(initialState)) {
    this.state = todovalidateTest(initialState);
  }

  this.setState = (nextState) => {
    this.state = todovalidateTest(nextState);
    this.render();

    setItem("todos", JSON.stringify(this.state));
  };

  this.render = () => {
    const completedCount = this.state.filter((todo) => todo.isCompleted).length;
    const totalCount = this.state.length;

    $div.innerHTML = `
            <strong>Completed : ${completedCount} /  Total : ${totalCount}</storng>
        `;
  };
  this.render();
}