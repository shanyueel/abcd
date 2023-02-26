import styles from "./DeliveryListItem.css"

export default function DeliveryListItem({ deliveryMethod }) {
  return(
        <li className="delivery-line">
          <label className="delivery-method">
            <input className="delivery-method-input" type="radio" id={deliveryMethod.id} name="delivery" />
            <div className="delivery-method-info">
              <div className="delivery-title">{deliveryMethod.title}</div>
              <div className="delivery-time">{deliveryMethod.time}</div>
            </div>
            <div className="delivery-method-fee">{deliveryMethod.fee}</div>
          </label>
        </li>
  )
}