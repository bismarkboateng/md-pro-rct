import { useState, useEffect } from "react"
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"
import { useNavigate } from "react-router-dom"

import classes from "./index.module.scss"
import { Input } from "../../components"
import { Button } from "../../components"
import { auth } from "../../utils/firebaseConfig"


export default function index(props) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()


  useEffect(() => {
    const storedEmail = localStorage.getItem("signInEmail")

    if (storedEmail) {
        setEmail(storedEmail)
    }
  }, [])


  function onInputFieldChange(event) {
    setEmail(event.target.value)
  }


  function onClickEmailButton() {
    if(isSignInWithEmailLink(auth, window.location.href)) {
      signInWithEmailLink(auth, email,window.location.href)
        .then((result) => {
            localStorage.removeItem("signInEmail")
            localStorage.setItem("user", JSON.stringify(result.user))
            navigate("/user-page")
        })

        .catch((error) => {
            setMessage("An error occurred during signIn: ", error.name)
        })
    }
  }

  return (
    <section className={classes.modalEmail}>
        <h1>Confirm Email</h1>
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
          <div style={{ marginBottom: "8px"}}>
            { message }
          </div>
        )}

        <Button
          className={classes.emailButton}
          onClick={onClickEmailButton}
          text="confirm"
        />
    </section>
  )
}
