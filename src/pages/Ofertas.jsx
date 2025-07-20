import { Container } from "react-bootstrap";
import Header from "../components/Header";
import GalleryOfertas from "../components/GalleryOfertas";
import Footer from "../components/Footer";

function Ofertas() {
  return (
    <Container className="mt-4">
      <Header></Header>
      <GalleryOfertas></GalleryOfertas>
      <Footer></Footer>
    </Container>
  );
}

export default Ofertas;
