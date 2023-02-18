import StepCondition from "./MainArea/StepCondition.js"
import FormArea from "./MainArea/FormArea.js"
import ProgressControl from "./MainArea/ProgressControl.js";

import styles from "../stylesheets/css/App.css"

export default function MainArea() {
  return(
    <div className ="main-area">
      <StepCondition />
      <FormArea />
      <ProgressControl />
    </div>
  )
}