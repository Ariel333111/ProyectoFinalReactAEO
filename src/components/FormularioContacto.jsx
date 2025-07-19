import Swal from "sweetalert2";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormularioSweet() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  //validacion de email
  const emailEsValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  //manejo del submit, si hay un return no se envia el formlario
  const handleSubmit = (e) => {
    e.preventDefault();
    //validacion de campos vacios
    if (nombre.trim() == "" || email.trim() == "" || mensaje.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "Algun campo esta incompleto",
        text: "Completar todos los campos del formulario",
      });
      return;
    }
    //validar email
    if (!emailEsValido(email)) {
      Swal.fire({
        icon: "error",
        title: "El email no es válido",
        text: "Ingresar un email válido",
      });
      return; // 👈 esto evita que avance con el envío
    }

    //despues de validar
    Swal.fire({
      icon: "success",
      title: "Formulario enviado correctamente",
      text: `Gracias ${nombre}. Te responderemos a la brevedad`,
    });

    //vacio el use state
    setNombre("");
    setEmail("");
    setMensaje("");
  };
  return (
    <Container
      className="text-center p-3"
      style={{ backgroundColor: "#7d8080ff" }}
    >
      <br />
      <Form
        noValidate
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <h2 className="fuego-texto">Formulario de Contacto</h2>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Ingrese su nombre</Form.Label>
          <Form.Control
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            value={nombre}
            placeholder="Nombre Apellido"
          />
          <Form.Label className="fw-bold">Ingrese su email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="nombreapellido@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fw-bold">Escriba su mensaje</Form.Label>
          <Form.Control
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default FormularioSweet;
