import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Carrito() {
  return (
    <Container className="mt-4">
      <NavBar />
      <h2>Esta es la página del Carrito</h2>
      <Footer />
    </Container>
  );
}
export default Carrito;
