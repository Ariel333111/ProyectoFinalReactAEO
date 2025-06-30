import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function OfertasDetalle() {
  const { id } = useParams();
  return (
    <Container>
      <h2>HOLA ESTE ES EL DETALLE QUE BUSCABAS? LUEGO LO IMPLEMENTAMOS EH</h2>
    </Container>
  );
}
