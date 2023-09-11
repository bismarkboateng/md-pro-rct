import { CiSearch } from "react-icons/ci"
import classes from "./index.module.scss"


export default function index({ searchTerm, setSearchTerm}) {
  return (
    <div className={classes.search}>
        <i className={classes.searchIcon}>
            <CiSearch fontSize={20}/>
        </i>
        <input 
            type="text"
            placeholder="Search Medium"
            className={classes.searchInput}
            value={searchTerm}
            onChange={(event) => {setSearchTerm(event.target.value)}}
        />
    </div>
  )
}
