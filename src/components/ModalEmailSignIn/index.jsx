import classes from "./index.module.scss"
import { GoChevronLeft } from "react-icons/go"
import { Input } from ".."
import { useState } from "react"
import { Button } from ".."
import { emailSignIn } from "../../utils/signInMethods"



export default function index(props) {
  const [email, setEmail] = useState("")

  function onInputFieldChange(event) {
    setEmail(event.target.value)
  }
  
  function onClickEmailButton() {
    emailSignIn(email)
  }

  return (
    <section className={classes.modalEmail}>
        <h1>Sign in with email</h1>
        <p className={classes.text}>Enter the email address associated with your account, and we'll send a magic link to your inbox.</p>

        <Input
          title="Your email"
          id="email"
          value={email}
          onChange={onInputFieldChange}
          input={classes.input}
          inputWrapper={classes.inputWrapper}
          label={classes.label}
        />

        <Button
          className={classes.emailButton}
          onClick={onClickEmailButton}
        >
          Continue
        </Button>
        
        <div className={classes.all} onClick={props.onClickSignIn}>
            <i><GoChevronLeft /></i>
            <p>All sign in options</p>
        </div>

    </section>
  )
}
