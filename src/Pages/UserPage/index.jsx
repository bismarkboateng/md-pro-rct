import { useEffect, useState } from "react"
import { PiBellRingingThin } from "react-icons/pi"
import { SlNote } from "react-icons/sl"
import { IoAddSharp } from "react-icons/io5"
import { BiChevronDown } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"

import { Navbar, Search } from "../../components"
import { DefaultProfile } from "../../assets"
import classes from "./index.module.scss"
import {
  ArticleList, ProfileDropDown, StaffPicks,
  Discover, UserCard, FArticleList
} from "../../components"
import { BsMedium } from "react-icons/bs"

const initialState = {
  you: false,
  following: false,
}


export default function index() {
  const [user, setUser] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [actionClick, setActionClick] = useState(initialState)
  const [userClick, setUserClick] = useState(false)
  const navigate = useNavigate()


  function onUserClickHandler() {
    setUserClick(prevUserClick => !prevUserClick)
  }

  function handleLinkClick(click) {
    setActionClick({...initialState, [click]: true })
  }


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) {
      navigate("/")
    }
  }, [])

  return (
    <section className={classes.userPage}>
      <Navbar
        nav={classes.userNav}
      >

        <div className={classes.mediumSearch}>
          <BsMedium
            style={{ marginRight: "20px"}}
            className={classes.mediumIcon}
          />
          <div className={classes.searchField}>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>

        <div className={classes.userActions}>
          <Link to="/new-story" style={{ textDecoration: "none", color: "gray"}}>
           <i className={classes.userNote}>
            <SlNote
              className={classes.noteIcon}
            /> Write
           </i>
          </Link>
          <PiBellRingingThin className={classes.notification}/>
          <div className={classes.user} onClick={onUserClickHandler}>
            <img
              src={user.photoURL || DefaultProfile }
              alt="user"
              className={classes.userImage}
            />
            <BiChevronDown />
          </div>
          {userClick &&  
            <ProfileDropDown 
              onClick={onUserClickHandler}
              user={user}
            />
          }
        </div>
      </Navbar>

      <section className={classes.userContent}>
        
        <section className={classes.articleList}>
          <ul className={classes.actions}>
            <li><IoAddSharp /></li>
            <li
              onClick={() => handleLinkClick("you")}
              className={`${actionClick.following ? '' : classes.link}`}
            >
              For you
            </li>
            <li onClick={() => handleLinkClick("following")}
              className={`${actionClick.following && classes.link}`}
            >
              Following
            </li>
          </ul>

          <div className={classes.articles}>
            { actionClick.you ? (<ArticleList />) : (<FArticleList />) }
           
          </div>
        </section>

        <section className={classes.miscellaneous}>
          <div className={classes.discoverFollow}>
            <div className={classes.discover}>
              <Discover title="Recommended topics" />
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}