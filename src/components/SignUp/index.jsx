import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Button, Input } from ".."
import classes from "./index.module.scss"



export default function index() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const auth = getAuth()

  const onEmailChangeHandler = event => setEmail(event.target.value)
  const onPasswordChangeHandler = event => setPassword(event.target.value)

  const onCreateAccountHandler = () => {
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/sign-in")
      
      })
      .catch((error) => {
        const errorMessage = error.message
        alert(`Error creating account ${errorMessage}`)
      })
    }
    setPassword("")
  }

  return (
    <section className={classes.modalEmail}>
        <h2 className={classes.text}>
          Join Medium
        </h2>

        <Input
          title="Email"
          type="text"
          id="email"
          value={email}
          onChange={onEmailChangeHandler}
          input={classes.input}
          inputWrapper={classes.inputWrapper}
          label={classes.label}
        />

        <Input
          title="Password"
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChangeHandler}
          input={classes.input}
          inputWrapper={classes.inputWrapper}
          label={classes.label}
        />

        <Button
          className={classes.createButton}
          onClick={onCreateAccountHandler}
          text="Create Account"
        />
        <p className={classes.signIn}>
          Already have an account? 

          <Link to="/sign-in">
            <span className={classes.signInText}>
              sign in
            </span>
          </Link>
        </p>
    </section>
  )
}
