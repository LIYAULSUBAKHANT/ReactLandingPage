// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Navbar from "./components/navbar"; 
import useAuthStore from "./pages/authStore";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/ReactLandingPage/" element={<Home />} />
        <Route path="/ReactLandingPage/about" element={<About />} />
        <Route path="/ReactLandingPage/contact" element={<Contact />} />
        <Route path="/ReactLandingPage/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
