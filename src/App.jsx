import React from "react"
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"

import styles from "./App.css"

export default function App() {
  const [step, setStep] = useState(1)
  
  return (
      <React.StrictMode>
        <Navbar />
        <Main currentStep={step} onStepChange={setStep}/>
        <Footer />
      </React.StrictMode>
  );
}
