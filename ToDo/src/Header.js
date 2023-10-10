
export default function Header({ $target, text }) {
  if (!new.target) {
    throw new Error("컴포넌트 앞에 new를 붙여서 생성해주세요");
  }
  const $header = document.createElement("h1");

  $target.appendChild($header);

  this.render = () => {
    $header.textContent = text;
  };

  this.render();
}