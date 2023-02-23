import CartListItem from "./CartList/CartListItem.jsx"

export default function CartList({cartList}) {
  return(
    <ul className = "cart-list">
      <CartListItem cartList={cartList} />
    </ul>
  )
}