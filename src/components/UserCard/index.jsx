import classes from "./index.module.scss"
import { Users } from "./users"
import { Button } from ".."


export default function index() {
  return (
    <section className={classes.userWrapper}>
        {Users.map((user) => {
            <div key={user.id} className={classes.userContentWrapper}>
                <img
                    src="https://miro.medium.com/v2/resize:fill:48:48/1*SUaHRoDjE6Jump3lwYWPSw.jpeg"
                    className={classes.userImage}
                />
                <div className={classes.userContent}>
                    <div>{user.name}</div>
                    <div>{user.description}</div>
                </div>
                <Button className="">
                    Follow
                </Button>
            </div>
        })}
    </section>
  )
}
