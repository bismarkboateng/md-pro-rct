import { Navbar } from "../../components"
import { Fragment, useState } from "react";
import styles from "./index.module.scss";
import { Button, Herosection, Trending, ArticleList, Discover } from "../../components"
import { Link } from "react-router-dom";
import Links from "./Links";



export default function index() {
  const [modal, setModal] = useState(false);

  function onSignInClickHandler() {
    console.log("Sign in click")
  }

  return (
    <section>
      <Navbar bg={{background: ""}} wrap={{ }} iconColor={{}}>
        { Links.map((item) => (
           <Fragment key={item.id}>
            { item.name === "Sign in"
            ? (<li className={styles.navItem} onClick={onSignInClickHandler}>{item.name}</li>)
            : (
              <Link to={item.name} style={{ textDecoration: "none", color: "black"}}>
                <li className={styles.navItem} >{item.name}</li>
              </Link>
              )
            }
           </Fragment>
        ))}

        <Button className={styles.getStarted}>Get started</Button>
      </Navbar>
      
      <Herosection />
      <Trending />
      <div className={styles.articleDiscoverWrapper}>
        <div className={styles.articleDiscover}>
          <div className={styles.articles}>
              <ArticleList />
          </div>
          <div className={styles.discover}>
              <Discover />
          </div>
        </div>
      </div>
    </section>
  )
}
