import style from "./inicio.module.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import { productos } from "../../data/productos";
import { esOferta } from "../../utils/productos";
import { useCarrito } from "../../context/CarritoContext";

function Inicio() {
  const { agregar } = useCarrito();
  const offerBooks = productos.filter(esOferta);
  return (
    <>
      <Carrusel />
      <section className={style.cardsSection}>
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
      </section>
    </>
  );
}

export default Inicio;

