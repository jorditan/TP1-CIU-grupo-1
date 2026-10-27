import { useFiltrosLibros } from "../../hooks/useFiltrosLibros";
import { coincideBusqueda } from "../../utils/productos";
import BarraBusqueda from "../../components/BarraBusqueda/BarraBusqueda";
import { useState } from "react";
import { Badge } from "react-bootstrap";
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
  const { categoria, busqueda, termino, actualizarParam } = useFiltrosLibros();
  const [soloConStock, setSoloConStock] = useState(false);

  const librosAMostrar = masVendidos
    .filter((producto) => !termino || coincideBusqueda(producto, termino))
    .filter((producto) => categoria === "" || producto.categoria === categoria)
    .filter((producto) => !soloConStock || producto.stock > 0);

  const hayFiltros = termino !== "" || categoria !== "" || soloConStock;

  return (
    <section className={styles.seccion}>
      <header className={styles.encabezado}>
        <div>
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
              <Badge
                bg="primary"
                className="position-absolute top-0 start-0 m-2 z-2 pe-none"
                aria-label={`Puesto ${indice + 1}`}
              >
                #{indice + 1}
              </Badge>
              <ProductoCard producto={producto} onAgregar={agregar} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MasVendidos;
