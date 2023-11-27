import { useParams, Link } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore" 
import { useEffect, useState, useContext } from "react"

import { db } from "../../utils/firebaseConfig"
import { DefaultProfile } from "../../assets"
import { 
  Spinner, Button, Navbar,
  Search, ArticleDetailContent, Modal
} from "../../components"
import { SlNote } from "react-icons/sl"
import { BiChevronDown } from "react-icons/bi"
import { BsMedium } from "react-icons/bs"
import classes from "./index.module.scss"
import { AppContext } from "../../store/app-context";





export default function index() {
  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const { articleId } = useParams()
  const { isSignInModalOpen, onSignInClickHandler } = useContext(AppContext)

  const docRef = doc(db, "Articles", articleId);

  useEffect(() => {
    setIsLoading(true)
    async function fetchSingleDoc() {
      const docSnapshot = await getDoc(docRef)
      if (docSnapshot.exists()) {
        setArticle({ ...docSnapshot.data() })
        setIsLoading(false)
      } else {
        alert("No such document!");
      }
    }
    fetchSingleDoc()
  }, [])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    setUser(user)
  }, [])

  if (isLoading) return <Spinner message="Loading article..." spinner={classes.spinner} />


  return (
    <section>
      { isSignInModalOpen && <Modal /> }

      <Navbar
        nav={classes.nav}
      >
        <div className={classes.searchField}>
          <Link to="/" style={{ textDecoration: "none", color: "black"}}>
            <BsMedium
              className={classes.mediumIcon}
            />
          </Link>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className={classes.userActions}>
          <Link to={"/new-story"} style={{ textDecoration: "none", color: "gray"}}>
            <i><SlNote /> Write</i>
          </Link>
          <Button
            text="Sign up"
            className={classes.signUp}
            onClick={onSignInClickHandler}
            buttonWrapper={classes.buttonWrapper}
          >
            <button
              onClick={onSignInClickHandler}
              className={classes.signIn}
            >
              Sign in
            </button>
          </Button>
          <div className={classes.user} onClick={() => {}}>
            <img
              src={user?.photoURL || DefaultProfile}
              className={classes.userImage}
            />
            <BiChevronDown />
          </div>
        </div>
      </Navbar>

      <div className={classes.detailWrapper}>
        <ArticleDetailContent
          article={article}
        />
      </div>
    </section>
  )
}