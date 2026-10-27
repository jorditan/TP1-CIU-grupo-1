import style from "./Inicio.module.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import {
  productos,
  categoriasProductos,
  promociones,
} from "../../data/index.js";
import { coincideBusqueda, esOferta } from "../../utils/productos";
import { useFiltrosLibros } from "../../hooks/useFiltrosLibros";
import BarraBusqueda from "../../components/BarraBusqueda/BarraBusqueda";
import { useCarrito } from "../../hooks/useCarrito";
import CategoriaCard from "../../components/CategoriaCard/CategoriaCard";
import PromocionCard from "../../components/PromocionCard/PromocionCard.jsx";

function Inicio() {
  const { agregar } = useCarrito();
  const { busqueda, termino, actualizarParam } = useFiltrosLibros();

  const librosFiltrados = productos.filter(
    (producto) => !termino || coincideBusqueda(producto, termino),
  );
  const librosEnOferta = librosFiltrados.filter(esOferta);
  const librosNuevos = librosFiltrados.filter((producto) =>
    producto.badges.includes("Nuevo"),
  );

  const nuevosIngresos = librosNuevos.slice(0, 6);
  const categorias = categoriasProductos.slice(0, 6); // Con esto tomamos solo 6 categorias, faltaría hacerlo aleatorio.

  return (
    <>
      <Carrusel />
      <section className={style.homeSection}>
        <div className={style.filtros}>
          <BarraBusqueda
            placeholder="Buscar por título o autor"
            value={busqueda}
            onChange={(evento) => actualizarParam("q", evento.target.value)}
            onSearch={(valor) => actualizarParam("q", valor)}
          />
        </div>
        <article className={style.rowContainer}>
          <h2 className={style.sectionTitle}>Libros en oferta</h2>
          {librosEnOferta.length === 0 && (
            <p>No encontramos libros en oferta con esa búsqueda.</p>
          )}
          <div className={style.cardsContainer}>
            {librosEnOferta.map((book) => (
              <ProductoCard key={book.id} producto={book} onAgregar={agregar} />
            ))}
          </div>
          <hr></hr>
        </article>

        <article className={style.rowContainer}>
          <h2 className={style.sectionTitle}>Promociones disponibles</h2>
          <div className={style.promocionContainer}>
            {promociones.map((promo) => (
              <PromocionCard
                key={promo.id}
                logo={promo.logo}
                banco={promo.banco}
                descripcion={promo.descripcion}
                dias={promo.dias}
              />
            ))}
          </div>
          <hr></hr>
        </article>

        <article className={style.rowContainer}>
          <h2 className={style.sectionTitle}>Nuevos ingresos</h2>
          {nuevosIngresos.length === 0 && (
            <p>No encontramos nuevos ingresos con esa búsqueda.</p>
          )}
          <div className={style.cardsContainer}>
            {nuevosIngresos.map((book) => (
              <ProductoCard key={book.id} producto={book} onAgregar={agregar} />
            ))}
          </div>
          <hr></hr>
        </article>

        <article className={style.rowContainer}>
          <h2 className={style.sectionTitle}>Conocé nuestras categorías</h2>
          <div className={style.categoriasContainer}>
            {categorias.map((categoria) => (
              <CategoriaCard
                key={categoria.id}
                nombreCategoria={categoria.categoria}
                imagenCategoria={categoria.imagen}
                descripcionCategoria={categoria.descripcion}
                linkCategoria={`/productos?categoria=${encodeURIComponent(categoria.categoria)}`}
              />
            ))}
          </div>
          <hr></hr>
        </article>

        <article className={style.rowContainer}></article>
      </section>
    </>
  );
}

export default Inicio;
