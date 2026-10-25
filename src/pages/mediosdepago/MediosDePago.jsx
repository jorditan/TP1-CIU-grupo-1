import { Link } from "react-router-dom";
import { Breadcrumb, Button, Card } from "react-bootstrap";
import { CreditCard, Landmark, Smartphone, Wallet } from "lucide-react";
import { mediosDePago, preguntasMediosDePago } from "../../data";
import styles from "./MediosDePago.module.css";

const iconos = {
  credito: CreditCard,
  debito: Wallet,
  transferencia: Landmark,
  billetera: Smartphone,
};

export default function MediosDePago() {
  return (
    <section className={styles.seccion} aria-labelledby="medios-de-pago-titulo">
      <Breadcrumb aria-label="Ruta de navegación">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Medios de pago</Breadcrumb.Item>
      </Breadcrumb>

      <header className={styles.encabezado}>
        <h1 id="medios-de-pago-titulo" className={styles.titulo}>
          Medios de pago
        </h1>
        <p className={styles.introduccion}>
          Cada buena historia empieza con una elección. Conocé las opciones de
          pago que presentamos en Punto y Aparte y encontrá tu próximo libro.
        </p>
      </header>

      <div className={styles.medios}>
        {mediosDePago.map(({ nombre, icono, descripcion }) => {
          const Icono = iconos[icono];
          return (
            <Card key={nombre} as="article" className={styles.card}>
              <Card.Body className={styles.contenidoCard}>
                <span className={styles.icono}>
                  <Icono size={26} aria-hidden="true" />
                </span>
                <Card.Title as="h2" className={styles.nombre}>
                  {nombre}
                </Card.Title>
                <Card.Text className={styles.descripcion}>
                  {descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <section
        className={styles.preguntas}
        aria-labelledby="preguntas-pago-titulo"
      >
        <h2 id="preguntas-pago-titulo" className={styles.subtitulo}>
          Antes de confirmar tu compra
        </h2>
        {preguntasMediosDePago.map(({ pregunta, respuesta }) => (
          <details key={pregunta} className={styles.pregunta}>
            <summary>{pregunta}</summary>
            <p>{respuesta}</p>
          </details>
        ))}
      </section>

      <aside className={styles.ayuda}>
        <div>
          <h2 className={styles.subtitulo}>¿Te quedó alguna duda?</h2>
          <p>
            Escribinos y te ayudamos a encontrar la información que necesitás.
          </p>
        </div>
        <div className={styles.acciones}>
          <Button as={Link} to="/contacto" variant="outline-secondary">
            Contactanos
          </Button>
          <Button as={Link} to="/productos" variant="primary">
            Explorar libros
          </Button>
        </div>
      </aside>
    </section>
  );
}
