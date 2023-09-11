import { useEffect } from "react"
import { PiBellRingingThin } from "react-icons/pi"
import { SlNote } from "react-icons/sl"
import { BsMedium } from "react-icons/bs"
import { IoAddSharp } from "react-icons/io5"
import { BiChevronDown } from "react-icons/bi"

import { Navbar, Search } from "../../components"
import { bg, wrap } from "./styles"
import classes from "./index.module.scss"

export default function index() {
  useEffect(() => {
    const user = localStorage.getItem("user")
    console.log(user)
  }, [])
  
  return (
    <section className={classes.userPage}>
      <Navbar bg={bg} wrap={wrap} iconColor={{}}>
        <div className={classes.searchField}>
          <Search />
        </div>

        <div className={classes.userActions}>
          <i><SlNote /> Write</i>
          <PiBellRingingThin className={classes.notification}/>
          <div className={classes.user}>
            <img
              src="https://miro.medium.com/v2/resize:fill:32:32/0*mvgflI3mBCEBHxPU"
              className={classes.userImage}
            />
            <BiChevronDown />
          </div>
        </div>

      </Navbar>


    </section>
  )
}
