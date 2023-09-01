import { Button } from "..";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
// import { TfiTwitter } from "react-icons/tf";
import { SlEnvolope } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import classes from "./index.module.scss"
import { createPortal } from "react-dom";
import { VscClose } from "react-icons/vsc"
import { useContext } from "react";
import ModalContext from "../../store/modal-context";



export default function index() {
  const contextValue = useContext(ModalContext)


  return createPortal(
    <>
      <div className={classes.modalBlur}/>

      <section className={classes.modal}>
        <VscClose
          className={classes.closeIcon}
          onClick={contextValue.onSignInClickHandler}
        />

        <div className={classes.modalContent}>
          <h1 className={classes.modalHeader}>Welcome back.</h1>

          <section className={classes.modalButtons}>
            <div>
              <i><FcGoogle /></i>
              <span>Sign in with Google</span>
            </div> 

            <div>
              <i><FcGoogle /></i>
              <span>Sign in with Facebook</span>
            </div> 

            <div>
              <i><FcGoogle /></i>
              <span>Sign in with Apple</span>
            </div> 

            <div>
              <i><FcGoogle /></i>
              <span>Sign in with Twitter</span>
            </div> 

            <div>
              <i><FcGoogle /></i>
              <span>Sign in with Email</span>
            </div> 
          </section>

          <p className={classes.createOne}>No account? <span className={classes.link}>Create one</span> </p>
          <small className={classes.help}>Forgot email or trouble signing in? <span style={{ textDecoration: "underline"}}>Get help.</span></small>

          <small className={classes.privacy}>
            Click “Sign In” to agree to Medium's <span style={{ textDecoration: "underline"}}>Terms of Service</span> and acknowledge that
            Medium's <span style={{ textDecoration: "underline"}}>Privacy Policy</span> applies to you.
          </small>
        </div>

      </section>

    </>,
  document.getElementById("sign-in")
  )
}
