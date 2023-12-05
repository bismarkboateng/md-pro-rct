import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { BsMedium } from "react-icons/bs"
import { SlNote } from "react-icons/sl"
import { BiChevronDown } from "react-icons/bi"
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md"

import {
 Navbar, Search, Button
} from "../../components"
import { AppContext } from "../../store/app-context"
import { DefaultProfile } from "../../assets"
import classes from "./index.module.scss"


export default function index() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchTopic, setSearchTopic] = useState("")
  const { onSignInClickHandler } = useContext(AppContext)

  return (
    <section>
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

      <section className={classes.exploreContentWrapper}>
        <div className={classes.exploreTitle}>Explore topics</div>
        <div className={classes.exploreInputFieldWrapper}>
          <IoSearchOutline
            fontSize={23}
            className={classes.searchIcon}
          />
          <input
            value={searchTopic}
            placeholder="Search all topics"
            onChange={(event) => setSearchTopic(event.target.value)}
            className={classes.exploreInputField}
          />
        </div>


        <section className={classes.exploreTopicWrapper}>
          <div className={classes.textArrowWrapper}>
            <p className={classes.topicText}>Life</p>
            <i><MdKeyboardArrowDown fontSize={25} className={classes.arrowIcon} /></i>
          </div>

          <div className={classes.textArrowWrapper}>
            <p className={classes.topicText}>Self Improvement</p>
            <i><MdKeyboardArrowDown fontSize={25} className={classes.arrowIcon} /></i>
          </div>

          <div className={classes.textArrowWrapper}>
            <p className={classes.topicText}>Work</p>
            <i><MdKeyboardArrowDown fontSize={25} className={classes.arrowIcon} /></i>
          </div>

          <div className={classes.textArrowWrapper}>
            <p className={classes.topicText}>Technology</p>
            <i><MdKeyboardArrowDown fontSize={25} className={classes.arrowIcon} /></i>
          </div>

        </section>

      </section>
    </section>
  )
}
