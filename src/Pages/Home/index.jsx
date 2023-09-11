import { Navbar, Modal } from "../../components"
import { Fragment, useState, useEffect, useContext } from "react";
import styles from "./index.module.scss";
import { Button, Herosection, Trending, ArticleList, Discover } from "../../components"
import { Link } from "react-router-dom";
import Links from "./Links";
import ModalContext from "../../store/modal-context";



export default function index() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const contextValue = useContext(ModalContext)


  useEffect(() => {

    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth)
    })

  }, [innerWidth])


  return (
    <section>
      { contextValue.isSignInModalOpen && <Modal /> }
      <Navbar bg={{background: ""}} wrap={{ }} iconColor={{}} title="Medium">
        { Links.map((item) => (
           <Fragment key={item.id}>
            { item.name === "Sign in"
            ? (<li className={styles.navItem} onClick={contextValue.onSignInClickHandler}>{item.name}</li>)
            : (
              <Link to={item.name} style={{ textDecoration: "none", color: "black"}}>
                <li className={styles.navItem} >{item.name}</li>
              </Link>
              )
            }
           </Fragment>
        ))}

        <Button className={styles.getStarted}
          onClick={contextValue.onSignInClickHandler}
        >Get started</Button>
      </Navbar>
      
      <Herosection />
      <Trending />
      <div className={styles.articleDiscoverWrapper}>
        <div className={styles.articleDiscover}>
            {
              innerWidth <= (330 || 480 || 767) ?
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
                    <Discover />
                </div>
              </>
              )
            }
        </div>
      </div>
    </section>
  )
}
