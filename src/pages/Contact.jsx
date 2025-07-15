import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormularioContacto from "../components/FormularioContacto";

function Contact() {
  return (
    <Container>
      <Header />
      <FormularioContacto />
      <Footer />
    </Container>
  );
}
export default Contact;
