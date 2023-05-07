import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Seravai from "./components/Seravai";
import FreeSoloCreateOption from "./components/srchbar_auto";
import { Stack } from "@mui/material";
import Servmen from "./components/Pages/Servmen";
import Login from './components/Login'
import Register from "./components/Register";

function App() {
  return (
    <>

      {/* <FreeSoloCreateOption /> */}
      <Router>
        <div className="pages mt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={ <Register/> } />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Servmen" element={<Servmen />} />
            <Route path="/Servmen/Carpenter" element={<Servmen />} />
            <Route path="/Servmen/Cleaner" element={<Servmen />} />
            <Route path="/Servmen/plumber" element={<Servmen />} />
            <Route path="/Servmen" element={<Servmen />} />
            <Route path="/Servmen" element={<Servmen />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
