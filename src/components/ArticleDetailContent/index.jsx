import classes from "./index.module.scss"
import { articleImage } from "../../assets"

export default function index({ article }) {
 
  const paragraph = String(article.content)


  return (
    <article>
        <h1 className={classes.articleTitle}>{article.title}</h1>
        <p className={classes.metaData}>{ article.duration } . { article.date}</p>
   
        <img 
            src={articleImage}
            alt="article" 
            className={classes.articleImage}
         />

        <section className={classes.articleContent}>
           <p>{ paragraph.slice(0, 288) }</p>
           <p>{paragraph.slice(288, 637)}</p>
           <p>{paragraph.slice(637, 990)}</p>
           <p>{paragraph.slice(900, 1200)}</p>
           <p>{paragraph.slice(1200)}</p>
        </section>
    </article>
  )
}

