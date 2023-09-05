import classes from "./index.module.scss"
import signInAccount from "../../utils/signInAccount"
import { useNavigate } from "react-router-dom"



export default function index(props) {
  const navigate = useNavigate()

  function onSignInButtonClickHandler() {
    if (signInAccount(props.text)) {
      navigate("/user-page")
    }
  }

  return (
    <>
      {props.text === "Sign up with Email" || props.text === "Sign in with Email" ?  (
        <div className={classes.inputDiv} onClick={props.onClick}>
          <i style={{ color: props.id === 1 || props.id === 3 ? "rgb(98, 98, 231)" : ""}}>{props.icon}</i>
          <span>{props.text}</span>
        </div> 
      ) : (
        <div className={classes.inputDiv} onClick={onSignInButtonClickHandler}>
          <i style={{ color: props.id === 1 || props.id === 3 ? "rgb(98, 98, 231)" : ""}}>{props.icon}</i>
          <span>{props.text}</span>
        </div> 
      )}
    </>
  )
}