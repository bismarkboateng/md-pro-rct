import classes from "./index.module.scss"



export default function index(props) {
  
  const userClasss = classes.user
  const moveTextClass = classes.moveText


  return (
    <>
      {props.text === "Sign up with Email" || props.text === "Sign in with Email" ?  (
        <div className={classes.inputDiv} onClick={props.onClick}>
          <i>{props.icon}</i>
          <div>{props.text}</div>
        </div> 
      ) : (
        <div className={classes.inputDiv} onClick={props.onClick}>
          <i className={`${props.user && userClasss} ${classes.textIcon}` }>
            {props.icon}
          </i>
          <div className={`${props.user && moveTextClass}`}>{props.text}</div>
        </div> 
      )}
    </>
  )
}