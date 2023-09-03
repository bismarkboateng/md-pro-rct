import classes from "./index.module.scss"
import { Data } from "./Data"
import { TextIconButton } from "..";



export default function index(props) {
  return (
    <>
        <h1 className={classes.modalHeader}>Welcome back.</h1>

        <section className={classes.modalButtons}>
        {Data.map((item) => (
            <TextIconButton
            id={item.id}
            key={item.id}
            icon={item.icon}
            text={item.text}
            onClick={props.onEmailButtonClick}
            />
        ))}
        </section>

        <p className={classes.createOne}>No account? <span className={classes.link} onClick={props.onClick}>Create one</span> </p>
        <small className={classes.help}>Forgot email or trouble signing in? <span style={{ textDecoration: "underline"}}>Get help.</span></small>

        <small className={classes.privacy}>
        Click “Sign In” to agree to Medium's <span style={{ textDecoration: "underline"}}>Terms of Service</span> and acknowledge that
        Medium's <span style={{ textDecoration: "underline"}}>Privacy Policy</span> applies to you.
        </small>
    </>
  )
}
