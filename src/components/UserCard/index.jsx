import classes from "./index.module.scss"
import { Users } from "./users"
import { Button } from ".."


export default function index() {

  function onFollowClickHandler() {
    console.log("Follow button clicked!")
  }

  // changing the styles when a user logs in.
  const userPage = classes.userPage
  const userLoginClass = classes.userLoginClass
  const userLogin = true

  return (
    <section className={classes.userWrapper}>
        {Users.map((user) => (
            <div key={user.id} className={`${userLogin && userPage} ${classes.userContentWrapper}`}>
                <img
                    src="https://miro.medium.com/v2/resize:fill:48:48/1*SUaHRoDjE6Jump3lwYWPSw.jpeg"
                    className={classes.userImage}
                />

                <div className={classes.userContent}>
                    <div className={classes.userName}>{user.name}</div>
                    <div className={classes.userDescription}>{user.description}</div>
                </div>
                
                <Button
                    className={`${userLogin && userLoginClass} ${classes.button}`}
                    onClick={onFollowClickHandler}
                    text="Follow"
                />

            </div>
        ))}
        <div className={classes.seeMore}>See more suggestions</div>
    </section>
  )
}
