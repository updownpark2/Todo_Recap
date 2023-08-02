export class InputView {
  #form;
  constructor(box, onSubmit) {
    this.box = box;
    this.onSubmit = onSubmit;
  }

  init() {
    const formBox = document.createElement("div");
    const form = document.createElement("form");
    formBox.appendChild(form);

    this.#form = form;
    this.box.appendChild(form);
    form.innerHTML = `<input id="INPUT" placeholder="What to do"><button>제출</button></input>`;

    this.#sendTodo();
  }

  #sendTodo() {
    this.#form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.onSubmit(e.target[0].value);
      //데이터보내고
      this.#resetInput();
      //리셋
    });
  }
  #resetInput() {
    const input = document.getElementById("INPUT");
    input.value = ``;
  }
}
