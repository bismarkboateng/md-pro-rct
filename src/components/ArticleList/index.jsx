import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Articles } from "./constants"
import { ArticleCard, Spinner } from "../../components";

import { app, db } from "../../utils/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"




export default function index() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const collectionRef = collection(db, "Articles")
  const articleImage = Articles[0].image
  const profileImage = Articles[0].profileImage


  useEffect(() => {
    setIsLoading(true)
    async function fetchArticles() {
      const articleSnapshot = await getDocs(collectionRef)

      articleSnapshot.docs.forEach((doc) => {
        setArticles((prevArticles) => [...prevArticles, { ...doc.data(), id: doc.id }])
      })
      setIsLoading(false)
    }

    fetchArticles()

  }, [])

  if (isLoading) return <Spinner message="Loading articles...." />


  return (
    <section className={styles.articles}>
      <ul>
        { articles.map((article) => (
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
