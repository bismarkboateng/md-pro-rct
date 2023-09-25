import styles from "./index.module.scss";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { Link } from "react-router-dom"; 


export default function index({ article, articleImage, profileImage}) {
  console.log(article)
  return (
    <div className={styles.articleCardWrapper}>

      <div className={styles.articleContent}>

        <div className={styles.profileAuthor}>
          <img src={profileImage} alt="author image"
            className={styles.profileImage}
          />
          <span>{article.author}</span>
        </div>

        <Link to={`/read/${article.id}`} style={{ textDecoration: "none"}}>
          <h1>{article.title}</h1>
        </Link>
        <div className={styles.subTitle}>{ article.content.slice(0, 100) }</div>
        
        <div className={styles.dateDurationTagBookmarkSvg}>
          <div className={styles.dateDuration}>{article.date} . {article.duration}.</div>
          <div className={styles.tag}>{article.tag}</div>
        </div>

      </div>

      <div className={styles.svgImage}>
        <MdOutlineBookmarkAdd />
        <img src={articleImage} 
          alt={article.title} 
          className={styles.articleImage}
        />
      </div>

    </div>
  )
}
