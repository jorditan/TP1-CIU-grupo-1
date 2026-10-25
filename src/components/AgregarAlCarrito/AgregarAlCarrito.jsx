import { useLayoutEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { useCarrito } from "../../hooks/useCarrito";
import styles from "./AgregarAlCarrito.module.css";

export default function AgregarAlCarrito({
  producto,
  onAgregar,
  className = "",
  texto = "Agregar",
}) {
  const { carrito, agregar, aumentar, disminuir, eliminar } = useCarrito();
  const cantidad = carrito.find((item) => item.id === producto.id)?.cantidad ?? 0;
  const enCarrito = cantidad > 0;
  const botonAgregar = useRef(null);
  const botonDisminuir = useRef(null);
  const enfocar = useRef(false);

  useLayoutEffect(() => {
    if (enfocar.current) {
      (enCarrito ? botonDisminuir : botonAgregar).current?.focus();
      enfocar.current = false;
    }
  }, [enCarrito]);

  const handleAgregar = () => {
    enfocar.current = true;
    (onAgregar ?? agregar)(producto);
  };

  const handleDisminuir = () => {
    if (cantidad === 1) {
      enfocar.current = true;
      eliminar(producto.id);
    } else {
      disminuir(producto.id);
    }
  };

  return (
    <div className={`${styles.contenedor} ${className}`}>
      {enCarrito ? (
        <div
          className={styles.controles}
          role="group"
          aria-label={`Cantidad de ${producto.nombre} en el carrito`}
        >
          <button
            ref={botonDisminuir}
            type="button"
            className={styles.botonCantidad}
            onClick={handleDisminuir}
            aria-label={cantidad === 1
              ? `Quitar ${producto.nombre} del carrito`
              : `Disminuir cantidad de ${producto.nombre}`}
          >
            −
          </button>
          <span className={styles.cantidad} aria-live="polite" aria-atomic="true">
            <span key={cantidad} className={styles.numero}>{cantidad}</span>
            <span className="visually-hidden"> en el carrito</span>
          </span>
          <button
            type="button"
            className={styles.botonCantidad}
            onClick={() => aumentar(producto.id)}
            disabled={cantidad >= producto.stock}
            aria-label={`Aumentar cantidad de ${producto.nombre}`}
            title={cantidad >= producto.stock ? "Stock máximo alcanzado" : undefined}
          >
            +
          </button>
        </div>
      ) : (
        <Button
          ref={botonAgregar}
          type="button"
          variant="primary"
          className={styles.agregar}
          onClick={handleAgregar}
          disabled={producto.stock <= 0}
          aria-label={`Agregar ${producto.nombre} al carrito`}
        >
          {texto}
        </Button>
      )}
    </div>
  );
}
