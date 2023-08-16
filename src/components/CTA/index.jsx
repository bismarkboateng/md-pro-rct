import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function index(props) {
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <section className={props.className}>
        <div style={props.ctaStyles.ctaWrapperContent}>
          <div>{props.title}</div>
          <i>
            <BsArrowRight />
          </i>
        </div>
      </section>
    </Link>
  )
}