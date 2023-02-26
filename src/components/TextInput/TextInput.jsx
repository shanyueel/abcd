export default function TextInput({inputId,title,holderText}) {
  return(
    <div className = {`form-row ${inputId}`}>
      <label className="text-input-label">{title}</label>
      <input id = {inputId} type = "text" placeholder = {holderText} />
    </div>
  )
}