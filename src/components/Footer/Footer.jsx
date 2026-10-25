import styles from "../Footer/Footer.module.css";
import items from "./Footer.enlaces.json";
import { Link } from "react-router-dom";
import { tarjetasAceptadas } from "../../data";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerUpper}>
          <Link to="/" className={styles.logoLink}>
            <img
              src="/logo_completo_oscuro.svg"
              alt="Punto y Aparte"
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.footerLower}>
          {items.map((item, index) => (
            <div key={index}>
              <h6 className={styles.footerTitle}>{item.category}</h6>
              <ul>
                {item.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>
                    <Link to={subcategory.href} className={styles.footerLink}>
                      {subcategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr></hr>

        <div className={styles.footerBottom}>
          <section
            className={styles.mediosPago}
            aria-labelledby="footer-medios-pago"
          >
            <h2 id="footer-medios-pago" className={styles.tituloMediosPago}>
              <Link to="/medios-de-pago" className={styles.footerLink}>
                Medios de pago
              </Link>
            </h2>
            <ul className={styles.tarjetas}>
              {tarjetasAceptadas.map(({ nombre, logo }) => (
                <li key={nombre} className={styles.tarjeta}>
                  <img
                    src={logo}
                    alt={nombre}
                    title={nombre}
                    width="48"
                    height="30"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </section>
          <p className={styles.footerText}>
            © {currentYear} Punto y Aparte. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
