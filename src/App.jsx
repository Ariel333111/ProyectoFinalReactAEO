import Home from "../src/pages/Home";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Ofertas from "./pages/Ofertas";
import Carrito from "./pages/Carrito";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import { CarritoProvider } from "./components/CarritoContext";

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
