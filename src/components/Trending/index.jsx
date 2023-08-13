import styles from "./index.module.scss";
import { PiTrendUpThin } from "react-icons/pi";
import Data from "./Data";



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
              <li key={item.index} className={styles.trendingItem}>
                <div className={styles.trendingItemIndex} >0{item.index}</div>
                <div className={styles.trendingItemContent}>
                  <div>
                    <img src={item.profileImage} alt={item.Title} className={styles.trendingItemImage} />  
                    <div>{item.Name}</div>
                  </div>
                  <h4>{item.Title}</h4>
                  <div className={styles.trendingItemDateTime}>{item.Date} . {item.Duration}</div>
                </div>
              </li>
            ))
          }
        </ul>
        

      </div>
    </section>
  )
}
