import React from "react"
import MainArea from "./components/MainArea.jsx"
import Cart from "./components/CartArea.jsx"

import styles from "./stylesheets/css/App.css"

export default function App() {
  return (
      <React.StrictMode>
        <div className="main-content container">
          <MainArea />
          <Cart />
        </div>
      </React.StrictMode>
  );
}
