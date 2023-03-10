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
import ProtectedRoutes from './protegidas/ProtectedRoutes';
import { userStore } from './store/usuarioStore';
import Footer from './component/Footer';



export default function App() {
  const user = userStore((state) => state.user);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<ProtectedRoutes isAllowed={!user} />}>
          <Route path="/login" element={<LogOut />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoutes isAllowed={!!user} />}>
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
      <Footer />
    </Router>
  );
}
