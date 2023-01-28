import React from 'react'
import Topbar from './component/Topbar'
import Home from './page/Home'
import Single from "./page/Single";
import Write from "./page/Write";
import Settings from "./page/Settings";
import LogOut from "./page/LogOut";
import Register from "./page/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";

const user = false;
export default function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <LogOut />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/about" element={user ? <About /> : <Register />} />
        <Route path="/contact" element={user ? <Contact /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="./post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}
