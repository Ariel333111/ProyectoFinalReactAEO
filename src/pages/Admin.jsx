import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Crud from "../components/CRUD";

function Admin() {
  return (
    <Container className="mt-4">
      <NavBar />
      <Container
        style={{
          backgroundColor: "#7d8080ff",
          padding: "15px",
        }}
      >
        <br />
        <h2 className="text-center">Esta es la página del Administrador</h2>
        <h3 className="text-center">
          -Acceso exclusivo para usuarios autenticados-
        </h3>
      </Container>
      <br />

      <Crud />

      <Footer></Footer>
    </Container>
  );
}
export default Admin;
