import classes from  "./index.module.scss"

export default function (props) {
  return (
    <div>
        <div className={classes.box}>
            {props.children}
        </div>
    </div>
  )
}

