import StepCondition from "./MainArea/StepCondition.js"
import FormArea from "./MainArea/FormArea.js"
import ProgressControl from "./MainArea/ProgressControl.js";

export default function MainArea() {
  return(
    <div className ="main-area">
      <StepCondition />
      <FormArea />
      <ProgressControl />
    </div>
  )
}