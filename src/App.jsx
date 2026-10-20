import "./App.css";
import MainLayout from "./pages/MainLayout.jsx";
import Inicio from "./pages/inicio/Inicio.jsx";
import Carrito from "./pages/carrito/Carrito.jsx";
import Productos from "./pages/productos/Productos.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Inicio />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<p>Página no encontrada</p>} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
