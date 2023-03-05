import { useContext } from 'react'

import { FormContext } from '../../context/FormContext'

import styles from "./DeliveryListItem.css"

export default function DeliveryListItem({ deliveryMethod, onFormChange }) {
  const currentFilledForm = useContext(FormContext)

  function handleChange(e) {
    
    onFormChange({
      ...currentFilledForm,
      ["delivery-method"]: e.target.id,
      ["delivery-method-fee"]: deliveryMethod.fee,
    })
  }
  

  return(
        <li className="delivery-line">
          <label className="delivery-method">
            <input id={deliveryMethod.id} className="delivery-method-input" type="radio" id={deliveryMethod.id} name="delivery-method" onChange={handleChange} checked={currentFilledForm["delivery-method"] === deliveryMethod.id} />
            <div className="delivery-method-info">
              <div className="delivery-title">{deliveryMethod.title}</div>
              <div className="delivery-time">{deliveryMethod.time}</div>
            </div>
            <div className="delivery-method-fee">{deliveryMethod.fee !== "免費" && "$"}{deliveryMethod.fee}</div>
          </label>
        </li>
  )
}