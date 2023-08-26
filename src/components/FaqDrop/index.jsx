import { useState } from "react";
import styles from "./index.module.scss";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


export default function index(props) {
  const [clicked, setClicked] = useState(false);

  function onArrowClickHandler() {
    setClicked( prevClick => !prevClick);
  }

  return (
    <section className={styles.faq}
      style={{ 
        borderBottom: props.id !== 5 ? "1px solid #fff": "",
        marginBottom: props.id !==5 ? "40px" : "",
    }}
    >
        <div className={styles.faqHeader}>
            <div className={styles.faqDropHeader}>{props.header}</div>
            <i>
              {clicked ? (<MdOutlineKeyboardArrowUp onClick={onArrowClickHandler} />)
                : (<MdOutlineKeyboardArrowDown onClick={onArrowClickHandler} />)
              }
            </i>
        </div>
        <div style={{ display: clicked ? "block": "none", paddingBottom: "30px" }}>
          {props.children}
        </div>
    </section>
  )
}
