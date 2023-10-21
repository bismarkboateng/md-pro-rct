import { BsMedium } from "react-icons/bs"
import { CiBellOn } from "react-icons/ci"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
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
  const [title, setTitle] = useState("")
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) {
      navigate("/")
    }
    setUser(user)
  }, [])


  function onPublishClickHandler() {
    const docRef = collection(db, "Articles")

    const date = getDate()
    const numOfWords = countWords(article)
    const durationInMinutes = calculateReadingDuration(numOfWords, 200)


    console.log({
      author: user.displayName,
      content: article,
      duration: `${durationInMinutes} min read`,
      date: date,
      tag: "Programming",
      title: title
    })

    addDoc(docRef, {
      author: user.displayName,
      content: article,
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
            src={user.photoURL}
            className={classes.userImage}
          />
        </div>
      </Navbar>

      <div className={classes.quill}>
        <div className={classes.title}>
          <ReactQuill
            theme="bubble"
            placeholder="Title"
            className={classes.titleField}
            value={title}
            onChange={setTitle}
          />
        </div>

        <ReactQuill
          theme="bubble"
          placeholder="content"
          className={classes.textEditor}
          value={article}
          onChange={setArticle}
        />
      </div>

    </section>
  )
}