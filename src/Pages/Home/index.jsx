import { Navbar, Modal } from "../../components"
import { Fragment, useState, useEffect, useContext } from "react";
import styles from "./index.module.scss";
import { Button, Herosection, Trending, ArticleList, Discover } from "../../components"
import { Link } from "react-router-dom";
import { navItems, Links } from "./Links"
import ModalContext from "../../store/modal-context";
import { BsMedium } from "react-icons/bs";



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

          <ul className={styles.navListItems}>
            <Link to="/our-story" style={{ textDecoration: "none", color: "black"}}>
              <li
                className={styles.navItem}
              >
                Our story
              </li>
            </Link>
            

            <Link to="/membership" style={{ textDecoration: "none", color: "black"}}>
              <li
                className={styles.navItem}
              >
                Membership
              </li>
            </Link>
            

            <Link to="write" style={{ textDecoration: "none", color: "black"}}>
              <li
                className={styles.navItem}
              >
                Write
              </li>
            </Link>
            

            <li
              className={styles.navItem} 
              onClick={handleClickAction}
            >
              Sign in
            </li>
          
          </ul>

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
