import styles from "./index.module.scss";
import { Tags } from "./constants";



export default function index(props) {
  return (
    <section className={styles.discoverWrapper}>
      <div className={styles.title}>{props.title}</div>

      <ul>
        { Tags.map((tag) => (
          <li className={styles.tagItem} key={tag.index}>{ tag.title }</li>
        ))}
      </ul>

      <div className={styles.seeMore}>See more topics</div>

      <>
        {props.children}
      </>
    </section>
  )
}
