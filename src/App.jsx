import Home from "../src/pages/Home";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Ofertas from "./pages/Ofertas";
import Carrito from "./pages/Carrito";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import { CarritoProvider } from "./components/CarritoContext";
import { AuthProvider } from "./components/AuthContext";
import RutaProtegida from "./components/RutaProtegida";
import RutaAdmin from "./components/RutaAdmin";

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <Helmet>
          <title>Vinilos E-Commerce 🎸🔥</title>
          <meta
            name="description"
            content="Explorá y comprá discos de vinilo únicos, de bandas clásicas y alternativas. Tu tienda rockera online."
          />
          <meta
            name="keywords"
            content="vinilos, ecommerce, rock, pop, discos, coleccionables, tienda online"
          />
          <meta name="author" content="Vinilos E-Commerce" />
        </Helmet>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route
              path="/Admin"
              element={
                <RutaAdmin>
                  <Admin />
                </RutaAdmin>
              }
            />
            <Route path="/Ofertas" element={<Ofertas />} />
            <Route
              path="/Carrito"
              element={
                <RutaProtegida>
                  <Carrito />
                </RutaProtegida>
              }
            />
          </Routes>
        </Router>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;
