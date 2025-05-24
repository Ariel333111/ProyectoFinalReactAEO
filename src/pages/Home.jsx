import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function Home({ carritoContar, sumarAlCarrito }) {
  return (
    <Container className="mt-4">
      <Header carritoContar={carritoContar}></Header>
      <Gallery sumarAlCarrito={sumarAlCarrito}></Gallery>
      <Footer></Footer>
    </Container>
  );
}

export default Home;
