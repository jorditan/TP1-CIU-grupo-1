const formatoPesos = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 2,
});

export function formatearPrecio(precio) {
  return formatoPesos.format(precio);
}
