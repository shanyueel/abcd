import CartList from "./Cart/CartList.jsx"
import DeliveryFee from "./Cart/DeliveryFee.jsx"
import TotalCost from "./Cart/TotalCost.jsx"

import { productsInCart } from "../../data/data.js"

import styles from "../../stylesheets/css/Cart.css"

export default function Cart() {
  return(
    <div className = "cart container">
      <div className="cart-title">
        <h3>購物籃</h3>
      </div>      
      <CartList cartList={productsInCart}/>
      <DeliveryFee cartList={productsInCart} className="container"/>
      <TotalCost cartList={productsInCart}/>
    </div>
  )
}