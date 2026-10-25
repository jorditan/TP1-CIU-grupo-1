import { useState } from "react";
import toast from "react-hot-toast";
import { ContextoCarrito } from "./ContextoCarrito";

function ProveedorCarrito({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    if (producto.stock <= 0) return;

    const existente = carrito.find((item) => item.id === producto.id);
    if (existente && existente.cantidad >= producto.stock) {
      toast.error(`Alcanzaste el stock máximo de "${producto.nombre}"`);
      return;
    }

    setCarrito((anterior) => {
      const existe = anterior.find((item) => item.id === producto.id);
      if (existe) {
        return anterior.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: Math.min(item.cantidad + 1, item.stock) }
            : item
        );
      }

      return [...anterior, { ...producto, cantidad: 1 }];
    });

    toast.success(`"${producto.nombre}" añadido al carrito`);
  };

  const aumentar = (id) => {
    setCarrito((anterior) =>
      anterior.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.min(item.cantidad + 1, item.stock) }
          : item
      )
    );
  };

  const disminuir = (id) => {
    setCarrito((anterior) =>
      anterior.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const eliminar = (id) => {
    const productoEliminado = carrito.find((item) => item.id === id);
    setCarrito((anterior) => anterior.filter((item) => item.id !== id));
    if (productoEliminado) {
      toast.error(`"${productoEliminado.nombre}" eliminado del carrito`);
    }
  };

  const vaciar = () => setCarrito([]);

  const totalProductos = carrito.reduce(
    (acumulado, item) => acumulado + item.cantidad,
    0
  );

  const total = carrito.reduce(
    (acumulado, item) => acumulado + item.precio * item.cantidad,
    0
  );

  return (
    <ContextoCarrito.Provider
      value={{
        carrito,
        agregar,
        aumentar,
        disminuir,
        eliminar,
        vaciar,
        totalProductos,
        total,
      }}
    >
      {children}
    </ContextoCarrito.Provider>
  );
}

export default ProveedorCarrito;
