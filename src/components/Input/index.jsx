
export default function index(props) {
  return (
    <div className={props.inputWrapper}>
        <label className={props.label} htmlFor={props.id}>{props.title}</label>
        <input
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            className={props.input}
        />
    </div>
  )
}
