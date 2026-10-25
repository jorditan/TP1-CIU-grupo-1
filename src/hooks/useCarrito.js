import { useContext } from "react";
import { ContextoCarrito } from "../context/ContextoCarrito";

export function useCarrito() {
  const contexto = useContext(ContextoCarrito);
  if (!contexto) {
    throw new Error("useCarrito tiene que usarse dentro de <ProveedorCarrito>");
  }
  return contexto;
}
