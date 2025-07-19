import { useContext } from "react";
import {
  Container,
  Table,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { CarritoContext } from "../components/CarritoContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Swal from "sweetalert2";

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const agregarUnidad = (id) => {
    setCarrito((prev) =>
      prev.map((disc) =>
        disc.id === id ? { ...disc, cantidad: disc.cantidad + 1 } : disc
      )
    );
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Se agregó una unidad",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const eliminarUnaUnidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((disc) =>
          disc.id === id ? { ...disc, cantidad: disc.cantidad - 1 } : disc
        )
        .filter((disc) => disc.cantidad > 0)
    );

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "error",
      title: "Se eliminó una unidad",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const total = carrito.reduce(
    (acc, item) => acc + Number(item.price) * item.cantidad,
    0
  );

  if (carrito.length === 0) {
    return (
      <Container className="mt-4">
        <Header />
        <Container className="text-center">
          <h3 className="fuego-texto">Tú carrito está vacío</h3>
        </Container>
        <Footer />
      </Container>
    );
  }

  const handleFinalizarCompra = () => {
    Swal.fire({
      icon: "info",
      title: "Redirigiendo al área de pagos...",
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: "top-end",
    });
  };

  return (
    <Container className="mt-4">
      <Header />
      <br />
      <h3 className="fuego-texto">Carrito de compras</h3>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Disco</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Agregar/Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>
              <td>
                <Container className="d-flex gap-2">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-agregar-${item.id}`}>
                        Agregar disco
                      </Tooltip>
                    }
                  >
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => agregarUnidad(item.id)}
                    >
                      ➕
                    </Button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-eliminar-${item.id}`}>
                        Eliminar disco
                      </Tooltip>
                    }
                  >
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => eliminarUnaUnidad(item.id)}
                    >
                      🗑️
                    </Button>
                  </OverlayTrigger>
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <h5 className="text-end">Total a pagar: ${total.toFixed(2)}</h5>
      <div className="text-end mt-3">
        <br />
        <Button
          onClick={handleFinalizarCompra}
          variant="success"
          size="lg"
          className="shadow-sm custom-button"
        >
          Finalizar Compra
        </Button>
      </div>
      <br />
      <Footer />
    </Container>
  );
};

export default Carrito;
