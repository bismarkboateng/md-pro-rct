import { Navbar } from "../../components"
import styles from "./index.module.scss";
import { Button, Herosection, Trending } from "../../components"
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
    </section>
  )
}
