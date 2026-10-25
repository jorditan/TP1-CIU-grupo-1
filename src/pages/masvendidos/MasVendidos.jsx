import { useState } from "react";
import { productos } from "../../data/productos";
import { useCarrito } from "../../hooks/useCarrito";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import styles from "./MasVendidos.module.css";


const masVendidos = productos.filter((producto) =>
  producto.badges?.includes("Más vendido"),
);

const categoriasMasVendidos = [
  ...new Set(masVendidos.map((producto) => producto.categoria)),
];

function MasVendidos() {
  const { agregar } = useCarrito();
  const [categoria, setCategoria] = useState("");
  const [soloConStock, setSoloConStock] = useState(false);

  const librosAMostrar = masVendidos
    .filter((producto) => categoria === "" || producto.categoria === categoria)
    .filter((producto) => !soloConStock || producto.stock > 0);

  const hayFiltros = categoria !== "" || soloConStock;

  return (
    <section className={styles.seccion}>
      <header className={styles.encabezado}>
        <div>
          <span className={styles.etiqueta}>LOS FAVORITOS DE LOS LECTORES</span>
          <h1 className={styles.titulo}>Más vendidos</h1>
          <p className={styles.introduccion}>
            Los libros que más se llevan nuestros lectores. Si no sabés qué
            leer, empezá por acá.
          </p>
        </div>
        <p className={styles.contador}>
          {hayFiltros
            ? `${librosAMostrar.length} de ${masVendidos.length} libros`
            : `${masVendidos.length} libros`}
        </p>
      </header>

      <div className={styles.filtros}>
        <select
          className={styles.select}
          aria-label="Filtrar por categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categoriasMasVendidos.map((nombreCategoria) => (
            <option key={nombreCategoria} value={nombreCategoria}>
              {nombreCategoria}
            </option>
          ))}
        </select>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={soloConStock}
            onChange={(e) => setSoloConStock(e.target.checked)}
          />
          Solo con stock
        </label>
      </div>

      {librosAMostrar.length === 0 ? (
        <p className={styles.vacio}>No encontramos libros con esos filtros.</p>
      ) : (
        <div className={styles.grilla}>
          {librosAMostrar.map((producto, indice) => (
            <div key={producto.id} className={styles.item}>
              <span className={styles.puesto} aria-label={`Puesto ${indice + 1}`}>
                #{indice + 1}
              </span>
              <ProductoCard producto={producto} onAgregar={agregar} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MasVendidos;