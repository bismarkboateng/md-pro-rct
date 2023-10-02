import styles from "./index.module.scss";
import { Button } from "..";
import { useContext } from "react";
import ModalContext from "../../store/modal-context";


export default function index() {
  const contextValue = useContext(ModalContext)

  return (
    <section className={styles.heroWrapper}>

      <div className={styles.heroCurious}>
        <h1>Stay curious.</h1>
        <div>
        Discover stories, thinking, and expertise<br />
        from writers on any topic.
        </div>
        <Button className={styles.heroButton}
          onClick={contextValue.onSignInClickHandler}
          text="Start reading"
        />
      </div>

      <div className={styles.animation}>
        Animations
      </div>

    </section>
  )
}
