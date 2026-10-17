// Conserva compatibilidad con los productos que todavía usan label.
export function esOferta(producto) {
  return producto.precioAnterior > producto.precio || producto.label === "Oferta";
}
