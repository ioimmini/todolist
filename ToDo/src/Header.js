function Header({ $target, text}) {
  const $h1 = document.createElement("h1");

  $target.appendChild($h1);


  this.render = () => {


    $h1.textContent = text;
  };
  this.render();
}

