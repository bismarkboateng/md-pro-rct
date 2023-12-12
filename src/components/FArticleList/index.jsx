import { useContext, useEffect } from "react"

import styles from "./index.module.scss"
import { AppContext } from "../../store/app-context"
import { ArticleCard, Spinner } from "../../components"
import { Articles } from "./constants"


export default function index() {
  const { tagArticles, onFetchTagArticlesHandler, isLoading } = useContext(AppContext)
  
  const articleImage = Articles[0].image
  const profileImage = Articles[0].profileImage

  useEffect(() => {
    onFetchTagArticlesHandler()
  }, [])

  if (isLoading) {
    return <Spinner  message="Loading articles...." spinner={styles.spinner} />
  }


  return (
    <section className={styles.articles}>
      <ul className={styles.articleWrapper}>
        { tagArticles.map((article) => (
            <ArticleCard
              key={Math.random()} 
              article={article}
              articleImage={articleImage}
              profileImage={profileImage}
            />
        ))}
      </ul>
    </section>
  )
}
