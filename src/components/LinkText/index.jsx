
import classes from "./index.module.scss"


export default function index({ data }) {
  return (
    <section>
        <div className={classes.title}>{data.name}</div>
        <div className={classes.contentWrapper}>
            {data.lifeLinks.map(lifelink => (
            <div key={lifelink.id} className={classes.wrapper}>
              <div className={classes.subTextTitle}>{lifelink.heading.name}</div>
              <ul className={classes.ulLinks}>
                {lifelink.heading.links.map(link => (
                   <li className={classes.linkText} key={link.id}>{link.title}</li>
                ))}
              </ul>
            </div>
            ))}
        </div>
    </section>
  )
}
