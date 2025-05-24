import { Container } from "react-bootstrap";
import CardsOfertas from "../components/CardsOfertas";

function GaleriaOfertas({ sumarAlCarrito }) {
  return (
    <Container>
      <Container
        style={{
          backgroundColor: "#d4edda",
          padding: "15px",
        }}
      >
        <h2>Estas son nuestras ofertas</h2>
      </Container>
      <CardsOfertas sumarAlCarrito={sumarAlCarrito}></CardsOfertas>
    </Container>
  );
}
export default GaleriaOfertas;
