import styles from "./index.module.scss";
import { Button } from ".."


export default function index() {
  return (
    <section className={styles.newDirections}>
        <div className={styles.header}>
            Take your mind<br />
            in new directions.
        </div>
        <Button
          text="Get unlimited access"
          className={styles.access}
        />
        <img 
            src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Membership_Footer.svg"
        />
    </section>
  )
}
