export class View {
  #form;
  #todoListBox;
  #todoArr;
  #BTN;
  // form 요소와 todoListBox, todoArr을 class 내부에서만 사용하기위해
  //private filed를 사용

  constructor(box, onSubmit, onClick) {
    this.box = box;
    this.onSubmit = onSubmit;
    this.onClick = onClick;
    // 받아온 매개변수를 class 내부 메소드에서 사용할 수 있도록 this에 바인딩함
  }

  init() {
    const formBox = document.createElement("div");
    const form = document.createElement("form");
    formBox.appendChild(form);
    // form div를 생성하여 form을 최초 1회 생성
    this.#form = form;
    this.box.appendChild(form);
    // 생성한 form div를 box div에 넣음
    form.innerHTML = `<input id="INPUT" placeholder="What to do"><button>제출</button></input>`;
    //input/button 생성
    this.#sendTodo();
    // addEventListener 걸어둠
  }

  #sendTodo() {
    this.#form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.onSubmit(e.target[0].value);
      //매개변수를 이용해서 input data를 control에 전달
      this.#setInput();
      //리셋
    });
  }
  #setInput() {
    const input = document.getElementById("INPUT");
    input.value = ``;
    // input data를 전달 후 input value를 공백으로 초기화
  }

  #setTodoArr() {
    this.#todoArr = JSON.parse(localStorage.getItem("todo"));
    //this.todoArr을 다시 바인딩함 왜?? model에서 localStorage에 새로운 값을 넣었으니까
    //변경된 새로운 값을 가져와야함
  }

  #paintTodoArr() {
    // TodoList를 그려주는 함수
    this.#setTodoArr();
    // todoArr을 새롭게 불러온 후
    this.#todoListBox.innerHTML = `<ul>
${
  this.#todoArr !== null
    ? this.#todoArr
        .map(
          (item, index) =>
            `<li id=${index}>${item}<button class="BTN">complete !</button></li>`
        )
        .join(``)
    : `<h2>할 일이 없습니다 ㅋㅋ</h2>`
}
</ul>`;

    this.#setBtn();
    // 다 그려준 후 btn 바인딩
    this.#sendDelete();
    // eventLisenteer등록
  }
  // todoList를 새롭게 그려넣음
  renderInit() {
    this.#setTodoArr();
    //todoArr을 새로 가져옴, 데이터가 변했기 때문
    // BTN도 새로 바인딩 해주어야함 BTN이 추가되니까
    const todoListBox = document.createElement("div");
    // div 생성, list를 rendering할 div
    this.box.appendChild(todoListBox);
    // 전역 box안에 listBox를 넣음
    this.#todoListBox = todoListBox;
    // 필드값으로 저장해 다른 메서드도 이용할 수 있도록함
    // 외부접근을 막아 사이드 이펙트 감소
    this.#paintTodoArr();
    // 처음에 Paint함
  }

  render() {
    // render는 데이터가 변경될 때마다 실행될 함수임으로
    // 그때마다 todoListBox는 새롭게 그려짐
    this.#paintTodoArr();
    // todo가 제출되면 Paint함
  }

  #setBtn() {
    this.#BTN = document.querySelectorAll(".BTN");
    // this.BTN을 querySelectorAll 메서드로 바인딩
    console.log(this.#BTN);
  }

  #sendDelete() {
    this.#BTN.forEach((btn) =>
      btn.addEventListener("click", (e) =>
        this.onClick(e.target.parentElement.id)
      )
    );
  }
}
