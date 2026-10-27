import { useSearchParams } from "react-router-dom";
import { normalizarTexto } from "../utils/texto";

/** Comparte la búsqueda y la categoría en la URL de cada listado. */
export function useFiltrosLibros() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoria = searchParams.get("categoria") ?? "";
  const busqueda = searchParams.get("q") ?? "";
  const termino = normalizarTexto(busqueda.trim());

  const actualizarParam = (clave, valor) => {
    const siguientes = new URLSearchParams(searchParams);
    if (valor) siguientes.set(clave, valor);
    else siguientes.delete(clave);
    setSearchParams(siguientes, { replace: true });
  };

  return { categoria, busqueda, termino, actualizarParam };
}
