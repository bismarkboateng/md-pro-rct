import { BsMedium } from "react-icons/bs"
import { CiBellOn } from "react-icons/ci"
import { Link } from "react-router-dom"
import { useState } from "react"
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.bubble.css'
import classes from "./index.module.scss"
import { Navbar, Button } from "../../components"



export default function index() {
  const [textInput, setTextInput] = useState("")


  function onPublishClickHandler() {
    console.log(textInput)
  }

  return (
    <section className={classes.newStory}>

      <Navbar
        nav={classes.storyNav}
      >
        <div className={classes.draft}>
          <Link to="/" style={{ color: "black", textDecoration: "none"}}>
            <BsMedium fontSize={45} style={{ marginRight: "10px"}}/>
          </Link>
          <p>Draft in bismark</p>
        </div>

        <div className={classes.publish}>
          <Button
            onClick={onPublishClickHandler}
            text="Publish"
            className={classes.publishBtn}
          />
          <p>...</p>
          <CiBellOn fontSize={26} style={{ cursor: "pointer"}}/>
          <img
            src="https://miro.medium.com/v2/resize:fill:32:32/0*mvgflI3mBCEBHxPU"
            className={classes.userImage}
          />
        </div>
      </Navbar>

      <div className={classes.quill}>
        <p className={classes.write}>Write below</p>
        <ReactQuill
          theme="bubble"
          value={textInput}
          onChange={setTextInput}
        />
      </div>

    </section>
  )
}
