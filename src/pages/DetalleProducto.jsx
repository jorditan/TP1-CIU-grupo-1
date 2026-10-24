import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge, Button, Breadcrumb } from "react-bootstrap";
import { productos } from "../data/productos";
import { esOferta } from "../utils/productos";
import { formatearPrecio } from "../utils/formatearPrecio";
import { useCarrito } from "../hooks/useCarrito";
import styles from "./DetalleProducto.module.css";

// Traduce las claves técnicas de caracteristicas y fija el orden en pantalla.
const etiquetas = {
  editorial: "Editorial",
  paginas: "Páginas",
  idioma: "Idioma",
  isbn: "ISBN",
  anio: "Año",
};

function DetalleProducto() {
  const { id } = useParams();
  const { agregar } = useCarrito();
  const [imagenFallida, setImagenFallida] = useState(null);

  // Al cambiar de libro el navegador conserva el scroll: lo subimos a mano.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // useParams devuelve strings y los id del catálogo son números.
  const producto = productos.find((item) => item.id === Number(id));

  if (!producto) {
    return (
      <section className={styles.seccion}>
        <h1 className={styles.titulo}>No encontramos ese libro</h1>
        <p className={styles.textoVacio}>
          Puede que ya no esté en el catálogo o que el enlace sea incorrecto.
        </p>
        <Button as={Link} to="/productos" variant="primary">
          Volver al catálogo
        </Button>
      </section>
    );
  }

  const {
    nombre,
    autor,
    categoria,
    descripcion,
    sinopsis,
    imagen,
    precio,
    precioAnterior,
    stock,
    caracteristicas,
    badges = [],
    cuotasSinInteres = 0,
  } = producto;

  const sinStock = stock <= 0;
  const tieneDescuento = precioAnterior > precio;
  const descuento = tieneDescuento
    ? Math.round(((precioAnterior - precio) / precioAnterior) * 100)
    : 0;
  const tieneCuotas = Number.isInteger(cuotasSinInteres) && cuotasSinInteres > 1;
  const etiquetasProducto = [
    ...new Set([...(esOferta(producto) ? ["Oferta"] : []), ...badges]),
  ];

  return (
    <section className={styles.seccion}>
      <Breadcrumb aria-label="Ruta de navegación">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/productos" }}>
          Libros
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{nombre}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.ficha}>
        <div className={styles.columnaImagen}>
          {imagen && imagenFallida !== imagen ? (
            <img
              src={imagen}
              alt={`Portada de ${nombre}`}
              className={styles.imagen}
              onError={() => setImagenFallida(imagen)}
            />
          ) : (
            <div className={styles.sinImagen}>Portada no disponible</div>
          )}
        </div>

        <div className={styles.columnaInfo}>
          <div className={styles.etiquetas}>
            <Badge bg="light" text="dark" className={styles.categoria}>
              {categoria}
            </Badge>
            {etiquetasProducto.map((etiqueta) => (
              <Badge
                key={etiqueta}
                bg={etiqueta === "Oferta" ? "success" : "secondary"}
              >
                {etiqueta === "Oferta" && descuento > 0
                  ? `${descuento}% OFF`
                  : etiqueta}
              </Badge>
            ))}
          </div>

          <h1 className={styles.titulo}>{nombre}</h1>
          <p className={styles.autor}>{autor}</p>
          <p className={styles.copete}>{descripcion}</p>

          <div className={styles.precios}>
            {tieneDescuento && (
              <div>
                <span className="visually-hidden">Precio anterior: </span>
                <del className={styles.precioAnterior}>
                  {formatearPrecio(precioAnterior)}
                </del>
              </div>
            )}
            <p className={styles.precio}>
              <span className="visually-hidden">Precio actual: </span>
              {formatearPrecio(precio)}
            </p>
            {tieneCuotas && (
              <p className={styles.cuotas}>
                {cuotasSinInteres} cuotas sin interés de{" "}
                {formatearPrecio(precio / cuotasSinInteres)}
              </p>
            )}
          </div>

          <div className={styles.stock}>
            {sinStock ? (
              <Badge bg="secondary">Sin stock</Badge>
            ) : (
              <span className={styles.stockDisponible}>
                {stock} {stock === 1 ? "disponible" : "disponibles"}
              </span>
            )}
          </div>

          <div className={styles.acciones}>
            <Button
              variant="primary"
              className={styles.boton}
              onClick={() => agregar(producto)}
              disabled={sinStock}
            >
              Agregar al carrito
            </Button>
            <Button
              as={Link}
              to="/productos"
              variant="outline-secondary"
              className={styles.boton}
            >
              Volver al catálogo
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.bloques}>
        <div className={styles.bloque}>
          <h2 className={styles.subtitulo}>Sinopsis</h2>
          <p className={styles.sinopsis}>{sinopsis}</p>
        </div>

        <div className={styles.bloque}>
          <h2 className={styles.subtitulo}>Características</h2>
          <dl className={styles.caracteristicas}>
            {Object.entries(etiquetas).map(([clave, etiqueta]) => (
              <div key={clave} className={styles.caracteristica}>
                <dt className={styles.caracteristicaClave}>{etiqueta}</dt>
                <dd className={styles.caracteristicaValor}>
                  {caracteristicas[clave]}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default DetalleProducto;
