import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import { VscClose } from "react-icons/vsc"

import classes from "./index.module.scss"
import ModalContext from "../../store/modal-context";
import { SignUp } from ".."




export default function index() {

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
          <SignUp />
        </div>           
      </section>

    </>,
  document.getElementById("accounts")
  )
}
