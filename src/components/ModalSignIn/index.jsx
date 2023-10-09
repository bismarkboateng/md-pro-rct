import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs"
import { AiFillApple } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import { SlEnvolope } from "react-icons/sl";
import { useNavigate } from "react-router-dom";


import classes from "./index.module.scss"
import { googleSignIn, facebookSignIn } from "../../utils/signInMethods"
import { TextIconButton } from ".."


export default function index(props) {
  const navigate = useNavigate()
  

  function navigateToUserPage() {
    const user = localStorage.getItem("user")
    if (user) {
      navigate("/user-page")
    }
  }

  function onClickGoogleSignInHandler() {
    googleSignIn()
    navigateToUserPage()
  }

  function onClickFacebookSignInHandler() {
    facebookSignIn()
    navigateToUserPage()
  }

  function onClickAppleSignInHandler() {
    console.log("apple sign in")
  }

  function onClickTwitterSignInHandler() {
    console.log("twitter sign in")
  }

  return (
    <>
        <h1 className={classes.modalHeader}>Welcome back.</h1>

        <section className={classes.modalButtons}>
          <TextIconButton
            icon={<FcGoogle />}
            text="Sign in with Google"
            onClick={onClickGoogleSignInHandler}
          />

          <TextIconButton
            icon={<BsFacebook />}
            text="Sign in with Facebook"
            onClick={onClickFacebookSignInHandler}
          />

          <TextIconButton
            icon={<AiFillApple />}
            text="Sign in with Apple"
            onClick={onClickAppleSignInHandler}

          />

          <TextIconButton
            icon={<BsTwitter />}
            text="Sign in with Twitter"
            onClick={onClickTwitterSignInHandler}
          />

          <TextIconButton
            icon={<SlEnvolope />}
            text="Sign in with Email"
            onClick={props.onEmailButtonClick}
          />

        </section>

        <p className={classes.createOne}>
          No account?{" "}
          <span className={classes.link} onClick={props.onClick}>
            Create one
          </span> 
        </p>
        <small className={classes.help}>
          Forgot email or trouble signing in?{" "}
          <span style={{ textDecoration: "underline"}}>
            Get help.
          </span>
        </small>

        <small className={classes.privacy}>
          Click “Sign In” to agree to Medium's{" "}
          <span style={{ textDecoration: "underline"}}>
            Terms of Service{" "}
          </span>and acknowledge that
            Medium's{" "}
          <span style={{ textDecoration: "underline"}}>
            Privacy Policy
          </span> applies to you.
        </small>
    </>
  )
}
