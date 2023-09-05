import { useEffect } from "react"


export default function index() {

  useEffect(() => {
    const user = localStorage.getItem("user")
    console.log(user)
  })
  
  return (
    <div>User Page</div>
  )
}
