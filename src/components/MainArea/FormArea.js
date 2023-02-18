import Selector from "./FormArea/Selector.js"
import TextInput from "./FormArea/TextInput.js"

const genderOptions =[
  {optionName: "先生",
   optionValue: "male",},
  {optionName: "小姐",
   optionValue: "female"},   
]

const regionOptions =[
  {optionName: "請選擇縣市",
   optionValue: "default",},
  {optionName: "台北",
   optionValue: "taipei"},   
]


export default function FormArea() {
  return(
    <div className = "form-area">
      <div className = "container">
        <h2 className = "term-title">寄送地址</h2>
        <form id ="form">
          <Selector title="稱謂" optionList={genderOptions} defaultOption="male" />
          <TextInput title="姓名" inputId="customer-name" holderText="請輸入姓名"/>
          <TextInput title="電話" inputId="customer-phone" holderText="請輸入行動電話"/>
          <TextInput title="Email" inputId="customer-email" holderText="請輸入電子郵件"/>
          <Selector title="縣市" optionList={regionOptions} defaultOption="default" />
          <TextInput title="地址" inputId="customer-address" holderText="請輸入地址"/>
        </form>
      </div>
    </div>
  )
}