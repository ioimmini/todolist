export default function TodoForm({ $target, onSubmit, onCountPlus, initialState }) {
  const $form = document.createElement("form");
  // 폼 태그의 기본 동작은 폼을 전송하면 액션에 정의된 url로 보냄
  // 하지만 이대로 되면 새로고침이 일어나므로 기본 동작을 멈춰야한다.
  $target.appendChild($form);

  this.render = () => {
    let isInit = false;
    $form.innerHTML = `
       <input type="text" name="todo"/>
       <button>Add</button> 
      `;
    // 여기 버튼은 기본적으로 type = "submit"

    if (!isInit) {
      $form.addEventListener("submit", (e) => {
        e.preventDefault(); //기본 동작을 방지하는 것
        const $todo = $form.querySelector("input[name = todo]");
        const text = $todo.value;

        if (text.length > 1) {
          $todo.value = "";
          onSubmit(text); //어떻게 구현되었는지 관심은 없지만 넘겨서 호출은 해줌.
          onCountPlus(++initialState.length);
        }
      });
      isInit = true;
    }
  };

  this.render();
}

