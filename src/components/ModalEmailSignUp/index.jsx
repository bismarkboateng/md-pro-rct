import classes from "./index.module.scss"
import { GoChevronLeft } from "react-icons/go"
import { Input } from ".."
import { useState } from "react"
import { Button } from ".."



export default function index(props) {
  const [email, setEmail] = useState("")

  function onInputFieldChange(event) {
    setEmail(event.target.value)
  }

  function onClickEmailButton() {
    console.log("Email button clicked")
  }

  return (
    <section className={classes.modalEmail}>
        <h1>Sign up with email</h1>
        <p className={classes.text}>Enter your email address to create an account.</p>

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
          text="Continue"
        />
        
        <div className={classes.all} onClick={props.onSignUpClick}>
            <i><GoChevronLeft /></i>
            <p>All sign up options</p>
        </div>

    </section>
  )
}
