import { Link } from "react-router-dom";

import styles from "./index.module.scss"


export default function index({ handleClickAction, linkColor }) {

  return (
    <ul className={styles.navListItems}>
        <Link to="/our-story" style={{ textDecoration: "none", color: "black"}}>
            <li className={styles.navItem} style={{ color: linkColor}}>
                Our story
            </li>
        </Link>


        <Link to="/membership" style={{ textDecoration: "none", color: "black"}}>
            <li className={styles.navItem} style={{ color: linkColor}}>
                Membership
            </li>
        </Link>


        <Link to="/write" style={{ textDecoration: "none", color: "black"}}>
            <li className={styles.navItem} style={{ color: linkColor}}>
                Write
            </li>
        </Link>


        <li
            className={styles.navItem} 
            style={{ color: linkColor}} 
            onClick={handleClickAction}
        >
            Sign in
        </li>
    </ul>
  )
}
