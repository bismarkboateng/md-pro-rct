import { PiTrendUpThin } from "react-icons/pi";

import Data from "./Data";
import { TrendCard } from ".."
import { TrendIcon } from "../../assets"
import styles from "./index.module.scss";


export default function index() {
  return (
    <section className={styles.trendingWrapper}>
      <div className={styles.trending}>
        
        <div className={styles.trendingIcon}>
          <img src={TrendIcon} className={styles.trendIcon} />
          <div className={styles.trendingText}>Trending on Medium</div>
        </div>

        <ul className={styles.trendingListItem}>
          {
            Data.map((item) => (
              <TrendCard
                item={item}
                value="0"
                key={item.id}
              />
            ))
          }
        </ul>
      </div>
    </section>
  )
}