export class Model {
  #newData = JSON.parse(localStorage.getItem("todo"));

  saveLocal(value) {
    const data = JSON.stringify([value]);
    // localstorage를 배열형태로 넣을땐 stringfy해야함
    const saved = localStorage.getItem("todo");

    if (saved === null) {
      // 만약 저장된 내용이 없다면?
      localStorage.setItem("todo", data);
      // 방금 들어온 todo만 저장
    } else if (saved !== null) {
      //만약 저장된 내용이 있다면?
      this.#newData = [...JSON.parse(saved), ...JSON.parse(data)];
      // 이전의 todo와 새로운 todo를 합쳐 새로운 변수에저장
      localStorage.setItem("todo", JSON.stringify(this.#newData));
      // JSON.stringfy된 배열을 localstrage에 넣음
    }
  }

  deleteLocal(LiId) {
    //여기서 LIID를받아와서 제거해야함
    //saved된것을 기준으로 index와 같다면 제거하고 다시 넣어줌
    this.#newData = this.#newData.filter(
      (item, index) => index !== parseInt(LiId)
    );
    // this.#newData를 filter 메소드를 이용해서 수정

    localStorage.setItem("todo", JSON.stringify(this.#newData));
    // 그 후 localStorage에 저장
  }
}
