export default function Model(value) {
  // 여기서 localstorage에 넣어버려

  // 넣을 땐 stringfy
  // 꺼낼 땐 parse
  const data = JSON.stringify([value]);
  // localstorage를 배열형태로 넣을땐 stringfy해야함
  const saved = localStorage.getItem("todo");

  if (saved === null) {
    // 만약 저장된 내용이 없다면?
    localStorage.setItem("todo", data);
    // 방금 들어온 todo만 저장
  } else if (saved !== null) {
    //만약 저장된 내용이 있다면?
    const newData = JSON.stringify([...JSON.parse(saved), ...JSON.parse(data)]);
    // 이전의 todo와 새로운 todo를 합쳐 새로운 변수에저장
    localStorage.setItem("todo", newData);
    // JSON.stringfy된 배열을 localstrage에 넣음
  }
}
