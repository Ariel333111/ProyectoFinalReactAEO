import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Button, Form, Spinner, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Campos vacíos",
        text: "Por favor completá usuario y contraseña",
      });
      return;
    }

    setLoading(true);

    const normalizedUsername = username.trim().toLowerCase();
    const success = login(normalizedUsername, password);

    setTimeout(() => {
      setLoading(false);
      if (success) {
        Swal.fire({
          icon: "success",
          title: `¡Bienvenido ${normalizedUsername}!`,
          text:
            normalizedUsername === "admin" && password === "1234"
              ? "Accediendo al panel de administración"
              : "Accediendo a Vinilos E-Commerce",
          timer: 2200,
          showConfirmButton: false,
        });

        if (normalizedUsername === "admin" && password === "1234") {
          navigate("/Admin");
        } else {
          navigate("/");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Credenciales incorrectas",
          text: "Intentá nuevamente",
        });
      }
    }, 1000); // Simula carga
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h3 className="text-center mb-4">Iniciar sesión</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ej: admin o cualquier nombre"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ej: 012345 o cualquier clave"
              />
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Validando...
                  </>
                ) : (
                  "Iniciar sesión"
                )}
              </Button>
              <Button variant="secondary" onClick={() => navigate("/")}>
                Ir a los Discos
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
