export default function TodoCount({ $target }) {
  const $todoCount = document.createElement("div");
  $target.appendChild($todoCount);

  // Initialize the count from localStorage
  let count = parseInt(localStorage.getItem("todoCount")) || 0;

  this.setState = (nextState) => {
    count = nextState;
    localStorage.setItem("todoCount", count.toString()); // Update localStorage
    this.render();
  };

  this.render = () => {
    $todoCount.innerHTML = `Completed Count : /Total Count: ${count}`;
  };

  this.render();
}
