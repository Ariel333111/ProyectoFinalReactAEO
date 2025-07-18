import { Container } from "react-bootstrap";
import { Facebook, Instagram, X } from "react-bootstrap-icons";

function FooterM() {
  return (
    <Container>
      <footer
        className="text-center p-3"
        style={{ backgroundColor: "#d4edda", color: "#155724" }}
      >
        <p>
          <strong>© 2025 Vinilos E-Commerce</strong>
        </p>
        <Container>
          <a
            href="https://facebook.com"
            className="mx-2"
            style={{ color: "#155724" }}
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="mx-2"
            style={{ color: "#155724" }}
          >
            <Instagram size={24} />
          </a>
          <a href="https://x.com" className="mx-2" style={{ color: "#155724" }}>
            <X size={24} />
          </a>
        </Container>
      </footer>
    </Container>
  );
}

export default FooterM;
