import { useContext } from "react"

import { FormContext } from "../../context/FormContext"

export default function TextInput({inputId,title,holderText, onFormChange}) {
  const currentFilledForm = useContext(FormContext)
   
  function handleTextInput(e) {
    
    onFormChange({
      ...currentFilledForm,
      [e.target.id] : e.target.value
    })
  }
  
  return(
    <div className = {`form-row ${inputId}`}>
      <label className="text-input-label">{title}</label>
      <input id = {inputId} type = "text" placeholder = {holderText} onChange={handleTextInput} />
    </div>
  )
}