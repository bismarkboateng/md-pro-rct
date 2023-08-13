import styles from "./index.module.scss";
import { Button } from "..";


export default function index() {
  return (
    <section className={styles.heroWrapper}>

      <div className={styles.heroCurious}>
        <h1>Stay curious.</h1>
        <div>
        Discover stories, thinking, and expertise<br />
        from writers on any topic.
        </div>
        <Button className={styles.heroButton}>Start reading</Button>
      </div>

      <div className={styles.animation}>
        Animations
      </div>

    </section>
  )
}
