/** Pasa a minúsculas y saca las tildes, para que "dracula" encuentre "Drácula". */
export function normalizarTexto(valor = "") {
  return valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
