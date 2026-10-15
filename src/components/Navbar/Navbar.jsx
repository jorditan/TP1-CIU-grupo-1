import SearchBar from "../Searchbar/Searchbar";
import ThemeSelector from "./ThemeSelectors/ThemeSelector";
import CartButton from "./CartButton/CartButton";
import styles from "./Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { productos } from "../../data/productos";
import { useState } from "react";
import { placeholders } from "./placeholders.js";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

const categorias = [
  ...new Set(productos.map((producto) => producto.categoria)),
];

export function Navbar() {
  const { theme } = useTheme();
  const [placeholder] = useState(
    () => placeholders[Math.floor(Math.random() * placeholders.length)],
  );

  const items = [
    { name: "Ofertas", href: "/ofertas", important: true },
    { name: "Más vendidos", href: "/mas-vendidos", important: false },
    { name: "Novedades", href: "/novedades", important: true },
    { name: "Usados", href: "/usados", important: false },
    { name: "Contacto", href: "/contacto", important: false }
  ];
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.upperNavbar}>
            <div className={styles.upperNavContainer}>
              <Link to="/" className={styles.logoLink}>
                <img
                  src={
                    theme === "dark"
                      ? "/logo_completo_dark.svg"
                      : "/logo_completo_light.svg"
                  }
                  alt="Punto y Aparte"
                  className={styles.logo}
                />
              </Link>
              <SearchBar placeholder={placeholder} />

              <div className={styles.navActions}>
                <ThemeSelector />
                <CartButton items={2} />
              </div>
            </div>
          </div>
          <div className={styles.lowerNavbar}>
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
                        as={Link}
                        key={categoria}
                        to={`/productos?categoria=${encodeURIComponent(categoria)}`}
                      >
                        {categoria}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                {items.map((item) => {
                  return (
                    <li className={styles.navItem} key={item.href}>
                      <a
                        className={`${styles.navItem} ${item.important ? styles.important : ""}`}
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
