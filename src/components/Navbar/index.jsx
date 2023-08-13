import styles from "./index.module.scss";
import { BsMedium } from "react-icons/bs";
import { Button } from ".."
// import { useEffect, useState } from "react";



const Links = [
  {name: "Our story", id: Math.random()},
  {name: "Membership", id: Math.random()},
  {name: "Write", id: Math.random()},
  {name: "Sign In", id: Math.random()},

]

export default function index() {

  return (
    <nav className={styles.nav}>
      <section className={styles.navWrapper}>
        <div className={styles.navIcon}>
          <i className={styles.mediumIcon}><BsMedium /></i>
          <h1>Medium</h1>
        </div>

        <ul className={styles.navListItems}>
          { Links.map((item) => (<li className={styles.navItem} key={item.id}>{item.name}</li>))}
          <Button className={styles.getStarted}>Get started</Button>
        </ul>
      </section>
    </nav>
  )
}
