import { useFiltrosLibros } from "../../hooks/useFiltrosLibros";
import { coincideBusqueda } from "../../utils/productos";
import BarraBusqueda from "../../components/BarraBusqueda/BarraBusqueda";
import { useState } from "react";
import { Badge } from "react-bootstrap";
import { productos } from "../../data/productos";
import { useCarrito } from "../../hooks/useCarrito";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import styles from "./Novedades.module.css";

/** Las novedades son los libros con badge "Nuevo" o "Novedad". */
const novedades = productos.filter(
  (producto) =>
    producto.badges?.includes("Nuevo") || producto.badges?.includes("Novedad"),
);

const categoriasNovedades = [
  ...new Set(novedades.map((producto) => producto.categoria)),
];

function Novedades() {
  const { agregar } = useCarrito();
  const { categoria, busqueda, termino, actualizarParam } = useFiltrosLibros();
  const [orden, setOrden] = useState("");
  const [soloConStock, setSoloConStock] = useState(false);

  const librosAMostrar = novedades
    .filter((producto) => !termino || coincideBusqueda(producto, termino))
    .filter((producto) => categoria === "" || producto.categoria === categoria)
    .filter((producto) => !soloConStock || producto.stock > 0)
    .sort((a, b) => {
      if (orden === "asc") return a.precio - b.precio;
      if (orden === "desc") return b.precio - a.precio;
      return 0;
    });

  const hayFiltros = termino !== "" || categoria !== "" || soloConStock;

  return (
    <section className={styles.seccion}>
      <header className={styles.encabezado}>
        <div>
          <h1 className={styles.titulo}>Novedades</h1>
          <p className={styles.introduccion}>
            Los últimos libros que sumamos a la librería.
          </p>
        </div>
        <p className={styles.contador}>
          {hayFiltros
            ? `${librosAMostrar.length} de ${novedades.length} libros`
            : `${novedades.length} libros`}
        </p>
      </header>

      <div className={styles.filtros}>
        <BarraBusqueda
          placeholder="Buscar por título o autor"
          value={busqueda}
          onChange={(evento) => actualizarParam("q", evento.target.value)}
          onSearch={(valor) => actualizarParam("q", valor)}
        />
        <select
          className={styles.select}
          aria-label="Filtrar por categoría"
          value={categoria}
          onChange={(e) => actualizarParam("categoria", e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categoriasNovedades.map((nombreCategoria) => (
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

      {librosAMostrar.length === 0 ? (
        <p className={styles.vacio}> No encontramos libros con esos filtros.</p>
      ) : (
        <div className={styles.grilla}>
          {librosAMostrar.map((producto) => (
            <div key={producto.id} className={styles.item}>
              <Badge
                bg="warning"
                className="position-absolute top-0 start-0 m-2 z-2 pe-none"
              >
                Nuevo
              </Badge>
              <ProductoCard producto={producto} onAgregar={agregar} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Novedades;
