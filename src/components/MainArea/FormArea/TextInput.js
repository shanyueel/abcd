export default function TextInput({title,inputId,holderText}) {
  return(
    <div className = "form-row">
      <label>{title}</label>
      <input id = {inputId} type = "text" placeholder = {holderText} />
    </div>
  )
}