import { Container } from "react-bootstrap";
import CardsOfertas from "../components/CardsOfertas";

function GaleriaOfertas() {
  return (
    <Container>
      <Container
        style={{
          backgroundColor: "#5f6060ff",
          padding: "15px",
        }}
      >
        <h2 h2 className="fuego-texto text-center mt-4">
          💿 Estas son nuestras ofertas 🔥
        </h2>
      </Container>
      <CardsOfertas></CardsOfertas>
    </Container>
  );
}
export default GaleriaOfertas;
