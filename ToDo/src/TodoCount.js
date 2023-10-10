export default function TodoCount({ $target, initialState }) {
  const $todoCount = document.createElement("div");
  $target.appendChild($todoCount);

  this.state = {
    count : initialState.length,
  }

  
  this.setState = (nextState) => {
   this.state.count = nextState;
    this.render();
  };

  this.render = () => {
    $todoCount.innerHTML = `Completed Count : /Total Count: ${this.state.count}`;
  };

  this.render();
}
