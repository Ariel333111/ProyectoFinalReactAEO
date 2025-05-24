import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormularioContacto from "../components/FormularioContacto";

function Contact() {
  return (
    <Container>
      <NavBar />
      <FormularioContacto />
      <Footer />
    </Container>
  );
}
export default Contact;
