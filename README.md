# Punto y Aparte

Tienda de libros desarrollada con React, Vite y React Bootstrap.

## Desarrollo

```sh
npm install
npm run dev
npm run build
npm run lint
```

## Estructura

Los archivos propios del proyecto se nombran en español, sin tildes y con el mismo nombre para el componente y su CSS Module (por ejemplo, `PromocionCard.jsx` y `PromocionCard.module.css`). Se conservan `Card`, `Navbar` y `Footer`, el prefijo `use` de los hooks y los nombres convencionales de entrada y configuración (`App`, `main`, `index`, etc.). Las carpetas de componentes acompañan el nombre del componente.

- `src/components/ProductoCard/`: presentación reutilizable de un producto y sus estilos locales.
- `src/pages/`: pantallas; seleccionan los productos y organizan su distribución.
- `src/data/productos.js`: catálogo de productos.
- `src/utils/formatearPrecio.js`: formato de moneda argentina compartido.
- `src/utils/productos.js`: regla compartida para identificar ofertas.

## Usar ProductoCard

Requiere un Router (la aplicación ya tiene `BrowserRouter`) y el CSS de Bootstrap, importado en `src/main.jsx`.

```jsx
import ProductoCard from "../../components/ProductoCard/ProductoCard";

const producto = {
  id: 7,
  nombre: "Dune",
  imagen: "/img/dune.jpg",
  precio: 12000,
  precioAnterior: 15000,
  badges: ["Más vendido", "Nuevo"],
  cuotasSinInteres: 3,
};

<ProductoCard producto={producto} />;

// Para una colección, la página se ocupa del contenedor:
<div className={styles.cardsContainer}>
  {productos.map((producto) => (
    <ProductoCard key={producto.id} producto={producto} />
  ))}
</div>;
```

### Datos de producto

| Campo | Tipo | Comportamiento |
| --- | --- | --- |
| `id` | número o string, obligatorio | Identifica el producto y construye el enlace `/libro/:id`. |
| `nombre` | string, obligatorio | Título de la card y texto alternativo de la portada. |
| `precio` | número finito mayor o igual a 0, obligatorio | Precio final en pesos argentinos. |
| `imagen` | string, opcional | URL de portada. Si falta o falla la carga, muestra «Portada no disponible». |
| `precioAnterior` | número, opcional | Si supera al precio actual, muestra el precio anterior tachado y el porcentaje de descuento redondeado. |
| `badges` | array de strings, opcional | Etiquetas adicionales; por defecto `[]`. No se repiten textos idénticos. |
| `cuotasSinInteres` | entero, opcional | Si es mayor que 1, muestra la cantidad y el importe por cuota. |
| `label` | string, opcional | Compatibilidad con el catálogo actual: se suma a los badges. `"Oferta"` identifica una oferta aunque todavía no tenga precio anterior. |

El precio debe llegar como número, sin símbolos ni separadores. La card lo formatea con `Intl.NumberFormat` en ARS. Los importes por cuota se muestran con hasta dos decimales; son informativos y pueden requerir ajuste de centavos en un cobro real.

Las ofertas nuevas se determinan mediante `precioAnterior > precio`; no hace falta agregar `"Oferta"` a `badges`. El filtro de inicio usa la misma regla (`esOferta`), manteniendo también el soporte del `label` existente. Un badge personalizado por sí solo no modifica precios ni filtros.

La card ocupa el ancho de su contenedor. `Inicio.module.css` contiene un ejemplo de grilla adaptable. Los estilos de card no subrayan el enlace y conservan un indicador de foco para navegación con teclado.

### Recursos y rutas pendientes

Para una imagen `/img/dune.jpg`, guardar el archivo en `public/img/dune.jpg`. Las portadas referenciadas por el catálogo todavía no están incluidas. La card conserva el enlace a `/libro/:id`, pero la ruta de detalle todavía debe implementarse en `App.jsx`.

El catálogo contiene datos de demostración: las seis ofertas tienen precios anteriores de referencia y tres cuotas sin interés. Otros productos incluyen seis cuotas o varias etiquetas. Estos valores son ficticios para mostrar los estados de la card; los precios actuales se conservaron. Las etiquetas se guardan en `badges`; `label` solo se admite por compatibilidad con datos antiguos.

