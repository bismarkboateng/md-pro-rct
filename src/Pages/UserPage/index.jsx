import { useEffect, useState } from "react"
import { PiBellRingingThin } from "react-icons/pi"
import { SlNote } from "react-icons/sl"
import { BsMedium } from "react-icons/bs"
import { IoAddSharp } from "react-icons/io5"
import { BiChevronDown } from "react-icons/bi"


import { Navbar, Search } from "../../components"
import { bg, wrap } from "./styles"
import classes from "./index.module.scss"
import { ArticleList, ProfileDropDown, StaffPicks, Discover, UserCard} from "../../components"



export default function index() {
  // search term
  const [searchTerm, setSearchTerm] = useState("")
  const [actionClick, setActionClick] = useState(false)
  const [userClick, setUserClick] = useState(false)

  function onUserClickHandler() {
    setUserClick(prevUserClick => !prevUserClick)
  }

  useEffect(() => {
    const user = localStorage.getItem("user")
    console.log(user)
  }, [])

  
  return (
    <section className={classes.userPage}>
      <Navbar bg={bg} wrap={wrap} iconColor={{}}>
        <div className={classes.searchField}>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className={classes.userActions}>
          <i><SlNote /> Write</i>
          <PiBellRingingThin className={classes.notification}/>
          <div className={classes.user} onClick={onUserClickHandler}>
            <img
              src="https://miro.medium.com/v2/resize:fill:32:32/0*mvgflI3mBCEBHxPU"
              className={classes.userImage}
            />
            <BiChevronDown />
          </div>
          {userClick &&  <ProfileDropDown onClick={onUserClickHandler} /> }
        </div>
      </Navbar>

      <section className={classes.userContent}>
        <section className={classes.articleList}>
          <ul className={classes.actions}>
            <li><IoAddSharp /></li>
            <li onClick={() => setActionClick(true)}>For you</li>
            <li onClick={() => setActionClick(true)}>Following</li>
          </ul>
          <ArticleList />
        </section>

        <section className={classes.miscellaneous}>
          <StaffPicks />
          <div className={classes.discover}>
            <Discover title="Recommended topics" />
          </div>
          <UserCard />
        </section>
      </section>

    </section>
  )
}