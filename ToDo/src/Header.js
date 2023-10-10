export default function Header({ $target, text}) {
  const $header = document.createElement("header");

  $target.appendChild($header);


  this.render = () => {


    $header.textContent = text;
  };
  this.render();
}

