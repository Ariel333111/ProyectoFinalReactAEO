import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Cards.css";
import { CarritoContext } from "./CarritoContext";
function CardsOfertas() {
  const [vinilos, setVinilos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useContext(CarritoContext);

  //pedido a la API de los vinilos
  useEffect(() => {
    fetch("https://6820e4b4259dad2655adeed5.mockapi.io/api/vinilos111/disc")
      .then((res) => res.json())
      .then((data) => {
        setVinilos(data);
        setCargando(false);
      })
      .catch((error) => {
        setError("Error al cargar la API");
        setCargando(false);
      });
  }, []);
  <br />;
  if (cargando)
    return (
      <h2 style={{ padding: "10px", textAlign: "center", color: "green" }}>
        Cargando productos...
      </h2>
    );
  if (error)
    return (
      <h2 style={{ padding: "10px", textAlign: "center", color: "red" }}>
        {error}
      </h2>
    );
  <br />;
  return (
    //muestro los vinilos
    <Container
      style={{
        backgroundColor: "#d4e6f1",
        padding: "20px",
      }}
    >
      <Row>
        {vinilos
          .filter((disc) => disc.price < 40200)
          .map((disc) => (
            <Col key={disc.id} md={4}>
              <Card className="m-2 card-hover">
                <Card.Img src={disc.avatar} />
                <Card.Body>
                  <Card.Title>{disc.name}</Card.Title>
                  <Card.Text>
                    {disc.band}. {disc.gender}.
                  </Card.Text>
                  <Card.Text>
                    {disc.production}, {disc.releaseDate}.
                  </Card.Text>
                  <Card.Text>
                    <strong>${disc.price}</strong>
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => agregarAlCarrito(disc)}
                  >
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default CardsOfertas;
