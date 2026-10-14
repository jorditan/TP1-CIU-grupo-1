import SearchBar from "../Searchbar/Searchbar";
import ThemeSelector from "./ThemeSelectors/ThemeSelector";
import CartButton from "./CartButton/CartButton";
import styles from "./Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { productos } from "../../data/productos";

const categorias = [...new Set(productos.map((producto) => producto.categoria))];

export function Navbar() {
  const items = [
    { name: "Ofertas", href: "/about", important: true },
    { name: "Más vendidos", href: "/contact", important: false },
    { name: "Novedades", href: "/contact", important: true },
    { name: "Usados", href: "/contact", important: false },
  ];
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.upperNavContainer}>
            <h3 className={styles.navTitle}>Punto y aparte</h3>
            <SearchBar placeholder="¿Qué estás buscando?" />

            <div className={styles.navActions}>
              <ThemeSelector />
              <CartButton items={2} />
            </div>


          </div>
          <div className={styles.lowerNavContainer}>
            <ul className={styles.navItems}>
              <Dropdown as="li" className={styles.navItem}>
                <Dropdown.Toggle
                  id="categorias-dropdown"
                  variant="link"
                  className={styles.categoryToggle}
                >
                  Categorías
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categorias.map((categoria) => (
                    <Dropdown.Item
                      key={categoria}
                      href={`/productos?categoria=${encodeURIComponent(categoria)}`}
                    >
                      {categoria}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {
                items.map((item) => {
                  return (
                    <li className={styles.navItem} key={item.href}>
                      <a className={`${styles.navItem} ${item.important ? styles.important : ""}`} href={item.href}>{item.name}</a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
