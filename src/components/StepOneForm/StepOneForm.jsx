import Selector from "../Selector/Selector.jsx"
import TextInput from "../TextInput/TextInput.jsx"

import styles from "./StepOneForm.css"

import { genderOptions } from "../../data/stepOneForm.js"
import { regionOptions } from "../../data/stepOneForm.js"

export default function FormContent() {
  return(
    <div className = "form-content">
      <h2 className = "form-title">寄送地址</h2>
      <form id ="step-one-form" className="step-form">
        <Selector className="costumer-title" title="稱謂" optionList={genderOptions} defaultOption="male" />
        <TextInput inputId="costumer-name" title="姓名"  holderText="請輸入姓名"/>
        <TextInput inputId="costumer-phone" title="電話"  holderText="請輸入行動電話"/>
        <TextInput inputId="costumer-email" title="Email"  holderText="請輸入電子郵件"/>
        <Selector className="costumer-region" title="縣市" optionList={regionOptions} defaultOption="default" />
        <TextInput inputId="costumer-address" title="地址"  holderText="請輸入地址"/>
      </form>
    </div>
  )
}