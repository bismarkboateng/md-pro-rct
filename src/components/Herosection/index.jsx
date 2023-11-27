import { useContext, useEffect, useRef } from "react";
import { Typewriter } from 'react-simple-typewriter'

import styles from "./index.module.scss";
import { Button, Box } from "..";
import { AppContext } from "../../store/app-context";



export default function index() {
  const { onSignInClickHandler } = useContext(AppContext)
  const spanRefs =[
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.heroCurious}>
          <h1>Stay {" "} <span>
            <Typewriter
              words={["curious.", "relevant."]}
              loop={5}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span></h1>
          <div>
          Discover stories, thinking, and expertise<br />
          from writers on any topic.
          </div>
          <Button className={styles.heroButton}
            onClick={onSignInClickHandler}
            text="Start reading"
          />
        </div>

        <div className={styles.animation}>

          <div className={styles.firstM}>
            {[1, 2, 3].map((index) => (
              <Box key={index}>
                <span style={{ marginRight: "10px"}} ref={spanRefs[0]}>M</span>
                <span>M</span>
                <span ref={spanRefs[1]}>M</span>
                <span style={{ marginRight: "10px" }}>M</span>
                <span style={{ marginRight: "10px"}} ref={spanRefs[2]}>M</span>
                <span>M</span>
                <span ref={spanRefs[3]}>M</span>
                <span>M</span>
              </Box>
            ))}
          </div>

          <div className={styles.secondM}>
            {[1, 2, 3].map((index) => (
              <Box key={index}>
                <span style={{ marginRight: "10px"}} ref={spanRefs[0]}>M</span>
                <span>M</span>
                <span ref={spanRefs[1]}>M</span>
                <span style={{ marginRight: "10px" }}>M</span>
                <span style={{ marginRight: "10px"}} ref={spanRefs[2]}>M</span>
              </Box>
            ))}
          </div>

          <div className={styles.thirdM}>
            {[1, 2, 3].map((index) => (
              <Box key={index}>
                <span ref={spanRefs[0]}>M</span>
                <span style={{ marginRight: "10px" }}>M</span>
                <span style={{ marginRight: "10px"}} ref={spanRefs[1]}>M</span>
                <span>M</span>
                <span ref={spanRefs[2]}>M</span>
                <span>M</span>
              </Box>
            ))}
          </div>


          <div className={styles.fourthM}>
            {[1, 2].map((index) => (
              <Box key={index}>
                <span ref={spanRefs[0]}>M</span>
                <span style={{ marginRight: "10px" }}>M</span>
                <span>M</span>
                <span ref={spanRefs[2]}>M</span>
                <span>M</span>
              </Box>
            ))}
          </div>


          <div className={styles.fourthM}>
            {[1, 2, 3].map((index) => (
              <Box key={index}>
                <span style={{ marginRight: "10px"}} ref={spanRefs[0]}>M</span>
                <span>M</span>
                <span ref={spanRefs[1]}>M</span>
                <span style={{ marginRight: "10px" }}>M</span>
                <span>M</span>
                <span ref={spanRefs[3]}>M</span>
                <span>M</span>
              </Box>
            ))}
          </div>

          </div>

      </div>

    </section>
  )
}
