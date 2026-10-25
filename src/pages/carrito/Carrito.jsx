import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../../hooks/useCarrito";
import { formatearPrecio } from "../../utils/formatearPrecio";
import ItemCarrito from "../../components/ItemCarrito/ItemCarrito";
import styles from "./Carrito.module.css";
import { Button } from "react-bootstrap"

function Carrito() {
  const {
    carrito,
    aumentar,
    disminuir,
    eliminar,
    vaciar,
    totalProductos,
    total,
  } = useCarrito();

  const [compraConfirmada, setCompraConfirmada] = useState(false);

  const handleConfirmar = () => {
    setCompraConfirmada(true);
    vaciar();
  };

  return (
    <section className={styles.seccion}>
      <h1 className={styles.titulo}>Carrito de compras</h1>

      {carrito.length === 0 ? (
        <div className={styles.vacio}>
          <p className={styles.textoVacio}>Tu carrito está vacío.</p>
          <Link to="/" className={styles.botonLink}>
            Ver productos
          </Link>
        </div>
      ) : (
        <div className={styles.lista}>
          {carrito.map((item) => (
            <ItemCarrito
              key={item.id}
              item={item}
              onAumentar={aumentar}
              onDisminuir={disminuir}
              onEliminar={eliminar}
            />
          ))}

          <div className={styles.resumen}>
            <p className={styles.textoResumen}>
              Cantidad total de productos: <strong>{totalProductos}</strong>
            </p>

            <p className={styles.total}>
              Total general: <strong>{formatearPrecio(total)}</strong>
            </p>

            <div className={styles.acciones}>
              <Button type="button" variant="danger" onClick={vaciar}>
                Vaciar carrito
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={handleConfirmar}
                className={styles.botonConfirmar}
              >
                Confirmar compra
              </Button>
            </div>
          </div>
        </div>
      )}

      {compraConfirmada && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modal}>
            <h2 className={styles.modalTitulo}>¡Compra confirmada!</h2>
            <p className={styles.modalTexto}>
              Gracias por tu compra. Te vamos a contactar para coordinar la entrega.
            </p>
            <button
              type="button"
              onClick={() => setCompraConfirmada(false)}
              className={styles.botonCerrar}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Carrito;
