import styles from "./index.module.scss"


export default function index({ item, value, style }) {
  return (
    <li key={item.index} className={styles.trendingItem} style={style}>
        <div className={styles.trendingItemIndex} >{ value }{item.index}</div>
        <div className={styles.trendingItemContent}>
        <div>
            <img
                src={item.profileImage} 
                alt={item.Title} 
                className={styles.trendingItemImage} 
            />  
            <div>{item.Name}</div>
        </div>
        <h4>{item.Title}</h4>
        <div className={styles.trendingItemDateTime}>{item.Date} . {item.Duration}</div>
        </div>
  </li>
  )
}