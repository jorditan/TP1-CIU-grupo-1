import { useState, useEffect } from "react";

import SearchBar from "../Searchbar/Searchbar";
import ThemeSelector from "./ThemeSelectors/ThemeSelector";
import CartButton from "./CartButton/CartButton";
import styles from "./Navbar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { productos } from "../../data/productos";
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

  const [lowerNavVisible, setLowerNavVisible] = useState(true);

  useEffect(() => {
    // Este es el useeffect que maneja el scroll del navar. Si se scrollea para abajo, la parte de categorias, ofertas y etc se oculta. Es para ahorrar espacio al usuario
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setLowerNavVisible(false);
      } else if (window.scrollY < 5) {
        setLowerNavVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

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
          <div className={`${styles.lowerNavbar} ${!lowerNavVisible ? styles.lowerHidden : ""}`}>
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
                      <Link
                        className={`${styles.navItem} ${item.important ? styles.important : ""}`}
                        to={item.href}
                      >
                        {item.name}
                      </Link>
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
