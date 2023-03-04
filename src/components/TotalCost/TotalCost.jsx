import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function TotalCost() {
  const productsInCart = useContext(CartContext)
  
  let totalCostAmount=0

  productsInCart.forEach(product=>{
    totalCostAmount += product.price * product.quantity
  })
  
  return(
    <div className = "total-cost">
      <p className="total-cost-title">小計</p> 
      <p className="total-cost-amount"><b>${totalCostAmount}</b></p>
    </div>
  )
}