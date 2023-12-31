import { Button } from ".."
import { WriteHero } from "../../assets";
import styles from "./index.module.scss";


export default function index() {
  return (
    <section className={styles.writeHeroWrapper}>
        <img src={WriteHero} alt="write hero"
            className={styles.writeImage}
        />
        <div>Medium Partner<br />Program</div>
        <p>
            Medium's Partner Program is for people<br />
            who are interested in helping us fulfill our<br />
            mission of deepening the collective<br />
            wisdom of the world through personal<br />
            expression, knowledge-sharing, and<br />
            storytelling.
        </p>
        <Button 
          text="Apply now"
          className={styles.apply}
          onClick={() => {console.log("Apply now")}}
        />
    </section>
  )
}
