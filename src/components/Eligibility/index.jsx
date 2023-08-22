import styles from "./index.module.scss";
import Text from "./Text";



export default function index() {
  return (
    <section className={styles.eligibilityWrapper}>
        <section className={styles.eligible}>
            <h1>Eligibility<br />criteria</h1>
        </section>

        <section className={styles.paragraph}>
            <ul>
                {Text.map((item) => (
                    <li key={item.id} style={{ borderBottom: item.id !== 2 ? ' 1px solid rgb(226, 224, 224)' : ''}}>
                        <h4 style={{ marginTop: item.id !== 0 ? '30px' : ''}}>{item.title}</h4>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    </section>
  )
}
