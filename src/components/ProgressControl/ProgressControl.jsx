import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext.js";

import Button from "../Button/Button.jsx"

import styles from "./ProgressControl.css"

export default function ProgressControl({currentStep, onStepChange}) {
  const currentFilledForm = useContext(FormContext)

  function handleNextStep() {
    if(currentStep<3){
      onStepChange(currentStep + 1)
    }else if(currentStep = 3){
      console.log(currentFilledForm)
    }
  }

  function handlePrevStep() {
    if(currentStep > 1){
      onStepChange(currentStep - 1)
    }
    // console.log(currentFilledForm)
  }
  
  return(
    <div className = "progress-control">
      <div>
        {currentStep !== 1 && <a className="return-step" onClick={handlePrevStep}>←  上一步</a>}
      </div>
      <Button title={currentStep < 3 ? "下一步  →" : "確認下單"} onClick={handleNextStep} />
    </div>
  )
}