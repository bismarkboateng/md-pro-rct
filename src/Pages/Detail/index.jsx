import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore" 
import { useEffect, useState } from "react"

import { db } from "../../utils/firebaseConfig"
import { Spinner, Button, Navbar,Search, ProfileDropDown } from "../../components"
import classes from "./index.module.scss"
import { bg, wrap } from "./styles"
import { SlNote } from "react-icons/sl"
import { BiChevronDown } from "react-icons/bi"





export default function index() {
  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const { articleId } = useParams()

  const docRef = doc(db, "Articles", articleId);

  useEffect(() => {
    setIsLoading(true)
    async function fetchSingleDoc() {
      const docSnapshot = await getDoc(docRef)

      if (docSnapshot.exists()) {
        // console.log("Document data:", docSnap.data());
        setArticle({ ...docSnapshot.data() })
        setIsLoading(false)
      } else {
        console.log("No such document!");
      }
    }

    fetchSingleDoc()
  }, [])

  if (isLoading) return <Spinner message="Loading article..." spinner={classes.spinner} />

  return (
    <section>
      <Navbar bg={bg} wrap={wrap} iconColor={{}}>
        <div className={classes.searchField}>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className={classes.userActions}>
          <i><SlNote /> Write</i>
          
          <Button
            text="Sign up"
            className={classes.signUp}
            onClick={() => {console.log("Sign up")}}
            buttonWrapper={classes.buttonWrapper}
          >
            <button
              onClick={() => {console.log("Sign in")}}
              className={classes.signIn}
            
            >
              Sign in
            </button>
          </Button>

          <div className={classes.user} onClick={() => {}}>
            <img
              src="https://miro.medium.com/v2/resize:fill:32:32/0*mvgflI3mBCEBHxPU"
              className={classes.userImage}
            />
            <BiChevronDown />
          </div>
        </div>
      </Navbar>

      <div className={classes.detailWrapper}>
        <h1 className={classes.articleTitle}>{article.title}</h1>
      </div>
    </section>
  )
}