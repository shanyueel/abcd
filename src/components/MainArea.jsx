import StepCondition from "./MainArea/StepCondition.jsx"
import FormArea from "./MainArea/FormArea.jsx"
import ProgressControl from "./MainArea/ProgressControl.jsx";

import styles from "../stylesheets/css/App.css"

export default function MainArea() {
  return(
    <div className ="main-area">
      <h1 className="container">結帳</h1>
      <StepCondition />
      <FormArea />
      <ProgressControl />
    </div>
  )
}