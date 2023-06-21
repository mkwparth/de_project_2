import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact"; 
import Servmen from "./components/Pages/Servmen";
import Login from './components/Login'
import Register from "./components/Register";

function App() {
  return (
    <> 
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
            <Route path="/Servmen/carpenter" element={<Servmen />} />
            <Route path="/Servmen/cleaner" element={<Servmen />} />
            <Route path="/Servmen/plumber" element={<Servmen />} />
            <Route path="/Servmen/electrician" element={<Servmen />} />
            <Route path="/Servmen/barber" element={<Servmen />} />
            <Route path="/Servmen/painting" element={<Servmen />} />
            <Route path="/Servmen/Pest Control" element={<Servmen />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
