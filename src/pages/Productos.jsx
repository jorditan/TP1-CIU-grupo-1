import { productos } from "../data/productos";
import { useCarrito } from "../context/CarritoContext";
import ProductoCard from "../components/ProductoCard/ProductoCard";
import styles from "./Productos.module.css";

function Productos() {
  const { agregar } = useCarrito();

  const productosAMostrar = productos;

  return (
    <section className={styles.seccion}>
      <header className={styles.encabezado}>
        <h1 className={styles.titulo}>Catálogo</h1>
        <p className={styles.contador}>
          {productosAMostrar.length}{" "}
          {productosAMostrar.length === 1 ? "libro" : "libros"}
        </p>
      </header>

      {productosAMostrar.length === 0 ? (
        <p className={styles.vacio}>No encontramos libros para mostrar.</p>
      ) : (
        <div className={styles.grilla}>
          {productosAMostrar.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              onAgregar={agregar}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Productos;
