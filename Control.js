import { View } from "./View.js";
import Model from "./Model.js";

export default function Control(box) {
  const onSubmit = (value) => {
    Model(value);
    view.render();
    // 여기서 이제 rendering함
  };

  const view = new View(box, onSubmit);
  view.init();
  view.renderInit();
}
