import alphaShopLogo from "../../assets/icon/alpha_shop_logo.svg"
import alphaShopName from "../../assets/icon/alpha_shop_name.svg"
import search from "../../assets/icon/search.svg"
import cart from "../../assets/icon/cart.svg"
import nightMode from "../../assets/icon/night_mode.svg"

import styles from "./Navbar.css"

export default function Navbar() {
  return(
    <nav>
      <div className="navbar container">
        <div className="nav-list-area">
          <ul className="nav-list">
            <li className="nav-list-item"><a>男款</a></li>
            <li className="nav-list-item"><a>女款</a></li>
            <li className="nav-list-item"><a>最新消息</a></li>
            <li className="nav-list-item"><a>客製商品</a></li>
            <li className="nav-list-item"><a>聯絡我們</a></li>
          </ul>
        </div>
        <div className="header-logo-name">
          <img className="alpha-shop-logo" src={alphaShopLogo} alt="alpha shop's logo" />
          <img className="alpha-shop-name" src={alphaShopName} alt="alpha shop" />
        </div>
        <div className="nav-icons">
          <a className="nav-icon search"><img src={search} alt="search-icon" /></a>
          <a className="nav-icon cart"><img src={cart} alt="cart-icon" /></a>
          <a className="nav-icon night-mode"><img src={nightMode} alt="night-mode-icon" /></a>
        </div>
      </div>
    </nav>
  )
}