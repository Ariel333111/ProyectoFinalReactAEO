import { Container } from "react-bootstrap";
import Cards from "./Cards";
import "./Gallery.css";
function Galeria() {
  return (
    <Container>
      <Container
        style={{
          backgroundColor: "#545555ff",
          padding: "15px",
        }}
      >
        <h2 className="fuego-texto text-center mt-4">
          🎸 Bienvenid@, estos son nuestros discos 🔥
        </h2>
      </Container>
      <Cards></Cards>
    </Container>
  );
}
export default Galeria;
