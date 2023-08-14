import { Navbar } from "../../components"
import styles from "./index.module.scss";
import { Button, Herosection, Trending, ArticleList, Discover } from "../../components"
import { Link } from "react-router-dom";
import Links from "./Links";



export default function index() {
  return (
    <section>
      <Navbar>
        { Links.map((item) => (
          <Link to={item.name} style={{ textDecoration: "none", color: "black"}}>
            <li className={styles.navItem} key={item.id}>{item.name}</li>
          </Link>
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
