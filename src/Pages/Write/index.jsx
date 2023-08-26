import { Navbar, Buttons, CTA, WriteHero, ClickBait, Eligibility, FAQ, FaqDrop, MemFooter } from "../../components";
import styles from "./index.module.scss";
import {style, cta, iconColor, wrap } from "./Style";
import Text from "./Text";

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
      />
      <section className={styles.faq}>
        <FAQ />
        {
          Text.map((item) => (
            <FaqDrop
              header={item.title}
              id={item.id}
              key={item.id}
            >
              <div className={styles.faqChildContent}>
                {item.text}
              </div>

              <a style={{ textDecoration: "underline", color: "#fff"}} href="#">
                {item.link}
              </a>
            </FaqDrop>
          ))
        }
      </section>
      
      <MemFooter />
    </section>
  )
}
