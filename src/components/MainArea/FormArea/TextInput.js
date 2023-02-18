import styles from "../../../stylesheets/css/FormArea.css"

export default function TextInput({addClass,title,inputId,holderText}) {
  return(
    <div className = {`form-row ${addClass}`}>
      <label>{title}</label>
      <input id = {inputId} type = "text" placeholder = {holderText} />
    </div>
  )
}