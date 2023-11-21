import {Route, Routes } from "react-router-dom";
import { 
  About, Membership, Write, 
  Home, UserPage, Detail, 
  Newstory, SignIn
} from "./Pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/partner-program" element={<Write />} />
        <Route path="/user-page" element={<UserPage/>} />
        <Route path="/read/:articleId" element={<Detail />} />
        {/* <Route path="/confirm" element={<Confirm /> } /> */}
        <Route path="/new-story" element={<Newstory />} />
        <Route path="sign-in" element={<SignIn />}  />
      </Routes>
    </div>
  )
}

export default App