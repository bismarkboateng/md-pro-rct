import styles from "./index.module.scss";
import Text from "./Text";


export default function index() {
  return (
    <section className={styles.clickbaitWrapper}>
        <section className={styles.clickbait}>
            <h1>Quality over<br />clickbait</h1>
            <p>
            In a creator economy ruled by clickbait and ad<br />
            impressions, Medium's Partner Program is taking a<br />
            stand for quality. As a partner, when your best<br />
            stories are read by Medium members, a portion of<br />
            their membership dues will be shared with you.<br />
            Here are a few factors we consider in order to<br />
            determine quality.
            </p>
        </section>

        <section className={styles.paragraph}>
            <ul>
                {Text.map((item) => (
                    <li key={item.id} style={{ borderBottom: item.id !== 3 ? ' 1px solid rgb(226, 224, 224)' : ''}}>
                        <h4 style={{ marginTop: item.id !== 0 ? '30px' : ''}}>{item.title}</h4>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    </section>
  )
}
