import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { productos } from "../../../data/productos";
import { useBusqueda } from "../../../hooks/useBusqueda";
import { formatearPrecio } from "../../../utils/formatearPrecio";
import BarraBusqueda from "../../BarraBusqueda/BarraBusqueda";
import styles from "./BuscadorNavbar.module.css";

export default function BuscadorNavbar({ placeholder }) {
  const { busqueda, cambiarBusqueda, buscar, buscando, resultados } =
    useBusqueda(productos);
  const [abierto, setAbierto] = useState(false);
  const contenedor = useRef(null);
  const entrada = useRef(null);
  const idResultados = useId();
  const mostrar = abierto && busqueda.trim() !== "";

  useEffect(() => {
    if (!mostrar) return;
    const cerrarAlSalir = (evento) => {
      if (!contenedor.current?.contains(evento.target)) setAbierto(false);
    };
    document.addEventListener("pointerdown", cerrarAlSalir);
    return () => document.removeEventListener("pointerdown", cerrarAlSalir);
  }, [mostrar]);

  const manejarTeclado = (evento) => {
    if (evento.key === "Escape") {
      entrada.current?.focus();
      setAbierto(false);
      return;
    }
    if (!mostrar || !["ArrowDown", "ArrowUp"].includes(evento.key)) return;
    const enlaces = [...contenedor.current.querySelectorAll("a")];
    if (!enlaces.length) return;
    evento.preventDefault();
    const actual = enlaces.indexOf(document.activeElement);
    const siguiente = evento.key === "ArrowDown" ? actual + 1 : actual - 1;
    if (siguiente < 0) entrada.current?.focus();
    else enlaces[Math.min(siguiente, enlaces.length - 1)].focus();
  };

  return (
    <div
      ref={contenedor}
      className={styles.contenedor}
      onKeyDown={manejarTeclado}
      onBlur={(evento) => {
        if (!evento.currentTarget.contains(evento.relatedTarget))
          setAbierto(false);
      }}
    >
      <BarraBusqueda
        placeholder={placeholder}
        value={busqueda}
        onChange={(evento) => {
          cambiarBusqueda(evento.target.value);
          setAbierto(true);
        }}
        onSearch={(valor) => {
          buscar(valor);
          setAbierto(true);
        }}
        inputProps={{
          ref: entrada,
          autoComplete: "off",
          "aria-label": "Buscar libros desde el Navbar",
          "aria-controls": mostrar ? idResultados : undefined,
          onFocus: () => setAbierto(true),
        }}
      />
      {mostrar && (
        <section
          id={idResultados}
          className={styles.panel}
          aria-label="Resultados de búsqueda"
          aria-busy={buscando}
        >
          <p className={styles.estado} role="status">
            {buscando
              ? "Buscando libros…"
              : resultados.length === 0
                ? "No encontramos libros con esa búsqueda."
                : `${resultados.length} ${resultados.length === 1 ? "libro encontrado" : "libros encontrados"}`}
          </p>
          {!buscando && resultados.length > 0 && (
            <>
              <ul className={styles.resultados}>
                {resultados.slice(0, 5).map((producto) => (
                  <li key={producto.id}>
                    <Link
                      to={`/productos/${producto.id}`}
                      className={styles.resultado}
                      onClick={() => setAbierto(false)}
                    >
                      <span className={styles.datos}>
                        <span className={styles.nombre}>{producto.nombre}</span>
                        <span className={styles.autor}>{producto.autor}</span>
                      </span>
                      <span className={styles.precio}>
                        {formatearPrecio(producto.precio)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to={`/productos?q=${encodeURIComponent(busqueda.trim())}`}
                className={styles.verTodos}
                onClick={() => setAbierto(false)}
              >
                Ver todos los resultados
              </Link>
            </>
          )}
        </section>
      )}
    </div>
  );
}
