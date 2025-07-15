import { createContext, useState } from "react";
import Swal from "sweetalert2";

// Crear el contexto
export const CarritoContext = createContext();

// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (disc) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === disc.id);
      if (existe) {
        // Si ya existe, aumentar la cantidad
        return prevCarrito.map((item) =>
          item.id === disc.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      // Si no existe, agregarlo con cantidad 1
      return [...prevCarrito, { ...disc, cantidad: 1 }];
    });
    // Mostrar alerta después de actualizar el carrito
    Swal.fire({
      icon: "success",
      title: "Se agregó el producto al carrito de compras",
      text: "Gracias por elegirnos",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  // Eliminar producto por ID
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  // Vaciar el carrito (opcional)
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
