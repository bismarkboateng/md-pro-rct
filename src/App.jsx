import { useEffect } from "react"
import {Route, Routes, useNavigate} from "react-router-dom";
import { 
  About, Membership, Write, 
  Home, UserPage, Detail, 
  Newstory, SignIn, Trend,
  Tag, Explore
} from "./Pages";


export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      navigate("/user-page")
    } else {
      navigate("/")
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/partner-program" element={<Write />} />
        <Route path="/user-page" element={<UserPage/>} />
        <Route path="/read/:articleId" element={<Detail />} />
        <Route path="/new-story" element={<Newstory />} />
        <Route path="sign-in" element={<SignIn />}  />
        <Route path="/trend/:id" element={<Trend />}  />
        <Route path="/tag/:tag" element={<Tag />} />
        <Route path="/explore-topics" element={<Explore />} />
      </Routes>
    </div>
  )
}