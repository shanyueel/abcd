import StepCondition from "../StepCondition/StepCondition.jsx"
import StepOneForm from "../StepOneForm/StepOneForm.jsx"
import StepTwoForm from "../StepTwoForm/StepTwoForm.jsx";
import StepThreeForm from "../StepThreeFrom/StepThreeForm.jsx";
import ProgressControl from "../ProgressControl/ProgressControl.jsx";
import Cart from "../Cart/Cart.jsx";

import styles from "./Main.css"

export default function MainArea({currentStep, onStepChange}) {
  return(
    <div className ="main-area container">
      <h1 className="main-title">結帳</h1>
      <div className="main-content">
          <div className="form">
            <StepCondition currentStep={currentStep} />
            {currentStep === 1 && <StepOneForm />}
            {currentStep === 2 && <StepTwoForm />}
            {currentStep === 3 && <StepThreeForm />}
            <ProgressControl currentStep={currentStep} onStepChange={onStepChange}/>
          </div>
          <div className="cart">
            <Cart />
          </div>
      </div>
    </div>
  )
}