import { Button, Form, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loguin() {
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();
  const handleLoguin = (e) => {
    localStorage.setItem("auth", "true"); // autentificacion
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Ingresando a la Administracion",
      text: `Bienvenido ${usuario} `,
    }).then(() => {
      navigate("/admin"); // redirige después de cerrar la alerta
    });
  };
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Form
        onSubmit={handleLoguin}
        className="w-45 p-4 text-center"
        style={{ backgroundColor: "#d4edda", borderRadius: "10px" }}
      >
        <h2>Iniciar Sesion</h2>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Usuario</Form.Label>

          <Form.Control
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            placeholder="Ingrese su usuario"
            value={usuario}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordarme" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
}

export default Loguin;
