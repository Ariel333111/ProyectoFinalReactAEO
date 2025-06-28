import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";

function Header({ carritoContar }) {
  return (
    <Container>
      <NavBar carritoContar={carritoContar}></NavBar>
    </Container>
  );
}

export default Header;
