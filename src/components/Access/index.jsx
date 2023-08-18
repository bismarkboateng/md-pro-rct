import styles from "./index.module.scss";


export default function index() {
  return (
    <section className={styles.access}>
        <div className={styles.story}> 
            <div className={styles.storyTitle}>Get unlimited access to every<br />story.</div>
            <img 
                src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg"
            />
            <div className={styles.storyText}>Read any article in our entire library across all your devices — with no paywalls, story limits or ads.</div>
        </div>

        {/* <div className={styles.horizontal} /> */}

        <div className={styles.voices}>
            <div className={styles.voicesTitle}>Support the voices you want<br />to hear more from.</div>
            <img 
                src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg"
            />
            <div className={styles.voicesText}>A portion of your membership will directly support the writers and thinkers you read the most.</div>
        </div>
    </section>
  )
}