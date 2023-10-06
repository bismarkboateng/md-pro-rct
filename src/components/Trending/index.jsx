import styles from "./index.module.scss";
import { PiTrendUpThin } from "react-icons/pi";
import Data from "./Data";
import { TrendCard } from ".."


export default function index() {
  return (
    <section className={styles.trendingWrapper}>
      <div className={styles.trending}>
        
        <div className={styles.trendingIcon}>
          <i><PiTrendUpThin /></i> 
          <span className={styles.trendingText}>Trending on Medium</span>
        </div>

        <ul className={styles.trendingListItem}>
          {
            Data.map((item) => (
              <TrendCard
                item={item}
                value="0"
                key={item.index}
              />
            ))
          }
        </ul>
      </div>
    </section>
  )
}