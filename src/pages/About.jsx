import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <Container className="mt-4">
      <NavBar />
      <AboutUs />
      <Footer></Footer>
    </Container>
  );
}

export default About;
