import { Navbar, MemFooter, Button, MemHero, Access, MeCarousel, NewDirections } from "../../components";
import styles from "./index.module.scss";
import { navItems } from "../Home/Links";
import { Link } from "react-router-dom";
import { bg, wrap, iconColor } from "./Style";



export default function index() {

  const text = window.innerWidth <= 588 ? "Get started" : "Get unlimited access"
  
  return (
   <main>
    <Navbar bg={bg} iconColor={iconColor} wrap={wrap} title="Medium">
      {navItems.map((item) => (
        <Link to={`/${item.name}`} style={{ textDecoration: "none", color: "#fff"}}>
          <li className={styles.navItem} key={item.id}>{item.name}</li>
        </Link>
      ))}

      <Button
        text={text}
        className={styles.access}
      /> 

    </Navbar>
    <MemHero />
    <Access />
    <MeCarousel />
    <NewDirections />
    <MemFooter>Every idea needs a Medium</MemFooter>
   </main>
  )
}
