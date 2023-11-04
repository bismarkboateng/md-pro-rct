import { useState } from "react"
import { sendSignInLinkToEmail } from "firebase/auth"

import { Input } from ".."
import { Button } from ".."
import { actionCodeSettings, auth } from "../../utils/firebaseConfig"
import classes from "./index.module.scss"



export default function index(props) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  function onInputFieldChange(event) {
    setEmail(event.target.value)
  }

  function onClickEmailButton() {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        localStorage.setItem("signInEmail", email)
        setMessage("An email has been sent to your email address. Click the link in the email to login")
      })
      .catch((error) => {
        setMessage("An error occurred when sending link to your email address: ", error.name)
      })
  }

  return (
    <section className={classes.modalEmail}>
        <h1>Sign up / Sign in with email</h1>
        <p className={classes.text}>
          Enter the email address associated with your account, and we'll send a magic link to your inbox.
        </p>

        <Input
          title="Your email"
          id="email"
          value={email}
          onChange={onInputFieldChange}
          input={classes.input}
          inputWrapper={classes.inputWrapper}
          label={classes.label}
        />

        { message && (
          <div>
            { message }
          </div>
        )}

        <Button
          className={classes.emailButton}
          onClick={onClickEmailButton}
          text="Sign up / Sign in"
        />
    </section>
  )
}
