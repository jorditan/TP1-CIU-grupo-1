import style from "./inicio.module.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import { productos } from "../../data/productos";
import { esOferta } from "../../utils/productos";
import { useCarrito } from "../../hooks/useCarrito";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

function Inicio() {
  const { agregar } = useCarrito();
  const offerBooks = productos.filter(esOferta);
  return (
    <>
      <Carrusel />
      <section className={style.homeSection}>
        <article className={style.rowContainer}>
          <h2 className={style.sectionTitle}>Libros en oferta</h2>
          <div className={style.cardsContainer}>
            {offerBooks.map((book) => (
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
          <h2 className={style.sectionTitle}>Nuevos ingresos</h2>
          <div className={style.cardsContainer}>
            {offerBooks.map((book) => (
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
            <CategoryCard nombreCategoria="Ficción" />
            <CategoryCard nombreCategoria="No Ficción" />
            <CategoryCard nombreCategoria="Ciencia" />
            <CategoryCard nombreCategoria="Historia" />
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

