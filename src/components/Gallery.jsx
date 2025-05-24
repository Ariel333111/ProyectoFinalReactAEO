import { Container } from "react-bootstrap";
import Cards from "./Cards";

function Galeria({ sumarAlCarrito }) {
  return (
    <Container>
      <Container
        style={{
          backgroundColor: "#d4edda",
          padding: "15px",
        }}
      >
        <h2>Bienvenid@, estos son nuestros discos</h2>
      </Container>
      <Cards sumarAlCarrito={sumarAlCarrito}></Cards>
    </Container>
  );
}
export default Galeria;
