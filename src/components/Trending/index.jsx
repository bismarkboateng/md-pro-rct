import styles from "./index.module.scss";
import { PiTrendUpThin } from "react-icons/pi";


export default function index() {
  return (
    <section className={styles.trendingWrapper}>
      <div className={styles.trending}>

        <div className={styles.trendingIcon}>
          <i><PiTrendUpThin /></i>
          <span>Trending on Medium</span>
        </div>

      </div>
    </section>
  )
}
