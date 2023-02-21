import Step from "./StepCondition/Step.jsx"

import styles from "../../stylesheets/css/StepCondition.css"

export default function StepCondition() {
  return(
    <div className = "container">
      <h1>結帳</h1>
      <div className = "step-condition">
        <Step number="1" title="寄送方式" />
        <Step className="step-decoration" number="2" title="運送方式" />
        <Step className="step-decoration" number="3" title="付款資訊" />
      </div>
    </div>
  )
}