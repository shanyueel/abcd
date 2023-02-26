import { Fragment } from "react"

import Step from "../Step/Step.jsx"

import styles from "./StepCondition.css"

import {steps} from "../../data/steps.js"

function renderSteps(database,currentStep) {
  return(
      database.map(data=>{
        if( data.number < database.length ){
          return(
            <Fragment key={data.number}>
              <Step className={data.number <= currentStep ? "active":""} number={data.number} title={data.title} />
              <div className="connect-line"></div>
            </Fragment>
          )
        }else{
          return(
            <Fragment key={data.number}>
              <Step className={data.number <= currentStep ? "active":""} number={data.number} title={data.title} />
            </Fragment>

          )
        }
      })
    )}
export default function StepCondition( {currentStep} ) {

  return(
    <div className = "step-condition">
      {renderSteps(steps,currentStep)}
    </div>
  )
}