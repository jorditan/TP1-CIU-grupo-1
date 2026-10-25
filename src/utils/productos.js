import { productos } from "../data/productos";
import { normalizarTexto } from "./texto";

/** Categorías únicas derivadas del catálogo, en el orden en que aparecen. */
export const categorias = [...new Set(productos.map((p) => p.categoria))];

/** El término debe llegar normalizado para reutilizarlo en todos los libros. */
export function coincideBusqueda(producto, termino) {
  return [producto.nombre, producto.autor, producto.categoria].some((valor) =>
    normalizarTexto(valor).includes(termino),
  );
}

// Conserva compatibilidad con los productos que todavía usan label.
export function esOferta(producto) {
  return producto.precioAnterior > producto.precio || producto.label === "Oferta";
}
