import { useContext } from "react";
import { ContextoTema } from "../context/ContextoTema";

export function useTema() {
  const context = useContext(ContextoTema);
  if (!context) {
    throw new Error("useTema debe usarse dentro de ProveedorTema");
  }
  return context;
}
