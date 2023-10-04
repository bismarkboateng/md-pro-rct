import { useContext, useEffect, useRef } from "react";
import { Typewriter } from 'react-simple-typewriter'

import styles from "./index.module.scss";
import { Button, Box } from "..";
import ModalContext from "../../store/modal-context";



export default function index() {
  const contextValue = useContext(ModalContext)
  const spanRefs =[
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]




  function changeColor() {

      spanRefs.forEach((elRef) => {
        elRef.current.style.opacity = "0"
        
        setTimeout(() => {
          elRef.current.style.opacity = "1"
          console.log("setting black")
        }, 1300)
      })
  
  }

  useEffect(() => {

    setInterval(() => {
      changeColor()
      console.log("still running")
    }, 3000)
    
  })


  return (
    <section className={styles.heroWrapper}>

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
          onClick={contextValue.onSignInClickHandler}
          text="Start reading"
        />
      </div>

      <div className={styles.animation}>

      <div className={styles.firstM}>
        {[1, 2, 3].map(() => (
          <Box>
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
        {[1, 2, 3].map(() => (
          <Box>
            <span style={{ marginRight: "10px"}} ref={spanRefs[0]}>M</span>
            <span>M</span>
            <span ref={spanRefs[1]}>M</span>
            <span style={{ marginRight: "10px" }}>M</span>
            <span style={{ marginRight: "10px"}} ref={spanRefs[2]}>M</span>
          </Box>
        ))}
      </div>

      <div className={styles.thirdM}>
        {[1, 2, 3].map(() => (
          <Box>
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
        {[1, 2].map(() => (
          <Box>
            <span ref={spanRefs[0]}>M</span>
            <span style={{ marginRight: "10px" }}>M</span>
            <span>M</span>
            <span ref={spanRefs[2]}>M</span>
            <span>M</span>
          </Box>
        ))}
      </div>


      <div className={styles.fourthM}>
        {[1, 2, 3].map(() => (
          <Box>
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

    </section>
  )
}
