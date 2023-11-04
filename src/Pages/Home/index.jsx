import { useState, useEffect, useContext } from "react";
import { BsMedium } from "react-icons/bs";

import { Navbar, Modal, Navlinks } from "../../components"
import { Button, Herosection, Trending, ArticleList, Discover } from "../../components"
import { Links } from "./Links"
import styles from "./index.module.scss";
import ModalContext from "../../store/modal-context";



export default function index() {
  const [scrolling, setScrolling] = useState(false)
  const contextValue = useContext(ModalContext)
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickAction = contextValue.onSignInClickHandler


  return (
    <section className={styles.home}>
      { contextValue.isSignInModalOpen && <Modal /> }
 
      <Navbar 
        scrolling={scrolling} 
        nav={styles.nav}
        background={styles.background}
      >
        <section  className={styles.navWrapper}>
          <div className={styles.navIcon}>
            <i className={styles.mediumIcon}><BsMedium /></i>
            <h1>Medium</h1>
          </div>
          <Navlinks handleClickAction={handleClickAction} />
          <Button
            className={styles.getStarted}
            btnBackground={styles.btnBackground}
            scrolling={scrolling}
            onClick={contextValue.onSignInClickHandler}
            text="Get started"
          />
        </section>
      </Navbar>
      
      <Herosection />
      <Trending />
      <div className={styles.articleDiscover}>
        <div className={styles.articles}>
          <ArticleList />
        </div>

        <div className={styles.discover}>
          <Discover title="Discover more of what matters to you">
            <div className={styles.line} />
            <ul className={styles.linkItemWrapper}>
              { Links.map((link) => (
                <li key={link.index} className={styles.linkItem}>{link.title}</li>
              ))}
            </ul>
          </Discover>
        </div>
      </div>
    </section>
  )
}
