export default function index(props) {
  return (
    <div className={props.buttonWrapper}>

      <button
        className={`${props.className} ${props.scrolling ? props.btnBackground : ""}`}
        onClick={props.onClick}
      >
        {props.text}
      </button>

      {props.children}
    </div>
  )
}