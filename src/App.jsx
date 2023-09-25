// import styles from "./App.module.scss";
import {Route, Routes } from "react-router-dom";
import { About, Membership, Write, Home, UserPage, Detail} from "./Pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our story" element={<About />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/write" element={<Write />} />
        <Route path="/user-page" element={<UserPage/>} />
        <Route path="/read/:articleId" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App