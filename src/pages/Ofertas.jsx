import { Container } from "react-bootstrap";
import Header from "../components/Header";
import GalleryOfertas from "../components/GalleryOfertas";
import Footer from "../components/Footer";

function Ofertas({ carritoContar, sumarAlCarrito }) {
  return (
    <Container className="mt-4">
      <Header carritoContar={carritoContar}></Header>
      <GalleryOfertas sumarAlCarrito={sumarAlCarrito}></GalleryOfertas>
      <Footer></Footer>
    </Container>
  );
}

export default Ofertas;
