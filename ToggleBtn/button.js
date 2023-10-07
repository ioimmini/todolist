function TimerButton({ $target, text, timer = 3000 }) {
  const button = new ToggleButton({
    $target,
    text,
    onClick: () => {
      setTimeout(() => {
        button.setState({
          ...button.state,
          toggled: !button.state.toggled,
        });
      }, timer);
    },
  });
}

function ToggleButton({ $target, text, onClick }) {
  const $button = document.createElement("button");
  $target.appendChild($button);
  // let clickCount = 0;

  this.state = {
    clickCount: 0,
    toggled: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $button.textContent = text;

    $button.style.textDecoration = this.state.toggled ? "line-through" : "none";
  };

  $button.addEventListener("click", () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      toggled: !this.state.toggled,
    });

    // clickCount++;
    // if ($button.style.textDecoration === "line-through") {
    //   $button.style.textDecoration = "none";
    // } else {
    //   $button.style.textDecoration = "line-through";
    // }

    if (onClick) {
      onClick(this.state.clickCount);
    }
    // if(clickCount % 3 === 0) {
    //   alert('3번째 클릭!')
    // }
  });

  this.render();
}

function ButtonGroup({ $target, buttons }) {
  const $group = document.createElement("div");
  let isInit = false;

  this.render = () => {
    if (!isInit) {
      buttons.forEach(({type, ...props}) => {
        if (type === "toggle") {
          new ToggleButton({ $target: $group, ...props });
        } else if (type === "timer") {
          new TimerButton({ $target: $group, ...props });
        }
      });
      $target.appendChild($group);
      isInit = true;
    }
  };

  this.render();
}

const $app = document.querySelector("#app");

new ButtonGroup({
  $target: $app,
  buttons: [
    {
      type: "toggle",
      text: 'toggle button',
    },
      {
        type: "toggle",
        text: 'toggle button',
      },
      {
        type: "timer",
        text: 'timer',
        timer : 1000
        }
  ]
});

