import { FcGoogle } from "react-icons/fc";
import { SlEnvolope } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import classes from "./index.module.scss"
import { googleSignIn, facebookSignIn } from "../../utils/signInMethods"
import { TextIconButton } from "..";



export default function index(props) {
  const navigate = useNavigate()

  function navigateToUserPage() {
    const user = localStorage.getItem("user")
    if (user) {
      navigate("/user-page")
    }
  }

  function onClickSignUpGoogleHandler() {
    googleSignIn()
    navigateToUserPage()
  }

  function onClickSignUpFacebookHandler() {
    facebookSignIn()
    navigateToUserPage()
  }

  return (
    <>
        <h1 className={classes.modalHeader}>Join Medium.</h1>

        <section className={classes.modalButtons}>

          <TextIconButton
            icon={<FcGoogle />}
            text="Sign up with Google"
            onClick={onClickSignUpGoogleHandler}
          />

          <TextIconButton
            icon={<BsFacebook />}
            text="Sign up with Facebook"
            onClick={onClickSignUpFacebookHandler}
          />

          <TextIconButton
            icon={<SlEnvolope />}
            text="Sign up with Email"
            onClick={props.onEmailSignUpClick}
          />

        </section>

        <p className={classes.createOne}>Already have an account? <span className={classes.link} onClick={props.onClickSignIn}>Sign in</span> </p>

        <small className={classes.privacy}>
        Click “Sign In” to agree to Medium's <span style={{ textDecoration: "underline"}}>Terms of Service</span> and acknowledge that
        Medium's <span style={{ textDecoration: "underline"}}>Privacy Policy</span> applies to you.
        </small>
    </>
  )
}
