import classes from "./index.module.scss"
import { Data } from "./Data"
import { TextIconButton } from "..";



export default function index(props) {
  return (
    <>
        <h1 className={classes.modalHeader}>Join Medium.</h1>

        <section className={classes.modalButtons}>
        {Data.map((item) => (
            <TextIconButton
            id={item.id}
            key={item.id}
            icon={item.icon}
            text={item.text}
            />
        ))}
        </section>

        <p className={classes.createOne}>Already have an account? <span className={classes.link} onClick={props.onClick}>Sign in</span> </p>

        <small className={classes.privacy}>
        Click “Sign In” to agree to Medium's <span style={{ textDecoration: "underline"}}>Terms of Service</span> and acknowledge that
        Medium's <span style={{ textDecoration: "underline"}}>Privacy Policy</span> applies to you.
        </small>
    </>
  )
}
