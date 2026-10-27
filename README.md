# Punto y Aparte

Punto y Aparte es una tienda online de libros nuevos y usados, desarrollada como trabajo práctico de la asginatura Construcción de Interfaces de Usuario de la UNAHUR. Permite explorar el catálogo, buscar y filtrar libros, consultar sus detalles y gestionar un carrito con confirmación de compra simulada.

## Tecnologías utilizadas

- React: componentes funcionales, hooks y estado compartido mediante Context.
- Vite: servidor de desarrollo y compilación para producción.
- React Router DOM: navegación, rutas de detalle y filtros en la URL.
- React Bootstrap y Bootstrap: componentes y utilidades de diseño responsive.
- CSS Modules y variables CSS: estilos locales, paleta compartida y modo claro/oscuro.
- Lucide React: iconos.
- React Hot Toast: notificaciones.
- ESLint y Prettier: revisión y formato del código.

## Cómo instalar y correr el proyecto

### Requisitos

- Node.js 22 desde la versión 22.13.0, o Node.js 24.
- npm, incluido con Node.js.
- Git, para clonar el repositorio.

### Instalación

```sh
git clone https://github.com/jorditan/TP1-CIU-grupo-1.git
cd TP1-CIU-grupo-1
npm install
npm run dev
```

Abrir la dirección que indique Vite en la terminal, normalmente `http://localhost:5173`. Si ese puerto está ocupado, Vite elige otro.

### Otros comandos

| Comando           | Función                                                                          |
| ----------------- | -------------------------------------------------------------------------------- |
| `npm run build`   | Genera la versión de producción en `dist/`.                                      |
| `npm run preview` | Sirve localmente la compilación de producción; ejecutar primero `npm run build`. |
| `npm run lint`    | Revisa el código con ESLint.                                                     |

## Demo en vivo

[Ver Punto y Aparte](https://tp-1-ciu-grupo-1.vercel.app/)

## Integrantes del grupo

- Marcelo Perez Groh
- Elias Sebastian Dolenz
- Pablo Elias Andino Guasch
- Matías Owen Jordán

## Funcionalidades y navegación

| Ruta              | Contenido                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `/`               | Inicio con banner, libros en oferta, nuevos ingresos, promociones y categorías.          |
| `/productos`      | Catálogo con búsqueda, categorías, orden por precio y filtro de stock.                   |
| `/productos/:id`  | Detalle con portada, descripción, sinopsis, características, stock y acciones de compra. |
| `/ofertas`        | Libros con descuento o identificados como oferta.                                        |
| `/novedades`      | Libros con las etiquetas `Nuevo` o `Novedad`.                                            |
| `/mas-vendidos`   | Libros con la etiqueta `Más vendido`.                                                    |
| `/usados`         | Libros con la etiqueta `Usado`.                                                          |
| `/carrito`        | Productos agregados, cantidades, subtotales, total y confirmación simulada.              |
| `/contacto`       | Formulario controlado con validaciones y confirmación.                                   |
| `/medios-de-pago` | Información de medios de pago y promociones de demostración.                             |

La búsqueda de los listados encuentra coincidencias por título, autor o categoría e ignora tildes y mayúsculas. La consulta se conserva en el parámetro `q` de la URL; la categoría, en `categoria`. Por ejemplo: `/productos?q=dracula&categoria=Terror`.

Ofertas, Novedades y Usados también permiten ordenar por precio y filtrar por stock; Más vendidos permite filtrar por categoría y stock. En Inicio, la búsqueda filtra los listados de ofertas y nuevos ingresos.

El carrito se mantiene en el estado de React durante la sesión de la aplicación y se reinicia al recargar la página. Los productos sin stock no se pueden agregar y las cantidades no pueden superar las unidades disponibles. El modo claro/oscuro guarda la preferencia en `localStorage`.

## Estructura

Los componentes se organizan en carpetas con su archivo JSX y su CSS Module. Se conservan nombres como `Card`, `Navbar`, `Footer` y el prefijo `use` de los hooks.

- `src/components/`: componentes reutilizables, como `ProductoCard`, `BarraBusqueda` y `AgregarAlCarrito`.
- `src/pages/`: pantallas y distribución de los listados.
- `src/context/`: proveedores del carrito y del tema.
- `src/hooks/`: acceso al estado compartido y lógica de búsqueda y filtros.
- `src/data/`: catálogo, categorías y promociones de demostración.
- `src/utils/`: normalización de texto, búsquedas, detección de ofertas y formato de moneda.
- `src/styles/`: estilos compartidos de los encabezados de sección.
- `src/App.css`: tema y adaptación de componentes Bootstrap a la identidad visual.
- `src/App.jsx`: definición de rutas.
- `src/main.jsx`: entrada de la aplicación, Router, proveedores e importación del CSS de Bootstrap.
- `public/img/`: portadas de los libros.

## Usar ProductoCard

`ProductoCard` requiere un Router y `ProveedorCarrito`, además del CSS de Bootstrap y del tema de la aplicación. Estos ya están configurados en `src/main.jsx` y `src/App.jsx`.

Ejemplo dentro de una página de la aplicación:

```jsx
import ProductoCard from "../../components/ProductoCard/ProductoCard";

const producto = {
  id: 7,
  nombre: "Dune",
  autor: "Frank Herbert",
  categoria: "Ciencia Ficción",
  descripcion: "Una épica de ciencia ficción sobre política, ecología y poder.",
  imagen: "/img/dune.webp",
  precio: 12000,
  precioAnterior: 15000,
  stock: 6,
};

<ProductoCard producto={producto} />;

// Para una colección, la página se ocupa de la grilla:
<div className={styles.grilla}>
  {productos.map((producto) => (
    <ProductoCard key={producto.id} producto={producto} />
  ))}
</div>;
```

La prop opcional `onAgregar` permite indicar una función para agregar el producto. Si no se pasa, el componente utiliza la acción del contexto del carrito.

### Datos de producto

| Campo              | Tipo                               | Uso                                                                                       |
| ------------------ | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`               | Número o string                    | Identificador único y enlace al detalle `/productos/:id`.                                 |
| `nombre`           | String                             | Título y texto alternativo de la portada.                                                 |
| `autor`            | String                             | Autor mostrado en la card y el detalle.                                                   |
| `categoria`        | String                             | Categoría visible, búsqueda y filtros.                                                    |
| `descripcion`      | String                             | Descripción breve; en la card se limita visualmente a dos líneas.                         |
| `precio`           | Número mayor o igual a cero        | Precio actual en pesos argentinos.                                                        |
| `stock`            | Número entero mayor o igual a cero | Disponibilidad y límite para agregar unidades al carrito.                                 |
| `imagen`           | String, opcional                   | Ruta de la portada. Si falta o falla, se muestra «Portada no disponible».                 |
| `precioAnterior`   | Número, opcional                   | Si supera al precio actual, se muestra tachado y se calcula el descuento.                 |
| `sinopsis`         | String                             | Texto ampliado que se muestra en el detalle.                                              |
| `caracteristicas`  | Objeto                             | Editorial, páginas, idioma, ISBN y año para la vista de detalle.                          |
| `badges`           | Array de strings, opcional         | Etiquetas utilizadas por los listados y mostradas en el detalle; la card no las recorre.  |
| `cuotasSinInteres` | Entero, opcional                   | Si es mayor que uno, muestra las cuotas en el detalle; no se muestran en la card.         |
| `label`            | String, opcional                   | Compatibilidad con datos antiguos: `"Oferta"` también identifica un producto como oferta. |

Los precios se guardan como números, sin símbolos ni separadores, y se formatean con `Intl.NumberFormat` en ARS. Una oferta se identifica por `precioAnterior > precio` o por `label === "Oferta"`. Agregar una etiqueta a `badges` no modifica el precio.

La card muestra la categoría, el stock y el descuento cuando corresponde. Las etiquetas superpuestas de Nuevo, Usado, En oferta y los puestos de Más vendidos se agregan desde sus respectivas páginas con `Badge` de React Bootstrap.

### Imágenes y detalle

Las portadas están incluidas en `public/img/`. Una ruta como `/img/dune.webp` corresponde al archivo `public/img/dune.webp`.

La ruta de detalle `/productos/:id` está implementada en `src/App.jsx`. Cada `id` utilizado en una card debe corresponder a un producto del catálogo para que se encuentre su ficha.
