import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { BsMedium } from "react-icons/bs"
import { SlNote } from "react-icons/sl"
import { BiChevronDown } from "react-icons/bi"

import { 
    Button, Navbar,
    Search, Modal
} from "../../components"
import classes from "./index.module.scss"
import { AppContext } from "../../store/app-context"




export default function index() {
  const { isSignInModalOpen, onSignInClickHandler} = useContext(AppContext)
  const [searchTerm, setSearchTerm] = useState("")

  const user = false
  const DefaultProfile = "https://cdn4.iconfinder.com/data/icons/nightlife-business-glyph/100/business_glyph-26-512.png"

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
    </section>
  )
}
