export default function Step({number, title}) {
  return(
    <div className = "step">
      <div className ="step-circle">{number}</div>
      <h3 className = "step-title">{title}</h3>
    </div>
  )
}