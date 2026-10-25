import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productos } from "../../data/productos";
import { categorias, coincideBusqueda } from "../../utils/productos";
import { normalizarTexto } from "../../utils/texto";
import { useCarrito } from "../../hooks/useCarrito";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import BarraBusqueda from "../../components/BarraBusqueda/BarraBusqueda";
import styles from "./Productos.module.css";

function Productos() {
  const { agregar } = useCarrito();
  const [searchParams, setSearchParams] = useSearchParams();

  // Estos filtros viven en la URL para poder compartir el catálogo filtrado.
  const categoria = searchParams.get("categoria") ?? "";
  const busqueda = searchParams.get("q") ?? "";

  // Estos dos solo importan mientras estás en esta pantalla.
  const [orden, setOrden] = useState("");
  const [soloConStock, setSoloConStock] = useState(false);

  const actualizarParam = (clave, valor) => {
    const siguientes = new URLSearchParams(searchParams);
    if (valor) {
      siguientes.set(clave, valor);
    } else {
      siguientes.delete(clave);
    }
    // replace: true para no llenar el historial con una entrada por tecla.
    setSearchParams(siguientes, { replace: true });
  };

  const termino = normalizarTexto(busqueda.trim());

  const productosAMostrar = productos
    .filter(
      (producto) =>
        termino === "" ||
        coincideBusqueda(producto, termino),
    )
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
        <h1 className={styles.titulo}>Catálogo</h1>
        <p className={styles.contador}>
          {hayFiltros
            ? `${productosAMostrar.length} de ${productos.length} libros`
            : `${productos.length} libros`}
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
          {categorias.map((nombreCategoria) => (
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
        <p className={styles.vacio}>
          No encontramos libros con esos filtros.
        </p>
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
