import { Container, Row, Col, Card } from "react-bootstrap";

function AboutUs() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center shadow-lg">
            <Card.Body>
              <Card.Title className="display-3">Sobre Nosotros</Card.Title>

              <Card.Text className="lead">
                Somos una empresa apasionada por la música, por el arte musical,
                y nos dedicamos a conectar a los artistas con su público.
                Entendemos la venta de vinilos como forma de costear este estilo
                de vida.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              style={{ width: "60%", height: "60%" }}
              src="https://i.ibb.co/tMPVs46L/disco.jpg"
            />
            <Card.Body>
              <Card.Title>Nuestra Historia</Card.Title>
              <Card.Text>
                Fundada en 2015, nuestra empresa comenzó como un pequeño estudio
                de grabación. Con los años, hemos crecido hasta convertirnos en
                una referencia en producción musical y venta de vinilos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              style={{ width: "41.5%", height: "41.5%" }}
              src="https://i.ibb.co/Fb5YJTrp/descarga.jpg"
            />
            <Card.Body>
              <Card.Title>Nuestra Misión</Card.Title>
              <Card.Text>
                Creemos que la música en sus diferentes formas tiene el poder de
                unir a las personas. Nuestro objetivo es ayudar a los talentos
                emergentes a brillar y llevar su arte al mundo entero a traves
                de nuestros discos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
