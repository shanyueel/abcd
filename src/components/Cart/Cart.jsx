import CartList from "../CartList/CartList.jsx"
import DeliveryFee from "../DeliveryFee/DeliveryFee.jsx"
import TotalCost from "../TotalCost/TotalCost.jsx"

import { productsInCart } from "../../data/productsInCart"

import styles from "./Cart.css"

export default function Cart() {
  return(
    <div className ="cart-content">
        <div className="cart-title">
          <h3>購物籃</h3>
        </div>      
        <CartList cartList={productsInCart}/>
        <DeliveryFee cartList={productsInCart} className="container"/>
        <TotalCost cartList={productsInCart}/>
    </div>
  )
}