import { useContext, useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { BsMedium } from "react-icons/bs"
import { SlNote } from "react-icons/sl"
import { BiChevronDown } from "react-icons/bi"

import { 
  Button, Navbar,
  Search, Modal, TagCard,
} from "../../components"
import { DefaultProfile } from "../../assets"
import classes from "./index.module.scss"
import { AppContext } from "../../store/app-context"




export default function index() {
  const { 
    isSignInModalOpen, onSignInClickHandler, 
    tagArticles, onFetchTagArticlesHandler, 
    isLoading
  } = useContext(AppContext)
  const [searchTerm, setSearchTerm] = useState("")
  const { tag } = useParams()


  useEffect(() => {
    onFetchTagArticlesHandler()
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

      <section className={classes.tagWrapper}>
        <h1 className={classes.tagHeader}>{tag.replace("-", " ").toUpperCase()}</h1>
        <div className={classes.tagInfo}>
          <span>Topic</span>{" "}
          <span>4.5M Followers</span>{" "}
          <span>347K Stories</span>
        </div>
        <button className={classes.tagFollow}>
          Follow
        </button>
      </section>

      <section className={classes.contentWrapper}>
        <h2 className={classes.tagRecommend}>Recommended stories</h2>

        <section className={classes.content}>
          {tagArticles.map((article) => (
            <TagCard
              key={article?.id}
              article={article}
            />

          ))}
        </section>
      </section>
    </section>
  )
}
