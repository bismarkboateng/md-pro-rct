import { BsMedium } from "react-icons/bs"
import { CiBellOn } from "react-icons/ci"
import { Link } from "react-router-dom"
import { useState } from "react"
import ReactQuill from "react-quill"
import { collection, addDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"


import { app, db } from "../../utils/firebaseConfig"
import 'react-quill/dist/quill.bubble.css'
import classes from "./index.module.scss"
import { Navbar, Button } from "../../components"
import { getDate } from "../../utils/getCurDate"
import { countWords, calculateReadingDuration} from "../../utils/textComputation"



export default function index() {
  const [article, setArticle] = useState("")
  const navigate = useNavigate()


  function onPublishClickHandler() {
    const docRef = collection(db, "Articles")

    const date = getDate()
    const title = article.split(/<\/h1>/)[0]
    const content = article.split(/<\/h1>/).slice(1)[0]
    const numOfWords = countWords(article)
    const durationInMinutes = calculateReadingDuration(numOfWords, 200)

    console.log(content)


    addDoc(docRef, {
      author: "Bismark",
      content: content,
      duration: `${durationInMinutes} min read`,
      date: date,
      tag: "Programming",
      title: title
    })

    .then(() => {
      // NB: user should be navigated to his posts
      navigate("/")
    })

    .catch((err) => {
      console.log(err)
    })

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
          value={article}
          onChange={setArticle}
        />
      </div>

    </section>
  )
}
