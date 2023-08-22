import { Navbar, Buttons, CTA, WriteHero, ClickBait, Eligibility, FAQ } from "../../components";
import styles from "./index.module.scss";
import {style, cta, iconColor, wrap } from "./Style";

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
      <CTA
        ctaStyles={cta}
        className={styles.ctaWrapper}
        title="Apply now"
        link={""}
        onHover={styles.hover}
      />
      <FAQ />
    </section>
  )
}
