import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import { TheirdComponent } from "./FirstComponent";
import LearningJavaScript from "./LearningJavaScript";

export default function LearningComponent() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <TheirdComponent />
      <LearningJavaScript/>
    </div>
  );
}
