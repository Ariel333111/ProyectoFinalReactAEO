import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartFill } from "react-bootstrap-icons";

function Navegacion({ carritoContar }) {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#b3cde0" }} className="py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-dark d-flex align-items-center justify-content-start me-5"
        >
          <img
            src={"https://i.ibb.co/TDjVZx1P/A-minimalistic-icon.jpg"}
            alt="Vinilos ECommerce"
            width="25%"
            height="25%"
            className="d-inline-block align-top"
          />
          <span className="fw-bold ms-2 text-dark">Vinilos E-Commerce</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex gap-4 justify-content-start w-75">
            <Nav.Link as={Link} to="/" className="text-dark">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/Ofertas" className="text-dark">
              Ofertas
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="text-dark">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="text-dark">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/AdminL" className="text-dark">
              Administrador
            </Nav.Link>
            <Nav.Link as={Link} to="/Carrito" className="text-dark">
              Carrito
            </Nav.Link>
            <Nav.Link as={Link} to="/Carrito">
              <Badge bg="primary">
                <CartFill size={20} className="me-2" />
                {carritoContar}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
