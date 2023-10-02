import { useState, useEffect, useContext } from "react";
import { BsMedium } from "react-icons/bs";

import { Navbar, Modal, Navlinks } from "../../components"
import { Button, Herosection, Trending, ArticleList, Discover } from "../../components"
import { Links } from "./Links"
import styles from "./index.module.scss";
import ModalContext from "../../store/modal-context";



export default function index() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const contextValue = useContext(ModalContext)


  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth)
    })
  }, [innerWidth])

  const handleClickAction =contextValue.onSignInClickHandler


  return (
    <section>
      { contextValue.isSignInModalOpen && <Modal /> }
 
      <Navbar nav={styles.nav}>
        <section  className={styles.navWrapper}>
          <div className={styles.navIcon}>
            <i className={styles.mediumIcon}><BsMedium /></i>
            <h1>Medium</h1>
          </div>
          <Navlinks handleClickAction={handleClickAction} />
          <Button
            className={styles.getStarted}
            onClick={contextValue.onSignInClickHandler}
            text="Get started"
          />

        </section>
      </Navbar>
      
      <Herosection />
      <Trending />
      <div className={styles.articleDiscoverWrapper}>
        <div className={styles.articleDiscover}>
          {
            ((innerWidth <= 330) || (innerWidth <= 480) || (innerWidth <= 767))
            ?
            (
            <>
              <div className={styles.discover}>
                  <Discover />
              </div>

              <div className={styles.articles}>
                  <ArticleList />
              </div>
            </>
            ) : 
            (
            <>
              <div className={styles.articles}>
                  <ArticleList />
              </div>
              <div className={styles.discover}>
                <Discover title="Discover more of what matters to you">
                  <div className={styles.line}/>
                  <ul className={styles.linkItemWrapper}>
                    { Links.map((link) => (
                      <li key={link.index} className={styles.linkItem}>{link.title}</li>
                    ))}
                  </ul>
                </Discover>
              </div>
            </>
            )
          }
        </div>
      </div>
    </section>
  )
}
