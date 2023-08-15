import styles from "./index.module.scss";
import { BsMedium } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Button } from ".."
// import { useEffect, useState } from "react";




export default function index(props) {

  return (
    <nav className={styles.nav} style={props.bg || "" }>
      <section className={styles.navWrapper} style={props.wrap || ""}>
        <Link style={{ textDecoration: "none", color: "black"}} to="/">
          <div className={styles.navIcon} style={props.iconColor}>
            <i className={styles.mediumIcon}><BsMedium /></i>
            <h1>Medium</h1>
          </div>
        </Link>

        <ul className={styles.navListItems}>
          {props.children}
        </ul>
      </section>
    </nav>
  )
}
