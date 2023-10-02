export default function index(props) {

  return (
    <nav className={props.nav}>
      {props.children}
    </nav>
  )
}