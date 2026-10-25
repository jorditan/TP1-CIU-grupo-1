import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { formatearPrecio } from "../../utils/formatearPrecio";
import styles from "./ItemCarrito.module.css";

function ItemCarrito({ item, onAumentar, onDisminuir, onEliminar }) {
  if (!item) return null;

  const { id, nombre, autor, precio, cantidad, stock, imagen } = item;
  const subtotal = precio * cantidad;
  const enElTope = cantidad >= stock;
  const urlDetalle = `/productos/${id}`;

  return (
    <div className={styles.card}>
      <Link
        to={urlDetalle}
        className={styles.imagenContainer}
        aria-label={`Ver detalle de ${nombre}`}
      >
        <img src={imagen} alt={`Portada de ${nombre}`} className={styles.imagen} />
      </Link>

      <div className={styles.detalles}>
        <div className={styles.encabezado}>
          <div className={styles.titulos}>
            <h2 className={styles.nombre}>
              <Link to={urlDetalle} className={styles.nombreLink}>
                {nombre}
              </Link>
            </h2>
            {autor && <p className={styles.autor}>{autor}</p>}
          </div>

          <button
            type="button"
            onClick={() => onEliminar(id)}
            aria-label={`Eliminar ${nombre} del carrito`}
            title="Eliminar"
            className={styles.botonEliminar}
          >
            <Trash2 size={18} aria-hidden="true" />
          </button>
        </div>

        <div className={styles.pie}>
          <div className={styles.cantidadContainer}>
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
            {enElTope && <p className={styles.tope}>Máximo: {stock}</p>}
          </div>

          <div className={styles.precios}>
            <p className={styles.precioUnitario}>
              {formatearPrecio(precio)} c/u
            </p>
            <p className={styles.subtotal}>{formatearPrecio(subtotal)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCarrito;