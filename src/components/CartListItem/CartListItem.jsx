import { useContext } from "react"

import plusCircle from "../../assets/icon/plus_circle.svg"
import minusCircle from "../../assets/icon/minus_circle.svg"

import styles from "./CartListItem.css"
import { CartContext } from "../../context/CartContext"

export default function CartListItem( {product, onCartChange} ) {
const productsInCart = useContext(CartContext)

function handlePlusAmount(e){
  const targetId = e.target.parentElement.id
  const newProductsInCart = productsInCart.map((product) =>{
    if(product.id === targetId){
      return(
        { ...product, quantity: product.quantity + 1}
      )
    }else{
      return(
        product
      )
    }
  })
  
  onCartChange(newProductsInCart)
}

function handleMinusAmount(e) {
  const targetId = e.target.parentElement.id
  const newProductsInCart = productsInCart.map((product) =>{
    if(product.id === targetId && product.quantity > 1){
      return(
        { ...product, quantity: product.quantity - 1}
      )
    }else if(product.id === targetId && product.quantity === 1){
      return(
        {id: 0}
      )
    }else{
      return(product)
    }
  })

  const newProductsInCartAdjust = newProductsInCart.filter(product => product.id !== 0)

  onCartChange(newProductsInCartAdjust) 
}

  return(    
    <li className="product-line">
      <div className="product-picture-area">
        <img className="product-picture" src={product.img} alt="" />
      </div>
      <div className="product-detail">
        <h4 className="product-title">{product.name}</h4>
        <div className="product-amount">
          <button id={product.id} className="amount-adjust-icon minus" onClick={handleMinusAmount}><img src={minusCircle} alt = "plus"/></button>
          <div className="amount-display">{product.quantity}</div>
          <button id={product.id} className="amount-adjust-icon plus" onClick={handlePlusAmount}><img src={plusCircle} alt = "plus"/></button>
        </div> 
      </div>
      <p className="product-price"><b>${product.quantity * product.price}</b></p>
    </li>
  )

}