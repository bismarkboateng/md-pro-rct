import classes from "./index.module.scss"


export default function index(props) {
  return (
    <>
      {props.text === "Sign in with Email" ?  (
        <div className={classes.inputDiv} onClick={props.onClick}>
          <i style={{ color: props.id === 1 || props.id === 3 ? "rgb(98, 98, 231)" : ""}}>{props.icon}</i>
          <span>{props.text}</span>
        </div> 
      ) : (
        <div className={classes.inputDiv}>
          <i style={{ color: props.id === 1 || props.id === 3 ? "rgb(98, 98, 231)" : ""}}>{props.icon}</i>
          <span>{props.text}</span>
        </div> 
      )}
    </>
  )
}