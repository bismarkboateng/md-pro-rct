import classes from "./index.module.scss"
import { TrendCard } from ".."
import Data from "./Data"

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
    </section>
  )
}
