import classes from "./index.module.scss"
import { articleImage } from "../../assets"

export default function index({ article }) {
 
  const createMarkup = (text) => {
    return {__html: text }
  }

  return (
    <article>
        <h1 
          dangerouslySetInnerHTML={createMarkup(article.title)} 
          className={classes.articleTitle}
        />
        <p className={classes.metaData}>{ article.duration } . { article.date}</p>
   
        <img 
            src={articleImage}
            alt="article" 
            className={classes.articleImage}
         />
        <section 
          dangerouslySetInnerHTML={createMarkup(article.content)} 
          className={classes.articleContent} 
        />
    </article>
  )
}
