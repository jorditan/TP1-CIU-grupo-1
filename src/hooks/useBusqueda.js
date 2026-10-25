import { useEffect, useRef, useState } from "react";
import { coincideBusqueda } from "../utils/productos";
import { normalizarTexto } from "../utils/texto";

/** Busca en una colección local sin modificar la URL ni navegar. */
export function useBusqueda(productos, espera = 300) {
  const [busqueda, setBusqueda] = useState("");
  const [termino, setTermino] = useState("");
  const temporizador = useRef(null);

  useEffect(() => {
    return () => clearTimeout(temporizador.current);
  }, []);

  const buscar = (valor = busqueda) => {
    clearTimeout(temporizador.current);
    setTermino(normalizarTexto(valor.trim()));
  };

  const cambiarBusqueda = (valor) => {
    setBusqueda(valor);
    clearTimeout(temporizador.current);
    temporizador.current = setTimeout(() => buscar(valor), espera);
  };

  const buscando = normalizarTexto(busqueda.trim()) !== termino;
  const resultados = termino
    ? productos.filter((producto) => coincideBusqueda(producto, termino))
    : [];

  return { busqueda, cambiarBusqueda, buscar, buscando, resultados };
}
