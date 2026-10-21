import styles from "../Footer/Footer.module.css";
import items from "./Footer.items.json";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div class={styles.footerUpper}>
          <Link to="/" className={styles.logoLink}>
            <img
              src="/logo_completo_dark.svg"
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
          <p className={styles.footerText}>© {currentYear} Punto y Aparte. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}


export default Footer;