import styles from "./index.module.scss";
import { Button } from "..";


export default function index() {
  return (
    <section className={styles.memHero}>
        <div className={styles.memHeader}>Fuel great thinking.</div>
        <div className={styles.text}>
            Become a Medium member to enjoy unlimited access and<br />
            directly support the writers you read most.
        </div>
        <Button
          text="Get unlimited access"
          className={styles.access}
        />
    </section>
  )
}