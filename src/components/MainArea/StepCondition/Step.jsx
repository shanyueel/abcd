import styles from "../../../stylesheets/css/StepCondition.css"

export default function Step({number, title, className}) {
  return(
    <div className = {`step ${className}`}>
      <div className ="step-circle">{number}</div>
      <h3 className = "step-title">{title}</h3>
    </div>
  )
}