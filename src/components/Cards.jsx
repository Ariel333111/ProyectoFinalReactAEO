import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Cards.css";
import { CarritoContext } from "./CarritoContext";

function Cards() {
  const [vinilos, setVinilos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [expandida, setExpandida] = useState(new Set());
  const { agregarAlCarrito } = useContext(CarritoContext);

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

  const vinilosFiltrados = vinilos.filter((disc) => {
    const termino = busqueda.toLowerCase();
    return (
      disc.name.toLowerCase().includes(termino) ||
      disc.band.toLowerCase().includes(termino) ||
      disc.releaseDate.toLowerCase().includes(termino)
    );
  });

  const cortarDescripcion = (texto) => {
    const palabras = texto.split(" ");
    return palabras.slice(0, 4).join(" ") + "…";
  };

  const toggleDescripcion = (id) => {
    setExpandida((prev) => {
      const copia = new Set(prev);
      copia.has(id) ? copia.delete(id) : copia.add(id);
      return copia;
    });
  };

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

  return (
    <Container style={{ backgroundColor: "#b3cde0", padding: "20px" }}>
      {/* 🔎 Barra de búsqueda con ícono de lupita */}
      <div className="mb-4 position-relative">
        <input
          type="text"
          className="form-control ps-5"
          placeholder="Buscar por nombre, banda o año..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <span className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted">
          <i className="bi bi-search"></i>
        </span>
      </div>

      {vinilosFiltrados.length === 0 && (
        <h5 className="text-center text-muted">No se encontraron discos 😢</h5>
      )}

      <Row>
        {vinilosFiltrados.map((disc) => (
          <Col key={disc.id} xs={12} sm={6} md={4}>
            <Card className="m-2 card-hover">
              <Card.Img src={disc.avatar} />
              <Card.Body>
                <Card.Title>{disc.name}</Card.Title>

                {/* 📜 Descripción con Leer más */}

                <Card.Text>
                  {disc.band}. {disc.gender}.
                </Card.Text>

                {/* 📜 Descripción con Leer más solo en description */}
                <Card.Text>
                  {expandida.has(disc.id)
                    ? disc.description
                    : cortarDescripcion(disc.description)}
                  <span
                    className="text-primary ms-2"
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={() => toggleDescripcion(disc.id)}
                  >
                    {expandida.has(disc.id) ? "Leer menos" : "Leer más"}
                  </span>
                </Card.Text>

                <Card.Text>
                  {disc.production}, {disc.releaseDate}.
                </Card.Text>

                <Card.Text>
                  <strong>${disc.price}.-</strong>
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

export default Cards;
