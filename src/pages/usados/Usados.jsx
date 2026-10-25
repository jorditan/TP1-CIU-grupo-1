import { useState } from "react";
import { productos } from "../../data/productos";
import { useCarrito } from "../../hooks/useCarrito";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import styles from "./Usados.module.css";



const usados = productos.filter((producto) =>
  producto.badges?.includes("Usado"),
);

const categoriasUsados = [
  ...new Set(usados.map((producto) => producto.categoria)),
];

function Usados() {
  const { agregar } = useCarrito();
  const [categoria, setCategoria] = useState("");
  const [orden, setOrden] = useState("");
  const [soloConStock, setSoloConStock] = useState(false);

  const productosAMostrar = usados
    .filter((producto) => categoria === "" || producto.categoria === categoria)
    .filter((producto) => !soloConStock || producto.stock > 0)
    .sort((a, b) => {
      if (orden === "asc") return a.precio - b.precio;
      if (orden === "desc") return b.precio - a.precio;
      return 0;
    });

  const hayFiltros = categoria !== "" || soloConStock;

  return (
    <section className={styles.seccion}>
      <header className={styles.encabezado}>
        <div>
          <span className={styles.etiqueta}>SEGUNDA VIDA</span>
          <h1 className={styles.titulo}>Usados</h1>
          <p className={styles.introduccion}>  
            Libros y películas que ya tuvieron una historia y están listos para
            empezar otra, a mejor precio. Cada ejemplar es único.
          </p>
        </div>
        <p className={styles.contador}>
          {hayFiltros
            ? `${productosAMostrar.length} de ${usados.length} ejemplares`
            : `${usados.length} ejemplares`}
        </p>
      </header>

      <div className={styles.filtros}>
        <select
          className={styles.select}
          aria-label="Filtrar por categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value=""> Todas las categorías </option>
          {categoriasUsados.map((nombreCategoria) => (
            <option key={nombreCategoria} value={nombreCategoria}>
              {nombreCategoria}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          aria-label="Ordenar por precio"
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
        >
          <option value="">Sin ordenar</option>
          <option value="asc">Precio: menor a mayor</option>
          <option value="desc">Precio: mayor a menor</option>
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

      {productosAMostrar.length === 0 ? (
        <p className={styles.vacio}>No encontramos productos con esos filtros.</p>
      ) : (
        <div className={styles.grilla}>
          {productosAMostrar.map((producto) => (
            <div key={producto.id} className={styles.item}>
              <span className={styles.usado}>Usado</span>
              <ProductoCard producto={producto} onAgregar={agregar} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Usados;