import { productos } from "../data/productos";

/** Categorías únicas derivadas del catálogo, en el orden en que aparecen. */
export const categorias = [...new Set(productos.map((p) => p.categoria))];

// Conserva compatibilidad con los productos que todavía usan label.
export function esOferta(producto) {
  return producto.precioAnterior > producto.precio || producto.label === "Oferta";
}
