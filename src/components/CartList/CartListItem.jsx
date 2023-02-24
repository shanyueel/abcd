import plusCircle from "../../assets/icon/plus_circle.svg"
import minusCircle from "../../assets/icon/minus_circle.svg"

import styles from "./CartListItem.css"



export default function CartListItem( {product} ) {
  return(
    <li className="product-line">
      <div className="product-picture-area">
        <img className="product-picture" src={product.img} alt="" />
      </div>
      <div className="product-detail">
        <h4 className="product-title">{product.name}</h4>
        <div className="product-amount">
          <div className="amount-minus"><img src={minusCircle} alt = "plus"/></div>
          <div className="amount-display">{product.quantity}</div>
          <div className="amount-plus"><img src={plusCircle} alt = "plus"/></div>
        </div> 
      </div>
      <p className="product-price"><b>${product.quantity * product.price}</b></p>
    </li>
  )

}