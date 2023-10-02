import { Link } from "react-router-dom";
import { useContext } from "react";


import { 
  Navbar, MemFooter, Button, MemHero, Modal,
  Access, MeCarousel, NewDirections, Navlinks
} from "../../components";
import styles from "./index.module.scss";
import { BsMedium } from "react-icons/bs";
import ModalContext from "../../store/modal-context";




export default function index() {
  const contextValue = useContext(ModalContext)


  const text = window.innerWidth <= 588 ? "Get started" : "Get unlimited access"
  const handleClickAction =contextValue.onSignInClickHandler
  const linkColor = "#fff"

  return (
   <main>
    { contextValue.isSignInModalOpen && <Modal /> }

    <Navbar nav={styles.nav}>
      <section  className={styles.navWrapper}>
        <Link  to="/" style={{ textDecoration: "none", marginRight: "auto"}}>
          <div className={styles.navIcon}>
            <i className={styles.mediumIcon}><BsMedium /></i>
            <h1>Medium</h1>
          </div>
        </Link>
        <Navlinks handleClickAction={handleClickAction} linkColor={linkColor} />
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
