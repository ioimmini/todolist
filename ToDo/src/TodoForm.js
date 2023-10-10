export default function TodoForm({ $target, onSubmit }) {
  if (!new.target) {
    throw new Error("컴포넌트 앞에 new를 붙여서 생성해주세요");
  }

  const $form = document.createElement("form");
  $target.appendChild($form);

  this.render = () => {

    $form.innerHTML = `
            <input type="text" name="todo" />
            <button>Add</button>
        `;

    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      const $todo = $form.querySelector("input[name=todo]");
      const text = $todo.value;
      
      if (text.length > 1) {
        $todo.value = "";
        onSubmit(text);
      }
    });
  };
  this.render();
}