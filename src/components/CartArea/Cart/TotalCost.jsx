export default function TotalCost({cartList}) {
  let totalCostAmount=0

  cartList.forEach(product=>{
    totalCostAmount += product.price * product.quantity
  })
  
  return(
    <div className = "total-cost">
      <p className="total-cost-title">小計</p> 
      <p className="total-cost-amount"><b>${totalCostAmount}</b></p>
    </div>
  )
}