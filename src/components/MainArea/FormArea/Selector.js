import parse from "html-react-parser";

export default function Selector({ title,optionList,defaultOption }) {
  let optionsHTML = ""

  optionList.forEach((option)=>{
    optionsHTML += `<option value="${option.optionValue}">${option.optionName}</option>`
  })

  // const optionsHTML = optionList.map(option => `<option value="${option.optionValue}">${option.optionName}</option>`)
  
 console.log(optionsHTML)

  return(
    <div className = "form-row">
      <label>{title}</label>
      <select defaultValue={defaultOption} required>
        {parse(optionsHTML)}
      </select>
    </div>
  )
}