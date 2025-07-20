import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <Container className="mt-4">
      <Header></Header>
      <Gallery></Gallery>
      <Footer></Footer>
    </Container>
  );
}

export default Home;
