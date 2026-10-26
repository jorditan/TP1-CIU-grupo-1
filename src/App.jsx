import "./App.css";
import EstructuraPrincipal from "./pages/EstructuraPrincipal.jsx";
import Inicio from "./pages/inicio/Inicio.jsx";
import Carrito from "./pages/carrito/Carrito.jsx";
import Productos from "./pages/productos/Productos.jsx";
import Contacto from "./pages/contacto/Contacto.jsx";
import Ofertas from "./pages/ofertas/Ofertas.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";
import MasVendidos from "./pages/masvendidos/MasVendidos.jsx";
import Usados from "./pages/usados/Usados.jsx";
import Novedades from "./pages/novedades/Novedades.jsx";
import MediosDePago from "./pages/mediosdepago/MediosDePago.jsx";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Routes>
        <Route element={<EstructuraPrincipal />}>
          <Route index element={<Inicio />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/medios-de-pago" element={<MediosDePago />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/mas-vendidos" element={<MasVendidos />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/usados" element={<Usados />} />
          <Route path="*" element={<p>Página no encontrada</p>} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
