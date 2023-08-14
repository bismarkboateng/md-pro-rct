import styles from "./index.module.scss";
import { Tags, Links } from "./constants";



export default function index() {
  return (
    <section className={styles.discoverWrapper}>
      <div className={styles.title}>Discover more of what matters to you</div>

      <ul>
        { Tags.map((tag) => (
          <li className={styles.tagItem} key={tag.index}>{ tag.title }</li>
        ))}
      </ul>

      <div className={styles.seeMore}>See more topics</div>

      <div className={styles.line}/>

      <ul className={styles.linkItemWrapper}>
        { Links.map((link) => (
          <li key={link.index} className={styles.linkItem}>{link.title}</li>
        ))}
      </ul>
    </section>
  )
}
