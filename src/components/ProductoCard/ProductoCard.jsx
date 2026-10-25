import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card } from "react-bootstrap";
import { formatearPrecio } from "../../utils/formatearPrecio";
import { esOferta } from "../../utils/productos";
import AgregarAlCarrito from "../AgregarAlCarrito/AgregarAlCarrito";
import styles from "./ProductoCard.module.css";

/** Tarjeta enlazada al detalle */
export default function ProductoCard({ producto, onAgregar }) {
  const {
    id,
    nombre,
    autor,
    categoria,
    descripcion,
    imagen,
    precio,
    precioAnterior,
    stock,
  } = producto;
  const [imagenFallida, setImagenFallida] = useState(null);
  const sinStock = stock <= 0;
  const urlDetalle = `/productos/${id}`;
  const tieneDescuento = precioAnterior > precio;
  const descuento = tieneDescuento
    ? Math.round(((precioAnterior - precio) / precioAnterior) * 100)
    : 0;
  const enOferta = esOferta(producto);

  return (
    <Card className={styles.card}>
      <Link
        to={urlDetalle}
        className={styles.imagenLink}
        aria-label={`Ver detalle de ${nombre}`}
      >
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
      </Link>
      <Card.Body className={styles.body}>
        <div className={styles.header}>
          {categoria && (
            <Badge bg="light" text="dark" className={styles.categoria}>
              {categoria}
            </Badge>
          )}
          {sinStock ? (
            <Badge bg="secondary">Sin stock</Badge>
          ) : (
            <span className={styles.stockDisponible}>
              {stock} {stock === 1 ? "disponible" : "disponibles"}
            </span>
          )}
        </div>
        <div className={styles.info}>

          <Card.Title as="h3" className={styles.titulo}>
            <Link to={urlDetalle} className={styles.tituloLink}>
              {nombre}
            </Link>
          </Card.Title>
          <Card.Text className={styles.autor}>{autor}</Card.Text>
          <Card.Text className={styles.descripcion}>{descripcion}</Card.Text>
        </div>
        <div className={styles.precios}>
          {tieneDescuento && (
            <div>
              <span className="visually-hidden">Precio anterior: </span>
              <del className={styles.precioAnterior}>
                {formatearPrecio(precioAnterior)}
              </del>
            </div>
          )}
          <div className={styles.footer}>
            <span className={styles.precio}>
              <span className="visually-hidden">Precio actual: </span>
              {formatearPrecio(precio)}
            </span>
            {enOferta && (
              <Badge bg="success">
                {descuento > 0 ? `${descuento}% OFF` : "Oferta"}
              </Badge>
            )}
          </div>
        </div>
        <div className={styles.acciones}>
          <Button
            as={Link}
            to={urlDetalle}
            variant="outline-secondary"
            className={styles.boton}
          >
            Ver detalle
          </Button>
          <AgregarAlCarrito
            producto={producto}
            onAgregar={onAgregar}
            className={styles.boton}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
