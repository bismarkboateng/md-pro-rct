import { Link } from "react-router-dom";

import styles from "./index.module.scss";
import { Tags } from "./constants";



export default function index(props) {
  return (
    <section className={styles.discoverWrapper}>
      <div className={styles.title}>{props.title}</div>
      <ul>
        { Tags.map((tag) => (
          <Link 
            style={{ textDecoration: "none"}} 
            to={`/tag/${tag.title.toLowerCase().replace(/ /g, '-')}`}
          >
            <li className={styles.tagItem} key={tag.index}>
              { tag.title }
            </li>
          </Link>
        ))}
      </ul>

      
        <Link
          style={{ textDecoration: "none" }}
          to={"/explore-topics"}
        >
          <div className={styles.seeMore}>
              See more topics
          </div>
        </Link>
      <>
        {props.children}
      </>
    </section>
  )
}
