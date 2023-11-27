import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";


import { 
  Navbar, MemFooter, Button, MemHero, Modal,
  Access, MeCarousel, NewDirections, Navlinks
} from "../../components";
import styles from "./index.module.scss";
import { BsMedium } from "react-icons/bs";
import { AppContext } from "../../store/app-context";




export default function index() {
  const [scrolling, setScrolling] = useState(false)
  const [inWidth, setInWidth] = useState(false)

  const { onSignInClickHandler, isSignInModalOpen } = useContext(AppContext)
  const handleClickAction = onSignInClickHandler
  const linkColor = "#fff"


  useEffect(() => {
    const onWindowResize = () => {
      setInWidth(window.innerWidth)
    }
    window.addEventListener("resize", onWindowResize)
    return () => {
      window.removeEventListener("resize", onWindowResize)
    }
  }, [inWidth])

  useEffect(() => {
    const onHandleScroll = () => {
      if (window.scrollY > 450) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }
    window.addEventListener("scroll", onHandleScroll)
    return () => {
      window.removeEventListener("scroll", onHandleScroll)
    }
  }, [])

  const text =  +inWidth < 420 ? "Get started" : "Get unlimited access"

  return (
   <main>
    { isSignInModalOpen && <Modal /> }

    <Navbar 
      scrolling={scrolling}
      nav={styles.nav}
      background={styles.background}
    >
      <section  className={styles.navWrapper}>
        <Link  to="/" style={{ textDecoration: "none", marginRight: "auto"}}>
          <div className={styles.navIcon}>
            <i className={styles.mediumIcon}>
              <BsMedium color={`${scrolling ? "black" : ""}`}/>
            </i>
            <h1 
              style={{ color: scrolling ? "black" : ""}}
              className={styles.mediumTitle}
            >
              Medium
            </h1>
          </div>
        </Link>
        <Navlinks 
          scrolling={scrolling}
          handleClickAction={handleClickAction} 
          linkColor={linkColor} 
        />
        <Button
          className={styles.access}
          onClick={onSignInClickHandler}
          text={text}
        />
      </section>
    </Navbar>

    <MemHero />
    <Access />
    <MeCarousel />
    <NewDirections />
    <MemFooter>Every idea needs a Medium</MemFooter>
   </main>
  )
}
