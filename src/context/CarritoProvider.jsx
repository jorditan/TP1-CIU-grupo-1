import { useState } from "react";
import { CarritoContext } from "./CarritoContext";

function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    if (producto.stock <= 0) return;

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
    setCarrito((anterior) => anterior.filter((item) => item.id !== id));
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
    <CarritoContext.Provider
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
    </CarritoContext.Provider>
  );
}

export default CarritoProvider;