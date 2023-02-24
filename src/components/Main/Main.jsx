import StepCondition from "../StepCondition/StepCondition.jsx"
import StepOneForm from "../StepOneForm/StepOneForm.jsx"
import ProgressControl from "../ProgressControl/ProgressControl.jsx";
import Cart from "../Cart/Cart.jsx";

import styles from "./Main.css"

export default function MainArea() {
  return(
    <div className ="main-area container">
      <h1 className="main-title">結帳</h1>
      <div className="main-content">
          <div className="form">
            <StepCondition />
            <StepOneForm/>
            <ProgressControl />
          </div>
          <div className="cart">
            <Cart />
          </div>
      </div>
    </div>
  )
}