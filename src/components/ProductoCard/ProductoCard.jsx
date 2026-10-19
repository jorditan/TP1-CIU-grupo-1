import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatearPrecio } from "../../context/CarritoContext";
import styles from "./ProductoCard.module.css";

function ProductoCard({ producto, onAgregar }) {
  const { id, nombre, autor, categoria, precio, imagen, descripcion, stock } =
    producto;

  const sinStock = stock <= 0;
  const urlDetalle = `/productos/${id}`;

  return (
    <Card className={styles.card}>
      <Link
        to={urlDetalle}
        className={styles.imagenLink}
        aria-label={`Ver detalle de ${nombre}`}
      >
        <Card.Img
          variant="top"
          src={imagen}
          alt={`Portada de ${nombre}`}
          className={styles.imagen}
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fallback) return;
            img.dataset.fallback = "1";
            img.src = "/img/placeholder.jpg";
          }}
        />
      </Link>
      <Card.Body className={styles.body}>
        <Badge bg="light" text="dark" className={styles.categoria}>
          {categoria}
        </Badge>
        <Link to={urlDetalle} className={styles.tituloLink}>
          <Card.Title className={styles.titulo}>{nombre}</Card.Title>
        </Link>
        <p className={styles.autor}>{autor}</p>
        <Card.Text className={styles.descripcion}>{descripcion}</Card.Text>
        <div className={styles.stock}>
          {sinStock ? (
            <Badge bg="secondary">Sin stock</Badge>
          ) : (
            <span className={styles.stockDisponible}>
              {stock} {stock === 1 ? "disponible" : "disponibles"}
            </span>
          )}
        </div>
        <div className={styles.pie}>
          <span className={styles.precio}>{formatearPrecio(precio)}</span>
          <div className={styles.acciones}>
            <Button
              as={Link}
              to={urlDetalle}
              variant="outline-secondary"
              className={styles.boton}
            >
              Ver detalle
            </Button>
            <Button
              variant="primary"
              className={styles.boton}
              onClick={() => onAgregar(producto)}
              disabled={sinStock}
            >
              Agregar
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;
