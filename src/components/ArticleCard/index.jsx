import styles from "./index.module.scss";
import { MdOutlineBookmarkAdd } from "react-icons/md";


export default function index({ article }) {
  
  return (
    <div>

      <div className={styles.articleContent}>
        <div className={styles.profileAuthor}>
          <img src={article.profileImage} alt="author image"
            className={styles.profileImage}
          />
          <span>{article.author}</span>
        </div>

        <h1>{article.title}</h1>
        <div className={styles.subTitle}>{article.subtitle}</div>
        
        <div className={styles.dateDurationTagBookmarkSvg}>
          <div className={styles.dateDuration}>{article.date} . {article.duration}.</div>
          <div className={styles.tag}>{article.tag}</div>
          <MdOutlineBookmarkAdd />
        </div>

      </div>

      <img src={article.image} 
        alt={article.title} 
        className={styles.articleImage}
      />

    </div>
  )
}
