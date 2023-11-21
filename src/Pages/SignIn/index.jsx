import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Button, Input } from "../../components"
import classes from "./index.module.scss"



export default function index(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const auth = getAuth()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      setEmail(user?.email)
    }
  }, [])

  const onEmailChangeHandler = event => setEmail(event.target.value)
  const onPasswordChangeHandler = event => setPassword(event.target.value)


  const onSignInHandler = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const authUser = response.user
        localStorage.setItem("authUser", JSON.stringify(authUser))
        navigate("/user-page")
      })
      .catch((error) => {
        const errorMessage = error.message
        alert(`Error signing in ${errorMessage}`)
      });
    }
  }

  return (
    <section className={classes.modalEmail}>
        <h2 className={classes.text}>
          Access Medium
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
          className={classes.emailButton}
          onClick={onSignInHandler}
          text="Sign In"
        />

        <p className={classes.signIn}>
          New Here ? 

          <Link to="/sign-in">
            <span className={classes.signInText}>
              create an account
            </span>
          </Link>
        </p>
    </section>
  )
}
