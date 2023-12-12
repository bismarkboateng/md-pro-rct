import { Link } from "react-router-dom"
import { PiHandsClappingThin } from "react-icons/pi"
import { FaRegComment } from "react-icons/fa"
import { CiBookmarkPlus } from "react-icons/ci"

import classes from "./index.module.scss"




export default function index({ article }) {

  const createMarkup = (text) => {
    return {__html: text }
  }

  const content = article?.content.substring(0, 60)

  return (
    <section className={classes.tagWrapper}>
      <div className={classes.tagImageWrapper}>
        <img
          src={article?.image}
          alt="article image"
          className={classes.tagImage}
        />
      </div>

      <div className={classes.imageNameWrapper}>
        <img
          src="https://miro.medium.com/v2/resize:fill:40:40/1*QBY4yLB-8qciSZmu9tYqpA.jpeg"
          alt="author image"
          className={classes.authorImage}
        />
        <span className={classes.authorName}>{article?.author}</span>
      </div>

      <Link to={`/read/${article.id}`}
      style={{ textDecoration: "none" }}>
        <div
          dangerouslySetInnerHTML={createMarkup(article?.title)}
          className={classes.tagTitle}
        ></div>
      </Link>

      <div
        dangerouslySetInnerHTML={createMarkup(content)}
        className={classes.tagContent}
      ></div>

      <div className={classes.tagInfo}>
        <span>{article?.duration} min read</span>
        <span>.</span>
        <span>{article?.date}</span>
      </div>

      <div className={classes.tagReactions}>
        <span className={classes.tagClap}>
            <i><PiHandsClappingThin className={classes.tagIcon} /></i>
            <span>{article?.clap}</span>
        </span>

        <span className={classes.tagComment}>
            <i><FaRegComment className={classes.tagIcon} /></i>
            <span>{article?.comment}</span>
        </span>

        <i>
          <CiBookmarkPlus fontSize={23} />
        </i>
      </div>

    </section>
  )
}
