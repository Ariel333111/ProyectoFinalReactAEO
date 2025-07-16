import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Table, Button, Form, Modal, Container } from "react-bootstrap";

const API_URL =
  "https://6820e4b4259dad2655adeed5.mockapi.io/api/vinilos111/disc";

const Crud = () => {
  const [discos, setProductos] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    band: "",
    releaseDate: "",
    production: "",
    gender: "",
    discs: "",
    description: "",
    price: "",
    stock: "",
    avatar: "",
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProductos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al cargar los discos");
      const data = await res.json();
      setProductos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShow(false);
    setForm({
      name: "",
      band: "",
      releaseDate: "",
      production: "",
      gender: "",
      discs: "",
      description: "",
      price: "",
      stock: "",
      avatar: "",
    });
    setEditId(null);
  };

  const handleShow = (disco) => {
    Swal.fire({
      title: "Ahora vas a crear o editar un disco.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4ed630ff",
      cancelButtonColor: "#d65930ff",
      confirmButtonText: "Sí, adelante.",
      cancelButtonText: "No, cancelar.",
    }).then((result) => {
      if (result.isConfirmed) {
        setShow(true);
        setForm({
          ...disco,
          price: Number(disco.price),
          stock: Number(disco.stock),
        });
        setEditId(disco.id);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    };

    const method = editId ? "PUT" : "POST";
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    if (form.price <= 0 || form.stock < 0) {
      Swal.fire({
        icon: "error",
        title: "Datos inválidos",
        text: "El precio debe ser mayor a 0 y el stock no puede ser negativo.",
      });
      return;
    }

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    handleClose();
    getProductos();

    Swal.fire({
      icon: "success",
      title: editId ? "Producto editado" : "Producto agregado",
      text: editId
        ? "Los cambios se guardaron correctamente."
        : "El nuevo disco fue agregado exitosamente.",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const eliminarProducto = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      getProductos();

      Swal.fire({
        title: "¡Eliminado!",
        text: "El producto fue eliminado correctamente.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container mt-4">
      <h2>CRUD de Discos</h2>
      <br />
      <Button className="mb-3" onClick={() => handleShow()}>
        Agregar Disco
      </Button>
      {loading && <p>Cargando discos...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Banda</th>
            <th>Año</th>
            <th>Productora</th>
            <th>Género</th>
            <th>Discos</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {discos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.band}</td>
              <td>{prod.releaseDate}</td>
              <td>{prod.production}</td>
              <td>{prod.gender}</td>
              <td>{prod.discs}</td>
              <td>{prod.description}</td>
              <td>${Number(prod.price).toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>
                {prod.avatar?.startsWith("http") ? (
                  <img src={prod.avatar} alt={prod.name} width={50} />
                ) : (
                  <span>{prod.avatar}</span>
                )}
              </td>
              <td>
                <Container className="d-flex gap-2 align-items-center">
                  <Button size="sm" onClick={() => handleShow(prod)}>
                    Editar
                  </Button>{" "}
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => eliminarProducto(prod.id)}
                  >
                    Eliminar
                  </Button>
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Editar" : "Agregar"} Disco</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Título</Form.Label>
              <Form.Control
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Banda</Form.Label>
              <Form.Control
                value={form.band}
                onChange={(e) => setForm({ ...form, band: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                value={form.releaseDate}
                onChange={(e) =>
                  setForm({ ...form, releaseDate: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Productora</Form.Label>
              <Form.Control
                value={form.production}
                onChange={(e) =>
                  setForm({ ...form, production: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Género</Form.Label>
              <Form.Control
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Discos</Form.Label>
              <Form.Control
                value={form.discs}
                onChange={(e) => setForm({ ...form, discs: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: Number(e.target.value) })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: Number(e.target.value) })
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Imagen (URL sin "")</Form.Label>
              <Form.Control
                value={form.avatar}
                onChange={(e) => setForm({ ...form, avatar: e.target.value })}
                required
              />
            </Form.Group>
            <Button type="submit" className="mt-2">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Crud;
