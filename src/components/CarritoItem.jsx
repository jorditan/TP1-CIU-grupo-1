import { formatearPrecio } from "../utils/formatearPrecio";
import { Button } from "react-bootstrap";
import styles from "./CarritoItem.module.css";

function CarritoItem({ item, onAumentar, onDisminuir, onEliminar }) {
  if (!item) return null;

  const { id, nombre, precio, cantidad, stock, imagen } = item;
  const subtotal = precio * cantidad;
  const enElTope = cantidad >= stock;

  return (
    <div className={styles.card}>
      <div className={styles.contenido}>
        <div className={styles.imagenContainer}>
          <img
            src={imagen}
            alt={nombre}
            className={styles.imagen}
          />
        </div>
        <div className={styles.detalles}>
          <div className={styles.encabezado}>
            <h2 className={styles.nombre}>{nombre}</h2>

            <Button
              type="button"
              variant="link"
              onClick={() => onEliminar(id)}
              aria-label={`Eliminar ${nombre} del carrito`}
            >
              Eliminar
            </Button>
          </div>

          <p className={styles.precioUnitario}>
            Precio unitario: <strong>{formatearPrecio(precio)}</strong>
          </p>

          <div className={styles.pie}>
            <div className={styles.controles}>
              <button
                type="button"
                onClick={() => onDisminuir(id)}
                disabled={cantidad <= 1}
                aria-label="Disminuir cantidad"
                className={styles.botonCantidad}
              >
                −
              </button>
              <span className={styles.cantidad}>{cantidad}</span>
              <button
                type="button"
                onClick={() => onAumentar(id)}
                disabled={enElTope}
                aria-label="Aumentar cantidad"
                className={styles.botonCantidad}
              >
                +
              </button>
            </div>

            {enElTope && (
              <p className={styles.tope}>Máximo disponible: {stock}</p>
            )}

            <p className={styles.subtotal}>
              Subtotal: <strong>{formatearPrecio(subtotal)}</strong>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CarritoItem;