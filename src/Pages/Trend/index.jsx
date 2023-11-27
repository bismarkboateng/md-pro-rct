import { useContext, useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore" 
import { BsMedium } from "react-icons/bs"
import { SlNote } from "react-icons/sl"
import { BiChevronDown } from "react-icons/bi"

import { 
    Button, Navbar,
    Search, Modal, ArticleDetailContent
} from "../../components"
import { DefaultProfile } from "../../assets"
import classes from "./index.module.scss"
import { AppContext } from "../../store/app-context"
import { db } from "../../utils/firebaseConfig"




export default function index() {
  const { isSignInModalOpen, onSignInClickHandler} = useContext(AppContext)
  const [searchTerm, setSearchTerm] = useState("")
  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()

  const docRef = doc(db, "Articles", id)

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
              src={DefaultProfile}
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
