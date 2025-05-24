import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Admin() {
  return (
    <Container className="mt-4">
      <NavBar />
      <h2>Esta es la página del Administrador</h2>
      <Footer></Footer>
    </Container>
  );
}
export default Admin;
