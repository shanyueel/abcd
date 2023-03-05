import { useContext } from "react"

import { FormContext } from "../../context/FormContext"
import { CartContext } from "../../context/CartContext"

export default function TotalCost() {
  const currentFilledForm = useContext(FormContext)
  const productsInCart = useContext(CartContext)
  
  let totalCostAmount=0  
  let deliveryFee = 0
  
  if(currentFilledForm.hasOwnProperty("delivery-method-fee")){
    deliveryFee = currentFilledForm["delivery-method-fee"] === "免費" ? 0 : currentFilledForm["delivery-method-fee"]
  }

  productsInCart.forEach(product=>{
    totalCostAmount += product.price * product.quantity
  })
  
  return(
    <div className = "total-cost">
      <p className="total-cost-title">小計</p> 
      <p className="total-cost-amount"><b>${parseInt(totalCostAmount) + parseInt(deliveryFee)}</b></p>
    </div>
  )
}