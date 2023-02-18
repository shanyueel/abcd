import Step from "./StepCondition/Step.js"

export default function StepCondition() {
  return(
    <div className = "step-condition">
      <h1>結帳</h1>
      <div className = "container">
        <Step number="1" title="寄送方式" />
        <Step number="2" title="運送方式" />
        <Step number="3" title="付款資訊" />
      </div>
    </div>
  )
}