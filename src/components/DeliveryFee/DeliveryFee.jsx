import { useContext } from "react"

import { FormContext } from "../../context/FormContext.js"
import { deliveryMethods } from "../../data/deliveryMethods.js"

export default function DeliveryFee() {
  const currentFilledForm = useContext(FormContext)
 
  return(
    <div className = "delivery-fee">
      <p className="delivery-fee-title">運費</p> 
      <p className="delivery-fee-amount"><b>{currentFilledForm.hasOwnProperty("delivery-method-fee")?currentFilledForm["delivery-method-fee"]:"-"}</b></p>
    </div>
  )
}