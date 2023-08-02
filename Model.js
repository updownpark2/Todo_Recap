export default function Model(value) {
  // 여기서 localstorage에 넣어버려

  // 넣을 땐 stringfy
  // 꺼낼 땐 parse
  const data = JSON.stringify([value]);
  const saved = localStorage.getItem("todo");

  if (saved === null) {
    localStorage.setItem("todo", data);
  } else if (saved !== null) {
    const newData = JSON.stringify([...JSON.parse(saved), ...JSON.parse(data)]);
    localStorage.setItem("todo", newData);
  }
}
