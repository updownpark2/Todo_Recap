import { View } from "./View.js";
import { Model } from "./Model.js";

export default function Control(box) {
  const model = new Model();

  const onSubmit = (value) => {
    model.saveLocal(value);
    // value를 Model 함수로 보내 localstorage에 저장하도록함
    view.render();
    // localstorage에 저장된 데이터를 뽑아서 rendering 함
    // 이때 BTN addEventListener가 등록됨
  };
  const onClick = (LiId) => {
    model.deleteLocal(LiId);

    view.render();
  };

  const view = new View(box, onSubmit, onClick);
  // 생성자함수로 view 함수 생성
  view.init();
  // view에 필요한 form, input을 생성
  view.renderInit();
  // 저장되어있는 todo를 rendering
  // 이때 BTN addEventListener가 등록됨
}
