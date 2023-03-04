import { useState } from "react"
import { useContext } from "react"

import CartListItem from "../CartListItem/CartListItem.jsx"
import DeliveryFee from "../DeliveryFee/DeliveryFee.jsx"
import TotalCost from "../TotalCost/TotalCost.jsx"

import { CartContext } from "../../context/CartContext.js"

import styles from "./Cart.css"

export default function Cart() {
  const initialProductsInCart = useContext(CartContext)
  const [ productsInCart, setProductsInCart] = useState(initialProductsInCart)

  return(
    <div className ="cart-content">
        <div className="cart-title">
          <h3>購物籃</h3>
        </div>
        <CartContext.Provider value={productsInCart}>      
          <ul className = "cart-list">
            {productsInCart.map(product => <CartListItem key={product.id} product={product} onCartChange={setProductsInCart}/>)}          
          </ul>
          <DeliveryFee className="container"/>
          <TotalCost/>
        </CartContext.Provider>
    </div>
  )
}