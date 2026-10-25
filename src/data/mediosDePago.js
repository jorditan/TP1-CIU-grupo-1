export const mediosDePago = [
  {
    nombre: "Tarjeta de crédito",
    icono: "credito",
    descripcion:
      "Una opción para pagar en una cuota o financiar tu próxima lectura.",
  },
  {
    nombre: "Tarjeta de débito",
    icono: "debito",
    descripcion:
      "El importe total de la compra se debita de tu cuenta en un solo pago.",
  },
  {
    nombre: "Transferencia bancaria",
    icono: "transferencia",
    descripcion:
      "Una alternativa para abonar directamente desde tu cuenta bancaria.",
  },
  {
    nombre: "Billeteras virtuales",
    icono: "billetera",
    descripcion:
      "Una forma de pagar desde el celular con el medio asociado a tu billetera.",
  },
];

export const tarjetasAceptadas = [
  { nombre: "Visa", logo: "/img/tarjetas/visa.png" },
  { nombre: "Mastercard", logo: "/img/tarjetas/mastercard.png" },
  { nombre: "American Express", logo: "/img/tarjetas/american-express.png" },
  { nombre: "Diners Club", logo: "/img/tarjetas/diners-club.png" },
  { nombre: "Cabal", logo: "/img/tarjetas/cabal.png" },
  { nombre: "Naranja X", logo: "/img/tarjetas/naranja-x.png" },
  { nombre: "Nativa", logo: "/img/tarjetas/nativa.png" },
  { nombre: "Argencard", logo: "/img/tarjetas/argencard.png" },
  { nombre: "Visa Débito", logo: "/img/tarjetas/visa-debito.png" },
  { nombre: "Maestro", logo: "/img/tarjetas/maestro.png" },
];

export const preguntasMediosDePago = [
  {
    pregunta: "¿Puedo pagar en cuotas?",
    respuesta:
      "Los libros que tienen cuotas sin interés lo indican en su detalle, junto con la cantidad de cuotas y el importe de cada una. Podés consultar esa información antes de agregarlos al carrito.",
  },
  {
    pregunta: "¿En qué moneda se muestran los precios?",
    respuesta:
      "Todos los precios y los totales del carrito están expresados en pesos argentinos (ARS). El carrito muestra el precio unitario, la cantidad y el subtotal de cada libro.",
  },
  {
    pregunta: "¿Se realiza un cobro al confirmar la compra?",
    respuesta:
      "No. Punto y Aparte es un proyecto académico: la confirmación de compra es simulada. No se solicitan datos de tarjetas ni se realizan cargos o transferencias reales.",
  },
];
