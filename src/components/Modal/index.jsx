import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import { VscClose } from "react-icons/vsc"

import classes from "./index.module.scss"
import { AppContext } from "../../store/app-context";
import { SignUp } from ".."




export default function index() {

  const { onSignInClickHandler } = useContext(AppContext)

  return createPortal(
    <>
      <div className={classes.modalBlur} onClick={onSignInClickHandler} />
      <section className={classes.modal}>
        <VscClose
          className={classes.closeIcon}
          onClick={onSignInClickHandler}
        />
        <div className={classes.modalContent}>
          <SignUp />
        </div>           
      </section>

    </>,
  document.getElementById("accounts")
  )
}
