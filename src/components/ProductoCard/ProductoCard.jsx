import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Card } from "react-bootstrap";
import { formatearPrecio } from "../../utils/formatearPrecio";
import { esOferta } from "../../utils/productos";
import styles from "./ProductoCard.module.css";

/** Tarjeta enlazada al detalle */
export default function ProductoCard({ producto }) {
  const { id, nombre, autor, imagen, precio, precioAnterior, cuotasSinInteres = 0 } = producto;
  const [imagenFallida, setImagenFallida] = useState(null);
  const tieneDescuento = precioAnterior > precio;
  const descuento = tieneDescuento
    ? Math.round(((precioAnterior - precio) / precioAnterior) * 100)
    : 0;
  const badges = [...new Set([
    ...(esOferta(producto) ? ["Oferta"] : []),
    ...(producto.label ? [producto.label] : []),
    ...(producto.badges ?? []),
  ])];
  const tieneCuotas = Number.isInteger(cuotasSinInteres) && cuotasSinInteres > 1;

  return (
    <Card as={Link} to={`/libro/${id}`} className={styles.card}>
      {imagen && imagenFallida !== imagen ? (
        <Card.Img
          variant="top"
          src={imagen}
          alt={`Portada de ${nombre}`}
          className={styles.imagen}
          onError={() => setImagenFallida(imagen)}
        />
      ) : (
        <div className={styles.sinImagen}>Portada no disponible</div>
      )}
      <Card.Body className={styles.body}>
        <div className={styles.info}>
          <Card.Title as="h3" className={styles.titulo}>{nombre}</Card.Title>
          <Card.Text className={styles.autor}>{autor}</Card.Text>
        </div>
        <div className={styles.precios}>
          {tieneDescuento && (
            <div>
              <span className="visually-hidden">Precio anterior: </span>
              <del className={styles.precioAnterior}>{formatearPrecio(precioAnterior)}</del>
            </div>
          )}
          <div className={styles.footer}>
            <span className={styles.precio}>
              <span className="visually-hidden">Precio actual: </span>
              {formatearPrecio(precio)}
            </span>
            <div className={styles.badges}>
              {badges.map((badge) => (
                <Badge key={badge} bg={badge === "Oferta" ? "success" : "secondary"}>
                  {badge === "Oferta" && descuento > 0 ? `${descuento}% OFF` : badge}
                </Badge>
              ))}
            </div>
          </div>
          {tieneCuotas && (
            <Card.Text className={styles.cuotas}>
              {cuotasSinInteres} cuotas sin interés de {formatearPrecio(precio / cuotasSinInteres)}
            </Card.Text>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
