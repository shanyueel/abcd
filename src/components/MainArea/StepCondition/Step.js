import styles from "../../../stylesheets/css/StepCondition.css"

export default function Step({number, title, addClass}) {
  return(
    <div className = {`step ${addClass}`}>
      <div className ="step-circle">{number}</div>
      <h3 className = "step-title">{title}</h3>
    </div>
  )
}