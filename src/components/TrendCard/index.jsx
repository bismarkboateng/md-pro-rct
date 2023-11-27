import { Link } from "react-router-dom"
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
        <Link style={{ textDecoration:"none", color: "#000"}} to={`/trend/${item.id}`}>
          <h4>{item.Title}</h4>
        </Link>
        <div className={styles.trendingItemDateTime}>{item.Date} . {item.Duration}</div>
        </div>
  </li>
  )
}