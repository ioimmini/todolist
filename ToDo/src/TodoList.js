import { updateLocalStorage } from "./App.js";

export default function TodoList({ $target, initialState, onClick }) {
  const $todoList = document.createElement("div");
  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
    updateLocalStorage(nextState);
  };

  this.toggleCompletion = (index) => {
    const nextState = [...this.state];
    nextState[index].isCompleted = !nextState[index].isCompleted;
    this.setState(nextState);

    // Update the count when an item is toggled
    const updatedCount = calculateCount(nextState); // Implement this function to calculate the count
    onClick(updatedCount);
  };

  this.removeTodo = (index) => {
    const nextState = [
      ...this.state.slice(0, index),
      ...this.state.slice(index + 1),
    ];
    this.setState(nextState);

    // Update the count when an item is removed
    onClick(--initialState.length);
  };

  this.render = () => {
    $todoList.innerHTML = `
      <ul>
        ${this.state
          .map(
            (todo, index) =>
              `<li${todo.isCompleted ? ' class="completed"' : ""}>
                 <span class="todo-text">${todo.text}</span>
                 <button class="delete-button" data-index="${index}">❌</button>
                 <button class="complete-button" data-index="${index}">${
                todo.isCompleted ? "✓" : "○"
              }</button>
               </li>`
          )
          .join("")}
      </ul>
    `;
  };

  // Event delegation for handling both completion toggle and delete
  $todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      this.removeTodo(index);
    } else if (e.target.classList.contains("complete-button")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      this.toggleCompletion(index);
    }
  });

  this.render();
}
