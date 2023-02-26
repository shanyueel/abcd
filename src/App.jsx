import React from "react"
import { useState } from "react";

import Main from "./components/Main/Main.jsx"

import styles from "./App.css"

export default function App() {
  const [step, setStep] = useState(1)
  
  return (
      <React.StrictMode>
          <Main currentStep={step} onStepChange={setStep}/>
      </React.StrictMode>
  );
}
