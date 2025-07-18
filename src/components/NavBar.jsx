import { Container, Nav, Navbar, Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartFill } from "react-bootstrap-icons";
import { CarritoContext } from "./CarritoContext";
import { useContext } from "react";
import { useAuth } from "./AuthContext";
import Swal from "sweetalert2";

function Navegacion() {
  const { carrito } = useContext(CarritoContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const handleLogout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Tu sesión actual se cerrará",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          icon: "success",
          title: "Sesión cerrada",
          text: "Hasta pronto 👋",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      }
    });
  };

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
            {/* Mostrar nombre del usuario logueado */}
            {user && (
              <span className="text-dark fw-bold align-self-center">
                Hola, {user.username}
              </span>
            )}

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

            {/* Solo mostrar Admin si el usuario es admin */}
            {user?.role === "admin" && (
              <Nav.Link as={Link} to="/Admin" className="text-dark">
                Admin
              </Nav.Link>
            )}

            {/* Mostrar Login si no hay usuario */}
            {!user && (
              <Nav.Link as={Link} to="/Login" className="text-dark">
                Login
              </Nav.Link>
            )}

            {/* Mostrar Cerrar sesión si hay usuario */}
            {user && (
              <Button variant="outline-dark" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            )}

            <Nav.Link
              as={Link}
              to="/Carrito"
              className="text-dark d-flex align-items-center"
            >
              <CartFill size={20} className="me-2" />
              Carrito
              {totalItems > 0 && (
                <Badge bg="primary" className="ms-2">
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
