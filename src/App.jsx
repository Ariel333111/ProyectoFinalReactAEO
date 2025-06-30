import Home from "../src/pages/Home";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Ofertas from "./pages/Ofertas";
import Carrito from "./pages/Carrito";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdmLoguin from "./components/AdmLoguin";
import { useState } from "react";
import Swal from "sweetalert2";
import OfertasDetalle from "./pages/OfertasDetalle";

function App() {
  const [carritoContar, setcarritoContar] = useState(0);

  function sumarAlCarrito() {
    setcarritoContar(carritoContar + 1);
    return Swal.fire({
      icon: "success",
      title: "Se agregó el producto al carrito de compras",
      text: `Gracias por elegirnos`,
    });
  }

  return (
    <Container>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                carritoContar={carritoContar}
                sumarAlCarrito={sumarAlCarrito}
              />
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AdminL" element={<AdmLoguin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Ofertas/:id" element={<OfertasDetalle />} />
          <Route
            path="/Ofertas"
            element={
              <Ofertas
                carritoContar={carritoContar}
                sumarAlCarrito={sumarAlCarrito}
              />
            }
          />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
