import styles from "../../../stylesheets/css/FormArea.css"

export default function Selector({ className,title,optionList,defaultOption }) {

  const optionsHTML = optionList.map(option => <option key ={option.optionValue} value="{option.optionValue}">{option.optionName}</option>)

  return(
    <div className = {`form-row ${className}`}>
      <label>{title}</label>
      <select defaultValue={defaultOption} required>
        {optionsHTML}
      </select>
    </div>
  )
}