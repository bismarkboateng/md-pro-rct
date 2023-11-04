import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { CiBookmarkPlus } from "react-icons/ci";
import { Link } from "react-router-dom"; 




export default function index({ article, articleImage, profileImage}) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)


  useEffect(() => {
    const onResizeHandler = () => {
      setInnerWidth(window.innerWidth)
    }

    window.addEventListener("resize", onResizeHandler)

    return () => {
      window.removeEventListener("resize", onResizeHandler)
    }

  }, [innerWidth])


  const content = innerWidth <= 500 ? article.content.slice(0, 30) : article.content.slice(0, 100)

  const createMarkup = (text) => {
    return {__html: text }
  }

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
          <h1 dangerouslySetInnerHTML={createMarkup(article.title)} />
        </Link>
        <div dangerouslySetInnerHTML={createMarkup(content)} className={styles.subTitle} />
        <div className={styles.bookmarkDates}>
          <div className={styles.dateDurationTagBookmarkSvg}>
            <div className={styles.dateDuration}>{article.date} . {article.duration} min read.</div>
            <div className={styles.tag}>{article.tag}</div>
          </div>
          <CiBookmarkPlus cursor={"pointer"} />
        </div>
      </div>

      <div className={styles.svgImage}>
        <img src={article.image} 
          alt={article.title} 
          className={styles.articleImage}
        />
      </div>

    </div>
  )
}
