import classes from "./index.module.scss"
import signInAccount from "../../utils/signInAccount"
import { useNavigate } from "react-router-dom"




export default function index(props) {
  const navigate = useNavigate()
  
  const userClasss = classes.user
  const moveTextClass = classes.moveText

  function onSignInButtonClickHandler() {
    if (signInAccount(props.text)) {
      navigate("/user-page")
    }

  }

  return (
    <>
      {props.text === "Sign up with Email" || props.text === "Sign in with Email" ?  (
        <div className={classes.inputDiv} onClick={props.onClick}>
          <i>{props.icon}</i>
          <div>{props.text}</div>
        </div> 
      ) : (
        <div className={classes.inputDiv} onClick={onSignInButtonClickHandler}>
          <i className={`${props.user && userClasss} ${classes.textIcon}` }>
            {props.icon}
          </i>
          <div className={`${props.user && moveTextClass}`}>{props.text}</div>
        </div> 
      )}
    </>
  )
}