import { Navbar, Buttons, CTA, WriteHero, ClickBait, Eligibility } from "../../components";
import styles from "./index.module.scss";

const style = {
  background: "#fff",
  borderBottom: "1px solid #000"
}

const wrap = {
  width: "97%"
}

const iconColor = {
  color: "#000"
}


export default function index() {
  return (
    <section>
      <Navbar bg={style} wrap={wrap} iconColor={iconColor}>
        <Buttons 
          signInClassName={styles.signIn}
          signUpClassName={styles.signUp}
        />
      </Navbar>
      <WriteHero />
      <ClickBait />
      <Eligibility />
    </section>
  )
}
