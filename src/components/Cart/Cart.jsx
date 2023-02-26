import CartListItem from "../CartListItem/CartListItem.jsx"
import DeliveryFee from "../DeliveryFee/DeliveryFee.jsx"
import TotalCost from "../TotalCost/TotalCost.jsx"

import { initialProductsInCart } from "../../data/productsInCart"

import styles from "./Cart.css"
import { useState } from "react"

export default function Cart() {
  const [ currentProductsInCart, setCurrentProductsInCart] = useState(initialProductsInCart)

  return(
    <div className ="cart-content">
        <div className="cart-title">
          <h3>購物籃</h3>
        </div>      
        <ul className = "cart-list">
          {currentProductsInCart.map(product => <CartListItem key={product.id} product={product} currentProductsInCart = {currentProductsInCart} onCartChange={setCurrentProductsInCart} />)}
        </ul>
        <DeliveryFee cartList={currentProductsInCart} className="container"/>
        <TotalCost cartList={currentProductsInCart}/>
    </div>
  )
}