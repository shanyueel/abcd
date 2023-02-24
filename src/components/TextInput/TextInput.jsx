export default function TextInput({className,title,inputId,holderText}) {
  return(
    <div className = {`form-row ${className}`}>
      <label>{title}</label>
      <input id = {inputId} type = "text" placeholder = {holderText} />
    </div>
  )
}