import { Navbar, MemFooter, Button, MemHero, Access, MeCarousel, NewDirections } from "../../components";
import styles from "./index.module.scss";
import Links from "../Home/Links";
import { Link } from "react-router-dom";
import { bg, wrap, iconColor } from "./Style";



export default function index() {
  return (
   <main>
    <Navbar bg={bg} iconColor={iconColor} wrap={wrap}>
      {Links.map((item) => (
        <Link to={`/${item.name}`} style={{ textDecoration: "none", color: "#fff"}}>
          <li className={styles.navItem} key={item.id}>{item.name}</li>
        </Link>
      ))}
      <Button className={styles.access}>
        Get unlimited access
      </Button>
    </Navbar>
    <MemHero />
    <Access />
    <MeCarousel />
    <NewDirections />
    <MemFooter />
   </main>
  )
}
