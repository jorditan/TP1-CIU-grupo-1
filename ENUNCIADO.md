# Trabajo Práctico — Tienda Online en React
## Materia: Construcción de Interfaces de Usuario
### Modalidad: Grupos de 4 o 5 integrantes
### Duración: 3 semanas

## Objetivo general
Construir una aplicación web en React que simule una tienda online, donde los usuarios puedan ver productos, filtrarlos, consultar el detalle, agregarlos al carrito y completar una compra simulada.
Contexto
Una marca o emprendimiento quiere vender sus productos a través de una tienda online. Para eso necesita una aplicación web moderna, clara y fácil de usar, donde los clientes puedan explorar el catálogo, armar un carrito de compras y completar sus datos para simular una compra.
El grupo podrá elegir libremente el tipo de tienda: indumentaria, tecnología, libros, accesorios, productos deportivos, cosmética, decoración, videojuegos, productos sustentables u otra temática aprobada por el equipo docente.
Requerimientos mínimos
## 1. Página de inicio
- Nombre de la tienda.
- Logo o imagen representativa.
- Breve descripción del emprendimiento.
- Imagen principal o banner representativo de la tienda. También puede implementarse como banner slider con varias imágenes.
- Botón o enlace para acceder al catálogo de productos.
- La página de inicio debe presentar visualmente la identidad de la tienda y orientar al usuario hacia la compra.
## 2. Catálogo de productos
- La aplicación debe mostrar una lista de al menos 12 productos.
- Cada producto debe incluir: nombre, imagen, categoría, precio, breve descripción, stock disponible o disponibilidad, botón para ver detalle y botón para agregar al carrito.
- En caso de que un producto no tenga stock disponible, el botón Agregar al carrito debe mostrarse deshabilitado o bloqueado, de manera que el usuario no pueda agregar ese producto al carrito. Además, se deberá indicar visualmente que el producto no está disponible, por ejemplo con un texto como Sin stock, No disponible o una etiqueta similar.
- Los productos deben provenir de un array de objetos.
const productos = [
  {
    id: 1,
    nombre: "Remera básica",
    categoria: "Indumentaria",
    precio: 12000,
    imagen: "/img/remera.jpg",
    descripcion: "Remera de algodón disponible en varios colores.",
    stock: 10
  }
];
## 3. Detalle de producto
- Cada producto debe tener una vista de detalle.
- Debe mostrar: nombre del producto, imagen ampliada, descripción completa, precio, categoría, stock disponible y características principales.
- Debe incluir botón para volver al catálogo y botón para agregar al carrito.
- Se recomienda resolver esta sección usando rutas dinámicas con React Router DOM, por ejemplo: /producto/1, /producto/2, /producto/3.
## 4. Carrito de compras
- Ver los productos agregados.
- Mostrar nombre, precio por unidad, cantidad y subtotal de cada producto (precio por unidad × cantidad).
- Aumentar o disminuir cantidades.
- Eliminar productos del carrito.
- Calcular el total general.
- Mostrar la cantidad total de productos.
- Confirmar la compra de manera simulada mediante un modal, alerta, mensaje en pantalla o página de confirmación.
## 5. Buscador y filtros
- La aplicación debe incluir al menos dos funcionalidades de búsqueda, filtrado u ordenamiento.
- Opciones posibles: buscar por nombre, filtrar por categoría, filtrar por rango de precio, ordenar por precio de menor a mayor, ordenar por precio de mayor a menor o filtrar productos con stock disponible.
const productosFiltrados = productos.filter(producto =>
  producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
);
## 6. Formulario de compra o contacto
- Debe incluir un formulario controlado con React.
- Campos mínimos: nombre y apellido, email, teléfono, dirección o localidad, método de entrega y mensaje o aclaración opcional.
- Debe tener manejo de estado con useState, eventos onChange y onSubmit, validaciones simples y mensaje de confirmación al enviar.
- Validaciones sugeridas: nombre obligatorio, email obligatorio, email con formato válido, teléfono obligatorio, dirección o localidad obligatoria y no permitir confirmar si el carrito está vacío.
## 7. Navegación
- La aplicación debe incluir una barra de navegación visible y clara.
- Debe permitir acceder a: Inicio, Productos, Carrito, Contacto o Finalizar compra, y opcionalmente Nosotros.
- La navegación debe realizarse con React Router DOM.
# Requisitos de diseño
- Ser responsive.
- Adaptarse correctamente a celular, tablet y escritorio.
- Utilizar un framework CSS, por ejemplo React Bootstrap, Tailwind CSS o Material UI.
- Tener una identidad visual coherente.
- Usar cards para mostrar productos.
- Presentar botones claros.
- Mantener buena legibilidad.
- Cuidar márgenes, espaciados, colores y tipografías.
- Mostrar correctamente las imágenes de productos.
## Se valorará especialmente
- Buena experiencia de usuario.
- Catálogo fácil de recorrer.
- Carrito claro y entendible.
- Diseño prolijo.
- Coherencia estética en todas las páginas.
## Requisitos técnicos
- Uso de componentes funcionales.
- Uso de hooks: useState y useEffect.
- Uso de props para comunicar datos entre componentes.
- Estado para manejar el carrito.
- Formulario controlado con onChange y onSubmit.
- Navegación con React Router DOM.
- Renderizado de productos usando .map().
- Filtros usando métodos de array.
- Cálculo de subtotales y total del carrito.
- Organización del código en carpetas.
Estructura sugerida del proyecto
src/
  components/
    Navbar.jsx
    Footer.jsx
    ProductoCard.jsx
    CarritoItem.jsx
    FormularioCompra.jsx

  pages/
    Inicio.jsx
    Productos.jsx
    DetalleProducto.jsx
    Carrito.jsx
    Contacto.jsx

  data/
    productos.js

  App.jsx
  main.jsx
# Extras opcionales
- Persistencia del carrito con localStorage.
- Modo claro / oscuro.
- Página Nosotros.
- Sistema de favoritos.
- Etiquetas como Nuevo, Oferta o Más vendido.
- Descuento o cupón promocional.
- Animaciones al agregar productos al carrito.
- Deploy del proyecto en GitHub Pages, Netlify o Vercel.
# Entrega esperada
- Subir el código del proyecto a un repositorio en GitHub.
- Archivo README.md completo.
- Deberán mandar el link al repo (recordar de hacerlo público) al siguiente mail: lucas.figarola@unahur.edu.ar.
- Incluyan en el mail los datos de los integrantes del grupo.
## El archivo README.md debe incluir
- Nombre del proyecto.
- Descripción breve.
- Tecnologías utilizadas.
- Instrucciones para instalar y correr el proyecto.
- Integrantes del grupo.
- Capturas de pantalla, opcional.
- Link al deploy, si lo realizaron.
# Aclaraciones importantes
- No se evaluará solamente que la aplicación funcione, sino también la organización del código.
- El diseño debe ser propio del grupo.
- Los productos pueden ser ficticios.
- No hace falta implementar pagos reales.
- La compra puede ser simulada.
- El carrito debe funcionar correctamente desde el estado de React.
- Todos los integrantes deben poder explicar las partes principales del proyecto.