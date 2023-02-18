import parse from "html-react-parser";
import styles from "../../../stylesheets/css/FormArea.css"

export default function Selector({ addClass,title,optionList,defaultOption }) {
  let optionsHTML = ""

  optionList.forEach((option)=>{
    optionsHTML += `<option value="${option.optionValue}">${option.optionName}</option>`
  })

  // const optionsHTML = optionList.map(option => `<option value="${option.optionValue}">${option.optionName}</option>`)

  return(
    <div className = {`form-row ${addClass}`}>
      <label>{title}</label>
      <select defaultValue={defaultOption} required>
        {parse(optionsHTML)}
      </select>
    </div>
  )
}