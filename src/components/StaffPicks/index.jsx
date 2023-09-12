import classes from "./index.module.scss"
import { TrendCard } from ".."
import Data from "./Data"
import { ImTwitter } from "react-icons/im"
import { PiPlusThin } from "react-icons/pi"
import { BsMedium } from "react-icons/bs"
import { TextIconButton } from ".."
import { Info } from "./Data"

const style = {
  width: "100%"
}

export default function index() {
  return (
    <section className={classes.staffs}>
      <h2 className={classes.header}>Staff Picks</h2>
      {Data.map((item) => (
        <TrendCard
          item={item}
          key={item.id}
          style={style}
        />
      ))}

      <p className={classes.staffsFull}>See the full list</p>

      <section className={classes.mediumConnectWrapper}>
        <div className={classes.mediumConnectIcons}>
          <BsMedium className={classes.medium} />
          <PiPlusThin className={classes.plus} />
          <ImTwitter className={classes.twitter} />
        </div>
        <div className={classes.mediumContent}>Discover Medium writers you<br />already follow on Twitter.</div>
        {Info.map((item) => (
            <TextIconButton
            id={item.id}
            key={item.id}
            icon={item.icon}
            text={item.text}
            user={true}
            // onClick={props.onEmailButtonClick}
            />
        ))}
        <p className={classes.later}>Maybe later</p>
      </section>
    </section>
  )
}
