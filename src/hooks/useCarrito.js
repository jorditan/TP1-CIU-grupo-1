import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export function useCarrito() {
  const contexto = useContext(CarritoContext);
  if (!contexto) {
    throw new Error("useCarrito tiene que usarse dentro de <CarritoProvider>");
  }
  return contexto;
}
