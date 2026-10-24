import style from "./inicio.module.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import { productos, categoriasProductos, promociones } from "../../data/index.js";
import { esOferta } from "../../utils/productos";
import { useCarrito } from "../../hooks/useCarrito";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import PromotionCard from "../../components/PromotionCard/PromotionCard.jsx";

function Inicio() {
  const { agregar } = useCarrito();

  const librosEnOferta = productos.filter(esOferta);
  const librosNuevos = productos.filter((producto) => producto.badges.includes("Nuevo"));

  const nuevosIngresos = librosNuevos.slice(0, 6);
  const categorias = categoriasProductos.slice(0, 6); // Con esto tomamos solo 6 categorias, faltaría hacerlo aleatorio.

  return (
    <>
      <Carrusel />
      <section className={style.homeSection}>
        <article className={style.rowContainer}>
          <h2 className={style.sectionTitle}>Libros en oferta</h2>
          <div className={style.cardsContainer}>
            {librosEnOferta.map((book) => (
              <ProductoCard
                key={book.id}
                producto={book}
                onAgregar={agregar}
              />
            ))}
          </div>
          <hr></hr>
        </article>

        <article className={style.rowContainer}>
          <h2 className={style.sectionTitle}>Promociones disponibles</h2>
          <div className={style.promocionContainer}>
            {promociones.map((promo) => (
              <PromotionCard
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
          <div className={style.cardsContainer}>
            {nuevosIngresos.map((book) => (
              <ProductoCard
                key={book.id}
                producto={book}
                onAgregar={agregar}
              />
            ))}
          </div>
          <hr></hr>
        </article>

        <article className={style.rowContainer}>
          <h2 className={style.sectionTitle}>Conocé nuestras categorías</h2>
          <div className={style.categoriasContainer}>
            {
              categorias.map((categoria) => (
                <CategoryCard
                  key={categoria.id}
                  nombreCategoria={categoria.categoria}
                  imagenCategoria={categoria.imagen}
                  descripcionCategoria={categoria.descripcion}
                  linkCategoria={`/productos?categoria=${encodeURIComponent(categoria.categoria)}`}
                />
              ))
            }
          </div>
          <hr></hr>
        </article>

        <article className={style.rowContainer}>

        </article>
      </section >
    </>
  );
}

export default Inicio;

