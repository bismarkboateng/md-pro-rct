import classes from "./index.module.scss"
import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import ModalContext from "../../store/modal-context";
import { VscClose } from "react-icons/vsc"
import { ModalSignIn, ModalSignUp, ModalEmailSignIn} from ".."




export default function index() {
  const [isCreateOne, setOnClickCreateOne] = useState(false)
  const [isSignIn, setIsSignIn] = useState(true)
  const [isClickEmailSignInButton, setIsClickEmailSignInButton] = useState(false)
  // const [isSignInOptions, setIsSignInOptions] = useState(false)

  function onClickSignIn() {
    setIsSignIn(true)
    setOnClickCreateOne(false)
    setIsClickEmailSignInButton(false)
  }

  function onCreateOneClick() {
    setOnClickCreateOne(true)
    setIsSignIn(false)
    setIsClickEmailSignInButton(false)
  }

  function onEmailButtonClick() {
    setIsClickEmailSignInButton(true)
    setOnClickCreateOne(false)
    setIsSignIn(false)
  }

  console.log(isCreateOne, isSignIn, isClickEmailSignInButton)

  const contextValue = useContext(ModalContext)


  return createPortal(
    <>
      <div className={classes.modalBlur} onClick={contextValue.onSignInClickHandler} />
      <section className={classes.modal}>
        <VscClose
          className={classes.closeIcon}
          onClick={contextValue.onSignInClickHandler}
        />

        <div className={classes.modalContent}>
          { isCreateOne && <ModalSignUp onClickSignIn={onClickSignIn} />}
          { isSignIn && <ModalSignIn onEmailButtonClick={onEmailButtonClick} onClick={onCreateOneClick}/>}
          { isClickEmailSignInButton && <ModalEmailSignIn onClickSignIn={onClickSignIn} /> }
        </div>
       {/* { createOneClick && (
        <div className={classes.modalContent}>
          <ModalSignUp onEmailClick={onEmailClickHandler} onClick={onCreateOneClick}/> 
        </div>
       )} */}


       {/* { createOneClick && (
        <div className={classes.modalContent}>
          <ModalSignIn onEmailClick={onEmailClickHandler} onClick={onCreateOneClick}/>
        </div>
       )} */}

{/* 
        {isClickEmailButton ? (
        <div className={classes.modalContent}>
          <ModalEmailSignIn onSignInClick={onSignInOptionClick} />
        </div>
        ) : (
        <div className={classes.modalContent}>
          {createOneClick ? 
          (<ModalSignUp onEmailClick={onEmailClickHandler} onClick={onCreateOneClick}/>) 
          :( <ModalSignIn onEmailClick={onEmailClickHandler} onClick={onCreateOneClick}/>)}
        </div>
        )}

        {isSignInOptions && (
          <div className={classes.modalContent}>
            {createOneClick ? 
            (<ModalSignUp onEmailClick={onEmailClickHandler} onClick={onCreateOneClick}/>) 
            :( <ModalSignIn onEmailClick={onEmailClickHandler} onClick={onCreateOneClick}/>)}
          </div>
        )} */}
           
      </section>

    </>,
  document.getElementById("accounts")
  )
}
