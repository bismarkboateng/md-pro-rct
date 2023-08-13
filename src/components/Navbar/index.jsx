import styles from "./index.module.scss";
import { BsMedium } from "react-icons/bs";
import { Button } from ".."
// import { useEffect, useState } from "react";




export default function index(props) {

  return (
    <nav className={styles.nav}>
      <section className={styles.navWrapper}>
        <div className={styles.navIcon}>
          <i className={styles.mediumIcon}><BsMedium /></i>
          <h1>Medium</h1>
        </div>

        <ul className={styles.navListItems}>
          {props.children}
        </ul>
      </section>
    </nav>
  )
}
