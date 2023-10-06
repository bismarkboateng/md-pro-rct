import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";


import { 
  Navbar, MemFooter, Button, MemHero, Modal,
  Access, MeCarousel, NewDirections, Navlinks
} from "../../components";
import styles from "./index.module.scss";
import { BsMedium } from "react-icons/bs";
import ModalContext from "../../store/modal-context";




export default function index() {
  const [scrolling, setScrolling] = useState(false)
  const contextValue = useContext(ModalContext)
  const handleClickAction =contextValue.onSignInClickHandler
  const linkColor = "#fff"

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

  const text = window.innerWidth <= 588 ? "Get started" : "Get unlimited access"

  return (
   <main>
    { contextValue.isSignInModalOpen && <Modal /> }

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
            <h1 style={{ color: scrolling ? "black" : ""}}>Medium</h1>
          </div>
        </Link>
        <Navlinks 
          scrolling={scrolling}
          handleClickAction={handleClickAction} 
          linkColor={linkColor} 
        />
        <Button
          className={styles.access}
          onClick={contextValue.onSignInClickHandler}
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
