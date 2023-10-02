import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsMedium } from "react-icons/bs";

import { 
  Navbar, Button, CTA, WriteHero, ClickBait, 
  Modal, Eligibility, FAQ, FaqDrop, MemFooter 
} from "../../components";
import { cta } from "./Style";
import styles from "./index.module.scss";
import Text from "./Text";
import ModalContext from "../../store/modal-context";




export default function index() {
  const contextValue = useContext(ModalContext)


  const handleClickAction = contextValue.onSignInClickHandler
  
  return (
    <section>
      { contextValue.isSignInModalOpen && <Modal /> }

      <Navbar nav={styles.nav}>
        <section className={styles.navWrapper}>

          <Link to="/" style={{ textDecoration: "none"}}>
            <div className={styles.navIcon}>
              <i className={styles.mediumIcon}><BsMedium /></i>
              <h1>Medium</h1>
            </div>
          </Link>


          <Button
            className={styles.signIn}
            text="Sign in"
            onClick={handleClickAction}
          >

            <button
              className={styles.signUp}
              onClick={handleClickAction}
            >
              Sign Up
            </button>

          </Button>

        </section>

      </Navbar>

      <WriteHero />
      <ClickBait />
      <Eligibility />
      <CTA
        ctaStyles={cta}
        className={styles.ctaWrapper}
        title="Apply now"
        link={""}
      />
      <section className={styles.faq}>
        <FAQ />
        {
          Text.map((item) => (
            <FaqDrop
              header={item.title}
              id={item.id}
              key={item.id}
            >
              <div className={styles.faqChildContent}>
                {item.text}
              </div>

              <a style={{ textDecoration: "underline", color: "#fff"}} href="#">
                {item.link}
              </a>
            </FaqDrop>
          ))
        }
      </section>
      
      <MemFooter />
    </section>
  )
}
