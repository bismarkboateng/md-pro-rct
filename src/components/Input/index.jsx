
export default function index(props) {
  return (
    <div className={props.inputWrapper}>
        <label className={props.label} htmlFor={props.id}>{props.title}</label><br />
        <input 
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            className={props.input}
        />
    </div>
  )
}
