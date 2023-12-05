import classes from "./index.module.scss"


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
            src={article.image}
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

