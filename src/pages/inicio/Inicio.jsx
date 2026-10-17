import style from "./inicio.module.css";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import Carrusel from "../../components/Carrusel/Carrusel";

import { productos } from "../../data/productos";

function Inicio() {
  const offerBooks = productos.filter((book) => book.label === "Oferta");
  return (
    <>
      <Carrusel />
      <section className={style.cardsSection}>
        <h2 className={style.sectionTitle}>Libros en oferta</h2>
        <div className={style.cardsContainer}>
          {offerBooks.map((book) => (
            <Card as={Link} to={`/libro/${book.id}`} style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Text>
                  {book.nombre}
                </Card.Text>
                <div className={style.cardFooter}>
                  <Card.Title className={style.cardTitle}>
                    ${book.precio}
                  </Card.Title>
                  <Badge bg="primary">{book.label}</Badge>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;
