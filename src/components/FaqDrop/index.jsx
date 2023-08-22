import styles from "./index.module.scss";
import { BiChevronDown } from "react-icons/bi";


export default function index(props) {
  return (
    <section>
        <div>
            <h5>{props.header}</h5>
        </div>
    </section>
  )
}
