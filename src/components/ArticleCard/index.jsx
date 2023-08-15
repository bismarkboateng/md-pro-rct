import styles from "./index.module.scss";
import { MdOutlineBookmarkAdd } from "react-icons/md";


export default function index({ article }) {
  
  return (
    <div className={styles.articleCardWrapper}>

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
        </div>

      </div>

      <div className={styles.svgImage}>
        <MdOutlineBookmarkAdd />
        <img src={article.image} 
          alt={article.title} 
          className={styles.articleImage}
        />
      </div>

    </div>
  )
}
