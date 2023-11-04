import { Link } from "react-router-dom";

import styles from "./index.module.scss"


export default function index({ handleClickAction, linkColor, scrolling }) {

  return (
    <ul className={styles.navListItems}>
        <Link to="/our-story" style={{ textDecoration: "none", color: "black"}}>
            <li className={styles.navItem} style={{ color: scrolling ? "black" : linkColor}}>
                Our story
            </li>
        </Link>
        <Link to="/membership" style={{ textDecoration: "none", color: "black"}}>
            <li className={styles.navItem} style={{ color: scrolling ? "black" : linkColor}}>
                Membership
            </li>
        </Link>
        <Link to="/partner-program" style={{ textDecoration: "none", color: "black"}}>
            <li className={styles.navItem} style={{ color: scrolling ? "black" : linkColor}}>
                Write
            </li>
        </Link>
        <li
            className={styles.navItem} 
            style={{ color: scrolling ? "black" : linkColor}} 
            onClick={handleClickAction}
        >Sign in</li>
    </ul>
  )
}
