// import styles from "./App.module.scss";
import {Route, Routes } from "react-router-dom";
import { About, Membership, Write, Signin, Home } from "./Pages";

function App() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our story" element={<About />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="write" element={<Write />} />
        <Route path="Sign In" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App