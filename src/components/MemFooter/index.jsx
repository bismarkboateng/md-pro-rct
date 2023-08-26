import styles from "./index.module.scss";
import { BsMedium } from "react-icons/bs";
import { Link } from "react-router-dom";
import Links from "./Links";


export default function index(props) {
  return (
    <footer className={styles.memFooter}>
        <div>
          <i><BsMedium /></i>
          <div>Medium</div>
        </div>

        <p>{props.children}</p>

        <ul>
          { Links.map((link) => (
            <Link key={link.id} to={link.link}>
              <li>{link.text}</li>
            </Link>
          ))}
        </ul>
    </footer>
  )
}
