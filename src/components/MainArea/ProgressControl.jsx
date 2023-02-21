import Button from "./ProgressControl/Button.jsx"

import styles from "../../stylesheets/css/ProgressControl.css"

export default function ProgressControl() {
  return(
    <div className = "container progress-control">
      <div>
        <a href="#" className="return-step">←  上一步</a>
      </div>
      <Button title="下一步  →"/>
    </div>
  )
}