import styles from "./index.module.scss";
import { Articles } from "./constants"
import { ArticleCard } from "../../components";


export default function index() {
  return (
    <section className={styles.articles}>
      <ul>
        { Articles.map((article) => (
            <ArticleCard article={article} />
        ))}
      </ul>
    </section>
  )
}
