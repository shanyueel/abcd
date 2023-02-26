import alphaShopLogo from "../../assets/icon/alpha_shop_logo.svg"
import alphaShopName from "../../assets/icon/alpha_shop_name.svg"
import facebook from "../../assets/icon/facebook.svg"
import instagram from "../../assets/icon/instagram.svg"
import weChat from "../../assets/icon/weChat.svg"

import styles from "./Footer.css"

export default function Footer() {
  return(
    <div className="footer-area">
      <div className="footer container">
        <div className="footer-logo-name">
            <img className="alpha-shop-logo" src={alphaShopLogo} alt="alpha shop's logo" />
            <img className="alpha-shop-name" src={alphaShopName} alt="alpha shop" />
        </div>
        <div className="footer-lists">
          <div className="footer-list-area customer-service">
            <h2 className="footer-list-title">客戶服務</h2>
            <ul className="footer-list">
              <li className="footer-list-line"><a>運送說明</a></li>
              <li className="footer-list-line"><a>退換貨相關</a></li>
              <li className="footer-list-line"><a>付款資訊</a></li>
              <li className="footer-list-line"><a>FAQ</a></li>
            </ul>
          </div>
          <div className="footer-list-area about-us">
            <h2 className="footer-list-title">關於我們</h2>
            <ul className="footer-list">
              <li className="footer-list-line"><a>品牌故事</a></li>
              <li className="footer-list-line"><a>媒體聯繫</a></li>
              <li className="footer-list-line"><a>Press kit</a></li>
            </ul>
          </div>
          <div className="footer-list-area information">
            <h2 className="footer-list-title">資訊</h2>
            <ul className="footer-list">
              <li className="footer-list-line"><a>隱私權政策</a></li>
              <li className="footer-list-line"><a>Cookie</a></li>
              <li className="footer-list-line"><a>GDPR</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-info">
          <h2 className="footer-info-title">追蹤 ALPHA SHOP</h2>
          <p className="footer-phone">+886 02123-45678</p>
          <div className="footer-icons">
            <a className="footer-icon facebook"><img src={facebook} alt="facebook-icon" /></a>
            <a className="footer-icon instagram"><img src={instagram} alt="instagram-icon" /></a>
            <a className="footer-icon weChat"><img src={weChat} alt="weChat-icon" /></a>
          </div>
        </div>
      </div>

    </div>
  )
}