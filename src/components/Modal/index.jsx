import classes from "./index.module.scss"
import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import ModalContext from "../../store/modal-context";
import { VscClose } from "react-icons/vsc"
import { ModalSignIn, ModalSignUp } from ".."




export default function index() {
  const [createOneClick, setCreateOneClick] = useState(false)

  function onCreateOneClick() {
    setCreateOneClick(prevState => !prevState)
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
        <div className={classes.modalContent}>
          {createOneClick ? (<ModalSignUp onClick={onCreateOneClick}/>) :( <ModalSignIn onClick={onCreateOneClick}/>)}
        </div>
      </section>

    </>,
  document.getElementById("accounts")
  )
}
