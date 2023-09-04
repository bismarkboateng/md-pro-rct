import classes from "./index.module.scss"
import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import ModalContext from "../../store/modal-context";
import { VscClose } from "react-icons/vsc"
import { ModalSignIn, ModalSignUp, ModalEmailSignIn, ModalEmailSignUp} from ".."




export default function index() {
  const [isCreateOne, setOnClickCreateOne] = useState(false)
  const [isSignIn, setIsSignIn] = useState(true)
  const [isClickEmailSignInButton, setIsClickEmailSignInButton] = useState(false)
  const [isEmailSignUp, setIsEmailSignUp] = useState(false)

  const contextValue = useContext(ModalContext)


  function onClickSignIn() {
    setIsSignIn(true)
    setOnClickCreateOne(false)
    setIsClickEmailSignInButton(false)
    setIsEmailSignUp(false)

  }

  function onCreateOneClick() {
    setOnClickCreateOne(true)
    setIsSignIn(false)
    setIsClickEmailSignInButton(false)
    setIsEmailSignUp(false)
  }

  function onEmailButtonClick() {
    setIsClickEmailSignInButton(true)
    setOnClickCreateOne(false)
    setIsSignIn(false)
    setIsEmailSignUp(false)

  }

  function onEmailSignUpClickHandler() {
    setIsEmailSignUp(true)
    setIsClickEmailSignInButton(false)
    setIsSignIn(false)
    setOnClickCreateOne(false)

  }

  return createPortal(
    <>
      <div className={classes.modalBlur} onClick={contextValue.onSignInClickHandler} />
      <section className={classes.modal}>
        <VscClose
          className={classes.closeIcon}
          onClick={contextValue.onSignInClickHandler}
        />

        <div className={classes.modalContent}>
          {isCreateOne && <ModalSignUp onEmailSignUpClick={onEmailSignUpClickHandler} onClickSignIn={onClickSignIn} />}
          {isSignIn && <ModalSignIn onEmailButtonClick={onEmailButtonClick} onClick={onCreateOneClick}/>}
          {isClickEmailSignInButton && <ModalEmailSignIn onClickSignIn={onClickSignIn} /> }
          {isEmailSignUp && <ModalEmailSignUp onSignUpClick={onCreateOneClick} />}
        </div>           
      </section>

    </>,
  document.getElementById("accounts")
  )
}
