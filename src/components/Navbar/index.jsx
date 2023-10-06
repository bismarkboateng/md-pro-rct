export default function index(props) {


  return (
    <nav 
      className={`${props.nav} ${props.scrolling ? props.background : "" }`}
    >
      {props.children}
    </nav>
  )
}