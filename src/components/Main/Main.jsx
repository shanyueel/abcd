import { useState } from "react";
import { useContext } from "react";

import StepCondition from "../StepCondition/StepCondition.jsx"
import StepOneForm from "../StepOneForm/StepOneForm.jsx"
import StepTwoForm from "../StepTwoForm/StepTwoForm.jsx";
import StepThreeForm from "../StepThreeFrom/StepThreeForm.jsx";
import ProgressControl from "../ProgressControl/ProgressControl.jsx";
import Cart from "../Cart/Cart.jsx";

import { FormContext } from "../../context/FormContext";

import styles from "./Main.css"

export default function MainArea({currentStep, onStepChange}) {
  const initialFormContent = useContext(FormContext)
  const [formContent, setFormContent] = useState(initialFormContent)
  
  return(
    <div className ="main-area container">
      <h1 className="main-title">結帳</h1>
      <div className="main-content">
        <FormContext.Provider value={formContent} >
          <div className="form">
            <StepCondition currentStep={currentStep} />
              {currentStep === 1 && <StepOneForm onFormChange={setFormContent} />}
              {currentStep === 2 && <StepTwoForm onFormChange={setFormContent} />}
              {currentStep === 3 && <StepThreeForm onFormChange={setFormContent} />}
            <ProgressControl currentStep={currentStep} onStepChange={onStepChange}/>
          </div>
        </ FormContext.Provider>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </div>
  )
}