import classes from "./index.module.scss"
import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import ModalContext from "../../store/modal-context";
import { VscClose } from "react-icons/vsc"
import { ModalSignIn, ModalSignUp, ModalEmailSignIn} from ".."




export default function index() {
  const [createOneClick, setCreateOneClick] = useState(false)
  const [isClickEmailButton, setIsClickEmailButton] = useState(false)

  function onCreateOneClick() {
    setCreateOneClick(prevState => !prevState)
  }

  function onEmailClickHandler() {
    console.log(isClickEmailButton)
    setIsClickEmailButton(prevState => !prevState)
  }

  const contextValue = useContext(ModalContext)


  return createPortal(
    <>
      <div className={classes.modalBlur} onClick={contextValue.onSignInClickHandler} />
      <section className={classes.modal}>
        <VscClose
          className={classes.closeIcon}
          onClick={contextValue.onSignInClickHandler}
        />

        {isClickEmailButton ? (
        <div className={classes.modalContent}>
          <ModalEmailSignIn />
        </div>
        ) : (
        <div className={classes.modalContent}>
          {createOneClick ? 
          (<ModalSignUp onEmailClick={onEmailClickHandler} onClick={onCreateOneClick}/>) 
          :( <ModalSignIn onEmailClick={onEmailClickHandler} onClick={onCreateOneClick}/>)}
        </div>
        )}

      </section>

    </>,
  document.getElementById("accounts")
  )
}
