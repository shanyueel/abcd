import DeliveryListItem from "../DeliveryListItem/DeliveryListItem.jsx"

import { deliveryMethods } from "../../data/deliveryMethods.js"

import styles from "./StepTwoForm.css"

export default function StepTwoForm({ onFormChange }) {  
  return(
    <div className = "form-content">
      <h2 className = "form-title">運送方式</h2>
      <ul className="delivery-list">
        {deliveryMethods.map( deliveryMethod => <DeliveryListItem key = {deliveryMethod.id} deliveryMethod={deliveryMethod} onFormChange={onFormChange} />)}
      </ul>
    </div>
  )
}