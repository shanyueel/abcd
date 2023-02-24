import Button from "../Button/Button.jsx"

import styles from "./ProgressControl.css"

export default function ProgressControl() {
  return(
    <div className = "progress-control">
      <div>
        <a href="#" className="return-step">←  上一步</a>
      </div>
      <Button title="下一步  →"/>
    </div>
  )
}