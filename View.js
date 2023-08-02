export class View {
  #form;
  #todoListBox;
  #todoArr;
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

  #setTodoListBox() {
    this.#todoArr = JSON.parse(localStorage.getItem("todo"));
    this.#todoListBox.innerHTML = `<ul>
${this.#todoArr
  .map(
    (item, index) => `<li id=${index}>${item}<button>complete !</button></li>`
  )
  .join(``)}
</ul>`;
  }

  renderInit() {
    this.#todoArr = JSON.parse(localStorage.getItem("todo"));
    //여기서 한번만 만드는거지
    const todoListBox = document.createElement("div");
    // div 생성
    this.box.appendChild(todoListBox);
    // 전역 box안에 listBox를 넣음
    this.#todoListBox = todoListBox;
    // 필드값으로 저장해 다른 메서드도 이용할 수 있도록함
    // 외부접근을 막아 사이드 이펙트 감소
    this.#setTodoListBox();
  }
  render() {
    //동적으로 생성해서 붙여넣기
    this.#setTodoListBox();
  }
}
