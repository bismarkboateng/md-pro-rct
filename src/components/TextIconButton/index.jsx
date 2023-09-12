import classes from "./index.module.scss"
import signInAccount from "../../utils/signInAccount"
import { useNavigate } from "react-router-dom"
import { Fragment } from "react"



export default function index(props) {
  const navigate = useNavigate()

  function onSignInButtonClickHandler() {
    if (signInAccount(props.text)) {
      // console.log()
      navigate("/user-page")
    }

  }

  return (
    <>
      {props.text === "Sign up with Email" || props.text === "Sign in with Email" ?  (
        <div className={classes.inputDiv} onClick={props.onClick}>
          <i style={{ color: props.id === 1 || props.id === 3 ? "rgb(98, 98, 231)" : ""}}>{props.icon}</i>
          <div>{props.text}</div>
        </div> 
      ) : (
        <div className={classes.inputDiv} onClick={onSignInButtonClickHandler}>
          <i style={{ color: props.id === 1 || props.id === 3 ? "rgb(98, 98, 231)" : ""}}>
            {/* <i  */}
            <Fragment style={{ color: props.user && "rgb(107, 156, 247)" }}>
              {props.icon}
            </Fragment>
            {/* </i> */}
          </i>
          <div>{props.text}</div>
        </div> 
      )}
    </>
  )
}