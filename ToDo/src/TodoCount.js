function TodoCount({ $target, initialState }) {
  const $count = document.createElement("div");

  $target.appendChild($count);

  this.state = {
    count: initialState.length,
  };

  this.setState = (nextState) => {
    this.state.count = nextState;
    this.render();
  };

  this.render = () => {
    $count.textContent = `${this.state.count}`;
  };

  this.render();
}
