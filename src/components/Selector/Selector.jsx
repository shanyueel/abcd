import { useContext } from "react"
import styles from "./Selector.css"

import { FormContext } from "../../context/FormContext"

export default function Selector({ className,title,optionList,defaultOption,onFormChange }) {
  const currentFilledForm = useContext(FormContext)

  function handleSelect(e) {
    const target = e.target
    
    const selectorName = target.id
    const selectedOption = target[target.selectedIndex].value

    onFormChange({
      ...currentFilledForm,
      [selectorName]: selectedOption
    })
  }

  const optionsHTML = optionList.map(option => {
    return(
      <option key ={option.optionValue} value={option.optionValue}>{option.optionName}</option>
    )
  })

  return(
    <div className = {`form-row ${className}`}>
      <label className="selector-label">{title}</label>
      <div className="select-wrapper">
        <select id={className} defaultValue={defaultOption} onChange={handleSelect} required>
        {optionsHTML}
      </select>
      </div>

    </div>
  )
}