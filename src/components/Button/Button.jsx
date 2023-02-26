export default function Button({title, onClick}) {
  return(
    <button className="btn btn-primary" onClick={onClick}>{title}</button>
  )
}